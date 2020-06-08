import React from "react";
import Particles from "react-particles-js";

export default function Landing() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(()=>{
    setwWidth(window.innerWidth);
  })
  return (
    <div className="landing" style={{width:(wWidth>560?"80vw":"100vw"),float:"right"}}>

      <div className="heading">
    
        <h1>ICInPro </h1>
        <h2>2020</h2>
       
      </div>
 
        {/* <Particles
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        /> */}

      <style jsx>
        {`
          .landing {
           
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            background-color:rgb(40,40,40);
           
            height: 100vh;
          }
     
          .heading h1 {
            font-size: 100px;
            color: white;
            font-weight: 500;
          }
          .heading h2 {
           
            font-size: 20px;
            color: white;
          }
        `}
      </style>
    </div>
  );
}
