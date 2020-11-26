import React from "react";
import Slider from "react-animated-slider";

const slides = [
  {
    title: "Data Science",
    description: "Lorem ipsum",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
  },
  {
    title: "Computer Network and Security",
    description: "Lorem ipsum",
    image: "https://i.imgur.com/DCdBXcq.jpg",
  },
  {
    title: "Computing",
    description: "Lorem ipsum",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
  },
  {
    title: "Internet of Things",
    description: "Lorem ipsum",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
  },
  {
    title: "Intelligence Track",
    description: "Lorem ipsum",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
  },
  {
    title: "Women in Research",
    description: "Lorem ipsum",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
  },
];
export default function Sliders() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <div
      style={{
        width: wWidth > 560 ? "100vw" : "100vw",
        float: "right",
        // paddingTop: "50px",

        // paddingBottom: "5px",
      }}
    >
      <Slider
        duration={2000}
        infinte={true}
        autoplay={500}
        touchDisabled={true}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="texts"
            style={{
              background: "lightblue",
            }}
          >
            <h2
              style={{
                fontSize: wWidth > 560 ? "40px" : "20px",
                color: "firebrick",
              }}
            >
              {slide.title}
            </h2>
          </div>
        ))}
      </Slider>
      <style jsx>
        {`
          .texts {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
}
