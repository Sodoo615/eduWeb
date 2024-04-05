"use client";
import { useState, useEffect } from "react";
import style from "./zar.css";
import axios from "axios";
import Link from "next/link";
const ImageList = () => {
  const [images, setImages] = useState([]);

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
              <p > {image.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageList;
