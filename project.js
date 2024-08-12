const projects = [
    { name: "Background Removal", tags: ["Image Processing", "Python"], link: "https://bit.ly", description: "The Background Removal Project automates the process of removing and replacing image backgrounds. It uses Python with Tkinter for a user-friendly interface and OpenCV for image processing. Users can select images and backgrounds, automatically save the processed images, and easily repeat the process."},
    { name: "BrdOS", tags: ["OS", "System Functions"], link: "https://github.com", description: "The BrdOS project aims to deliver a seamless initiative computer environment, prioritizing both user interaction and critical system functions. This Operating System (OS) is designed to meet daily computing needs while offering a distinctive and engaging user experience."},
    { name: "EcoManila", tags: ["UI/UX", "Flutter"], link: "https://github.com", description: "EcoManila Rewards is a Recycle Rewards App designed to address the challenges of low recycling participation, illegal dumping, lack of awareness, and limited community engagement among Manila residents. By implementing a task-based reward system, the app aims to incentivize residents to actively collect and recycle waste, contributing to environmental restoration efforts and fostering a cleaner ecosystem."}
];

const openLink = (link) => {
    window.open(link, '_blank');
};

const renderProjects = () => {
    const container = document.getElementById('projects-container');
    if (container) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';
            
            projectElement.innerHTML = `
                <h3>${project.name}</h3>
                <div class="tagContainer">
                    ${project.tags.map(tag => `<div class="tag">${tag}</div>`).join('')}
                </div>
                <p>${project.description}</p>
                <div class="visit">
                    <button onclick="openLink('${project.link}')">Visit Project</button>
                </div>
            `;
            container.appendChild(projectElement);
        });
    }
};

const seeMore = () => {
    window.open("https://github.com", '_blank');
};

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    const seeMoreButton = document.getElementById('see-more');
    if (seeMoreButton) {
        seeMoreButton.addEventListener('click', seeMore);
    }
});
