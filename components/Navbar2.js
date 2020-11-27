import React from "react";
import Head from "next/head";
import Link from "next/link";
export default function Navbar2() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </Head>

      <nav style={{
        backgroundColor:"lightblue",
      }} class="navbar navbar-expand-md navbar-dark ">
        <a class="navbar-brand" style={{color:"firebrick"}} href="#">
          ICInPro
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span style={{color:"firebrick"}} class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
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
      </nav>

      <style jsx>
        {`
          .nav-links{
           
            color:firebrick;
          }
          
        `}
      </style>
    </div>
  );
}
