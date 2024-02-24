import React, { useState, useEffect } from 'react';
import jsonData from '../Resume.json';

const Resume = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    setResumeData(jsonData);
  }, []);

  return (
      <div>
        {resumeData && (
            <div>
              <h2>Education</h2>
              <ul className="no-bullets">
                {resumeData.education.map((edu, index) => (
                    <li className='educationNWork' key={index}>
                      {edu.degree}<br></br> - {edu.university}<br></br> ({edu.graduation_year})
                    </li>
                ))}
              </ul>
              <h2>Work Experience</h2>
              <ul className="no-bullets">
                {resumeData.work_experience.map((exp, index) => (
                    <li className='educationNWork'  key={index}>
                      {exp.position} <br></br>
                      at {exp.company} <br></br>({exp.start_date} - {exp.end_date})
                    </li>
                ))}
              </ul>
              <h2>Skills</h2>
              <div>
                <h3>Hard Skills</h3>
                <ul className="no-bullets">
                  {resumeData.skills[0].hard_skills.map((skill, index) => (
                      <li className='education'  key={index}>{skill}</li>
                  ))}
                </ul>
                <h3>Soft Skills</h3>
                <p>{resumeData.skills[0].soft_skills}</p>
              </div>
            </div>
        )}
      </div>
  );
};

export default Resume;
