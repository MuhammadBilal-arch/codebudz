import { Nav } from "@/components/nav";
import MainCarousel from '@/components/carousels/main'
import Footer from "@/components/footer";
import Companies from "@/app/components/companies";
import AboutCompany from "./components/aboutCompany";
import Blogs from "./components/blogs";
import Services from "@/components/carousels/services";
import TeamMembers from "@/components/carousels/teamMembers";
import Team from "@/components/carousels/team";

export default function Home() {
  return (
    <div className="relative sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1480px]  w-full mx-auto">
      <Nav />
      <MainCarousel/>
      <Companies/>
      <AboutCompany/>
      <Services/>
      <Team/>
      <TeamMembers/>      
      <Blogs/>
      <Footer/>
    </div>
  );
}
