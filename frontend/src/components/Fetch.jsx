import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../style/fetch.css";

const Fetch = () => {
  const [images, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/fetch");
      setImage(res.data.images);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const deleteImage = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/delete/${id}`);
      console.log(res);
      fetchImages();
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-images">
      <div className="flex">
        <div>List Images</div>
        <div
          onClick={() => {
            navigate("/add");
          }}
        >
          Add Image
        </div>
      </div>
      <div className="image-grid">
        {images &&
          images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.image} alt="images" />
              <p onClick={() => deleteImage(image.id)}>Delete</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Fetch;
