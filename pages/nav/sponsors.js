import Head from "next/head";
import Layout from "../../components/Layout";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Sponsor from "../../components/navbar/Sponsor";

export default function Sponsors() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <>
      {wWidth>560?<Navbar />:<Navbar2/>} 
      <div className="container">
        <Head>
          <title>ICInPro-Sponsors</title>
          <link rel="icon" href="/logo2.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <Layout>
          <Sponsor />
        </Layout>

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
