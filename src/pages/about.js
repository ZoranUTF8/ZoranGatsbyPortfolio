import React from "react";
import Title from "../components/Title";
import Seo from "../components/Seo";
import heroImg from "../assets/images/hero.svg";

const About = () => {
  return (
    <>
      <Seo title="About" />

      <section className="about-page">
        <div className="section-center about-center">
          <img src={heroImg} alt="hero img" className="about-img-svg" />
          <article className="about-text">
            <h3>About me</h3>
            <p>
              Hello, my name is Zoran. I'm looking for a job or internship
              opportunity. I have been using the following technologies: Java,
              JavaScript,React.js,Gatsby.js, and Node.js. I studied Java
              development at ITAcademy in Belgrade(Serbia). Here I had the
              opportunity to acquire the Java Developer Certificate. I received
              a couple of certificates for Full Stack Web Development on
              Udemy.com as well. Currently, I'm pursuing a bachelor's degree in
              computer science at the University of the people. I have a strong
              will to learn new technologies and I aspire to be a FullStack
              developer in the future.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
