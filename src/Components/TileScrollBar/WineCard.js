import NewBadge from "./NewBadge";
import ProgressBar from "./ProgressBar";

const WineCard = ({ imageUrl, label, isNew = false, isFinished = false, progress = null }) => {

    return (
        <div className="wine">
            <img src={imageUrl} alt={label} />
            {isNew && <NewBadge />}
            {!isFinished && <ProgressBar value={progress} />}
        </div>
    )
}

export default WineCard;