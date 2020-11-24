import React from "react";

export default function ContactUs() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <div
      className="wrapperUS"
      style={{ width: wWidth > 560 ? "100vw" : "100vw", float: "right" }}
    >
      <div className="address">
        <h1>Contact</h1>
        <p>
          Telephone number - +080-22961890
          <br />
          Email - contacticinpro2021@gmail.com
        </p>
      </div>
      <div className="contact">
        <h1>Address</h1>
        <p>
          Department of Computer Science and Engineering,
          <br /> University Visvesvaraya College of Engineering,
          <br /> Bangalore University, <br />
          KR Circle Dr.B R Ambedkar Veedhi
          <br /> Bengaluru - 560 001.
        </p>
      </div>

      <div>
        <div
          className="mapouter"
          style={{ width: wWidth > 560 ? "100vw" : "100vw", float: "right" }}
        >
          <div className="gmap_canvas">
            <iframe
              width={wWidth}
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=UVCE&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .wrapperUS {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 10px;
          }
          .address {
            width: ${wWidth > 560 ? "50%" : "100%"};
            margin: 0;
            padding: ${wWidth > 560 ? "100px" : "40px"};
            padding-top: ${wWidth > 560 ? "100px" : "100px"};
          }
          .contact {
            width: ${wWidth > 560 ? "50%" : "100%"};
            margin: 0;
            padding: ${wWidth > 560 ? "100px" : "40px"};
            padding-top: ${wWidth > 560 ? "100px" : "0px"};
          }
        `}
      </style>
    </div>
  );
}
