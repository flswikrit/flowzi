import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustedCompanies } from '@/components/TrustedCompanies';
import { Services } from '@/components/Services';
import { FAQs } from '@/components/FAQs';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-900)]">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Services />
      <FAQs />
      <Footer />
    </main>
  );
}

