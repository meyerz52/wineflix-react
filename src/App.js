import "./App.css";
import { navigationContext, heroContent, heroButtonContext, heroImageContext, wines } from "./data";
import AppHeroComponent from "./Components/Hero/AppHeroComponent";
import CategoryComponent from "./Components/TileScrollBar/CategoryComponent";

const App = () => {
  return (
    <div className="App">
      <AppHeroComponent
        heroImageContext={heroImageContext}
        navigationContext={navigationContext}
        heroContent={heroContent}
        heroButtonContext={heroButtonContext}
      />
      <main>
        <CategoryComponent categoryName={"Drink Again"} categoryContext={wines.filter(({ isFinished }) => isFinished)} />
        <CategoryComponent categoryName={"Keep Drinking"} categoryContext={wines.filter(({ isFinished }) => !isFinished)} />
      </main>
    </div>
  )
}

export default App
