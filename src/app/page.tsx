"use client";
import Link from "next/link";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {/* HEADER - SocialIcon, Framer Motion kullanıldı*/}
      <Header />

      {/* HERO - Simple TypeWriter, Framer Motion kullanıldı */}
      <section id="hero" className="snap-start pt-6">
        <Hero />
      </section>

      {/* ABOUT - Framer Motion kullanıldı*/}
      <section id="about" className="snap-center">
        <About />
        <BackToTop/>
      </section>

      {/* EXPERIENCE - Framer Motion, Tailwind-Scrollbar kullanıldı */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* SKILLS - Framer Motion kullanıldı */}
      <section id="skills" className="snap-start">
        <Skills />
        <BackToTop />
      </section>

      {/* PROJECTS - Framer Motion, Skew(tailwind), Tailwind-Scrollbar kullanıldı */}
      <section id="projects" className="snap-start">
        <Projects />
        <BackToTop />
      </section>

      {/* CONTACT ME - Hero Icons, ReactHookForm(for sending mail) kullanıldı */}
      <section id="contact" className="snap-start">
        <ContactMe />
        <BackToTop />
      </section>
    </div>
  );
}
