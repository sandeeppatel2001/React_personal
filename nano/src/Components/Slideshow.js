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
    url: "https://4kwallpapers.com/images/walls/thumbs_2t/13535.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://e0.pxfuel.com/wallpapers/693/992/desktop-wallpaper-cool-anime-top-best-of-cool-anime-really-cool-anime.jpg",
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
