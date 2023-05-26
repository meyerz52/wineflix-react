import WineCard from "./WineCard";

const CategoryComponent = ({ categoryName, categoryContext }) => {
    const tiles = categoryContext.map(({ id, imageUrl, label, isNew, isFinished, progress }) => {
        return (
            <li key={id}>
                < WineCard imageUrl={imageUrl} label={label} isNew={isNew} isFinished={isFinished}
                    progress={progress} />
            </li>)
    });

    return (
        <section className="category">
            <h2>{categoryName}</h2>
            <ul>
                {tiles}
            </ul>
        </section>
    )
}

export default CategoryComponent;