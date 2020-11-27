import React from "react";
import Head from "next/head";
import Link from "next/link";
export default function Navbar2() {
  const [show, setShow] = React.useState(false);
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
   <div>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>
     <button onClick={()=>setShow(true)}>
      <i style={{
        fontSize:40,
        color:"firebrick"
      }} className="fa fa-bars"/>
     </button>
     {show?<Nav close={(ans)=>setShow(ans)}/>:<></>}
     <style jsx>
       {`
          button{
            position:fixed;
            z-index:999;
            background-color:lightblue;
          }
       `}
     </style>
   </div>
  );
}

const Nav = ({close})=>{

  return(
  <div>
  

  <nav style={{
    backgroundColor:"lightblue",
  }} class="navbar navbar-expand-md navbar-dark ">
    <a class="brand" style={{color:"firebrick",padding:40,fontSize:40}} href="#">
      ICInPro
    </a>
  
    
    <div class="NAV" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link href="/">
          <a className="nav-links">Home</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link href="/sb/about">
          <a className="nav-links">About Us</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link href="/nav/committees">
          <a className="nav-links">Committees</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link href="/sb/callfor">
          <a className="nav-links">Call for Papers</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link href="/sb/dates">
          <a className="nav-links">Important Dates</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link href="/sb/papers">
          <a className="nav-links">Publication</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link href="/sb/registration">
          <a className="nav-links">Registration</a>
        </Link>
        </li><li class="nav-item">
        <Link href="/">
          <a className="nav-links">Archive</a>
        </Link>
        </li><li class="nav-item">
        <Link href="/nav/sponsors">
          <a className="nav-links">Sponsor</a>
        </Link>
        </li>
      </ul>
    </div>
    <button className="close" onClick={()=>close(false)}>
     X
    </button>
  </nav>

  <style jsx>
    {`
    .brand{
      padding:40px;
    }
    .close{
      position:absolute;
      top:0;
      margin-top:10px;
      right:0;
      margin-right:10px;
      font-size:24px;
    }
    NAV{
      position:fixed;
      width:100vw;
      height:100vh;
      z-index:1000;
      diplay:flex;
      align-items:center;
      justify-content:center;
     
    }
    ul{
      list-style-type:none;
      diplay:flex;
      align-items:center;
      flex-wrap:wrap;
      margin:0;
      padding:0;
      text-align:center;
    }
    li{
      width:100%;
      margin-top:3px;
      font-size:24px;
      border:1px solid firebrick;
      padding:10px;

    }
      .nav-links{
       text-decoration:none;
        color:firebrick;
        text-transform:uppercase;
      }
      
    `}
  </style>
</div>
  )}
