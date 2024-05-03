const express = require("express");

const ImageModel = require("../model/image.model");
const router = express.Router();

const {
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const upload = require("../multer/image.multer");
const s3Client = require("../aws/s3bucket");
const randomImageName = require("../crypto/uniqueimage.crypto");

router.get("/fetch", async (req, res) => {
  try {
    const fetchImages = await ImageModel.findAll();

    for (const image of fetchImages) {
      const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: image.image,
      };
      const command = new GetObjectCommand(params);
      const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
      image.image = url;
    }

    res.status(200).send({ message: "image fetched!", images: fetchImages });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const imageName = randomImageName();

    const parmas = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: imageName,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };
    const command = new PutObjectCommand(parmas);
    await s3Client.send(command);

    const createImage = await ImageModel.create({
      image: imageName,
    });
    res.status(200).send({ message: "images created!", data: createImage });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const imageRecord = await ImageModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!imageRecord) {
      return res.status(404).send({ message: "Image not found" });
    }

    await ImageModel.destroy({
      where: {
        id: req.params.id,
      },
    });

    const command = new DeleteObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: imageRecord.image,
    });
    await s3Client.send(command);

    res.status(200).send({ message: "Image deleted!", data: imageRecord });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
