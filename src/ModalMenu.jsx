import "./modalMenu.scss";
import vkImg from "./icons8-vk-48.png";
import telegramImg from "./free-icon-telegram-408788.png";
import menuBtnClose from "./free-icon-down-arrow-1057166 — копия.png";
import { Link } from "react-router-dom";

const ModalMenu = ({ closeModal }) => {
  return (
    <div className=" modal">
      <div className="modal__wrapper">
        <div className="modal__content">
          <button className="modal__btn" onClick={closeModal}>
            <img src={menuBtnClose} alt="btn" />
          </button>

          <div className="modal__links">
            <nav>
              <ul>
                <li>
                  <a href="#about">О нас</a>
                </li>
                <li>
                  <a href="#about the game">Об игре</a>
                </li>
                <li>
                  <a href="#goals">Цели</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="modal__contacts">
            <div className="modal__contacts-email">
              <p>По вопросам, предложениям и сотрудничеству: </p>
              <a href="mailto:silarusi@inbox.ru" target="_blank">
                silarusi@inbox.ru
              </a>
            </div>
            <div className="modal__contacts-social">
              <div className="modal__contacts-telegram">
                <button>
                  <a href="https://t.me/+YG3AGNQdek5hYjMy" target="_blank">
                    <img src={telegramImg} alt="telegram" />
                  </a>
                </button>
              </div>
              <div className="modal__contacts-vk">
                <button>
                  <a href="https://vk.com/club226868899" target="_blank">
                    <img src={vkImg} alt="vk" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
