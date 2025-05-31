import React from 'react';
import '../styles/web.css';  

function Component3() {
  return (
    <div className="component3-container">
      {/* Home Section */}
      <section id="home" className="section">
        <h1>Welcome to Devin Tech</h1>
        <p>Your gateway to learning and technology.</p>
        <button className="get-start-btn">Get Started</button>
      </section>
      
      {/* Courses Section */}
      <section id="courses" className="section">
        <h2>Our Courses</h2>
        <p>Explore our wide range of courses.</p>

        {/* Course Pricing Cards */}
        <div className="course-list">
          <div className="course-card">
            <h3>Web Development</h3>
            <p>Learn the fundamentals of building websites.</p>
            <p className="price">$199</p>
            <button className="get-start-btn">Enroll Now</button>
          </div>
          <div className="course-card">
            <h3>Data Science</h3>
            <p>Master data analysis and machine learning techniques.</p>
            <p className="price">$299</p>
            <button className="get-start-btn">Enroll Now</button>
          </div>
          <div className="course-card">
            <h3>Mobile Development</h3>
            <p>Build mobile apps for Android and iOS.</p>
            <p className="price">$249</p>
            <button className="get-start-btn">Enroll Now</button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>Learn more about Devin Tech and our mission.</p>
        <button className="get-start-btn">Learn More</button>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section">
        <h2>Our Blog</h2>
        <p>Read articles and stay updated.</p>
        <button className="get-start-btn">Read Blog</button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Get in touch with our team.</p>
        <button className="join-btn">Join Now</button>
      </section>
    </div>
  );
}

export default Component3;
