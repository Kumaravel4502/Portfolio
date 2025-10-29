import { Toaster } from 'react-hot-toast';
import React, { Suspense, lazy } from 'react';
import Loading from './components/Loading';
import AllExperiences from './components/experienceSection/AllExperiences';

const AboutMeMain = lazy(() => import('./components/aboutMeSection/AboutMeMain'));
const ContactMeMain = lazy(() => import('./components/contactMeSection/ContactMeMain'));
const FooterMain = lazy(() => import('./components/footer/FooterMain'));
const HeroGradient = lazy(() => import('./components/heroSection/HeroGradient'));
const HeroMain = lazy(() => import('./components/heroSection/HeroMain'));
const NavbarMain = lazy(() => import('./components/navbar/NavbarMain'));
const ProjectsMain = lazy(() => import('./components/projectsSection/ProjectsMain'));
const SkillsMain = lazy(() => import('./components/skillsSection/SkillsMain'));
const SubSkills = lazy(() => import('./components/skillsSection/SubSkills'));

function App() {
  return (
    <main className="font-body text-light relative overflow-hidden">
      <Suspense fallback={<Loading />}>
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <AboutMeMain />
        <SkillsMain />
        <SubSkills />
        <ProjectsMain />
        <ContactMeMain />
        <FooterMain />
      </Suspense>

      {/* Toast notification container */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid rgba(59, 130, 246, 0.2)',
          },
          success: {
            iconTheme: {
              primary: '#fb9718',
              secondary: '#f8fafc',
            },
          },
          error: {
            iconTheme: {
              primary: '#f87171',
              secondary: '#f8fafc',
            },
          },
        }}
      />
    </main>
  );
}

export default App;
