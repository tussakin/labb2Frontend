import React, { useState, useEffect } from "react";

const ResumePage = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetchResumeData();
  }, []);

  const fetchResumeData = async () => {
    try {
      const response = await fetch("resume.json");
      const data = await response.json();
      setResumeData(data);
    } catch (error) {
      console.error("Error fetching resume data:", error);
    }
  };

  if (!resumeData) {
    return <div>Loading...</div>;
  }

  return <main>{/* Render resume data dynamically here */}</main>;
};

export default ResumePage;
