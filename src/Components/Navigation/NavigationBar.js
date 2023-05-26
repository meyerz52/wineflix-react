import NavigationLinks from "./NavigationLinks";
import AvatarComponent from "./AvatarComponent";

const NavigationBar = ({ avatar = "?", links = [] }) => {
    return (
        <nav className="navigation">
            <section className="primary-navigation">
                <h1>Wineflix</h1>
                <NavigationLinks linkContext={links} />
            </section>
            <section className="secondary-navigation">
                <AvatarComponent Icon={avatar} />
            </section>
        </nav>
    )
}

export default NavigationBar