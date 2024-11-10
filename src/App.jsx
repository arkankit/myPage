import Header from "./Header";
import RedirectCard from "./RedirectCard";
import nearbyLogo from "./assets/nearby-brand-logo-square.jpg";
import portfolioImage from "./assets/portfolioImg.jpeg";
import resumeImage from "./assets/resumeImg.jpg";

function App() {
  const myData = [
    {
      id: 1,
      url: "https://arkankit.github.io/portfolio-ark/",
    },
    {
      id: 2,
      url: "https://arkankit.github.io/resume-ark/",
    },
    {
      id: 3,
      url: "https://spontaneous-axolotl-120710.netlify.app/",
    },
  ];

  return (
    <div>
      <Header />
      <div className="cards-container">
        <RedirectCard redirectLink = {myData[0].url} cardImage = {portfolioImage}/>
        <RedirectCard redirectLink = {myData[1].url} cardImage = {resumeImage}/>
        <RedirectCard redirectLink = {myData[2].url} cardImage = {nearbyLogo}/>
      </div>
    </div>
  );
}

export default App;
