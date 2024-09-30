import { TopNavBar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-full">
        <TopNavBar />
        {/* <ProfileInfo />
        <AboutMe />
        <Skills />
        <Projects /> */}
      </main>
    </div>
  );
}
