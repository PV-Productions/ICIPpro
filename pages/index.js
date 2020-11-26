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

        <Layout>
          <Landing />
        </Layout>
        <Layout>
          <div
            className="sect1"
            style={{
              width: wWidth > 560 ? "100vw" : "100vw",
              float: "right",
            }}
          ></div>
        </Layout>
        <Layout>
          <div
            style={{
              width: wWidth > 560 ? "100vw" : "100vw",
              float: "right",
              boxShadow: "2px 2px 10px 5px lightgrey",
              marginTop: 50,
              paddingTop: 100,
              padding: 50,
              textAlign: "justify",
              textIndent: "35px",
              fontSize: 20,
              background: "ghostwhite",
              fontWeight: 600,
              color: "#800000",
            }}
          >
            <p>
              ICInPro-2021 is a pioneer International Conference of the ICIP and
              the ICInPro Series and is the Sixteenth Conference which is to be
              held in 2021. The ICInPro series of the conference was one of the
              first international conferences organized in Bangalore since 2007.
              Chaired by Pioneers in Research and Academia, the ICInPro-2021
              focuses on high-quality publication. The ICInPro-2021 is a legacy
              conference organized by the prestigious University Visvesvaraya
              College of Engineering, Bangalore University, Bangalore, and is
              mentored by several renowned researchers across the globe.
            </p>
            <br />

            <p>
              ICInPro strives for quality and excellence in research and is the
              right arena to share and exchange stimulating ideas exchange among
              Scientists and Engineers and capture highly innovative and state
              of the art Research Papers in the emerging field of Information
              Processing. The ICInPro-2021 carries the legacy forward and
              invites high-quality recent research results in the areas of
              Internet of Things (IoT), Data Science, Security For Internet Of
              Things, Information Processing And Pattern Recognition, Computer
              Communication Networks, Hardware And Optimization, Soft Computing,
              Distributed Systems, Software Engineering, Bio Computing, Data
              Mining, Artificial Intelligence, and all recent trends in
              computing.
            </p>
          </div>

          <Logos />
          <h1
            style={{
              width: wWidth > 560 ? "100vw" : "100vw",
              float: "right",
              textAlign: "center",
              color: "white",
              fontSize: 40,
              backgroundColor: "#800000",
            }}
          >
            Tracks
          </h1>
          <Slider />
        </Layout>

        <footer
          style={{
            width: wWidth > 560 ? "100vw" : "100vw",
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
          ©UVCE 2020-21 All rights reserved
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
