fetch('Resume.json')
.then(response => response.json())
.then(data => {
    const educationPart = document.createElement('div');
    const educationTitle = document.createElement('h2');
    educationTitle.textContent = 'Education';
    educationPart.appendChild(educationTitle);

    const educationList = document.createElement('ul');
    data.education.forEach(edu => {
        const listItem = document.createElement('li');
        listItem.textContent = `${edu.degree} - ${edu.university} (${edu.graduation_year})`;
    });
    educationPart.appendChild(educationList);

    document.body.appendChild(educationPart);
})
.catch(error => console.error('Error loading resume data.', error));