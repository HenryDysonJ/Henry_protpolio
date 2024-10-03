import AboutMe from "@/components/about_me";
import { TopNavBar } from "@/components/navbar";
import { ProfileInfo } from "@/components/profile_Info";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-full">
        <div className="fixed z-10 w-full">
          <TopNavBar />
        </div>
        <div className='flex justify-center items-center px-24 py-16 bg-gradient-to-r from-black to-zinc-700 max-lg:px-6 lg:h-[40%]'>
          <ProfileInfo />
        </div>

        <div className='flex justify-center items-center px-24 py-16 max-lg:px-6 bg-gradient-to-r from-black to-zinc-600'>
          <AboutMe /> 
        </div>

        <div className='flex justify-center items-center px-24 py-16 bg-black max-lg:px-6'>
          <Skills />
        </div>

        <div className='flex justify-center items-center h-96 px-20 bg-gradient-to-r from-black to-zinc-600'>
          Projects
          {/* <Projects /> */}
        </div>

        <div className='flex justify-center items-center h-full px-20 bg-black max-lg:px-6'>
          company 
        </div>

        <div className='flex justify-center items-center h-2/3 px-20 bg-gradient-to-r from-black to-zinc-600'>
          Conduct me
        </div>

        <div className='flex justify-center items-center h-1/2 px-20 bg-black max-lg:px-6'>
          footer 
        </div>
      </main>
    </div>
  );
}
