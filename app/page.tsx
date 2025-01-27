import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import FloatingNav from "@/components/ui/FloatingNav";
import Skills from "@/components/Skills";


import { navItems } from "@/Data";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <main className="relative bg-black-100 
    flex justify-center items-center flex-col  mx-auto sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
       <Hero/>
       {/* <Grid/> */}
       <RecentProjects/>
       <Skills/>
       <Experience/>
       <Footer/>
   
      </div>
    </main>

  );
}
