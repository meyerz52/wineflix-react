
const ProgressBar = ({ value }) => {
    return (
        <div className="amount-consumed">
            <progress min="0" max="100" value={value}></progress>
        </div>
    )

}

export default ProgressBar