import React from "react";
import Link from "next/link";
import Head from "next/head";
import Collapsible from "react-collapsible";
import Accordion from "./Accordion";
import Card1 from "./Card";

export default function Committee() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });

  const panels = [
    {
      label: "Advisory Committee",
      content: [
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1
          name={"N R Shetty"}
          info={"Chancellor, Central University of Karnataka, India"}
        />,
        <Card1
          name={"Marimuthu Palaniswami "}
          info={"Purdue University, USA"}
        />,
        <Card1
          name={"Sajal K Das"}
          info={"Missouri University of Science and Technology, USA"}
        />,
      ],
    },
    {
      label: "Conference Chair",
      content: [
        <Card1
          name={"L M Patnaik"}
          info={"Adjunct Professor and INSA Senior Scientist, NIAS, India"}
        />,
      ],
    },
    {
      label: "Technical Program Chairs",
      content: [
        <Card1
          name={"S S Iyengar"}
          info={"Florida International University, USA"}
        />,
        <Card1
          name={"Rajkumar Buyya"}
          info={"University of Melbourne, Australia "}
        />,
      ],
    },
    {
      label: "Publication Chair",
      content: [
        <Card1
          name={"Venugopal K R "}
          info={"Vice Chancellor, Bangalore University, Bangalore, India "}
        />,
      ],
    },
    {
      label: "Finance Chairs",
      content: [
        <Card1 name={"P Deepa Shenoy"} info={"UVCE, Bangalore"} />,
        <Card1 name={"J Thriveni"} info={"UVCE, Bangalore"} />,
      ],
    },
    {
      label: "Programme Committee",
      content: [
        <Card1
          name={"Manimaran Govindarasu,"}
          info={" Iowa State University, USA"}
        />,
        <Card1
          name={"Rajib Mall"}
          info={"Indian Institute of Technology, Kharagpur, India"}
        />,
        <Card1 name={"Celia Shahnaz"} info={" BUET, Dhaka, Bangladesh"} />,
        <Card1
          name={"Devika P. Madalli"}
          info={"Indian Statistical Institute (ISI), Bangalore"}
        />,
        <Card1 name={"P Sreenivasa Kumar"} info={"IIT Madras, India"} />,
        <Card1
          name={"Shyamala Doraisamy"}
          info={"Universiti Putra Malaysia"}
        />,
        <Card1
          name={"Roshan G Ragel,"}
          info={" University of Peradeniya, Sri Lanka"}
        />,
        <Card1
          name={"P Shivakumara"}
          info={" University of Malaya, Malaysia"}
        />,
        <Card1
          name={"Daya Sagar B S"}
          info={" Indian Statistical Institute, Bangalore"}
        />,
        <Card1 name={"Chandrashekaran K"} info={" NITK, Suratkal, India"} />,
        <Card1 name={"Sarika Jain"} info={"NIT Kurukshetra, India"} />,
        <Card1
          name={"Sanju Tiwari"}
          info={"Universidad Autonoma de Tamaulipas, Mexico"}
        />,
        <Card1
          name={"Aruna Govada"}
          info={"Asst. Director, UT Admin of DNH & DD"}
        />,
        <Card1 name={"Sanasam Ranbir Singh"} info={"IIT Guwahati, India"} />,
        <Card1 name={"Y V S Laxmi"} info={"CDoT, India"} />,
        <Card1 name={"C Mala"} info={"NIT, Tiruchirappalli"} />,
        <Card1
          name={"M Pratheepa"}
          info={" ICAR- National Bureau of Agricultural and Insect Resources"}
        />,
        <Card1
          name={"Aruna Govada"}
          info={"Asst. Director, UT Admin of DNH & DD"}
        />,
        <Card1
          name={"Biswanath Dutta"}
          info={"Indian Statistical Institute, Bangalore"}
        />,
        <Card1
          name={"W.G.C.W. Kumara (Chinthaka)"}
          info={"South Eastern University of Sri Lanka"}
        />,
        <Card1
          name={"Randima Dinalankara"}
          info={" University of Sri Jayewardenepura, Sri Lanka"}
        />,
        <Card1
          name={"M. Raja"}
          info={"BITS, Pilani, Dubai, United Arab Emirates"}
        />,
        <Card1 name={"Saroj Kr. Biswas"} info={"NIT Silchar, India"} />,
        <Card1
          name={"Narendran Rajagopalan"}
          info={"NIT Puducherry, Karaikal, India"}
        />,
        <Card1
          name={"Waseem Ahmed"}
          info={" King Abdul Aziz University, Saudi Arbia"}
        />,
        <Card1 name={"Santhanavijayan A"} info={"NIT, Tiruchirapalli"} />,
        <Card1
          name={"Nasim Matar"}
          info={" University of Petra, Amman Jordan."}
        />,
        <Card1
          name={"J Thomas"}
          info={" CHRIST (Deemed to be University), Bangalore"}
        />,
        <Card1
          name={"Samiksha Sukhla"}
          info={"CHRIST (Deemed to be University), Lavasa"}
        />,
        <Card1
          name={"A Anny Leema"}
          info={"Vellore Institute of Technology, Vellore"}
        />,
        <Card1
          name={"Neha Sharma"}
          info={"Analytics & Insights Tata Consultancy Services"}
        />,
        <Card1
          name={"Dinesh K Anvekar"}
          info={"Sapthagiri College of Engineering, Bangalore, India"}
        />,
        <Card1
          name={"Anand Nayyar"}
          info={"Duy Tan University Da Nang, Viet Nam"}
        />,
        <Card1 name={"Soma Pandey"} info={"Reliance Jio Infocomm Ltd"} />,
        <Card1 name={"Kumudini"} info={"Innomantra Consulting Pvt. Ltd."} />,
        <Card1 name={"Srikanth"} info={"Intel, India"} />,
        <Card1 name={"Ravikiran A"} info={"Numocity Technologies, India"} />,
        <Card1 name={"Abhishek Appaji"} info={"BMSCE, Bangalore"} />,
      ],
    },
    {
      label: "Organizing Committee",
      content: [
        <Card1 name={"P Deepa Shenoy"} info={"UVCE, Bangalore"} />,
        <Card1 name={"K B Raja"} info={"UVCE, Bangalore"} />,
        <Card1 name={"K Suresh Babu,"} info={"UVCE, Bangalore"} />,
        <Card1 name={"J Thriveni"} info={"UVCE, Bangalore"} />,
        <Card1 name={"S H Manjula"} info={"UVCE, Bangalore"} />,
        <Card1 name={"S M Dilipkumar"} info={"UVCE, Bangalore"} />,
        <Card1 name={"Prathibavani P M"} info={"UVCE, Bangalore"} />,
        <Card1 name={"Roopa"} info={"UVCE, Bangalore"} />,
        <Card1 name={"Vibha Lakshmikantha"} info={" BIT, Bangalore"} />,
        <Card1 name={"Anita Kanavalli"} info={" MSRIT, Bangalore "} />,
        <Card1 name={"Shaila K"} info={" VKIT, Bangalore "} />,
        <Card1 name={"Prashanth C R"} info={"  AIT, Bangalore "} />,
        <Card1 name={"Ramachandra A C"} info={"  NMIT, Bangalore "} />,
        <Card1 name={"Srikantaiah K C"} info={" SJBIT, Bangalore"} />,
        <Card1 name={"T Shiva Prakash"} info={" VVIT, Bangalore  "} />,
        <Card1 name={"Vidya A"} info={"  VKIT, Bangalore "} />,
      ],
    },
    {
      label: "Tutorial Chairs",
      content: [
        <Card1 name={"Arunalatha J S"} info={"UVCE, Bangalore"} />,
        <Card1 name={"Sujatha D N"} info={"BMSCE, Bangalore "} />,
        <Card1 name={"Shaila K"} info={"VKIT, Bangalore"} />,
      ],
    },
    {
      label: "Local Arrangement Chairs",
      content: [
        <Card1 name={"K B Raja"} info={"UVCE, Bangalore "} />,
        <Card1 name={"Kiran K"} info={"UVCE, Bangalore "} />,
      ],
    },
    {
      label: "Co-ordinators",
      content: [
        <Card1 name={"Srikantaiah K C"} info={" SJBIT, Bangalore "} />,
        <Card1 name={"Pushpa C N"} info={"UVCE, Bangalore "} />,
        <Card1 name={"Sunil Kumar G"} info={"UVCE, Bangalore "} />,
        <Card1 name={"Gerard Deepak"} info={"NIT, Tiruchirapalli"} />,
      ],
    },
    {
      label: "Web Masters",
      content: [
        <Card1 name={"Varun K J"} info={"UVCE, Bangalore"} />,
        <Card1 name={"Pavan S"} info={"UVCE, Bangalore"} />,
      ],
    },
  ];

  return (
    <div
      className="wrapperVEN"
      style={{ width: wWidth > 560 ? "100vw" : "100vw", float: "right" }}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <h1
        className="headerCALL"
        style={{ fontSize: wWidth > 560 ? "72px" : "48px" }}
      >
        Committes
      </h1>
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
          .wrapperVEN {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            height: 100vh;
          }
          .headerCALL {
            width: 100%;
            background-color: lightgreen;
            color: white;
            box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.6);
            text-align: center;
            margin-top: 10vh;
          }

          .accor {
            margin: 10px;
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
        `}
      </style>
    </div>
  );
}
