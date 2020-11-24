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
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
      ],
    },
    {
      label: "Advisory Committee",
      content: [
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
      ],
    },
    {
      label: "Advisory Committee",
      content: [
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
      ],
    },
    {
      label: "Advisory Committee",
      content: [
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
      ],
    },
    {
      label: "Advisory Committee",
      content: [
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
      ],
    },
    {
      label: "Advisory Committee",
      content: [
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
      ],
    },
    {
      label: "Advisory Committee",
      content: [
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
      ],
    },
    {
      label: "Advisory Committee",
      content: [
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
      ],
    },
    {
      label: "Advisory Committee",
      content: [
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
      ],
    },
    {
      label: "Advisory Committee",
      content: [
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
      ],
    },
    {
      label: "Advisory Committee",
      content: [
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
        <Card1 name={"R L Kashyap"} info={"Purdue University, USA"} />,
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
          }
          .accor .body {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            background: #fafafa;

            padding: 0 20px;
            max-height: 0;
            overflow: hidden;
            -webkit-transition: 200ms ease-in-out;
            transition: 200ms ease-in-out;
          }
          .accor.active > .body {
            padding: 10px 20px;
            max-height: 1000px;
          }
        `}
      </style>
    </div>
  );
}
