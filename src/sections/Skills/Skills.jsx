import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h2 className="SubsectionTitle">Languages</h2>
      
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="R" />
        <SkillList src={checkMarkIcon} skill="C" />
      </div>
      <hr />
      <h2 className="SubsectionTitle">Machine Learning</h2>
      
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SK-Learn" />
        <SkillList src={checkMarkIcon} skill="PyTorch" />
        <SkillList src={checkMarkIcon} skill="Keras" />
        <SkillList src={checkMarkIcon} skill="NumPy" />
        <SkillList src={checkMarkIcon} skill="Pandas" />
      </div>
      <hr />
      <h2 className="SubsectionTitle">Data Visualization</h2>
    
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Excel" />
        <SkillList src={checkMarkIcon} skill="Tableau" />
      </div>
      <hr />
      <h2 className="SubsectionTitle">Others</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="VS code" />
        <SkillList src={checkMarkIcon} skill="R studio" />
      </div>
    </section>
  );
}

export default Skills;
