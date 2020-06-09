import React from "react";
import Slider from "react-animated-slider";

const slides = [
  {
    title: "First item",
    description: "Lorem ipsum",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
  },
  {
    title: "Second item",
    description: "Lorem ipsum",
    image: "https://i.imgur.com/DCdBXcq.jpg",
  },
  {
    title: "third item",
    description: "Lorem ipsum",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
  },
  {
    title: "Second item",
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
        width: wWidth > 560 ? "80vw" : "100vw",
        float: "right",
        paddingTop: "50px",

        // paddingBottom: "5px",
      }}
    >
      <Slider duration={2000} infinte={true} autoplay={500}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="texts"
            style={{
              background: `url(${slide.image}) no-repeat center center`,
            }}
          >
            <h2>{slide.title}</h2>
            <div>{slide.description}</div>
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
