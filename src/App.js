import React from 'react';
import './App.css';
import ProfileImage from './logos/profile2.jpg'; // Ensure you have this image in your src folder
import AmazonLogo from './logos/amazon_logo.png'; // Ensure the logo is in the src/logos folder
import MicrosoftLogo from './logos/microsoft_logo.png'; // Ensure the logo is in the src/logos folder
import UWLogo from './logos/uw_logo.jpg';

function App() {
  return (
    <div className="App">
      <aside className="sidebar">
        <div className="profile">
          <img src={ProfileImage} alt="Avi Veeramoothoo" />
          <h2>Avi Veeramoothoo</h2>
          <nav>
            <ul>
              <li>4th year UW</li>
              <li>CS, Stats, Physics</li>
              <li>(Excellent standing)</li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/avi-v/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Avi-Veeramoothoo" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:tveeramo@uwaterloo.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </aside>
      <main className="content">
        <div className="top-half">
        <div className="top-left">
            <h2>University of Waterloo</h2>
            <ul className="education-list">
              <li>BS Computer Science - 4th year</li>
              <li>Minors Physics and Statistics</li>
            </ul>
            <div className="education-logos">
              <img src={UWLogo} alt="UW Logo" className="uw-logo" />
            </div>
          </div>
          <div className="top-right">
            <h2>Work Experience</h2>
            <ul className="experience-list">
              <li>Amazon - Software engineer intern</li>
              <li>Microsoft - Software engineer intern</li>
            </ul>
            <div className="company-logos">
              <img src={AmazonLogo} alt="Amazon Logo" className="amazon-logo" />
              <img src={MicrosoftLogo} alt="Microsoft Logo" className="microsoft-logo" />
            </div>
          </div>
        </div>
        <div className="bottom-half">
          <div className="bottom-left">
            <h2>Quantum Physics Courses</h2>
            <ul className="bottom-left-list">
              <li>Quantum Machine Learning (PhD-level)</li>
              <li>Intro to Quantum Mechanics</li>
              <li>Intro to Quantum Implementation</li>
              <li>Intro to Quantum Information Processing</li>
            </ul>
            <a href="https://github.com/Avi-Veeramoothoo/Quantum-Algorithms" className="quantum-link">I implement Quantum Algorithms in this repo</a>
            <a href="https://github.com/Avi-Veeramoothoo/Quantum-Papers" className="quantum-link">List of Quantum research papers I read</a>
          </div>
          <div className="bottom-middle">
            <h2>AI/ML Courses</h2>
            <ul className="bottom-middle-list">
              <li>Machine Learning</li>
              <li>Neural Networks</li>
              <li>Probability and Statistics</li>
              <li>Computational Statistics and Data Analysis</li>
            </ul>
          </div>
          <div className="bottom-right">
            <h2>Math/CS Courses</h2>
            <ul className="bottom-right-list">
              <li>Calculus 1, 2, 3</li>
              <li>Linear Algebra 1, 2, 3</li>
              <li>Algorithms and Data Structures</li>
              <li>Compilers and Distributed Systems</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

