/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FerrariVsRedbullToggle from './components/FerrariVsRedbullToggle';
import EventsGrid from './components/EventsGrid';
import ScheduleSection from './components/ScheduleSection';
import CoordinatorsSection from './components/CoordinatorsSection';
import Footer from './components/Footer';
import EventModal from './components/EventModal';
import RegistrationModal from './components/RegistrationModal';
import { EventDetail, INITIAL_EVENTS } from './data/eventsData';

export default function App() {
  const [events] = useState<EventDetail[]>(INITIAL_EVENTS);
  const [selectedTeam, setSelectedTeam] = useState<'all' | 'Ferrari' | 'RedBull'>('all');
  const [briefingEvent, setBriefingEvent] = useState<EventDetail | null>(null);
  const [registerEvent, setRegisterEvent] = useState<EventDetail | null>(null);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-[#e10600] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with F1 Starting Lights, 14th Oct Countdown & Rulebook Drive link */}
        <HeroSection />

        {/* 2. Ferrari vs Red Bull Paddock Fleet Filter */}
        <FerrariVsRedbullToggle 
          selectedTeam={selectedTeam}
          onSelectTeam={setSelectedTeam}
        />

        {/* 3. The 8 Events with Direct Google Forms Registration */}
        <EventsGrid 
          events={events}
          selectedTeam={selectedTeam}
          onSelectEventForBriefing={(evt) => setBriefingEvent(evt)}
          onSelectEventForRegistration={(evt) => setRegisterEvent(evt)}
        />

        {/* 4. Race Day Schedule (14th October 2026) */}
        <ScheduleSection />

        {/* 5. Coordinators & Paddock Help Desk */}
        <CoordinatorsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <EventModal 
        event={briefingEvent}
        onClose={() => setBriefingEvent(null)}
        onOpenRegister={(evt) => setRegisterEvent(evt)}
      />

      <RegistrationModal 
        event={registerEvent}
        onClose={() => setRegisterEvent(null)}
      />
    </div>
  );
}
