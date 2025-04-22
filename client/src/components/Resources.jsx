import React from 'react';
import '../components/Resources.css'; 

const Resources = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mb-4">
        <div className="col-md-12 text-center mb-4 resources-section">
        <h2 className="resources-main-title">Study <span className='highlite1'>Resources</span> </h2>
        <p className="resources-main-subtitle">
          Access a variety of study resources to enhance your understanding of physics concepts and excel in your academic pursuits.
        </p>
      </div>

      <div className="sorting-section row justify-content-center mb-4">
        <h2 className='resources-title'>Download PDF</h2>
      <p className="text-center mb-3 resources-subtitle">Use the dropdowns below to filter resources by your class and subject.</p>
        <div className="col-md-3 mb-3">
          <label htmlFor="standard-select" className="form-label fw-semibold">Standard:</label>
          <select id="standard-select" className="form-select">
            <option value="all">All</option>
            <option value="9">9th Standard</option>
            <option value="10">10th Standard</option>
            <option value="11">11th Standard</option>
            <option value="12">12th Standard</option>
          </select>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="subject-select" className="form-label fw-semibold">Subject:</label>
          <select id="subject-select" className="form-select">
            <option value="all">All</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <option value="maths">Mathematics</option>
          </select>
        </div>
      </div>
      <div className="col-md-8 text-center mb-4">
      <div className="table-responsive px-md-5">
        <table className="table table-bordered table-hover table-striped rounded resource-table">
          <thead className="table-primary">
            <tr>
              <th>Chapter No.</th>
              <th>Chapter Name</th>
              <th>Download Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>An introduction to fundamental physics concepts.</td>
              <td>
                <a href="https://example.com/physics-basics" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">Visit</a>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Detailed explanations of advanced mechanics topics.</td>
              <td>
                <a href="https://example.com/advanced-mechanics" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">Visit</a>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Resources to understand quantum physics principles.</td>
              <td>
                <a href="https://example.com/quantum-physics" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">Visit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>

      <div className="row justify-content-center resources-row">
  <div className="col-lg-5 col-md-6 col-sm-12 mb-4 text-center resource-box">
    <h3 className="resources-title">Video Tutorials</h3>
    <p className="resources-subtitle">
      Explore our curated list of video tutorials to deepen your understanding the concepts.
    </p>
    <ul className="list-unstyled video-links">
      <li>
        <a href="https://www.youtube.com/watch?v=example1" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-danger">
          Watch: Introduction to Physics Concepts
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=example2" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-danger">
          Watch: Advanced Mechanics Explained
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=example3" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-danger">
          Watch: Quantum Physics Simplified
        </a>
      </li>
    </ul>
  </div>

  <div className="col-lg-5 col-md-6 col-sm-12 mb-4 text-center resource-box">
    <h3 className="resources-title">Instagram Shorts</h3>
    <p className="resources-subtitle">
      Check out our Instagram shorts for quick and engaging lessons.
    </p>
    <ul className="list-unstyled shorts-links">
      <li>
        <a href="https://www.instagram.com/reel/example1" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
          Watch: Physics Basics in 60 Seconds
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/reel/example2" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
          Watch: Mechanics Quick Overview
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/reel/example3" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
          Watch: Quantum Physics Highlights
        </a>
      </li>
    </ul>
  </div>
</div>


    </div>
    </div>
  );
};

export default Resources;
