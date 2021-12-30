import React from "react";
import Seo from "../components/Seo";

const contact = () => {
  return (
    <>
      <Seo title="Contact" />

      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form action="https://formspree.io/f/xjvlkwar" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Send
            </button>
          </form>
        </article>
      </section>
    </>
  );
};

export default contact;
