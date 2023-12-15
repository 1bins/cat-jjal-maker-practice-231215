const MainCard = ({ mainCat, onHeartClick, alreadyHeart }) => {
    const heartIcon = alreadyHeart ? "💖" : "🤍";
    return (
        <div className="main-card">
            <img
                src={mainCat}
                alt="고양이"
                width="400"
                style={{ maxHeight: "460px", objectFit: "contain" }}
            />
            <button onClick={onHeartClick}>{heartIcon}</button>
        </div>
    );
}

export default MainCard;