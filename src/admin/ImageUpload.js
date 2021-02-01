import React, { useState } from "react";
import { Input } from "@material-ui/core/";
import { storage, db } from "../components/firebase";
import firebase from "firebase/app";
import "./ImageUpload.css";

function ImageUpload(props) {
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [imgType, setImgType] = useState("jpeg");
  const imagesArray = [
    "jpeg",
    "apng",
    "avif",
    "gif",
    "apng",
    "avif",
    "jpg",
    "jfif",
    "pjpeg",
    "pjp",
    "png",
    "svg",
    "webp",
    "bmp",
    "ico",
    "cur",
    "tif",
    "tiff",
  ];

  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.files);
    console.log(e);
    let img = e.target.files[0].name
      .toLowerCase()
      .split(".")
      .pop()
      .split("?")[0];
    console.log(img);

    setImgType("image");
    console.log(imagesArray[imagesArray.indexOf(img)]);

    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    console.log(props);

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Complete
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // Post image url to database
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              title: props.title,
              category: props.category,
              location: props.location,
              district: props.district,
              description: props.description,
              imageUrl: url,
              username: props.username,
              type: imgType,
            });

            setProgress(0);

            setImage("");
          });
      }
    );
  };

  return (
    <div className="imageUpload">
      <Input type="file" onChange={handleChange} />
      <progress className="imageUpload__progress" value={progress} max="100" />

      <button className="form-control upload__button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default ImageUpload;
