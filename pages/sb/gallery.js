import React from "react";
import SBLayout from "../../components/SBLayout";
import Gallery from "react-grid-gallery";
import logo1 from "../../public/1.png"
export default function venue() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });

  const IMAGES = [
    {
      src: "https://www.icipbangalore.org/icinpro18photos/1.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/1.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: "https://www.icipbangalore.org/icinpro18photos/2.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/2.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },

    {
      src: "https://www.icipbangalore.org/icinpro18photos/3.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/3.jpg",
      thumbnailWidth: 640,
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
    {
      src: "https://www.icipbangalore.org/icinpro18photos/7.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/7.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: "https://www.icipbangalore.org/icinpro18photos/8.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/8.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: "https://www.icipbangalore.org/icinpro18photos/9.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/9.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: "https://www.icipbangalore.org/icinpro18photos/10.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/10.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: "https://www.icipbangalore.org/icinpro18photos/11.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/11.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },
    {
      src: "https://www.icipbangalore.org/icinpro18photos/12.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/12.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "https://www.icipbangalore.org/icinpro18photos/1.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/1.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,

      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://www.icipbangalore.org/icinpro18photos/2.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/2.jpg",
      thumbnailWidth: 640,
      thumbnailHeight: 414,
    },

    {
      src: "https://www.icipbangalore.org/icinpro18photos/3.jpg",
      thumbnail: "https://www.icipbangalore.org/icinpro18photos/3.jpg",
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
    {
      src: logo1,
      thumbnail: logo1,
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
