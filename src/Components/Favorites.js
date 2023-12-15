import CatItem from "./CatItem";

const Favorites = ({ favorites }) => {
    return (
        <ul className="favorites">
            {favorites.map(elem => <CatItem img={elem} key={elem}></CatItem>)}
        </ul>
    );
}

export default Favorites;