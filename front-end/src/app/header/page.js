"use client";
import style from "./style.css";
import Link from "next/link";
export default function Header() {
  return (
    <div className="main-header">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="../components/aboutMongolia">
                  <li>About Mongonia</li>
                </Link>
          <Link href="../holbooBarih">
                <li>Contact</li>
                </Link>

          <Link href="../ES4edu/es4">
                  <li>ES4</li>
                </Link>
        </ul>
      </div>
      <div className="main">
        <div className="container">
          <h1>TRAVEL</h1>
          <div className="category">
            <div>
              <ul>
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="../../components/aboutMongolia">
                  <li>About Mongonia</li>
                </Link>
                <Link href="../holbooBarih">
                <li>Contact</li>
                </Link>
             
                <Link href="../../ES4edu/es4">
                  <li>ES4</li>
                </Link>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}