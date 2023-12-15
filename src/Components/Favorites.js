import CatItem from "./CatItem";

const Favorites = () => {
    const CAT1 = "https://cataas.com/cat/HSENVDU4ZMqy7KQ0/says/react";
    const CAT2 = "https://cataas.com/cat/BxqL2EjFmtxDkAm2/says/inflearn";
    const CAT3 = "https://cataas.com/cat/18MD6byVC1yKGpXp/says/JavaScript";

    return (
        <ul className="favorites">
            <CatItem img={CAT1}></CatItem>
            <CatItem img={CAT2}></CatItem>
        </ul>
    );
}

export default Favorites;