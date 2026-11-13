/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RootsSection } from './components/RootsSection';
import { StoriesSection } from './components/StoriesSection';
import { CareerSection } from './components/CareerSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#111315]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <RootsSection />
        <StoriesSection />
        <CareerSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
