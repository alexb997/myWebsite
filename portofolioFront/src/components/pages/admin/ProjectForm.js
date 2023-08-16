import React, { useState } from 'react';
import axios from 'axios';

function ProjectForm() {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectImgUrl: '',
    status: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/project/post', formData)
      .then((response) => {
        console.log('Project created successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error creating project:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="projectName">Project Name:</label>
        <input type="text" id="projectName" name="projectName" value={formData.projectName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="projectDescription">Project Description:</label>
        <textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="projectImgUrl">Project Image URL:</label>
        <input type="text" id="projectImgUrl" name="projectImgUrl" value={formData.projectImgUrl} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={formData.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit">Create Project</button>
    </form>
  );
}

export default ProjectForm;