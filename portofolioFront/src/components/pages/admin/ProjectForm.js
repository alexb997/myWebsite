import React, { useState } from "react";
import axios from "axios";

function ProjectForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imgUrl: "",
    status: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(name + "," + value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "/project/post",
        { formData },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data;",
            "cache-control": "no-cache",
          },
        }
      )
      .then((response) => {
        console.log("Project created successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error creating project:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Project Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Project Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="imgUrl">Project Image URL:</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
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
