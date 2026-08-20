import { useState } from "react";
import "./ContinueLearning.css";

export default function ContinueLearning() {
  const [activeTech, setActiveTech] = useState("React");

  const technologies = [
    {
      name: "React",
      icon: "⚛️",
      progress: 65,
      lessons: "51 / 78",
      status: "CURRENT FOCUS",
    },
    {
      name: "C++",
      icon: "⚙️",
      progress: 25,
      lessons: "8 / 32",
      status: "LEARNING",
    },
    {
      name: "Node.js",
      icon: "🟢",
      progress: 10,
      lessons: "3 / 30",
      status: "NEXT",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      progress: 5,
      lessons: "1 / 20",
      status: "LOCKED",
    },
  ];

  const skills = [
    { name: "HTML", done: true },
    { name: "CSS", done: true },
    { name: "JavaScript", done: true },
    { name: "React", active: true },
    { name: "C++" },
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "React Native" },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "First Website",
      text: "Built your first website",
      unlocked: true,
    },
    {
      icon: "⚡",
      title: "JavaScript Complete",
      text: "Finished JavaScript journey",
      unlocked: true,
    },
    {
      icon: "⚛️",
      title: "React Explorer",
      text: "65% React completed",
      unlocked: true,
    },
    {
      icon: "💻",
      title: "C++ Starter",
      text: "Started C++ journey",
      unlocked: true,
    },
    {
      icon: "🔒",
      title: "Backend Builder",
      text: "Complete Node.js",
      unlocked: false,
    },
    {
      icon: "🔒",
      title: "Full Stack",
      text: "Master frontend + backend",
      unlocked: false,
    },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <div className="learning-page">

      {/* BACKGROUND */}
      <div className="learning-grid-bg"></div>
      <div className="learning-glow glow-1"></div>
      <div className="learning-glow glow-2"></div>

      {/* HERO */}

      <section className="learning-hero">

        <div className="hero-small-text">
          ✦ PERSONAL LEARNING OS
        </div>

        <h1>
          KEEP LEARNING.
          <br />
          <span>KEEP BUILDING.</span>
        </h1>

        <p>
          Every line of code is another step toward becoming
          a better developer.
        </p>

        <div className="hero-meta">

          <div>
            <strong>🔥 07</strong>
            <span>DAY STREAK</span>
          </div>

          <div>
            <strong>1,840</strong>
            <span>XP EARNED</span>
          </div>

          <div>
            <strong>12</strong>
            <span>PROJECTS</span>
          </div>

        </div>

      </section>


      {/* CURRENT FOCUS */}

      <section className="focus-section">

        <div className="section-label">
          01 — CURRENT FOCUS
        </div>

        <div className="focus-layout">

          <div
            className="main-learning-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            <div className="card-glow"></div>

            <div className="focus-top">

              <span className="focus-icon">
                ⚛️
              </span>

              <span className="active-status">
                ● ACTIVE
              </span>

            </div>

            <div className="focus-content">

              <span>CURRENTLY LEARNING</span>

              <h2>React</h2>

              <p>
                Building modern interfaces and turning
                ideas into real applications.
              </p>

            </div>

            <div className="progress-area">

              <div className="progress-info">
                <span>Progress</span>
                <strong>65%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "65%" }}
                ></div>
              </div>

              <div className="lesson-info">
                51 / 78 lessons completed
              </div>

            </div>

            <button className="continue-btn">
              Continue Learning →
            </button>

          </div>


          <div className="tech-list">

            {technologies.map((tech) => (

              <div
                key={tech.name}
                className={`tech-card ${
                  activeTech === tech.name ? "selected" : ""
                }`}
                onClick={() => setActiveTech(tech.name)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >

                <div className="tech-icon">
                  {tech.icon}
                </div>

                <div className="tech-info">

                  <div className="tech-name">
                    {tech.name}
                  </div>

                  <div className="mini-progress">
                    <span
                      style={{
                        width: `${tech.progress}%`,
                      }}
                    ></span>
                  </div>

                </div>

                <div className="tech-percent">
                  {tech.progress}%
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* LEARNING UNIVERSE */}

      <section className="universe-section">

        <div className="section-label">
          02 — LEARNING UNIVERSE
        </div>

        <h2>
          Everything is
          <span> connected.</span>
        </h2>

        <p className="section-subtitle">
          Skills grow faster when you understand how
          everything fits together.
        </p>

        <div className="universe">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="universe-center">
            <span>🧠</span>
            <strong>YOU</strong>
            <small>LEARNING</small>
          </div>

          <div className="universe-node node-react">
            ⚛️
            <span>React</span>
          </div>

          <div className="universe-node node-cpp">
            ⚙️
            <span>C++</span>
          </div>

          <div className="universe-node node-node">
            🟢
            <span>Node.js</span>
          </div>

          <div className="universe-node node-db">
            🍃
            <span>MongoDB</span>
          </div>

          <div className="universe-node node-native">
            📱
            <span>React Native</span>
          </div>

        </div>

      </section>


      {/* XP */}

      <section className="xp-section">

        <div className="section-label">
          03 — YOUR PROGRESS
        </div>

        <div className="xp-card">

          <div className="level-info">
            <span>LEVEL</span>
            <strong>08</strong>
          </div>

          <div className="xp-middle">

            <div className="xp-header">
              <span>1,840 XP</span>
              <span>2,500 XP</span>
            </div>

            <div className="xp-bar">
              <div></div>
            </div>

            <small>
              660 XP until Level 09
            </small>

          </div>

          <div className="xp-symbol">
            ⚡
          </div>

        </div>

      </section>


      {/* ROADMAP */}

      <section className="roadmap-section">

        <div className="section-label">
          04 — ROADMAP
        </div>

        <h2>
          The path
          <span> ahead.</span>
        </h2>

        <div className="roadmap">

          {skills.map((skill, index) => (

            <div
              className={`roadmap-item ${
                skill.done
                  ? "completed"
                  : skill.active
                  ? "current"
                  : ""
              }`}
              key={skill.name}
            >

              <div className="roadmap-dot">
                {skill.done ? "✓" : index + 1}
              </div>

              <div>
                <strong>{skill.name}</strong>

                <span>
                  {skill.done
                    ? "COMPLETED"
                    : skill.active
                    ? "YOU ARE HERE"
                    : "UP NEXT"}
                </span>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ACHIEVEMENTS */}

      <section className="achievement-section">

        <div className="section-label">
          05 — ACHIEVEMENTS
        </div>

        <h2>
          Unlock your
          <span> potential.</span>
        </h2>

        <div className="achievement-grid">

          {achievements.map((achievement) => (

            <div
              className={`achievement-card ${
                !achievement.unlocked ? "locked" : ""
              }`}
              key={achievement.title}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >

              <div className="achievement-icon">
                {achievement.icon}
              </div>

              <div>
                <h3>{achievement.title}</h3>
                <p>{achievement.text}</p>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ANALYTICS */}

      <section className="analytics-section">

        <div className="section-label">
          06 — LEARNING ANALYTICS
        </div>

        <div className="analytics-layout">

          <div className="analytics-text">

            <h2>
              Consistency
              <span> compounds.</span>
            </h2>

            <p>
              Small progress every day becomes something
              much bigger over time.
            </p>

          </div>

          <div className="weekly-chart">

            <div className="chart-title">
              THIS WEEK
            </div>

            <div className="bars">

              {[55, 75, 45, 90, 60, 80, 100].map(
                (height, index) => (

                  <div className="bar-column" key={index}>

                    <div
                      className="bar"
                      style={{
                        height: `${height}%`,
                      }}
                    ></div>

                    <span>
                      {
                        ["M", "T", "W", "T", "F", "S", "S"][
                          index
                        ]
                      }
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* MOTIVATION */}

      <section className="motivation-section">

        <div className="quote-symbol">
          “
        </div>

        <h2>
          I don't need to know
          <span> everything.</span>
        </h2>

        <p>
          I just need to keep learning,
          keep building, and keep moving forward.
        </p>

        <div className="quote-line"></div>

        <strong>
          — SOUVIK
        </strong>

      </section>


      {/* FINAL */}

      <section className="learning-final">

        <div className="final-orb">
          S
        </div>

        <span>
          THE JOURNEY CONTINUES
        </span>

        <h2>
          Learn.
          <span> Build.</span>
          <br />
          Become better.
        </h2>

        <p>
          This is only version one.
          There is still a lot more to learn.
        </p>

      </section>

    </div>
  );
}