import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav(props) {
  //const [headerHeight, setHeaderHeight] = useState(0);
  // useEffect(() => {
  //   setHeaderHeight(document.querySelector("header").clientHeight);
  // }, [headerHeight]);

  return (
    <>
      <nav
        className={`nav-container ${props.classAdd}`}
        role="navigation"
        aria-label="Main Navigation"
        // style={{
        //   top: headerHeight + "px",
        //   height: "calc(100vh - " + headerHeight + "px)",
        // }}
      >
        <ul className="reset nav-main">
          <li>
            <a href="#top">Main Linkage</a>
            <ul className="nav-sub reset">
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
          <li className="active">
            <a href="#top">Main Linkage</a>
            <ul className="nav-sub reset">
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
            <ul className="nav-sub reset">
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
            <ul className="nav-sub reset">
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
              <li>
                <a href="#top">Sub Linkage</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
          <li>
            <a href="#top">Main Linkage</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
