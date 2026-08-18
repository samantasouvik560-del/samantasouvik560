import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
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

          <div className="hero-buttons">

            <Link to="/text-tools" className="hero-btn primary">
              Explore Tools →
            </Link>

            <Link to="/form" className="hero-btn secondary">
              Create Form
            </Link>

          </div>

        </div>

      </section>


      {/* Quick Actions */}
      <section className="dashboard-section">

        <div className="section-heading">
          <h2>⚡ Quick Actions</h2>

          <p>
            Quickly access the things you use most.
          </p>
        </div>


        <div className="quick-grid">

          <Link to="/text-tools" className="dashboard-card">

            <div className="card-icon blue">
              📝
            </div>

            <h3>Text Editor</h3>

            <p>
              Write, edit and format your text easily.
            </p>

            <span>
              Open Tool →
            </span>

          </Link>


          <Link to="/word-counter" className="dashboard-card">

            <div className="card-icon purple">
              🔢
            </div>

            <h3>Word Counter</h3>

            <p>
              Count words, characters and sentences.
            </p>

            <span>
              Open Tool →
            </span>

          </Link>


          <Link to="/form" className="dashboard-card">

            <div className="card-icon pink">
              📋
            </div>

            <h3>Create Form</h3>

            <p>
              Fill out and submit your personal form.
            </p>

            <span>
              Open Form →
            </span>

          </Link>


          <div className="dashboard-card">

            <div className="card-icon orange">
              🗒️
            </div>

            <h3>Quick Notes</h3>

            <p>
              Quickly save your important thoughts.
            </p>

            <span>
              Coming Soon →
            </span>

          </div>

        </div>

      </section>


      {/* Dashboard */}
      <section className="dashboard-section">

        <div className="section-heading">
          <h2>📊 Today's Activity</h2>

          <p>
            A quick look at your productivity.
          </p>
        </div>


        <div className="activity-grid">

          <div className="activity-card">

            <div className="activity-icon">
              📝
            </div>

            <div>
              <h3>3</h3>
              <p>Notes Created</p>
            </div>

          </div>


          <div className="activity-card">

            <div className="activity-icon">
              🔤
            </div>

            <div>
              <h3>427</h3>
              <p>Words Written</p>
            </div>

          </div>


          <div className="activity-card">

            <div className="activity-icon">
              🛠️
            </div>

            <div>
              <h3>5</h3>
              <p>Tools Used</p>
            </div>

          </div>


          <div className="activity-card">

            <div className="activity-icon">
              ⏱️
            </div>

            <div>
              <h3>2h 15m</h3>
              <p>Study Time</p>
            </div>

          </div>

        </div>

      </section>


      {/* Learning Progress */}
      <section className="dashboard-section">

        <div className="section-heading">
          <h2>📚 Continue Learning</h2>

          <p>
            Keep track of your learning progress.
          </p>
        </div>


        <div className="learning-card">

          <div className="learning-item">

            <div className="learning-info">

              <div>
                <h3>React</h3>
                <p>React Router & Components</p>
              </div>

              <strong>80%</strong>

            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>

          </div>


          <div className="learning-item">

            <div className="learning-info">

              <div>
                <h3>JavaScript</h3>
                <p>Async JS & API Calls</p>
              </div>

              <strong>100%</strong>

            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "100%" }}
              ></div>
            </div>

          </div>


          <div className="learning-item">

            <div className="learning-info">

              <div>
                <h3>C++</h3>
                <p>OOP & Classes</p>
              </div>

              <strong>45%</strong>

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


      {/* Bottom CTA */}
      <section className="home-cta">

        <div>

          <h2>
            Ready to get productive? 🚀
          </h2>

          <p>
            Explore your tools and keep building your skills.
          </p>

        </div>

        <Link to="/text-tools">
          Start Exploring →
        </Link>

      </section>

    </div>
  );
}