// ./NavigationItem.js
const NavigationItem = ({title, link, isCurrentPage=false}) => {
    return (
        <li className={isCurrentPage ? "active" : null}>
            <a href={link}>{title}</a>
        </li>
    )
}

export default NavigationItem;
