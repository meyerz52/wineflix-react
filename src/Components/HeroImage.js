
const HeroImage = ({ imageUrl, description }) => {
    return <img className="hero-image" src={imageUrl} alt={description} />
}

export default HeroImage