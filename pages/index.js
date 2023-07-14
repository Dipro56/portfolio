import UpperSection from '@/components/upper-section/UpperSection';
import AboutMeSection from '@/components/about-me-section/AboutMeSection';

import WorkExperienceSection from '@/components/work-experience-section/WorkExperienceSection';
import SkillSection from '@/components/skill-section/SkillSection';
import ProjectSection from '@/components/project-section/ProjectSection';
import ExtraCurricularSection from '@/components/extra-curricular-section/ExtraCurricularSection';
import Footer from '@/components/footer/Footer';
import EducationSection from '@/components/education-section/EducationSection';

export default function Home() {
  return (
    <main>
      <UpperSection />
      <AboutMeSection />
      <EducationSection />
      <WorkExperienceSection />
      <SkillSection />
      <ProjectSection />
      <ExtraCurricularSection />
      <Footer />
    </main>
  );
}
