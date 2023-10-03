import About from "../Components/About";
import Contact from "../Components/Contact";
import Introduction from "../Components/Introduction";
import ProfilePic from "../Components/ProfilePic";
import ProgressBar from "../Components/ProgressBar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2 p-5 mt-20">
        <Introduction />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <div className="hidden md:block">
        <ProgressBar />
        <ProfilePic />
      </div>
    </div>
  );
}

export default Home;
