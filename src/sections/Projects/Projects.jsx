import styles from './ProjectsStyles.module.css';
import prescription from '../../assets/prescription.png';

import Conference from '../../assets/Conference.png';
import ML2 from '../../assets/ML2.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={prescription}
          link="https://github.com/sid2002-N/Smart-Medical-Prescription-Service"
          h3="SMPS"
          p="Prescription Service"
        />
        <ProjectCard
          src={ML2}
          link="https://github.com/sid2002-N/MachineLearningPython"
          h3="ML"
          p="ML Projects"
        />
        <ProjectCard
          src={Conference}
          link="https://ijircce.com/admin/main/storage/app/pdf/alLCJQcqcK0Awv80xPlZjPpKXkp5vSTcgGFujqoy.pdf"
          h3="Conference Paper"
          p="Decentralized Audiobook"
        />
        
      </div>
    </section>
  );
}

export default Projects;
