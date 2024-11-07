import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./home.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setArrSanyaCards, setArrSanyaTwoCards } from "./slice";
import imgCardOne from "./cardOne.png";
import imgCardTwo from "./cardTwo.png";
import Footer from "./Footer";
import Skeleton from "./Skeleton";
import SkeletonTwo from "./SkeletonTwo";
import ModalMenu from "./ModalMenu";
import Modal from "react-modal";

const Home = () => {
  const dispatch = useDispatch();

  //меню
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div>
      <ModalMenu closeModal={closeModal} />
    </div>
  );

  //Скелетон
  const [isLoading, setIsLoading] = useState(true);

  //Саня 1
  const arrSanyaCards = useSelector((state) => state.slice.arrSanyaCards);

  const arrPageHome = isLoading
    ? [...new Array(3)].map((skelet, index) => (
        <Skeleton key={index}></Skeleton>
      ))
    : arrSanyaCards.map((obj) => (
        <>
          <div className="home__card">
            <div className="home__title">
              <h1>{obj.title}</h1>
            </div>
            <img src={obj.img} alt="image" />
          </div>
        </>
      ));

  //Саня карточки

  const cards = (
    <div className="cards__wrapper">
      <div className="card">
        <img src={imgCardOne} alt="card" />
        <p>Множество заданий выполняемых сообща</p>
      </div>
      <div className="card">
        <img src={imgCardTwo} alt="card" />
        <p>Создание команды с взаимовырочкой</p>
      </div>
      <div className="card">
        <img src={imgCardOne} alt="card" />
        <p>Создание дружелюбия</p>
      </div>
    </div>
  );

  //Саня 2
  const arrSanyaTwoCards = useSelector((state) => state.slice.arrSanyaTwoCard);

  const arrPageHomeCards = isLoading
    ? [...new Array(4)].map((skelet, index) => (
        <SkeletonTwo key={index}></SkeletonTwo>
      ))
    : arrSanyaTwoCards.map((obj) => (
        <>
          <div className="home__lower-card">
            <img src={obj.img} alt="image" />
            <p>{obj.title}</p>
          </div>
        </>
      ));

  console.log(arrSanyaTwoCards);

  //Запрос 1
  useEffect(() => {
    axios
      .get("https://66d6df5d006bfbe2e64eeac0.mockapi.io/the-power-of-rus")
      .then((response) => response.data)
      .then((arrSanya) => {
        dispatch(setArrSanyaCards(arrSanya));
        setIsLoading(false);
      });
  }, []);
  //Запрос 2
  useEffect(() => {
    axios
      .get("https://66d6df5d006bfbe2e64eeac0.mockapi.io/the-power-of-rus-two")
      .then((response) => response.data)
      .then((arrSanyaTwo) => {
        dispatch(setArrSanyaTwoCards(arrSanyaTwo));
        setIsLoading(false);
      });
  }, []);

  return (
    <main id="the-power-of-rus">
      <Header openModal={openModal} />
      <Modal className="zero" isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
      </Modal>
      <div className="home">
        <div className="home__cards" id="about the game">
          {arrPageHome}
        </div>
      </div>
      <div className="cards" id="about">
        {cards}
      </div>
      <div className="home__lower" id="goals">
        {arrPageHomeCards}
      </div>
      <Footer />
      {/* background*/}
      <div className="home__background-img"></div>
      <div className="home__background-img-two"></div>
    </main>
  );
};

export default Home;
