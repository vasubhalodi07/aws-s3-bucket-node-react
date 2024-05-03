import axios from "axios";
import { useState } from "react";
import "../style/add.css";

const Add = () => {
  const [image, setImage] = useState(null);

  const submitImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    addImageApi(formData);
  };

  const addImageApi = async (formData) => {
    try {
      await axios
        .post("http://localhost:5000/api/create", formData)
        .then((res) => {
          console.log(res);
          alert("image added into s3 bucket successfully!");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="upload-section">
      <div>Upload Image in S3 Bucket</div>
      <form onSubmit={(e) => submitImage(e)}>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Add;
