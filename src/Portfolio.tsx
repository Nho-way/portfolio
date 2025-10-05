import React from 'react'
import { StarfieldCanvas } from './components/StarfieldCanvas'
import { timelineData } from './data/timelineData'

function Portfolio() {
  return (
    <div className="container">
        <StarfieldCanvas />
        <div className="header">
            <div className="intro">
                <h1>Nicholas Ho</h1>
                <p id="location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                </svg>
                  Dallas, TX
                </p>
                <p>I like learning new things and solving complex problems</p>   
            </div>
            <img src="/profile-wide.jpeg" alt="Nicholas Ho" />
        </div>
        <div className="timeline">
            <h2>Timeline</h2>
            <div className="timeline-container">
                <div className="timeline-line"></div>
                {timelineData.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-marker"></div>
                        <div className="content">
                            <h3>
                                {item.title}
                                {item.icon}
                            </h3>
                            <div className="date">{item.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="projects">
                <h2>Projects</h2>
                <div className="projects-container">
                    <div className="project-item">
                        <h3>Leetcode Gym</h3>
                        <p>An AI powered coding environment to get you up to speed with AI wrappers, Leetcode, and Full Stack Development</p>
                    </div>
                    <div className="project-item">
                        <h3>Qinglish</h3>
                        <p>Learn Chinese: Exposure and Interaction</p>
                    </div>
                    <div className="project-item">
                        <h3>Mechanistic Interpretability</h3>
                        <p>Neuron Surgery</p>
                    </div>
                </div>
        </div>
        <div className="footer"></div>
        <div className="bottom-overlay">
            <button className="icon-btn" onClick={() => window.open('https://linkedin.com', '_blank')} aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            </button>

            <button className="icon-btn" onClick={() => window.location.href='mailto:your@email.com'} aria-label="Email">
                <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            </button>

            <button className="icon-btn" onClick={() => window.open('https://github.com', '_blank')} aria-label="GitHub">
                <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Portfolio
