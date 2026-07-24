import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

import heroImg from "../assets/hero.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const leftRef = useRef(null);
  const imgRef = useRef(null);

  // GSAP ANIMATION
  useEffect(() => { 
    const ctx = gsap.context(() => {

      gsap.from(".left > *", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".social-icons > *", {
        x: -100,
        opacity: 0,

        duration: 2.5,
        ease: "power4.out",
      });
      gsap.from(".right > *", {

        opacity: 0,

        duration: 2,
        scale: 0.5,
        ease: "power4.out",
      });
      gsap.from(imgRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero">

      <div className="social-icons">
        <div>
          <a href="https://github.com/ridhamguptaprogramming-ops">
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ridham-gupta-09056a386/">
            <FaLinkedin />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/i.ridhamgupta/">
           <FaInstagram />
          </a>
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <img
        ref={imgRef}
        src={heroImg}
        alt="Hero background"
        className="hero-video"
      />

      {/* HERO CONTENT */}
      <div className="hero-content">

        <div className="left" ref={leftRef}>
 
          <p className="intro">Hi, I'm</p>

          <h1>
            Ridham Gupta
            <span>Full Stack Developer</span>
          </h1>

          <p>
            I build modern web experiences using React, GSAP,
            Three.js and creative animations that make users stop scrolling.
          </p>

          <div className="buttons">
            <button className="primary">View My Work</button>
            <button className="secondary">Contact Me</button>

            <a href="/resume.pdf" download>
              <button className="resume">Download Resume</button>
            </a>
          </div>

        </div>

        <div className="right">
          {/* Placeholder for potential future content */}
        </div>

      </div>

      <div className="scroll">Scroll ↓</div>

    </section>
  );
}
