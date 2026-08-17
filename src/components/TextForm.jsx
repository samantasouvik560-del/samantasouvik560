import React, { useState } from 'react';

export default function Textform() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    priority: 'Normal',
    terms: false
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!formData.terms) {
      alert('Please accept the terms and conditions.');
      return;
    }

    alert(`Thank you ${formData.name}! Your form has been submitted.`);

    console.log(formData);
  };

  const handleClear = () => {

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      priority: 'Normal',
      terms: false
    });
  };

  return (

    <div className="form-page">

      <div className="form-container">

        <div className="form-header">

          <div className="form-icon">
            📝
          </div>

          <h1>Let's Connect</h1>

          <p>
            Fill in your details and send us a message.
          </p>

        </div>


        <form onSubmit={handleSubmit}>

          {/* Name + Email */}

          <div className="form-row">

            <div className="form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />

            </div>

          </div>


          {/* Phone + Subject */}

          <div className="form-row">

            <div className="form-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />

            </div>


            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
              />

            </div>

          </div>


          {/* Priority */}

          <div className="form-group">

            <label htmlFor="priority">
              Priority
            </label>

            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >

              <option value="Low">
                Low
              </option>

              <option value="Normal">
                Normal
              </option>

              <option value="High">
                High
              </option>

              <option value="Urgent">
                Urgent
              </option>

            </select>

          </div>


          {/* Message */}

          <div className="form-group">

            <div className="label-row">

              <label htmlFor="message">
                Your Message
              </label>

              <span>
                {formData.message.length}/500
              </span>

            </div>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you need..."
              maxLength="500"
              rows="6"
              required
            ></textarea>

          </div>


          {/* Terms */}

          <div className="terms">

            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />

            <label htmlFor="terms">
              I agree to the terms and conditions.
            </label>

          </div>


          {/* Buttons */}

          <div className="form-buttons">

            <button
              type="button"
              className="clear-btn"
              onClick={handleClear}
            >
              Clear
            </button>

            <button
              type="submit"
              className="submit-btn"
            >
              Send Message →
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}