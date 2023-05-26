import NewBadge from "./NewBadge";
import ProgressBar from "./ProgressBar";

const WineCard = ({ id, imageUrl, label, isNew = false, isFinished = false, progress = null }) => {

    return (
        <li key={id}>
            <div className="wine">
                <img src={imageUrl} alt={label} />
                {isNew && <NewBadge />}
                {!isFinished && <ProgressBar value={progress} />}
            </div>
        </li>
    )
}

export default WineCard;