import React from "react";
import SBLayout from "../../components/SBLayout";
import Accordion from "../../components/navbar/Accordion";

export default function callfor() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  const panels = [
    {
      label: "Data Science",
      content: (
        <ul>
          <li style={{ padding: 10 }}>Data Governance</li>
          <li style={{ padding: 10 }}>Data Engineering and Architecture</li>
          <li style={{ padding: 10 }}>Data Visualization</li>
          <li style={{ padding: 10 }}>Data Warehousing and Security</li>
          <li style={{ padding: 10 }}>
            Data Mining and its Applications in Science, Engineering and
            Healthcare.
          </li>
          <li style={{ padding: 10 }}>
            Text mining and Natural Language Processing
          </li>
          <li style={{ padding: 10 }}>Social Media Analysis,</li>
          <li style={{ padding: 10 }}>Web Science and Semantics</li>
          <li style={{ padding: 10 }}>Bioinformatics in Data Science</li>
          <li style={{ padding: 10 }}>Artificial Intelligence</li>
          <li style={{ padding: 10 }}>Swarm Intelligence</li>
          <li style={{ padding: 10 }}>Machine Learning and Deep Learning</li>
          <li style={{ padding: 10 }}>Big Data Analytics</li>
          <li style={{ padding: 10 }}>
            Big Data Challenges, Opportunities and Applications,
          </li>
          <li style={{ padding: 10 }}>Business Analytics</li>
          <li style={{ padding: 10 }}>Business Intelligence and Compliance</li>
          <li style={{ padding: 10 }}>Process driven Decision Making</li>
          <li style={{ padding: 10 }}>Data Analytics in Business Management</li>
          <li style={{ padding: 10 }}>Knowledge Engineering</li>
          <li style={{ padding: 10 }}>Cognitive Systems and Research</li>
          <li style={{ padding: 10 }}>
            Ubiquitous Data Management and Mobile Databases
          </li>
        </ul>
      ),
    },
    {
      label: "Computer Network and Security",
      content: (
        <ul>
          <li style={{ padding: 10 }}>Computer Networks</li>
          <li style={{ padding: 10 }}>Wireless Sensor Networks</li>
          <li style={{ padding: 10 }}>Block chain Technology</li>
          <li style={{ padding: 10 }}>Multimedia Security</li>
          <li style={{ padding: 10 }}>Cryptography and Service Computing</li>
          <li style={{ padding: 10 }}>Wireless Communications</li>
          <li style={{ padding: 10 }}>Ad-Hoc and Mobile Networks</li>
          <li style={{ padding: 10 }}>Social Networks</li>
          <li style={{ padding: 10 }}>Semantic Networks</li>
          <li style={{ padding: 10 }}>Sustainable Information Grid</li>
          <li style={{ padding: 10 }}>Sensor and Actuator Networks</li>
          <li style={{ padding: 10 }}>Information Processing Over Networks</li>
          <li style={{ padding: 10 }}>Optical Networks</li>
          <li style={{ padding: 10 }}>
            Cryptography, Security and privacy of Mobile and Wireless networks
          </li>
        </ul>
      ),
    },
    {
      label: "Computing",
      content: (
        <ul>
          <li style={{ padding: 10 }}>
            Bioinformatics and Computing in Medicine
          </li>
          <li style={{ padding: 10 }}> Computer Architecture & Systems</li>
          <li style={{ padding: 10 }}>Computer Vision and Graphics</li>
          <li style={{ padding: 10 }}>Human Computer Interaction</li>
          <li style={{ padding: 10 }}>Pattern Recognition</li>
          <li style={{ padding: 10 }}>Autonomic Computing</li>
          <li style={{ padding: 10 }}>Neural computing and applications</li>
          <li style={{ padding: 10 }}>Cluster and Super Computing</li>
          <li style={{ padding: 10 }}>Distributed and Green Computing</li>
          <li style={{ padding: 10 }}>Theoretical Computer Science</li>
          <li style={{ padding: 10 }}>Software Engineering</li>
          <li style={{ padding: 10 }}>Petro Informatics</li>
          <li style={{ padding: 10 }}>
            Semantic Computing and Ontology Engineering
          </li>
          <li style={{ padding: 10 }}>Internet Computing</li>
          <li style={{ padding: 10 }}>Sustainable Computing</li>
        </ul>
      ),
    },
    {
      label: "Internet of Things",
      content: (
        <ul>
          <li style={{ padding: 10 }}> IoT Architecture</li>
          <li style={{ padding: 10 }}>Social IoT</li>
          <li style={{ padding: 10 }}>Industrial IoT,</li>
          <li style={{ padding: 10 }}>Cyber Physical Systems</li>
          <li style={{ padding: 10 }}>Smart Cities and Connected Living</li>
          <li style={{ padding: 10 }}>Connected Services</li>
          <li style={{ padding: 10 }}>Smart metering</li>
          <li style={{ padding: 10 }}>IoT Pricing Models</li>
          <li style={{ padding: 10 }}>Edge Computing and Routing</li>
          <li style={{ padding: 10 }}>Web services and IoT Integrations</li>
          <li style={{ padding: 10 }}>Hybrid Cloud Processing</li>
          <li style={{ padding: 10 }}>
            IoT Security, Privacy and Data Protection
          </li>
          <li style={{ padding: 10 }}>
            Green IoT: Sustainable Design and Technologies
          </li>
          <li style={{ padding: 10 }}>IoT and Blockchain</li>
          <li style={{ padding: 10 }}>Fog and Cloud Computing</li>
          <li style={{ padding: 10 }}>Web of Things</li>
        </ul>
      ),
    },
    {
      label: "Intelligence Track ",
      content: (
        <ul>
          <li style={{ padding: 10 }}>Nano & Semiconductor Technology</li>
          <li style={{ padding: 10 }}>Signal, Image & Video Processing</li>
          <li style={{ padding: 10 }}>VLSI, Circui & Systems</li>
          <li style={{ padding: 10 }}>Antenna and Propagation</li>
          <li style={{ padding: 10 }}>Electromagnetic Theory</li>
          <li style={{ padding: 10 }}>Microwave Engineering</li>
          <li style={{ padding: 10 }}>Instrumentation and Measurement</li>
          <li style={{ padding: 10 }}>Mechatronics</li>
          <li style={{ padding: 10 }}>VLSI and Embedded Systems</li>
          <li style={{ padding: 10 }}>Robotics, Control and Automation</li>
          <li style={{ padding: 10 }}>
            Social Robotics and Affective Computing
          </li>
          <li style={{ padding: 10 }}> Reinforcement Learning in Robotics</li>
          <li style={{ padding: 10 }}> Software Robotics</li>
          <li style={{ padding: 10 }}>Humanitarian Technology</li>
          <li style={{ padding: 10 }}>Industry 4.0</li>
          <li style={{ padding: 10 }}>Computational Technology for Blind</li>
          <li style={{ padding: 10 }}> Social ICTs</li>
          <li style={{ padding: 10 }}>
            Disaster Recovery and Management Technologies
          </li>
          <li style={{ padding: 10 }}>Technologies in Prosthetics</li>
          <li style={{ padding: 10 }}>
            Green Engineering and Sustainable Development
          </li>
        </ul>
      ),
    },
    {
      label: "Women in Research",
      content: (
        <ul>
          <li style={{ padding: 10 }}>
            Papers can be of any topic of the other tracks. At least one of the
            Authors must be a Woman
          </li>
        </ul>
      ),
    },
  ];
  return (
    <SBLayout>
      <div
        className="wrapperCALL"
        style={{ width: wWidth > 560 ? "100vw" : "100vw", float: "right" }}
      >
        <h1
          className="headerCALL"
          style={{ fontSize: wWidth > 560 ? "72px" : "48px" }}
        >
          Call for Papers
        </h1>
        <div
          className="wrapper"
          style={{
            display: "flex",

            justifyContent: "center",
            width: wWidth > 560 ? "100vw" : "100vw",
            padding: 40,
            flexWrap: "wrap",
          }}
        >
          <h2
            className="kelage1"
            style={{
              color: "red",
              fontSize: 40,
              width: "100%",
              textAlign: "center",
            }}
          >
            Call for Papers
          </h2>

          <p
            style={{
              textAlign: "left",
              fontSize: 20,
              color: "grey",
              paddingTop: 30,
            }}
          >
            The Sixteenth International Conference on Information Processing
            (ICInPro-2021) is a conference that focuses on information
            processing in all facets of Computing and Computational Sciences.
            The ICInPro-2021 attracts researchers from all fields of Computing,
            Engineering, Robotics, Health Care to exchange ideas and present
            their work. Information Processing can deal with Computing, Internet
            of Things (IoT), Networking & Security, Robotics, Industry 4.0, Data
            Science, Management Science, Humanitarian Computing, Information
            Technology and Society, and other recent trends. The Sixteenth
            International Conference on Information Processing (ICInPro-2021)
            aims high standard research manuscript with the scope of Information
            Processing irrespective of the field.
          </p>
        </div>
        <h3>
          The conference welcomes papers in the following tracks with scope not
          limited to:
        </h3>
        <Accordion>
          {panels.map((panel) => (
            <div className="accor">
              <div className="head">
                <i
                  className="fa fa-user"
                  style={{ fontSize: "18px", paddingRight: "10px" }}
                ></i>
                {panel.label}
                <i
                  className="fa fa-angle-down"
                  style={{ fontSize: "25px", float: "right" }}
                ></i>
              </div>
              <div className="body">{panel.content}</div>
            </div>
          ))}
        </Accordion>
        <style jsx>
          {`
            .wrapperCALL {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              height: auto;
            }
            .headerCALL {
              width: 100%;
              background-color: #800000;
              color: white;
              box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.6);
              text-align: center;
              margin-top: 11vh;
            }
            .kelage1:after {
              content: ""; /* This is necessary for the pseudo element to work. */
              display: block; /* This will put the pseudo element on its own line. */
              margin: 0 auto; /* This will center the border. */
              width: 15%; /* Change this to whatever width you want. */
              padding-top: 20px; /* This creates some space between the element and the border. */
              border-bottom: 5px solid #337ab7; /* This creates the border. Replace black with whatever color you want. */
            }
            h3 {
              color: red;
              text-transform: uppercase;
            }
            ul li {
              padding: 20px;
            }
            .accor {
              width: 100%;
              margin: 20px;
              border: 1px solid #ddd;
              -webkit-transition: 0.4s;
              transition: 0.4s;
            }
            .accor .head {
              background: #eee;
              padding: 10px 20px;
              cursor: pointer;
              font-size: 20px;
            }
            .accor .body {
              display: flex;
              justify-content: flex-start;
              flex-wrap: wrap;
              background: #fafafa;

              max-height: 0;
              overflow: hidden;
              -webkit-transition: 200ms ease-in-out;
              transition: 200ms ease-in-out;
            }
            .accor.active > .body {
              padding: 10px 20px;
              max-height: 2000px;
            }
            .pdf {
              margin-top: 80px;
              width: 100%;
              height: 100vh;
            }
          `}
        </style>
      </div>
    </SBLayout>
  );
}
