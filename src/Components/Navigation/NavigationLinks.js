import NavigationItem from './NavigationItem';

const NavigationLinks = ({ linkContext }) => {
    const links = linkContext.map(item => {

        return (
            <NavigationItem title={item.title}
                link={item.link}
                key={item.title}
            />
        )
    })

    return <ul className="navigation-links">{links}</ul>
}

export default NavigationLinks 