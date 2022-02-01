const projects = [
    {
        name: 'University Day SMA Negeri 1 Kandanghaur',
        description: 'Web application project to support university day activities in high school',
        techStack: 'Nodejs, Express, Mongodb, EJS, React, Nextjs, HTML, CSS, Tailwind, TypeScript, Javascript',
        imgUrl: 'https://i.ibb.co/x3B79Ld/image.png',
        repoUrl: 'https://github.com/adityacaturputra/your-school-univday',
        DemoUrl: 'https://univdaysmansaka.web.app/',
    },
    
]


const projectsElement = document.getElementById('projects')

projectsElement.innerHTML = projects.map((project) => `
<div class="project-container">
    <div class="project-image">
        <img class="project-image__img" src="${project.imgUrl}" alt="">
        <div class="project-image__img-overlay"></div>
        <div class="project-text">
            <p class="project-name">${project.name}</p>
            <p class="project-description">${project.description}</p>
            <br/>
            <p class="project-tech-stack">${project.techStack}</p>
            <p class="project-description"><a class="anchor" href="${project.repoUrl}" target="_blank">Repo<a/> | <a  class="anchor" href="${project.DemoUrl}" target="_blank">Demo<a/></p>
        </div>
    </div>
</div>
`).join("")


function ScrollTo(elementId) {
    var element = document.getElementById(elementId);
    var headerOffset = 72;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}