import React from 'react'
import SBLayout from '../../components/SBLayout'

export default function cultural() {
    const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
    return (
       
            <SBLayout>
                <div className="wrapperCULT"style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}>
                <h1
                  className="headerCult"
                  style={{ fontSize: wWidth > 560 ? "72px" : "48px" }}
                >
                  Cultural (To Be Updated)
                </h1>
                    <style jsx>
                      {`
                        .wrapperCULT{
                          display:flex;
                          justify-content:center;
                          align-items:center;
                          flex-wrap:wrap;
                          height:100vh;
                        }
                        .headerCult{
                          width:100%;
                          background-color:lightgray;
                          color:white;
                          box-shadow:2px 2px 10px 5px rgba(220,220,220,0.6);
                          text-align:center;
                        }
                      `}
                    </style>
                </div>
            </SBLayout>
      
    )
}