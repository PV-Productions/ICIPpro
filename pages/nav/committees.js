import Head from "next/head";
import Layout from "../../components/Layout";
import Navbar2 from "../../components/Navbar2";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/Navbar";
import Committee from "../../components/navbar/Committee";

export default function Committees() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <>
      {wWidth>560?<Navbar />:<Navbar2/>} 
      <div className="container">
        <Head>
          <title>ICInPro-Committees</title>
          <link rel="icon" href="/logo2.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <Layout>
          <Committee />
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
