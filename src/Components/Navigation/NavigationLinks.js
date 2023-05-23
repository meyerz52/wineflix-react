import NavigationItem from './NavigationItem';

const NavigationLinks = ({navbarContext = []}) => {
    const links = navbarContext.map(item => { 

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