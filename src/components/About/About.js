import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Outlet, Link } from "react-router-dom";
import "./About.scss";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3300);
  }, []);

  return (
    <div className="container about-page">
      <div className="page">
        <span className="tags top-html">&lt;/html&gt;</span>
        <span className="tags top-tags">&lt;body&gt;</span>

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
            strArray={[
  "M","y",","," ",
  "M","y","s","e","l","f"," ",
  "&"," ","I",
]}
              idx={15}
            />
          </h1>
          <p className="about-intro">
            I’m Dhiraj Gupta, a final-year Computer Science student and
            Full-Stack Developer focused on scalable web applications,
            high-performance dashboards, and modern data platforms.
          </p>

          <p className="about-current">
            Currently a <strong>Full-Stack Developer Intern at Zversal Pvt Ltd</strong>,
            working with Lakekeeper, Delta Lake, DuckDB, Apache Spark, and
            Docker to build and evaluate modern lakehouse workflows. Previously,
            I developed a real-time CXO risk dashboard using Next.js,
            PostgreSQL, and Redis.
          </p>

          <div className="about-highlights">
            <div>
              <strong>2</strong>
              <span>software internships</span>
            </div>
            <div>
              <strong>Production</strong>
              <span>full-stack applications</span>
            </div>
            <div>
              <strong>800+</strong>
              <span>DSA problems solved</span>
            </div>
          </div>

          <Link to="/contact" className="reach">
            Let's Connect
          </Link>
          <div className="myCv">
            <div className="rtext">My Resume</div>
            <div className="okay">
              <a
                href="https://drive.google.com/file/d/1IvOGJ4-Lm-G2Xtc1xu92HRjE8y2YnIdn/view?usp=sharing"
                target="__blank"
              >
                CLICK HERE TO VIEW PDF
              </a>
            </div>
          </div>
        </div>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
}

export default About;
