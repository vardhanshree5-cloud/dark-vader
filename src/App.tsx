import { useState, useEffect } from 'react';
import { TabType, Project, MaterialSpecimen } from './types';
import { PROJECTS } from './data/projectsData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { PortfolioView } from './components/PortfolioView';
import { HomeView } from './components/HomeView';
import { StudiesView } from './components/StudiesView';
import { ServicesView } from './components/ServicesView';
import { ConsultView } from './components/ConsultView';
import { ProjectStudyModal } from './components/ProjectStudyModal';
import { MaterialModal } from './components/MaterialModal';
import { LookbookModal } from './components/LookbookModal';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('portfolio');
  const [savedProjectIds, setSavedProjectIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('atelier_terra_saved');
      return stored ? JSON.parse(stored) : ['villa-sombra'];
    } catch {
      return ['villa-sombra'];
    }
  });

  const [activeStudyProject, setActiveStudyProject] = useState<Project | null>(null);
  const [activeMaterial, setActiveMaterial] = useState<MaterialSpecimen | null>(null);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync saved project IDs to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('atelier_terra_saved', JSON.stringify(savedProjectIds));
    } catch {
      // LocalStorage fallback
    }
  }, [savedProjectIds]);

  // Toast notification helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleToggleSave = (id: string) => {
    if (savedProjectIds.includes(id)) {
      setSavedProjectIds((prev) => prev.filter((pId) => pId !== id));
      showToast('Removed from Studio Lookbook');
    } else {
      setSavedProjectIds((prev) => [...prev, id]);
      const project = PROJECTS.find((p) => p.id === id);
      showToast(`Saved ${project ? project.title : 'Project'} to Lookbook`);
    }
  };

  const savedProjectsList = PROJECTS.filter((p) => savedProjectIds.includes(p.id));

  // Scroll to top on tab change
  const handleTabChange = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#1f1b18] flex flex-col items-center">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 z-50 bg-[#1f1b18] text-white text-xs px-4 py-2.5 rounded-full shadow-lg border border-[#dac1b9]/30 flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-[16px] text-[#ffb598]">
            bookmark
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleTabChange}
        savedCount={savedProjectIds.length}
        onOpenLookbook={() => setIsLookbookOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Container - Responsive layout matching mobile design while expanding elegantly on wider screens */}
      <main className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl pt-16 min-h-screen flex flex-col relative bg-[#fff8f5]">
        {currentTab === 'portfolio' && (
          <PortfolioView
            projects={PROJECTS}
            savedIds={savedProjectIds}
            onToggleSave={handleToggleSave}
            onExploreStudy={(project) => setActiveStudyProject(project)}
            onSelectMaterial={(material) => setActiveMaterial(material)}
            onNavigateToStudies={() => handleTabChange('studies')}
          />
        )}

        {currentTab === 'home' && (
          <HomeView
            featuredProject={PROJECTS[0]}
            onNavigate={handleTabChange}
            onExploreStudy={(project) => setActiveStudyProject(project)}
            onToggleSave={handleToggleSave}
            isSaved={savedProjectIds.includes(PROJECTS[0].id)}
          />
        )}

        {currentTab === 'studies' && (
          <StudiesView
            projects={PROJECTS}
            onSelectProject={(id) => {
              const p = PROJECTS.find((item) => item.id === id);
              if (p) setActiveStudyProject(p);
            }}
            onOpenConsultation={() => handleTabChange('consult')}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
            onStartConsultation={() => handleTabChange('consult')}
          />
        )}

        {currentTab === 'consult' && (
          <ConsultView />
        )}
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav
        currentTab={currentTab}
        onTabChange={handleTabChange}
      />

      {/* Fullscreen Case Study Deep-Dive Modal */}
      <ProjectStudyModal
        project={activeStudyProject}
        isOpen={Boolean(activeStudyProject)}
        onClose={() => setActiveStudyProject(null)}
        isSaved={activeStudyProject ? savedProjectIds.includes(activeStudyProject.id) : false}
        onToggleSave={handleToggleSave}
        onOpenConsultation={() => {
          setActiveStudyProject(null);
          handleTabChange('consult');
        }}
      />

      {/* Tactile Material Specimen Modal */}
      <MaterialModal
        specimen={activeMaterial}
        isOpen={Boolean(activeMaterial)}
        onClose={() => setActiveMaterial(null)}
        projects={PROJECTS}
        onSelectProject={(project) => {
          setActiveMaterial(null);
          setActiveStudyProject(project);
        }}
      />

      {/* Saved Lookbook Modal */}
      <LookbookModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        savedProjects={savedProjectsList}
        onRemoveSaved={handleToggleSave}
        onExploreStudy={(project) => {
          setIsLookbookOpen(false);
          setActiveStudyProject(project);
        }}
        onStartConsultation={() => {
          setIsLookbookOpen(false);
          handleTabChange('consult');
        }}
      />

      {/* Studio Profile & Founder Monograph Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onOpenConsultation={() => {
          setIsProfileOpen(false);
          handleTabChange('consult');
        }}
      />
    </div>
  );
}
