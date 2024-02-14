document.addEventListener("DOMContentLoaded", function () {
  fetch("resume.json")
    .then((response) => response.json())
    .then((data) => {
      const mainElement = document.querySelector("main");

      const resumeDiv = document.createElement("div");
      resumeDiv.classList.add("resume");

      const educationPart = document.createElement("div");
      educationPart.classList.add("education");
      const educationTitle = document.createElement("h2");
      educationTitle.textContent = "Education";
      educationPart.appendChild(educationTitle);
      data.education.forEach((edu) => {
        const listItem = document.createElement("p");
        listItem.textContent = `${edu.degree} - ${edu.university} (${edu.graduation_year})`;
        educationPart.appendChild(listItem);
      });
      resumeDiv.appendChild(educationPart);

      const lifeExperiencePart = document.createElement("div");
      lifeExperiencePart.classList.add("work");
      const lifeExperienceTitle = document.createElement("h2");
      lifeExperienceTitle.textContent = "Life Experience";
      lifeExperiencePart.appendChild(lifeExperienceTitle);
      data.work_experience.forEach((work) => {
        const listItem = document.createElement("p");
        listItem.textContent = `${work.position} at ${work.company} (${work.start_date} - ${work.end_date})`;
        lifeExperiencePart.appendChild(listItem);
      });
      resumeDiv.appendChild(lifeExperiencePart);

      mainElement.appendChild(resumeDiv);

      const skillsPart = document.createElement("div");
      skillsPart.classList.add("section");
      const skillsTitle = document.createElement("h2");
      skillsTitle.textContent = "Skills";
      skillsPart.appendChild(skillsTitle);

      const skillsContent = document.createElement("div");
      skillsContent.classList.add("content");

      const hardSkillsTitle = document.createElement("h2");
      hardSkillsTitle.textContent = "Hard Skills";
      skillsContent.appendChild(hardSkillsTitle);

      const hardSkillsList = document.createElement("ul");
      data.skills[0].hard_skills.forEach((skill) => {
        const item = document.createElement("li");
        item.textContent = skill;
        hardSkillsList.appendChild(item);
      });
      skillsContent.appendChild(hardSkillsList);

      const softSkillsTitle = document.createElement("h2");
      softSkillsTitle.textContent = "Soft Skills";
      skillsContent.appendChild(softSkillsTitle);

      const softSkillsList = document.createElement("ul");
      data.skills[0].soft_skills.forEach((skill) => {
        const item = document.createElement("li");
        item.textContent = skill;
        softSkillsList.appendChild(item);
      });
      skillsContent.appendChild(softSkillsList);

      skillsPart.appendChild(skillsContent);
      mainElement.appendChild(skillsPart);
    });
});
