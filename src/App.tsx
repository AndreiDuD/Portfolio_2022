import About from "./Components/About";
import Introduction from "./Components/Introduction";
import ProfilePic from "./Components/ProfilePic";
import ProgressBar from "./Components/ProgressBar";
import Services from "./Components/Services";

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2 p-5 mt-20">
        <Introduction />
        <About />
        <Services />
      </div>
      <div className="hidden md:block">
        <ProgressBar />
        <ProfilePic />
      </div>
    </div>
  );
}

export default App;
