import Header from "./Header";
import RedirectCard from "./RedirectCard";

function App() {
  const myData = [
    {
      id: 1,
      url: "https://arkankit.github.io/portfolio-ark/",
      imageUrl: "./src/assets/portfolioImg.jpeg",
    },
    {
      id: 2,
      url: "https://arkankit.github.io/resume-ark/",
      imageUrl: "./src/assets/resumeImg.jpg",
    },
    {
      id: 3,
      url: "https://spontaneous-axolotl-120710.netlify.app/",
      imageUrl: "./src/assets/nearby-brand-logo-square.jpg",
    },
  ];

  return (
    <div>
      <Header />
      <div className="cards-container">
        <RedirectCard redirectLink = {myData[0].url} cardImage = {myData[0].imageUrl}/>
        <RedirectCard redirectLink = {myData[1].url} cardImage = {myData[1].imageUrl}/>
        <RedirectCard redirectLink = {myData[2].url} cardImage = {myData[2].imageUrl}/>
      </div>
    </div>
  );
}

export default App;
