import "../styles/Featured.css";

function Featured({ techProjects }) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const d = new Date();
  const currDate = month[d.getMonth()] + " " + d.getFullYear();
  return (
    <div className="featured-wrapper">
      <h3 className="section-title">Featured Projects - {currDate}</h3>
      {techProjects.map((project, index) => {
        return (
          <div key={index} className="projects-container">
            <p>
              {project.title}&nbsp;
              <a
                className="app-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkText}
              </a>
            </p>
            <p>{project.techStack}</p>
            <p className="featured__app-description">{project.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Featured;
