const projects = [
    {
        name: 'University Day SMA Negeri 1 Kandanghaur',
        description: 'Web application project to support university day activities in high school',
        techStack: 'Nodejs, Express, Mongodb, EJS, React, Nextjs, HTML, CSS, Tailwind, TypeScript, Javascript',
        imgUrl: 'https://i.ibb.co/x3B79Ld/image.png',
        repoUrl: 'https://github.com/adityacaturputra/your-school-univday',
        DemoUrl: 'https://univdaysmansaka.web.app/',
    },
    {
        name: 'BUSY SCHOOL - SCHOOL SCHEDULE WEB APP',
        description: 'Busy School is a web application that is useful for managing class schedules, viewing class schedules, and managing class assignments.',
        techStack: 'React, Create React App, Redux, PWA, Styled Components, HTML, CSS, JavaScript, Supabase, SQL',
        imgUrl: 'https://i.ibb.co/X4Q69sk/image.png',
        repoUrl: 'https://github.com/adityacaturputra/busy-school',
        DemoUrl: 'https://busy-school.vercel.app/',
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