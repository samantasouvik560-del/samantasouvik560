import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-badge">
            🚀 Welcome to Souvik Hub
          </span>

          <h1>
            Your Personal
            <span> Productivity Hub</span>
          </h1>

          <p>
            Manage your notes, tools, learning progress and daily
            activities from one simple dashboard.
          </p>

          {/* ONLY CREATE FORM BUTTON */}

          <div className="hero-buttons">

            <Link
              to="/form"
              className="hero-btn secondary"
            >
              Create Form
            </Link>

          </div>

        </div>

      </section>


      {/* ================= QUICK ACTIONS ================= */}

      <section className="dashboard-section">

        <div className="section-heading">

          <h2>
            ⚡ Quick Actions
          </h2>

          <p>
            Quickly access the things you use most.
          </p>

        </div>


        <div className="quick-grid">

          {/* TEXT EDITOR */}

          <Link
            to="/text-editor"
            className="dashboard-card"
          >

            <div className="card-icon blue">
              📝
            </div>

            <h3>
              Text Editor
            </h3>

            <p>
              Write, edit and format your text easily.
            </p>

            <span>
              Open Tool →
            </span>

          </Link>


          {/* WORD COUNTER */}

          <Link
            to="/word-counter"
            className="dashboard-card"
          >

            <div className="card-icon purple">
              🔢
            </div>

            <h3>
              Word Counter
            </h3>

            <p>
              Count words, characters and sentences.
            </p>

            <span>
              Open Tool →
            </span>

          </Link>


          {/* FORM */}

          <Link
            to="/form"
            className="dashboard-card"
          >

            <div className="card-icon pink">
              📋
            </div>

            <h3>
              Create Form
            </h3>

            <p>
              Fill out and submit your personal form.
            </p>

            <span>
              Open Form →
            </span>

          </Link>

        </div>

      </section>


      {/* ================= TODAY'S ACTIVITY ================= */}

      <section className="dashboard-section">

        <div className="section-heading">

          <h2>
            📊 Today's Activity
          </h2>

          <p>
            A quick look at your productivity and learning.
          </p>

        </div>


        <div className="activity-grid">

          {/* NOTES */}

          <div className="activity-card">

            <div className="activity-icon">
              📝
            </div>

            <div>

              <h3>
                3
              </h3>

              <p>
                Notes Created
              </p>

            </div>

          </div>


          {/* WORDS */}

          <div className="activity-card">

            <div className="activity-icon">
              🔤
            </div>

            <div>

              <h3>
                427
              </h3>

              <p>
                Words Written
              </p>

            </div>

          </div>


          {/* TOOLS */}

          <div className="activity-card">

            <div className="activity-icon">
              🛠️
            </div>

            <div>

              <h3>
                5
              </h3>

              <p>
                Tools Used
              </p>

            </div>

          </div>


          {/* STUDY */}

          <div className="activity-card">

            <div className="activity-icon">
              ⏱️
            </div>

            <div>

              <h3>
                2h 15m
              </h3>

              <p>
                Study Time
              </p>

            </div>

          </div>

        </div>


        {/* ================= CONTINUE LEARNING ================= */}

        <Link
          to="/continue-learning"
          className="continue-learning-home"
        >

          <div className="continue-learning-left">

            <div className="continue-learning-icon">
              🚀
            </div>

            <div>

              <span className="learning-small-label">
                KEEP MOVING FORWARD
              </span>

              <h2>
                Continue Learning
              </h2>

              <p>
                Pick up where you left off and keep building
                your skills.
              </p>

            </div>

          </div>


          <div className="continue-learning-right">

            <div className="learning-progress-info">

              <span>
                Today's Progress
              </span>

              <strong>
                65%
              </strong>

            </div>


            <div className="progress-bar learning-main-progress">

              <div
                className="progress-fill"
                style={{ width: "65%" }}
              ></div>

            </div>


            <span className="learning-open">
              Continue Learning →
            </span>

          </div>

        </Link>

      </section>


      {/* ================= LEARNING OVERVIEW ================= */}

      <section className="dashboard-section">

        <div className="section-heading">

          <h2>
            📚 Learning Progress
          </h2>

          <p>
            Your current learning journey.
          </p>

        </div>


        <div className="learning-card">

          {/* REACT */}

          <div className="learning-item">

            <div className="learning-info">

              <div>

                <h3>
                  React
                </h3>

                <p>
                  React Router & Components
                </p>

              </div>

              <strong>
                80%
              </strong>

            </div>


            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{ width: "80%" }}
              ></div>

            </div>

          </div>


          {/* JAVASCRIPT */}

          <div className="learning-item">

            <div className="learning-info">

              <div>

                <h3>
                  JavaScript
                </h3>

                <p>
                  Async JS & API Calls
                </p>

              </div>

              <strong>
                100%
              </strong>

            </div>


            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{ width: "100%" }}
              ></div>

            </div>

          </div>


          {/* C++ */}

          <div className="learning-item">

            <div className="learning-info">

              <div>

                <h3>
                  C++
                </h3>

                <p>
                  OOP & Classes
                </p>

              </div>

              <strong>
                45%
              </strong>

            </div>


            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{ width: "45%" }}
              ></div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}

      <section className="home-cta">

        <div>

          <h2>
            Ready to get productive? 🚀
          </h2>

          <p>
            Explore your tools, continue learning and keep
            building your future.
          </p>

        </div>


        <Link to="/continue-learning">
          Continue Learning →
        </Link>

      </section>


    </div>
  );
}