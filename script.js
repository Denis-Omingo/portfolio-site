function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  var whatsappContainer = document.getElementById("whatsapp-container");

  function showWhatsAppIcon() {
    whatsappContainer.style.display = "flex";

    // Hide the WhatsApp container after 20 seconds
    setTimeout(function () {
      whatsappContainer.style.display="none";
    }, 20000);
  }


  // Show WhatsApp icon on page load
  showWhatsAppIcon();

  // Add event listeners for interactions (e.g., scroll, click)
  window.addEventListener("scroll", showWhatsAppIcon);
  document.addEventListener("click", showWhatsAppIcon);
});


 //projects
 document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      image: "./assets/mern-estate.png",
      title: "Real Estate Firm",
      description: "MERN: full stack with user auth",
      githubLink: "href='https://github.com/Denis-Omingo/real-estate-listing",
      liveLink: "https://mern-estate-project-ubrf.onrender.com/",
      category: "full_stack",
      technology:"MERN with Auth0 Authentication"
    },

    {
      image: "./assets/meditest.png",
      title: "Laboratory Website",
      description: "A Lab Website using Wordpress CMS",
      category: "wordpress",
      technology:"WordPress"
    },

    {
      image: "./assets/stejos.png",
      title: "Tourism Website",
      description: "A Tourism Website using Wordpress CMS",
      liveLink: "https://stejostours.co.ke/",
      category: "wordpress",
      technology:"WordPress"
    },

    {
      image: "./assets/blog.jpg",
      title: "Blog Website",
      description: "A Blog Website using Wordpress CMS",
      liveLink: "https://sexualhealthinsights.com/",
      category: "wordpress",
      technology:"WordPress"
    },

    {
      image: "./assets/diapers-site.JPG",
      title: "E-Commerce Website",
      description: "A E-Commerce Website using Wordpress CMS",
      liveLink: "https://wholesalebabydiapers.com/",
      category: "wordpress",
      technology:"WordPress"
    },
    {
      image: "./assets/furniture.png",
      title: "E-Commerce Website",
      description: "A E-Commerce Furniture Website ",
      githubLink: "https://github.com/Denis-Omingo/furniture-website",
      liveLink: "https://amingoz-furniture-website-project.netlify.app/",
      category: "frontend",
      technology:"PHP, HTML,CSS, Javascript"
    },
    {
      image: "./assets/flooring.JPG",
      title: "Company Website",
      description: "A Service Company Website using wordpress ",
      liveLink: "https://amingoz-furniture-website-project.netlify.app/",
      category: "wordpress",
      technology:"Wordpress"
    },
     {
      image: "./assets/zanzibar-tours.PNG",
      title: "Tours Blog",
      description: "A Tours Blog Website using wordpress ",
      liveLink: "https://zanzibarworld.com/",
      category: {"SEO"||"wordpress"},
      technology:"Wordpress"
    },
     {
      image: "./assets/digital-agency.PNG",
      title: "SEO Marketing",
      description: "SEO Auditing and Blog Writing",
      liveLink: "https://digitalagencynetwork.com/",
      category: "SEO",
      technology:"Wordpress"
    },

    // Add a new project-for wordpress, no need for github url unless available
  ];

  // Function to render projects--

  // function renderProjects(filteredProjects) {
  //   const projectsContainer = document.getElementById("projects-container");
  //   projectsContainer.innerHTML = ''; // Clear current projects

  //   filteredProjects.forEach((project) => {
  //     const projectCard = `
  //       <div class="projects-container ${project.category}" id="${project.category}">
  //         <div class="image-container">
  //           <img src="${project.image}" alt="${project.title}" class="project-img" />
  //         </div>
  //         <h3 class="project-title">${project.title}</h3>
  //         <p class="project-description">${project.description}</p>
  //         <div class="project-links">
  //           <a href="${project.githubLink}" target="_blank" class="project-btn">GitHub</a>
  //           <a href="${project.liveLink}" target="_blank" class="project-btn">Live</a>
  //         </div>
  //       </div>
  //     `;
  //     projectsContainer.innerHTML += projectCard;
  //   });
  // }


  function renderProjects(filteredProjects) {
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = ''; // Clear current projects
  
    filteredProjects.forEach((project) => {
      let projectCard = `
        <div class="projects-container ${project.category}" id="${project.category}">
          <div class="image-container">
            <img src="${project.image}" alt="${project.title}" class="project-img" />
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-links">
      `;
      
      // Conditionally add the GitHub link if it exists
      if (project.githubLink) {
        projectCard += `
          <a href="${project.githubLink}" target="_blank" class="project-btn">GitHub</a>
        `;
      }
  
      // Always add the live link
      projectCard += `
        <a href="${project.liveLink}" target="_blank" class="project-btn">Live</a>
      </div>
    </div>
    `;
      
      // Append the project card to the container
      projectsContainer.innerHTML += projectCard;
    });
  }
  

  // Initial render of all projects
  renderProjects(projects);

  // Filter functionality
  const filterButtons = document.querySelectorAll(".dropdown-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      
      if (category === "all") {
        renderProjects(projects); // Show all projects
      } else {
        const filteredProjects = projects.filter((project) => project.category === category);
        renderProjects(filteredProjects); // Show filtered projects
      }
    });
  });
});
