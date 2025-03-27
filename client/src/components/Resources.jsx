import React from 'react'

const Resources = () => {
  return (
    <div className='container-fluid text-center'>
    <h2>Study Resources</h2>

    <p>Access a variety of study resources to enhance your understanding of physics concepts and excel in your academic pursuits.</p>
   
<div className="sorting-section">
    <h4>Sort By:</h4>
    <div className="form-group">
        <label htmlFor="standard-select">Standard:</label>
        <select id="standard-select" className="form-control">
            <option value="all">All</option>
            <option value="9">9th Standard</option>
            <option value="10">10th Standard</option>
            <option value="11">11th Standard</option>
            <option value="12">12th Standard</option>
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="subject-select">Subject:</label>
        <select id="subject-select" className="form-control">
            <option value="all">All</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <option value="maths">Mathematics</option>
        </select>
    </div>
</div>

    <table className="table table-bordered">
      <thead>
        <tr>
        <th>Chapter No:</th>
        <th>Chapter Name</th>
        <th>Download Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>01</td>
        <td>An introduction to fundamental physics concepts.</td>
        <td><a href="https://example.com/physics-basics" target="_blank" rel="noopener noreferrer">Visit</a></td>
        </tr>
        <tr>
        <td>02</td>
        <td>Detailed explanations of advanced mechanics topics.</td>
        <td><a href="https://example.com/advanced-mechanics" target="_blank" rel="noopener noreferrer">Visit</a></td>
        </tr>
        <tr>
        <td>03</td>
        <td>Resources to understand quantum physics principles.</td>
        <td><a href="https://example.com/quantum-physics" target="_blank" rel="noopener noreferrer">Visit</a></td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Resources
