import { useEffect, useState, useRef } from "react";
import TagCloud from "TagCloud";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Skill.scss";
import { Outlet } from "react-router-dom";

function Skill() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const contentRef = useRef(null);

  useEffect(() => {
    const myTags = [
      "JavaScript",
      "CSS",
      "HTML",
      "Tailwind CSS",
      "Figma",
      "C",
      "C++",
      "Go",
      "React.js",
      "Next.js",
      "Python",
      "Git",
      "GitHub",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Supabase",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
      "Rest API",
      "Redis",
      "TanStack Query",
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "Generative AI",
    ];

    const tagCloud = TagCloud(".content", myTags, {
      radius: 350,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });

    let currentScale = 1;
    let ticking = false;

    const updateTransform = () => {
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(-50%) scale(${currentScale})`;
      }
      ticking = false;
    };

    const handleWheel = (e) => {
      e.preventDefault();

      const zoomSpeed = 0.0015;
      currentScale += e.deltaY * -zoomSpeed;

      currentScale = Math.min(Math.max(0.4, currentScale), 3);

      if (!ticking) {
        window.requestAnimationFrame(updateTransform);
        ticking = true;
      }
    };

    const sphereContainer = contentRef.current;
    if (sphereContainer) {
      sphereContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timer);
      if (tagCloud && typeof tagCloud.destroy === "function") {
        tagCloud.destroy();
      }
      if (sphereContainer) {
        sphereContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <>
      <div className="container skill-page">
        <span className="tags top-html">&lt;/html&gt;</span>
        <span className="tags top-tags">&lt;body&gt;</span>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s", " ", "&"]}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
              idx={22}
            />
          </h1>
          <p className="skills-intro">
            I build scalable full-stack applications and data-driven systems
            using modern web, database, and cloud technologies.
          </p>

          <div className="stack-grid">
            <div className="stack-group">
              <span>Languages</span>
              <p>C, C++, Python, Go</p>
            </div>
            <div className="stack-group">
              <span>Frontend</span>
              <p>HTML, Tailwind CSS, JavaScript, React.js, Next.js, TypeScript</p>
            </div>
            <div className="stack-group">
              <span>Backend</span>
              <p>Node.js, Express.js, REST APIs</p>
            </div>
            <div className="stack-group">
              <span>Databases</span>
              <p>PostgreSQL, MySQL, MongoDB, Redis</p>
            </div>
            <div className="stack-group">
              <span>Cloud & DevOps</span>
              <p>Docker, AWS, GitHub Actions, CI/CD</p>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-title">EXPERIENCE</div>
            <div className="experience-list">
              <div className="experience-item">
                <span className="experience-date">2023–2025</span>
                <strong>Personal & Freelance Projects</strong>
              </div>
              <div className="experience-item">
                <span className="experience-date">Jan–Mar 2026</span>
                <strong>Software Engineer Intern</strong>
                <span>CyberSRC</span>
              </div>
              <div className="experience-item current">
                <span className="experience-date">Apr 2026–Present</span>
                <strong>Full-Stack Developer Intern</strong>
                <span>Zversal Pvt Ltd</span>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
        <div ref={contentRef} className="content"></div>
        <div className="scroll-hint">Scroll here to zoom in and zoom out</div>
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </>
  );
}

export default Skill;
