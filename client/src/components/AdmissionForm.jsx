import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    dateOfAdmission: "",
    firstName: "",
    middleName: "",
    lastName: "",
    motherName: "",
    adharCardNumber: "",
    fatherOccupation: "",
    gender: "",
    category: [],
    dateOfBirth: "",
    email: "",
    permanentAddress: "",
    taluka: "",
    district: "",
    pincode: "",
    presentSchoolName: "",
    medium: [],
    previousClassMarks: "",
    outOfMarks: "",
    percentage: "",
    passportPhoto: "",
    outOfMarks: "",
    percentage: "",
    passportPhoto: ""

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedCategories = checked
        ? [...prevState.category, value]
        : prevState.category.filter((category) => category !== value);
      return { ...prevState, category: updatedCategories };
    });
  };

  const handleMediumChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedMediums = checked
        ? [...prevState.medium, value]
        : prevState.medium.filter((medium) => medium !== value);
      return { ...prevState, medium: updatedMediums };
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, passportPhoto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4">Student Admission Form</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Date of Admission</label>
          <input type="date" className="form-control" name="dateOfAdmission" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Date of Birth</label>
          <input type="date" className="form-control" name="dateOfBirth" onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" name="firstName" onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Middle Name</label>
          <input type="text" className="form-control" name="middleName" onChange={handleChange} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" name="lastName" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Mother's Name</label>
          <input type="text" className="form-control" name="motherName" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Student Aadhar Card Number</label>
          <input type="text" className="form-control" name="adharCardNumber" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Father's Occupation</label>
          <input type="text" className="form-control" name="fatherOccupation" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Gender</label>
          <div>
            {['Male', 'Female', 'Other'].map((genderOption) => (
              <div className="form-check form-check-inline" key={genderOption}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value={genderOption}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">{genderOption}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-12">
          <label className="form-label">Category</label>
          <div>
            {['SC', 'ST', 'OBC', 'Open', 'NT', 'VJ', 'Other'].map((cat) => (
              <div className="form-check form-check-inline" key={cat}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={cat}
                  onChange={handleCategoryChange}
                />
                <label className="form-check-label">{cat}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Email ID</label>
          <input type="email" className="form-control" name="email" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Permanent Address</label>
          <input type="text" className="form-control" name="permanentAddress" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Taluka</label>
          <input type="text" className="form-control" name="taluka" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">District</label>
          <input type="text" className="form-control" name="district" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Pincode</label>
          <input type="text" className="form-control" name="pincode" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Present School Name</label>
          <input type="text" className="form-control" name="presentSchoolName" onChange={handleChange} required />
        </div>
        <div className="col-md-12">
          <label className="form-label">Medium</label>
          <div>
            {['Marathi', 'Semi', 'English', 'CBSC', 'ICSE'].map((mediumOption) => (
              <div className="form-check form-check-inline" key={mediumOption}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={mediumOption}
                  onChange={handleMediumChange}
                />
                <label className="form-check-label">{mediumOption}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Previous Class Marks</label>
          <input type="number" className="form-control" name="previousClassMarks" onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Out of Marks</label>
          <input type="number" className="form-control" name="outOfMarks" onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Percentage (%)</label>
          <input type="number" step="0.01" className="form-control" name="percentage" onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Passport Size Photo</label>
          <input type="file" className="form-control" name="passportPhoto" onChange={handleFileChange} required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
