import React from 'react'
import { useEffect, useState, useRef } from "react";
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Project.scss'
import { Outlet } from 'react-router-dom'

import mannat from "../../assets/project/mannat.png";
import imagify from "../../assets/project/imagify.png";
import roomify from "../../assets/project/roomify.png";
import smartbookmark from "../../assets/project/smartbookmark.png";
import ecom from "../../assets/project/ecom.png";
import car from "../../assets/project/car.png";
import nike from "../../assets/project/nike.png";
import zara from "../../assets/project/zara.png";
import study from "../../assets/project/study.png";
import weather from "../../assets/project/weather.png";

function Project() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3300)
  }, [])

const scrollableRef = useRef(null);
const [isScrolling, setIsScrolling] = useState(true);

useEffect(() => {
  const scrollableElement = scrollableRef.current;

  const scrollContent = () => {
    if (isScrolling) {
      if (scrollableElement.scrollTop >= scrollableElement.scrollHeight / 2) {
        scrollableElement.scrollTop = 0;
      } else {
        scrollableElement.scrollTop += 1;
      }
    }
  };

  const intervalId = setInterval(scrollContent, 20);

  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  scrollableElement.addEventListener("mouseenter", handleMouseEnter);
  scrollableElement.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    clearInterval(intervalId);
    scrollableElement.removeEventListener("mouseenter", handleMouseEnter);
    scrollableElement.removeEventListener("mouseleave", handleMouseLeave);
  };
}, [isScrolling]);


  return (
    <>
      <div className="container project-page">
        <div className="page">
          <span className="tags top-html">&lt;/html&gt;</span>
          <span className="tags top-tags">&lt;body&gt;</span>

          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  "M",
                  "y",
                  " ",
                  "P",
                  "r",
                  "o",
                  "j",
                  "e",
                  "c",
                  "t",
                  "s",
                ]}
                idx={15}
              />
            </h1>
            <p>
              I specialize in crafting full-stack applications that balance
              elegant user experiences with strong backend engineering. With a
              foundation in Computer Science and hands-on development
              experience, I’ve built scalable web platforms, AI-integrated
              systems, and performance-driven applications using modern
              technologies and best engineering practices.
              <br />
              <br />
              Each project reflects my emphasis on clarity in design, efficiency
              in execution, and real-world problem solving.
              <br />
              <br />
              As a final-year Computer Science student and Software Engineer,
              I've worked on multiple projects during my course across web
              applications, frontend, and backend development.
              <br />
              <br />
              This is a fresh selection of my latest projects!
              <br />
              <a
                href="https://github.com/Dhiraj10002"
                target="_blank"
                rel="noreferrer"
                className="qView"
              >
                Wanna take a quick view?
              </a>
            </p>
          </div>
          <div
            id="home-magicwall"
            className="fake-magicwall auto-scroll"
            ref={scrollableRef}
          >
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="magic-wall_item">
                  <a
                    href="https://smart-bookmarks-one.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={smartbookmark} alt="okimage" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://mannat-frontend.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={mannat} alt="okimage" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://roomify-hotel-booking.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={roomify} alt="okimage" />
                  </a>
                </div>{" "}
                <div className="magic-wall_item">
                  <a
                    href="https://imagify-wagd.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={imagify} alt="okimage" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-e-commerce-store.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={ecom} alt="okimage" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-cars-stores.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={car} alt="okimage" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-shoes-store.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={nike} alt="okimage" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-zara-store.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={zara} alt="okimage" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-study-sync.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={study} alt="okimage" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-weather-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={weather} alt="okimage" />
                  </a>
                </div>
              </React.Fragment>
            ))}
          </div>
          <Outlet />
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Project
