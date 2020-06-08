import Head from "next/head";
import Layout from "../../components/Layout";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/Navbar";

export default function Archive() {
  return (
    <>
     <Navbar />
    <div className="container">
      <Head>
        <title>PV-Prod1</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
       
        <Sidebar />
      <Layout>
       
      </Layout>
      <Layout>
        <h1>Sect2</h1>
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
