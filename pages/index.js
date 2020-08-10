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
          ></div>
        </Layout>
        <Layout>
          <div
            style={{
              width: wWidth > 560 ? "80vw" : "100vw",
              float: "right",
              boxShadow: "2px 2px 10px 5px lightgrey",
              padding: 40,
              textAlign: "justify",
              textIndent: "35px",
              fontSize: 20,
              background:
                "linear-gradient(to bottom left, lightblue, lightgreen)",
              color: "#800000",
            }}
          >
            <p>
              The Sixteenth International Conference on Information Processing
              (ICInPro 2021) will be held in Bangalore, in the month of August
              2021. ICInPro 2021 is the Sixteenth Conference in its series aimed
              at stimulating technical exchange among Scientists and Engineers
              and capture highly innovative and state of the art Research Papers
              in the emerging field of Information Processing.
            </p>
            <br />

            <p>
              The Sixteenth International Conference on Information Processing
              (ICInPro 2021) invites high-quality recent research results in the
              areas of Internet of Things, Data Science, Security for Internet
              of Things, Information Processing and Pattern Recognition,
              Computer Communication networks, Hardware and Optimization, Soft
              Computing, Distributed Systems, Software Engineering, Bio
              computing, Data mining, Artificial Intelligence and Image
              Processing.
            </p>
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
