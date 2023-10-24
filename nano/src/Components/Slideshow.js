import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",

  // innerWidth: "100%",
};
const slideImages = [
  {
    url: "https://s1.1zoom.me/big0/309/Men_Black_background_Human_back_Muscle_515078_1280x778.jpg",
    caption: "Slide 3",
  },
  {
    url: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://as2.ftcdn.net/v2/jpg/00/79/49/27/1000_F_79492745_hNI8HP9Iqb4HscpJRIdpIDLnAsmEtYYR.jpg",
    caption: "Slide 2",
  },
];

const Slideshow = () => {
  return (
    <div style={{ marginTop: "-17px" }} className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;
