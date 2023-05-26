import ActionButton from "./ActionButton";

const ActionButtonCollection = ({ buttonContext }) => {
    const btns = buttonContext.map(({ id, icon, text, isPrimary = false }) => {
        return (
            <li key={id}>
                <ActionButton
                    icon={icon}
                    text={text}
                    isPrimary={isPrimary} />
            </li>
        )
    });
    return <ul className="controls">{btns}</ul>
}
export default ActionButtonCollection