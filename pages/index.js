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
          <title>PV-Prod1</title>
          <link rel="icon" href="/favicon.ico" />
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
          <Logos /> <Slider />
        </Layout>
        <footer
          style={{
            width: wWidth > 560 ? "80vw" : "100vw",
            float: "right",
            height: "4vh",
            backgroundColor: "rgb(20,20,20)",
            color: "white",
            textAlign: "center",
            padding: 4,
            marginLeft: "auto",
            right: 0,
            fontSize: "14px",
          }}
        >
          {" "}
          ©UVCE 2020-21 All rights reserved || Designed and Developed by
          Pavan&Varun
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
        `}</style>
      </div>
    </>
  );
}
