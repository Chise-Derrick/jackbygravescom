import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import "./Upload.css";
import { auth } from "../components/firebase";


function Upload(props) {


  const user = auth.currentUser;


  const [title, setTitle] = useState("");
  const [titleStyle, setTitleStyle] = useState("red");
  const [descriptionStyle, setDescriptionStyle] = useState("red");
  const completed = true;
  const [description, setDescription] = useState("");





/*  useEffect(() => {
    let tempDist = [];

    for (let disDats in chosenDistrict) {
      console.log(chosenDistrict[disDats]);
      if (location.toLowerCase() == chosenDistrict[disDats].id.toLowerCase()) {
        chosenDistrict[disDats].Districts.forEach((districtProp) => {
          if (districtProp !== "") {
            tempDist.push({
              label: districtProp,
              value: districtProp,
            });
          }
        });
        setDistrictSelect(tempDist);
      }
    }
  }, [chosenDistrict]);*/





  return (
    <div className="upload main-width">
      <div className="upload__title">
        <h1>Image Upload</h1>
      </div>

      <div className="upload__form">
        <div>
          <div className="upload__top">
            <h5 className="upload__label">Title</h5>
            <input
              type="text"
              value={title}
              className="upload__inputTitle"
              style={{ borderColor: titleStyle }}
              onChange={(e) => {
                if (e.target.value.length < 5) {
                  setTitleStyle("red");
                } else {
                  setTitleStyle("green");
                }
                setTitle(e.target.value);
              }}
            />

            <h5 className="upload__label">Description</h5>
            <textarea
              type="text"
              value={description}
              className="upload__textarea"
              style={{ borderColor: descriptionStyle }}
              onChange={(e) => {
                if (e.target.value.length < 5) {
                  setDescriptionStyle("red");
                } else {
                  setDescriptionStyle("green");
                }
                setDescription(e.target.value);
              }}
            />
            <h5 className="upload__label">Category</h5>

            <h5 className="upload__label">District</h5>

            <h5 className="upload__label">Town</h5>
          </div>
          {user ? (
            completed && (
              <div className="upload__mid">
                <h4 className="upload__label">FILE ATTACHMENT</h4>
                <h5 className="upload__label">Add a new file</h5>

                <ImageUpload
                  username={user?.displayName}
                  title={title}
                  description={description}
                />
              </div>
            )
          ) : (
            <div className="upload__mid">
              <h2 className="upload__label">Please login to upload images</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Upload;
