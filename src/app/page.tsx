'use client'
import AboutMe from "@/components/about_me";
import { ConductMe } from "@/components/conduct_me";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { TopNavBar } from "@/components/navbar";
import { ProfileInfo } from "@/components/profile_Info";
import { Projects } from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {

  const handleScroll = (id: string) => {
    const element = document.getElementById(`${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-full">
        <div className="fixed z-10 w-full">
          <TopNavBar handleClickHome={handleScroll} handleClickAbout={handleScroll} handleClickProjects={handleScroll} handleClickSkills={handleScroll} handleClickConduct={handleScroll} />
        </div>
        <div id="1" className='flex justify-center items-center px-24 py-16 bg-gradient-to-r from-black to-zinc-700 max-lg:px-6 lg:h-[22%]'>
          <ProfileInfo />
        </div>

        <div id="2" className='flex justify-center items-center px-20 py-16 max-lg:px-6 bg-gradient-to-r from-black to-zinc-600'>
          <AboutMe />
        </div>

        <div id="3" className='flex justify-center items-center px-20 py-12 bg-black max-lg:px-6'>
          <Skills />
        </div>

        <div id="4" className='flex justify-start items-center h-[28rem] py-2 px-20 bg-gradient-to-r from-black to-zinc-600 max-lg:px-6 max-lg:w-full'>
          <Projects />
        </div>

        <div id="5" className='flex justify-center items-start bg-black px-20 py-16 max-lg:px-6'>
          <Experience />
        </div>

        <div id="6" className='flex justify-center items-center h-[16%] px-20 bg-gradient-to-r from-black to-zinc-600'>
          <ConductMe />
        </div>

        <div id="7" className='px-20 py-8 bg-black max-lg:px-6'>
          <Footer handleClickHome={handleScroll} handleClickAbout={handleScroll} handleClickProjects={handleScroll} handleClickSkills={handleScroll} handleClickConduct={handleScroll} handleClickExperiance={handleScroll} />
        </div>
      </main>
    </div>
  );
}
