import { Nav } from "@/components/nav";
import MainCarousel from "@/components/carousels/main";
import Footer from "@/components/footer";
import Companies from "@/components/carousels/companies";
import AboutCompany from "./components/aboutCompany";
import Blogs from "./components/blogs";
import Services from "@/components/carousels/services";
import TeamMembers from "@/components/carousels/teamMembers";
import Team from "@/components/carousels/team";
import OurCompany from "./components/ourCompany";

export default function Home() {
  return (
    <div className="relative w-full mx-auto overflow-hidden snap-y snap-mandatory h-screen overflow-y-scroll">
      <div className="snap-start">
        <Nav />
        <MainCarousel />
      </div>
      <div className="snap-start">
        <Companies />
        <AboutCompany />
      </div>
      <div className="snap-start flex items-center justify-center">
        <Services />
      </div>
      <div className="snap-start flex items-center justify-center">
        <OurCompany />
      </div>
      <div className="snap-start flex items-center justify-center">
        <Team />
      </div>
      <div className="snap-start flex items-center justify-center">
        <TeamMembers />
      </div>
      <div className="snap-start flex items-center justify-center">
        <Blogs />
      </div>
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
}
