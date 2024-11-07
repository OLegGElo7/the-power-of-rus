import React from "react";
import logoImg from "./logo.png";
import "./footer.scss";
import vkImg from "./icons8-vk-48.png";
import telegramImg from "./free-icon-telegram-408788.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <a href="#the-power-of-rus">
              <img src={logoImg} alt="logo" />
            </a>
          </div>
          <div className="footer__contacts-email">
            <p className="footer__contacts-donat">
              Если вы хотите поддержать проект - <a>2202207477233061 </a>
              карта сбербанка. Сила Руси - это игра от людей и для людей.
            </p>
            <p>По вопросам, предложениям и сотрудничеству: </p>
            <a href="mailto:silarusi@inbox.ru" target="_blank">
              silarusi@inbox.ru
            </a>
          </div>
          <div className="footer__contacts">
            <div className="footer__contacts-social">
              <div className="footer__contacts-telegram">
                <button>
                  <a href="https://t.me/+YG3AGNQdek5hYjMy" target="_blank">
                    <img src={telegramImg} alt="telegram" />
                  </a>
                </button>
              </div>
              <div className="footer__contacts-vk">
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
    </footer>
  );
};

export default Footer;
