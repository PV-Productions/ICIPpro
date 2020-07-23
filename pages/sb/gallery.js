import React from "react";
import SBLayout from "../../components/SBLayout";
import Gallery from "react-grid-gallery";
import logo1 from "../../public/1.png";
import logo2 from "../../public/2.png";
import logo3 from "../../public/3.png";
import logo4 from "../../public/4.png";
import logo5 from "../../public/5.png";
import logo6 from "../../public/6.png";
import logo7 from "../../public/7.png";
import logo8 from "../../public/8.png";
import logo9 from "../../public/9.png";
import logo10 from "../../public/10.png";
import logo11 from "../../public/11.png";
import logo12 from "../../public/12.png";
import logo13 from "../../public/13.png";
import logo14 from "../../public/14.png";
import logo15 from "../../public/15.png";
export default function venue() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });

  const IMAGES = [
    {
      src: logo1,
      thumbnail: logo1,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: logo2,
      thumbnail: logo2,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },

    {
      src: logo3,
      thumbnail: logo3,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: logo4,
      thumbnail: logo4,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: logo5,
      thumbnail: logo5,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: logo6,
      thumbnail: logo6,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: logo7,
      thumbnail: logo7,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: logo8,
      thumbnail: logo8,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: logo9,
      thumbnail: logo9,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: logo10,
      thumbnail: logo10,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: logo11,
      thumbnail: logo11,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: logo12,
      thumbnail: logo12,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: logo13,
      thumbnail: logo13,
      thumbnailWidth: 640,
      thumbnailHeight: 414,

      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: logo14,
      thumbnail: logo14,
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },

    {
      src: logo15,
      thumbnail: logo15,
      thumbnailWidth: 600,
      thumbnailHeight: 414,
    },
    {
      src: "https://www.icipbangalore.org/icinpro18photos/4.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/4.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: "https://www.icipbangalore.org/icinpro18photos/5.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/5.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: "https://www.icipbangalore.org/icinpro18photos/6.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/6.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
  ];
  return (
    <SBLayout>
      <div
        className="wrapperVEN"
        style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
      >
        <h1
          className="galleryCALL"
          style={{
            fontSize: wWidth > 560 ? "72px" : "40px",
            width: wWidth > 560 ? "80vw" : "100vw",
          }}
        >
          ICInPro Gallery
        </h1>
        <div
          style={{
            width: wWidth > 560 ? "80vw" : "100vw",
            float: "right",
            marginTop: "25vh",
          }}
        >
          <Gallery images={IMAGES} />
        </div>
        <style jsx>
          {`
            .galleryCALL {
              position: absolute;
              top: 0;
              margin-top: 12vh;
              width: 100%;
              background-color: lightgray;
              color: white;
              box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.6);
              text-align: center;
             
          `}
        </style>
      </div>
    </SBLayout>
  );
}
