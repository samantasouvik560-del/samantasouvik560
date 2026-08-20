import { useRef } from "react";
export default function About() {
  function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -8;

    const rotateY =
      ((x - centerX) / centerX) * 8;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    card.style.setProperty(
      "--mouse-x",
      `${percentX}%`
    );

    card.style.setProperty(
      "--mouse-y",
      `${percentY}%`
    );

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(20px)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0)
    `;

    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "C", icon: "💻" },
    { name: "C++", icon: "⚙️" },
    { name: "Git & GitHub", icon: "🔧" },
  ];

  const learning = [
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
  ];

  return (
    <div className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="about-hero-content">

          <div className="about-badge">
            <span className="badge-dot"></span>
            MY DIGITAL SPACE
          </div>

          <h1>
            I Learn.
            <br />
            I Build.
            <br />
            <span>I Improve.</span>
          </h1>

          <p>
            Welcome to Souvik Hub — a personal workspace where
            learning becomes projects, ideas become reality,
            and every line of code is a step forward.
          </p>

          <div className="hero-buttons">

            <a href="#skills" className="primary-btn">
              Explore My Skills →
            </a>

            <a href="#vision" className="secondary-btn">
              My Vision
            </a>

          </div>

        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="about-stats">

        <div className="stat-card">
          <strong>07</strong>
          <span>Core Skills</span>
        </div>

        <div className="stat-card">
          <strong>05</strong>
          <span>Technologies Exploring</span>
        </div>

        <div className="stat-card">
          <strong>∞</strong>
          <span>Ideas to Build</span>
        </div>

        <div className="stat-card">
          <strong>01</strong>
          <span>Journey</span>
        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about-introduction">

        <div className="about-label">
          01 — ABOUT
        </div>

        <div className="about-intro-content">

          <h2>
            More than a project.
            <span> A journey.</span>
          </h2>

          <p>
            Souvik Hub started as a simple React project, but it is
            becoming something much bigger — a place where I can
            experiment, learn new technologies and build useful
            things from scratch.
          </p>

          <p>
            I believe the best way to learn programming is not
            simply watching tutorials. It's writing code, breaking
            things, fixing them, and understanding why they work.
          </p>

        </div>

      </section>


      {/* ================= WHAT I DO ================= */}

      <section className="what-i-do">

        <div className="about-label">
          02 — WHAT I DO
        </div>

        <h2>
          I don't just learn technology.
          <br />
          <span>I build with it.</span>
        </h2>

        <div className="do-grid">

          <div className="do-card">
            <div className="do-icon">💻</div>

            <h3>Development</h3>

            <p>
              Building modern web applications and learning
              how real-world software works.
            </p>
          </div>


          <div className="do-card">
            <div className="do-icon">🎨</div>

            <h3>UI & UX</h3>

            <p>
              Creating clean, useful and visually engaging
              interfaces that people enjoy using.
            </p>
          </div>


          <div className="do-card">
            <div className="do-icon">🧠</div>

            <h3>Problem Solving</h3>

            <p>
              Breaking difficult problems into smaller pieces
              and finding practical solutions.
            </p>
          </div>


          <div className="do-card">
            <div className="do-icon">🚀</div>

            <h3>Building Projects</h3>

            <p>
              Turning ideas into working projects instead of
              keeping them only as ideas.
            </p>
          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section className="skills-section" id="skills">

        <div className="about-label">
          03 — MY SKILLS
        </div>

        <div className="skills-heading">

          <h2>
            Tools I use to
            <span> create.</span>
          </h2>

          <p>
            Technologies I've worked with while building
            projects and improving my development skills.
          </p>

        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div
              className="skill-card"
              key={skill.name}
            >

              <div className="skill-top">

                <span className="skill-icon">
                  {skill.icon}
                </span>

                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              <h3>
                {skill.name}
              </h3>

              <div className="skill-line">
                <span></span>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= LEARNING ================= */}

      <section className="learning-section">

        <div className="about-label">
          04 — CURRENTLY LEARNING
        </div>

        <h2>
          Still learning.
          <span> Always growing.</span>
        </h2>

        <p className="learning-description">
          The technologies I'm currently exploring and adding
          to my development journey.
        </p>

        <div className="learning-list">

          {learning.map((item, index) => (

            <div
              className="learning-item"
              key={item}
            >

              <span className="learning-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {item}
              </h3>

              <span className="learning-arrow">
                ↗
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* ================= MINDSET ================= */}

      <section className="mindset-section">

        <div className="mindset-content">

          <div className="quote-mark">
            “
          </div>

          <h2>
            I don't need to know
            <span> everything.</span>
          </h2>

          <p>
            I just need to keep learning, keep building,
            and keep moving forward.
          </p>

          <div className="quote-line"></div>

          <span className="quote-author">
            — SOUVIK
          </span>

        </div>

      </section>


      {/* ================= VISION ================= */}

      <section
        className="vision-section"
        id="vision"
      >

        <div className="vision-number">
          05
        </div>

        <div className="vision-content">

          <div className="about-label">
            MY VISION
          </div>

          <h2>
            Start small.
            <br />

            <span>Think big.</span>

            <br />

            Keep going.
          </h2>

          <p>
            Every project I build is another step toward becoming
            a better developer. Souvik Hub is just the beginning.
          </p>

        </div>

      </section>


      {/* ================= MOTIVATION ================= */}

      <section className="motivation-section">

        <div className="motivation-content">

          <span className="motivation-label">
            MY RULE
          </span>

          <h2>
            Don't compare your
            <span> Chapter 1</span>
            <br />
            with someone's
            <span> Chapter 20.</span>
          </h2>

          <p>
            Focus on your own progress.
            Learn at your own pace.
            Build something every day.
          </p>

          <div className="motivation-points">

            <span>KEEP BUILDING.</span>

            <span>KEEP LEARNING.</span>

            <span>KEEP IMPROVING.</span>

            <span>NEVER STOP.</span>

          </div>

        </div>

      </section>


      {/* ================= FINAL ================= */}

      <section className="about-final">

        <div className="final-circle">
          S
        </div>

        <h2>
          This is only
          <span> version one.</span>
        </h2>

        <p>
          There is a lot more to learn.
          A lot more to build.
          And a lot more to come.
        </p>

        <strong>
          Thanks for visiting Souvik Hub.
        </strong>

        {/* FINAL MOTIVATIONAL LINE */}

        <div className="final-motivation">

          <span>
            START
          </span>

          <span>→</span>

          <span>
            BUILD
          </span>

          <span>→</span>

          <span>
            FAIL
          </span>

          <span>→</span>

          <span>
            LEARN
          </span>

          <span>→</span>

          <span>
            REPEAT
          </span>

        </div>

      </section>

    </div>
  );
}