import React from "react";
import SBLayout from "../../components/SBLayout";
import Head from "next/head";
import logo from "../../public/download.jpg";

export default function venue() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <SBLayout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div
        className="wrapperVEN"
        style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
      >
        <div className="banner">
          <h1
            className="aboutCALL"
            style={{ fontSize: wWidth > 560 ? "72px" : "48px" }}
          >
            About Us
          </h1>
        </div>
        {/* <div
          className="wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: wWidth > 560 ? "78vw" : "100vw",
            float: "right",
          }}
        >
          <p style={{ textAlign: "center" }}>
          The Fifteenth International Conference on Information Processing (ICInPro 2019) will be held in Bangalore, in the month of December 2019. ICInPro 2019 is the Fifteenth Conference in its series aimed at stimulating technical exchange among Scientists and Engineers and capture highly innovative and state of the art Research Papers in the emerging field of Information Processing.
          </p>
          <img
            src="https://uvce.ac.in/img/UVCE/uvce_vector.png"
            style={{ width: "40%" }}
          />
        </div> */}

        <div className="pics">
          <div className="team">
            <img src={logo} />
            <p>
              <b> Dr. R L Kashyap</b> is a Professor Emeritus at Purdue
              University in the Department of Electrical and Computer
              Engineering. He was also an Associate Director in NSF Engineering
              Research Center or Intelligent Manufacturing. He is the recipient
              of many International Awards and Honours. He has authored more
              than 350 research papers of which 220 are published in Scholarly
              Journals. He has graduated 40 Ph.Ds and 19 M.S students. He was
              the Associate Director of the Research Center for Collaborative
              Manufacturing at Purdue University. Prof. R. L. Kashyap is the
              Honorary Director of Sri Aurobindo Kapali Sastry Institute of
              Vedic Culture and its Trustee. His contributions in the field of
              Indology help to clear the persistent confusion about the Veda
              amongst Indologists and students of Indian culture. Following the
              lead of Sri Aurobindo and Sri T. V. Kapali Sastry, Prof. Kashyap
              is writing a commentary to all the Veda mantras. More information
              is available in{" "}
              <a href="https://engineering.purdue.edu/vita" target="_blank">
                http://engineering.purdue.edu/ECE/People
              </a>
            </p>
            <hr />
            <img src="https://webcentral.uc.edu/eprof/media/repository/0101AgrawalDharma9571.jpg" />
            <p>
              <b>Dr. Dharma P Aggarwal</b> is serving as the OBR Distinguished
              Professor of Computer Science in the Department of Computer
              Science, University of Cincinnati, OH. He was a Visiting Professor
              of Electrical and Computer Engineering department at Carnegie
              Mellon University, on sabbatical leave during Autumn 2006 and
              Winter 2007 quarters. He has been a faculty member at Wayne State
              University, (1977-1982) and North Carolina State University, (1982
              - 1998). He has been a consultant to the General Dynamics Land
              Systems Division, Battelle, Inc., and the U.S. Army. He has
              published 550 papers in the areas of Parallel System Architecture,
              Multicomputer Networks, Routing Techniques, Parallelism Detection
              and Scheduling Techniques, Reliability of Real-Time Distributed
              Systems, Modeling of C-MOS Circuits and Computer Arithmetic. His
              recent research interests include Resource Allocation and Security
              in Mesh Networks, Efficient Query Processing and Security in
              Sensor Networks and Heterogeneous Wireless Networks. He has Five
              approved patents and Eighteen patent filings in the area of
              Wireless Cellular Networks. He has graduated 56 Ph.Ds and 39 M.S
              students. He has 200 papers in Scholarly Journals. More
              information is available in{" "}
              <a href="https://eecs.ceas.uc.edu/~dpa/index.htm" target="_blank">
                http://www.cs.uc.edu/~dpa/index.htm
              </a>
            </p>
            <hr />
            <img src="https://upload.wikimedia.org/wikipedia/en/2/2f/Mathukumallividyasagar.jpg" />
            <p>
              <b>Dr. Mathukumalli Vidyasagar</b> is Cecil and Ida Green Chair in
              Systems Biology Science, University of Texas, Dallas. He received
              the B.S., M.S., and Ph.D. degrees, all in Electrical Engineering,
              from the University of Wisconsin in 1965, 1967, and 1969,
              respectively. Between 1969 and 1989, he worked as a Professor of
              Electrical Engineering at various universities in the USA and
              Canada. His last overseas job was with the University of Waterloo,
              Canada between 1980-89. In 1989 he returned to India as the
              Director of the newly-created Centre for Artificial Intelligence
              and Robotics (CAIR), under the auspices of the Defence Research
              and Development Organisation (DRDO). In 2000 he joined Tata
              Consultancy Services (TCS), India's largest IT firm, as an
              Executive Vice President in charge of Advanced Technology. In this
              capacity he created the Advanced Technology Centre (ATC), working
              on e-security, advanced encryption methods and bioinformatics. In
              addition to his academic positions, he has held visiting positions
              at several universities including MIT, California (Berkeley),
              Califomia (Los Angeles), CNRS Toulouse, France; Indian Institute
              of Science; University of Minnesota and Tokyo Institute of
              Technology.More information is available in
              <a href="http://www.utdallas.edu/~m.vidyasagar/" target="_blank">
                http://www.utdallas.edu/~m.vidyasagar/
              </a>
            </p>
            <hr />
            <img src="https://www.nias.res.in/sites/default/files/adjunct/Patnaik.jpg" />
            <p>
              <b> Dr. L M Patnaik </b>is Honorary Professor, Indian Institute of
              Science, Bangalore, India. He was Vice Chancellor, Defense
              Institute of Advanced Technology, Pune, India. He was a Professor
              since 1986 with the Department of Computer Science and Automation,
              Indian Institute of Science, Bangalore. During the past 35 years
              of his service at the Institute he has over 700 research
              publications in refereed International Journals and Conference
              Proceedings. He is a Fellow of all the four leading Science and
              Engineering Academies in India; Fellow of the IEEE and the Academy
              of Science for the Developing World. He has received twenty
              national and international awards; notable among them is the IEEE
              Technical Achievement Award for his significant contributions to
              high performance computing and soft computing. His areas of
              research interest have been parallel and distributed computing,
              mobile computing, CAD for VLSI circuits, soft computing, and
              computational neuroscience. He has graduated 20 Ph.D students.
              More information is available in
              <a
                href="http://www.cedt.iisc.ernet.in/people/lmp/lmp.html"
                target="_blank"
              >
                http://www.cedt.iisc.ernet.in/people/lmp/lmp.html
              </a>
            </p>
            <hr />
            <img src="https://i2.wp.com/bangaloreuniversity.ac.in/wp-content/uploads/2016/10/Dr.-Venugopal-K.R.jpg?fit=413%2C531&ssl=1" />
            <p>
              <b>Dr. Venugopal K R </b> is currently the Vice Chancellor,
              Bangalore University, Bangalore. He has served as Principal,
              University Visvesvaraya College of Engineering, Bangalore
              University, Bangalore. He obtained his Bachelor of Engineering
              from University Visvesvaraya College of Engineering. He received
              his Masters degree in Computer Science and Automation from Indian
              Institute of Science Bangalore. He was awarded Ph.D in Economics
              from Bangalore University and Ph.D in Computer Science from Indian
              Institute of Technology, Madras. He has a distinguished academic
              career and has degrees in Electronics, Economics, Law, Business
              Finance, Public Relations, Communications, Industrial Relations,
              Computer Science and Journalism. He has authored and edited 64
              books on Computer Science and Economics, which include Petrodollar
              and the World Economy, C Aptitude, Mastering C, Microprocessor
              Programming, Mastering C++ and Digital Circuits and Systems etc.,
              He has filed 101 patents. During his three decades of service at
              UVCE he has over 700 research papers to his credit. His research
              interests include Computer Networks, Wireless Sensor Networks,
              Parallel and Distributed Systems, Digital Signal Processing and
              Data Mining. He is a Fellow of IEEE and ACM Distinguished
              Educator. More information is available in
              <a href="http://www.venugopalkr.com" target="_blank">
                {" "}
                http://www.venugopalkr.com
              </a>
            </p>
            <hr />
            <img src="https://discoverylab.cs.fiu.edu/wp-content/uploads/sites/13/2016/10/d884cb8011746179b4c9c6f556f35829.jpg" />
            <p>
              <b>Dr. S S Iyengar</b> is currently the Director and Ryder
              Professor Florida International University, USA. He was Roy Paul
              Daniels Professor and Chairman of the Computer Science Department
              at Louisiana State University. He heads the Wireless Sensor
              Networks Laboratory and the Robotics Research Laboratory at LSU.
              He has been involved with research in high Performance Algorithms,
              Data Structures, Sensor Fusion, Data Mining and Intelligent
              Systems. Since receiving his Ph.D degree in 1974 from MSU, USA. He
              has directed over 40 Ph.D students and 100 Post Graduate students,
              many of whom are faculty at Major Universities worldwide or
              Scientists or Engineers at National Labs/Industries around the
              world. He has published more than 500 research papers and has
              authored/co-authored 6 books and edited 7 books. His books are
              published by John Wiley & Sons, CRC Press, Prentice Hall, Springer
              Verlag, IEEE Computer Society Press etc. One of his books titled
              “Introduction to Parallel Algorithms has been translated to
              Chinese. More information is available in
              <a href="http://users.cis.fiu.edu/~iyengar/" target="_blank">
                http://users.cis.fiu.edu/~iyengar/
              </a>
            </p>
            <hr />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvQkIecCEiLqsUd_26fRxPKNUTRaqztY_xew&usqp=CAU" />
            <p>
              <b>Dr. Palaniswamy </b> received his M.E from the Indian Institute
              of Science, India, M.Eng.Sc from the University of Melbourne and
              Ph.D from the University of Newcastle, Australia before rejoining
              the University of Melbourne. He has been serving the University of
              Melbourne for over 21 years. He served as a co-director of an
              active research centre, the Centre of Expertise on Networked
              Decision & Sensor Systems (2002-2005). He has published more than
              320 refereed papers and a huge proportion of them appeared in
              prestigious IEEE Journals and Conferences. He has won the
              University of Melbourne Knowledge Transfer Award in 2007 and 2008.
              He was the associate editor of Journals/transactions including
              IEEE Transaction on Neural Networks. His research interests
              include SVMs, Sensors and Sensor Networks, Machine Learning,
              Neural Network, Pattern Recognition, Signal Processing and
              Control. He holds several large Australian Research Council
              Discovery and Linkage grants with a successful industry outreach
              programme. More information is available in
              <a
                href="http://www.ee.unimelb.edu.au/staff/swami/index.html"
                target="_blank"
              >
                {" "}
                http://www.ee.unimelb.edu.au/staff/swami/index.html
              </a>
            </p>
            <hr />
            <img src="https://ww1.prweb.com/prfiles/2012/12/21/10267154/buyya.jpg" />
            <p>
              <b> Rajkumar Buyya </b>Dr. Rajkumar Buyya is a Fellow of IEEE,
              Professor of Computer Science and Software Engineering and
              Director of the Cloud Computing and Distributed Systems (CLOUDS)
              Laboratory at the University of Melbourne, Australia. He is also
              serving as the founding CEO of Manjrasoft Pty Ltd., a spin-off
              company of the University, commercialising its innovations in Grid
              and Cloud Computing. He served as a Future Fellow of the
              Australian Research Council during 2012-2016. He received B.E and
              M.E in Computer Science and Engineering from Mysore and Bangalore
              Universities in 1992 and 1995 respectively; and a Doctor of
              Philosophy (PhD) in Computer Science and Software Engineering from
              Monash University, Melbourne, Australia in 2002. More information
              is available in{" "}
              <a href=" http://www.buyya.com/" target="_blank">
                {" "}
                http://www.buyya.com/
              </a>
            </p>
            <hr />
          </div>
        </div>
        <style jsx>{`
          .banner {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            height: 30vh;
          }
          .aboutCALL {
            position: absolute;
            top: 0;
            margin-top: 12vh;
            width: 100%;
            background-color: lightgray;
            color: white;
            box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.6);
            text-align: center;
            
          }
          }
          .pics {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: ${wWidth > 560 ? "80vw" : "100vw"};
            padding-top: 20px;
          }
          .pics h1 {
            padding-bottom: 50px;
            font-size: ${wWidth > 560 ? "45px" : "18px"};
            width: 100%;
            color: grey;
          }
          .team {
            text-align:justify;
            text-justify:inter-word;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            width: ${wWidth > 560 ? "60vw" : "100vw"};
            padding:40px;
          }
          .team img {
            width:${wWidth > 560 ? "33%" : "50%"};
            height: 35vh;
            border-radius:50%;
            box-shadow: 1px 1px 10px 5px grey;
            margin:20px;
          }
          hr{
            width:100vw;  
            border: 1px solid lightgray;
          }
          p{
           text-indent:35px
          }
        `}</style>
      </div>
    </SBLayout>
  );
}
