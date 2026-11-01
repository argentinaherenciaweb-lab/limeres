/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroIntake } from './components/HeroIntake';
import { PracticeAreas } from './components/PracticeAreas';
import { ProbateCalculator } from './components/ProbateCalculator';
import { RemoteRoadmap } from './components/RemoteRoadmap';
import { PrecedentsSection } from './components/PrecedentsSection';
import { ReadinessChecklist } from './components/ReadinessChecklist';
import { LegalFAQ } from './components/LegalFAQ';
import { StickyConsultationBar } from './components/StickyConsultationBar';
import { ConsultationModal } from './components/ConsultationModal';
import { ChambersSection } from './components/ChambersSection';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('overview');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'overview' || sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#121417] flex flex-col font-sans selection:bg-[#BFA15F] selection:text-[#0B0C0E]">
      {/* Top Monolithic Editorial Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero & High-Intent Intake Section (12-Column Grid) */}
        <div id="overview">
          <HeroIntake
            language={language}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
            onExploreCalculator={() => scrollToSection('calculator')}
          />
        </div>

        {/* 2. Practice Areas Matrix */}
        <PracticeAreas
          language={language}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 3. Statutory Inheritance Cost & Fee Calculator */}
        <ProbateCalculator
          language={language}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 4. Remote 6-Phase Probate Roadmap */}
        <RemoteRoadmap
          language={language}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 5. Proven Cross-Border Case Precedents */}
        <PrecedentsSection
          language={language}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 6. Document Readiness & Preparation Dossier */}
        <ReadinessChecklist
          language={language}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 7. Transatlantic Chambers & Architectural Heritage */}
        <div id="chambers">
          <ChambersSection
            language={language}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        </div>

        {/* 8. Statutory & Procedural Legal FAQ */}
        <LegalFAQ language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onNavigate={scrollToSection}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Sticky Bottom Consultation Bar */}
      <StickyConsultationBar
        language={language}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Consultation Scheduling Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        language={language}
      />
    </div>
  );
}
