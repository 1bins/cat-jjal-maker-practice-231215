import './App.css';
import { useEffect, useState } from 'react';
import Title from './Components/Title';
import FormBox from './Components/FormBox';
import MainCard from './Components/MainCard';
import Favorites from './Components/Favorites';

function App() {
  // 고양이 이미지
  const CAT1 = "https://cataas.com/cat/HSENVDU4ZMqy7KQ0/says/LOADING?fontSize=42&fontColor=White";

  // 로컬스토리지
  const jsonLocalStorage = {
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
      return JSON.parse(localStorage.getItem(key));
    },
  };

  // 고양이 이미지 API
  const fetchCat = async (text) => {
    const OPEN_API_DOMAIN = "https://cataas.com";
    const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
    const responseJson = await response.json();
    return `${OPEN_API_DOMAIN}/cat/${responseJson._id}/says/${text}?fontSize=42&fontColor=White`
  };

  // 상태
  const [counter, setCounter] = useState(jsonLocalStorage.getItem("counter"));
  const [mainCat, setMainCat] = useState(CAT1);
  const [favorites, setFavorites] = useState(jsonLocalStorage.getItem("favorites") || []);

  // 첫화면 메인캣
  const initMainCat = async () => {
    const initCat = await fetchCat("first Cat");
    setMainCat(initCat);
  }
  useEffect(() => {
    initMainCat();
  }, []);

  // 메인캣 이미지 업데이트
  const updateMainCat = async (says) => {
    const newCat = await fetchCat(says);
    setMainCat(newCat);

    const updateCounter = counter + 1;
    setCounter(updateCounter);
    localStorage.setItem("counter", updateCounter);
  };

  // 하트 클릭
  const handleHeartClick = () => {
    const nextFavories = [...favorites, mainCat]
    setFavorites(nextFavories);
    jsonLocalStorage.setItem("favorites", nextFavories);
  };

  // 하트 감지
  const alreadyHeart = favorites.includes(mainCat);

  // 번호체크
  const counterTitle = counter === null ? "" : `${counter}번째 `;

  return (
    <div className="App">
      <Title>{counterTitle} 고양이 가라사대</Title>
      <FormBox updateMainCat={updateMainCat}></FormBox>
      <MainCard mainCat={mainCat} onHeartClick={handleHeartClick} alreadyHeart={alreadyHeart}></MainCard>
      <Favorites favorites={favorites}></Favorites>
    </div>
  );
}

export default App;
