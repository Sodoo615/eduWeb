"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
const ImageList = () => {
  const [images, setImages] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8000/images");
        setImages(response.data);
      } catch (error) {
        console.error("Failed to fetch images", error);
      }
    };

    fetchImages();
  }, []);
  const handleDelete = async (ZarId) => {
    // const token = localStorage.getItem("token");
    if (ZarId !== null) {
      try {
        const response = await axios.delete(
          `http://localhost:8000/images/${ZarId}`,
          // { headers: { "x-access-token": token } }
        );
        if (response.data.success) {
      
          setDeleteSuccess(true);
        } else {
          console.error(response.data.message);
        }
        const data = response.data;
        setDeleteSuccess(data);
        if (data.success) {
          window.location.reload();
        }
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };
  return (
    <div>
      <Link href="../../ES4edu/zarMedeeNemeh">
        <button className="announcement-button">Зар өгөх +</button>
      </Link>

      <div className="bolowsrol">
        <h1> Зар мэдээ </h1>
      </div>
      <div className="announType">
        {images?.map((image) => {
          return (
            <div className="des" key={image._id}>
              <img
                src={`http://localhost:8000/uploads/${image.name}`}
                alt={image.name}
              />
              <p className="ff">{image.description}</p>
              <div className="dlete" onClick={() => handleDelete(image?.ZarId)}>
                <MdDelete  style={{fontSize:"25px"}}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageList;
