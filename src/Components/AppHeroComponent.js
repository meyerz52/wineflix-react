import HeroImage from "./Hero/HeroImage";
import NavigationBar from "./Navigation/NavigationBar";
import AppHeroBanner from "./AppHeroBanner";

const AppHeroComponent = ({ heroImageContext, navigationContext, heroContent, heroButtonContext }) => {
    return (
        <header className="hero">
            <HeroImage {...heroImageContext} />
            <NavigationBar {...navigationContext} />
            <AppHeroBanner {...heroContent} controls={heroButtonContext} />
        </header>
    )

};

export default AppHeroComponent;