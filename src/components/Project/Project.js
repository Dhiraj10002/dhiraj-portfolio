import React from 'react'
import { useEffect, useState, useRef } from "react";
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Project.scss'
import { Outlet } from 'react-router-dom'

import mannat from "../../assets/project/mannat.png";
import stockSimulator from "../../assets/project/stock-simulator.png";
import stockSimulator1 from "../../assets/project/stock-simulator1.png";
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
const isScrollingRef = useRef(true);

useEffect(() => {
  const scrollableElement = scrollableRef.current;
  if (!scrollableElement) return;

  let animationFrameId;
  let lastTime = null;

  const scrollContent = (timestamp) => {
    if (lastTime === null) {
      lastTime = timestamp;
    }
    const elapsed = Math.min(timestamp - lastTime, 100);
    lastTime = timestamp;

    if (isScrollingRef.current && scrollableElement) {
      const scrollStep = (elapsed / 1000) * 50;
      if (scrollableElement.scrollTop >= scrollableElement.scrollHeight / 2) {
        scrollableElement.scrollTop = 0;
      } else {
        scrollableElement.scrollTop += scrollStep;
      }
    }

    animationFrameId = requestAnimationFrame(scrollContent);
  };

  animationFrameId = requestAnimationFrame(scrollContent);

  const handleMouseEnter = () => {
    isScrollingRef.current = false;
  };
  const handleMouseLeave = () => {
    isScrollingRef.current = true;
  };

  scrollableElement.addEventListener("mouseenter", handleMouseEnter);
  scrollableElement.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    cancelAnimationFrame(animationFrameId);
    scrollableElement.removeEventListener("mouseenter", handleMouseEnter);
    scrollableElement.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);


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
                    href="https://www.stock-simulator.in"
                    target="_blank"
                    rel="noreferrer"
                    title="Stock Simulator - Zero Financial Risk Paper Trading Platform"
                  >
                    <img src={stockSimulator} alt="Stock Simulator - Market Trading Platform" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://www.stock-simulator.in"
                    target="_blank"
                    rel="noreferrer"
                    title="Stock Simulator - Real-time Trading Desk & Portfolio Dashboard"
                  >
                    <img src={stockSimulator1} alt="Stock Simulator - Trading Dashboard Desk" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://mannat-frontend.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    title="Mannat Foundation NGO Web Platform"
                  >
                    <img src={mannat} alt="Mannat Foundation NGO" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://smart-bookmarks-one.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    title="Smart Bookmarks Manager"
                  >
                    <img src={smartbookmark} alt="Smart Bookmarks App" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://roomify-hotel-booking.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    title="Roomify Hotel Booking Application"
                  >
                    <img src={roomify} alt="Roomify Hotel Booking" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://imagify-wagd.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    title="Imagify AI Generation Platform"
                  >
                    <img src={imagify} alt="Imagify AI Web App" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-e-commerce-store.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    title="E-Commerce Full Stack Store"
                  >
                    <img src={ecom} alt="E-Commerce Store" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-cars-stores.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    title="Cars Marketplace Web App"
                  >
                    <img src={car} alt="Cars Marketplace" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-shoes-store.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    title="Sneakers & Shoes Store"
                  >
                    <img src={nike} alt="Sneakers & Shoes Store" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-zara-store.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    title="Zara Modern Fashion Store"
                  >
                    <img src={zara} alt="Zara Fashion Store" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-study-sync.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    title="StudySync Collaboration Platform"
                  >
                    <img src={study} alt="StudySync App" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://dhiraj-weather-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    title="Live Weather Forecast Application"
                  >
                    <img src={weather} alt="Weather Forecast App" />
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
