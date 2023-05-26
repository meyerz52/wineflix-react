import ActionButtonCollection from "./Hero/ActionButtonCollection"

const AppHeroBanner = ({ imageUrl, title, subtitle, description, controls = [] }) => {
    const header = <h3>{subtitle}</h3>
    const headerImage = <img alt={title} src={imageUrl} />
    const subHeader = <p>{description}</p>
    return (
        <div className="hero-content">
            {headerImage}
            {header}
            {subHeader}
            <ActionButtonCollection buttonContext={controls} />
        </div>
    )
}


export default AppHeroBanner