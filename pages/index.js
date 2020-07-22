import Head from "next/head";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar";
import Logos from "../components/Logos";
import Slider from "../components/Slider";

export default function Home() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <Head>
          <title>ICInPro-2021</title>
          <link rel="icon" href="/logo2.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>

        <Sidebar />
        <Layout>
          <Landing />
        </Layout>
        <Layout>
          <div
            className="sect1"
            style={{
              width: wWidth > 560 ? "80vw" : "100vw",
              float: "right",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                backgroundColor: "lightgrey",
                color: "white",
                padding: 20,
                boxShadow: "2px 2px 10px 5px rgba(220,220,220,0.5)",
                textShadow: "1px 1px 5px black",
              }}
            >
              Scroll down to view the various Tracks! Click{" "}
              <a href="http://icipbangalore.org/" target="_blank">
                here
              </a>{" "}
              to go to the 2019 ICInPro
            </h3>
          </div>
        </Layout>
        <Layout>
          <div
            style={{
              width: wWidth > 560 ? "80vw" : "100vw",
              float: "right",
              marginTop: "10px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                backgroundColor: "lightgrey",
                color: "white",
                padding: 80,
                boxShadow: "2px 2px 10px 5px rgba(220,220,220,0.5)",
                textShadow: "1px 1px 5px black",
              }}
            >
              Tracks to be updated.
            </h1>
          </div>
          <Logos />
          <Slider />
        </Layout>

        <footer
          style={{
            width: wWidth > 560 ? "80vw" : "100vw",
            float: "right",
            backgroundColor: "rgb(20,20,20)",
            color: "white",
            textAlign: "center",
            padding: 4,
            marginLeft: "auto",
            right: 0,
            fontSize: "14px",
          }}
        >
          ©UVCE 2020-21 All rights reserved || Designed and Developed by
          PV-Productions
        </footer>
        <style jsx>{`
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
            height: 100vh;
          }
          footer {
            height: ${wWidth > 560 ? "4vh" : "6vh"};
          }
        `}</style>
      </div>
    </>
  );
}
