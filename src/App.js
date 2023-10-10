import React from "react";
import {
  Header,
  About,
  Projects,
  Footer,
  NavbarContainer,
  ProjectPage,
  Resume,
} from "./container";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { projectData } from "./constants";
import "./app.css";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <div>
      <NavbarContainer />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

function ProjectPageRoute(props) {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <NavbarContainer />
      <ProjectPage {...props} />
    </>
  );
}

function ResumePage() {
  return (
    <div>
      <ScrollToTopOnRouteChange />
      <NavbarContainer />
      <Resume />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />

        {/* Dynamique routing */}
        {Object.keys(projectData).map((projectKey) => {
          const project = projectData[projectKey];
          if (project.isActive) {
            return (
              <Route
                key={projectKey}
                path={`/${project.path}`}
                element={
                  <ProjectPageRoute
                    ProjectName={project.title}
                    aboutText={project.description}
                    challengeText={project.challenge}
                    image={project.image}
                    techs={project.techs}
                    projectUrl={project.projectUrl}
                    codeUrl={project.codeUrl}
                  />
                }
              />
            );
          } else {
            return null;
          }
        })}
      </Routes>
    </Router>
  );
}

export default App;
