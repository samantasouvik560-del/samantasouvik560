import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setSent(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="contact-orb orb-one"></div>
        <div className="contact-orb orb-two"></div>

        <div className="contact-hero-content">

          <div className="contact-badge">
            <span></span>
            LET'S CONNECT
          </div>

          <h1>
            Hey, I'm Souvik.
            <br />
            <span>Let's build something.</span>
          </h1>

          <p>
            Have an idea, project, question, or simply want to
            say hello? Every great project starts with a simple
            conversation.
          </p>

        </div>

      </section>


      {/* ================= CONTACT AREA ================= */}

      <section className="contact-section">

        {/* LEFT */}

        <div className="contact-info">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's start a
            <span> conversation.</span>
          </h2>

          <p>
            Good things usually start with a simple message.
            Tell me what's on your mind and let's see where
            the idea takes us.
          </p>


          {/* STATUS */}

          <div className="availability-card">

            <div className="availability-dot"></div>

            <div>
              <strong>Souvik Samanta</strong>

              <span>
                Developer • Learner • Builder
              </span>
            </div>

          </div>


          {/* SOCIAL LINKS */}

          <div className="contact-links">

            <a
              href="mailto:samantasouvik560@gmail.com"
              className="contact-link"
            >

              <div className="contact-link-icon">
                ✉
              </div>

              <div>
                <small>EMAIL</small>

                <strong>
                  samantasouvik560@gmail.com
                </strong>
              </div>

              <span>↗</span>

            </a>


            <a
              href="https://www.instagram.com/fzx_souvik/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >

              <div className="contact-link-icon">
                ◎
              </div>

              <div>
                <small>INSTAGRAM</small>

                <strong>
                  @fzx_souvik
                </strong>
              </div>

              <span>↗</span>

            </a>


            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >

              <div className="contact-link-icon">
                f
              </div>

              <div>
                <small>FACEBOOK</small>

                <strong>
                  Fzx Souvik
                </strong>
              </div>

              <span>↗</span>

            </a>

          </div>

        </div>


        {/* FORM */}

        <div className="contact-form-card">

          <div className="form-top">

            <div>
              <span>01</span>

              <h3>
                Send a message
              </h3>
            </div>

            <div className="form-symbol">
              ↗
            </div>

          </div>


          {sent && (
            <div className="success-message">
              ✓ Thanks! Your message has been received.
            </div>
          )}


          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <label>Your name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />

            </div>


            <div className="input-group">

              <label>Email address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />

            </div>


            <div className="input-group">

              <label>Your message</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me what's on your mind..."
                rows="6"
              ></textarea>

            </div>


            <button
              type="submit"
              className="send-message-btn"
            >
              <span>
                Send Message
              </span>

              <strong>
                →
              </strong>
            </button>

          </form>

        </div>

      </section>


      {/* ================= WHY CONTACT ================= */}

      <section className="why-contact">

        <div className="section-mini-label">
          02 — WHY REACH OUT?
        </div>

        <h2>
          Bring the idea.
          <span> Let's build it.</span>
        </h2>

        <div className="why-grid">

          <div className="why-card">

            <div className="why-number">
              01
            </div>

            <div className="why-icon">
              💡
            </div>

            <h3>
              Have an Idea?
            </h3>

            <p>
              Got an interesting idea? Let's turn it
              from a thought into something real.
            </p>

            <span className="card-arrow">
              →
            </span>

          </div>


          <div className="why-card">

            <div className="why-number">
              02
            </div>

            <div className="why-icon">
              🤝
            </div>

            <h3>
              Want to Collaborate?
            </h3>

            <p>
              Building something cool? Learning together
              makes the journey even better.
            </p>

            <span className="card-arrow">
              →
            </span>

          </div>


          <div className="why-card">

            <div className="why-number">
              03
            </div>

            <div className="why-icon">
              💬
            </div>

            <h3>
              Just Say Hello
            </h3>

            <p>
              You don't always need a reason.
              A simple conversation can start something great.
            </p>

            <span className="card-arrow">
              →
            </span>

          </div>

        </div>

      </section>


      {/* ================= DEVELOPER IDENTITY ================= */}

      <section className="developer-section">

        <div className="developer-card">

          <div className="developer-avatar">
            S
          </div>

          <div className="developer-info">

            <span>
              THE PERSON BEHIND SOUVIK HUB
            </span>

            <h2>
              Souvik Samanta
            </h2>

            <p>
              AIML Student • Developer • Builder
            </p>

          </div>

          <div className="developer-quote">

            "Currently learning,
            constantly building,
            never done improving."

          </div>

        </div>

      </section>


      {/* ================= MOTIVATION ================= */}

      <section className="contact-motivation">

        <div className="motivation-number">
          03
        </div>

        <span>
          ONE MESSAGE CAN START SOMETHING BIG.
        </span>

        <h2>
          Ideas are meant to be
          <br />
          <em>built.</em>
        </h2>

        <p>
          Keep learning. Keep creating. Keep moving forward.
        </p>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="final-contact">

        <span>
          LET'S BUILD SOMETHING
        </span>

        <h2>
          You bring the idea.
          <br />
          <em>I bring the curiosity.</em>
        </h2>

        <p>
          Together, we build the next thing.
        </p>

        <a
          href="mailto:samantasouvik560@gmail.com"
          className="final-contact-btn"
        >
          START A CONVERSATION
          <strong>→</strong>
        </a>

      </section>


      {/* ================= FOOTER ================= */}

      <section className="contact-footer">

        <p>
          Built with curiosity & code.
        </p>

        <strong>
          Souvik Hub © 2026
        </strong>

      </section>

    </div>
  );








}