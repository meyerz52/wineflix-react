import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActionButton = ({ icon, text, isPrimary = false }) => {
    console.log()
    return (
        <button className={`${isPrimary ? " primary" : "secondary"}-action`} >
            <FontAwesomeIcon icon={icon} />
            <span>{text}</span>
        </button >
    )
}

export default ActionButton




