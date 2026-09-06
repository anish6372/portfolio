import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImpactMetrics from '@/components/ImpactMetrics';
import About from '@/components/About';
import ArchitectureExplorer from '@/components/ArchitectureExplorer';
import FeaturedProjects from '@/components/FeaturedProjects';
import ProductionExperience from '@/components/ProductionExperience';
import DevOpsPipeline from '@/components/DevOpsPipeline';
import Skills from '@/components/Skills';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EngineeringDeepDives from '@/components/EngineeringDeepDives';
import GithubSection from '@/components/GithubSection';
import Certification from '@/components/Certification';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { fetchGitHubRepos, fetchGitHubUser } from '@/lib/github';
import { SITE_CONFIG } from '@/data/constants';

export default async function Home() {
  const [repos, user] = await Promise.all([
    fetchGitHubRepos(SITE_CONFIG.githubUsername),
    fetchGitHubUser(SITE_CONFIG.githubUsername),
  ]);

  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      
      <Hero />
      <ImpactMetrics />
      <About />
      <ArchitectureExplorer />
      <FeaturedProjects />
      <ProductionExperience />
      <DevOpsPipeline />
      <Skills />
      <ExperienceTimeline />
      <EngineeringDeepDives />
      <GithubSection repos={repos} user={user} />
      <Certification />
      <Contact />
      
      <Footer />
    </main>
  );
}
