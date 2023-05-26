import NavigationItem from './NavigationItem';

const NavigationLinks = ({ linkContext }) => {
    const links = linkContext.map(({ title, link, isCurrentPage }) => {

        return (
            <li key={title} className={isCurrentPage ? "active" : null}>
                <NavigationItem title={title}
                    link={link}
                />
            </li>

        )
    })

    return <ul className="navigation-links">{links}</ul>
}

export default NavigationLinks
