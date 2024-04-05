"use client";

import { useState } from "react";
import Zar from "../../ES4edu/zar/page.js";
import style from "../../ES4edu/zar/zar.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
const ImageUpload = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);
    try {
      await axios.post("http://localhost:8000/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(true);
    } catch (error) {
      setMessage("Failed to upload image");
    }
    console.log(file);
  };
  const handleZar = () => {
    router.push(`../../ES4edu/MainZar`);
  };
  return (
    <div>
      <div className="createZar">
        <h2>Зар өгөх</h2>
        <form className="frmo" onSubmit={handleSubmit}>
          <input className="createInp" type="file" onChange={handleChange} />
          <input
            className="createInp"
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={handleDescriptionChange}
          />

          <button
            onClick={() => handleZar()}
            className="createInpButton"
            type="submit"
          >
            Upload
          </button>
        </form>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;
