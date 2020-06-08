import React from 'react'

export default function ContactUs() {
    const [wWidth, setwWidth] = React.useState(0);
    React.useEffect(()=>{
      setwWidth(window.innerWidth);
    })
    return (
        <div className="wrapperUS" style={{width:(wWidth>560?"80vw":"100vw"),float:"right"}}>
            <div className="address">
            <h1>Contact</h1>
                <p>
                  Contact: Info line - +080-22961890
                  <br />
                  Email - info@campusuvce.in
                </p>
            </div>
            <div className="contact">   
            <h1>Address</h1>
                <p>
                  Address: Department of Computer Science and Engineering,
                  University Visvesvaraya College of Engineering, Bangalore
                  University, Bengaluru - 560 001.
                </p>
            </div>

            <div>
                        <div className="mapouter">
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
                        .wrapperUS{
                            display:flex;
                            align-items:center;
                            justify-content:space-around;
                            flex-wrap:wrap;
                            margin-top:10px;
                        }   
                        .address{
                            width:50%;
                            margin:0;
                            padding:100px;
                        }           
                        .contact{
                            width:50%;
                            margin:0;
                            padding:100px;
                        }     
                    `}
                </style>
        </div>
    )
}
