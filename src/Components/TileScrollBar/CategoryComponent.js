import WineCard from "./WineCard";

const CategoryComponent = ({ categoryName, categoryContext }) => {
    const tiles = categoryContext.map((item) => < WineCard {...item} />);

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