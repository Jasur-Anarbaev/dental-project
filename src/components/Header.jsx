import React, { useState } from "react";
import "../styles/Header.css";
import location from "../assets/svg/location.svg";
import Call from "../assets/svg/call.svg";
import Email from "../assets/svg/email.svg";
import Twitter from "../assets/svg/twitter.svg";
import Instagram from "../assets/svg/instagram.svg";
import Vk from "../assets/svg/vk.svg";
import Logo from "../assets/svg/logo.svg";
import Burger from "../assets/svg/header_burger.svg";
import Close from "../assets/svg/header_close.svg";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  return (
    // <!-- Header  start  -->
    <header>
      <div className={active ? "header__all active" : "header__all"}>
        <div className="header__address">
          <div className="container">
            <div className="header__items">
              {active ? (
                <div className="burger__logo_text">Меню</div>
              ) : (
                <div className="header__location">
                  <img src={location} alt="#" />
                  <div className="header__street">
                    ул. Протопского 28А город Алматы
                  </div>
                </div>
              )}

              <div className="header_burger" onClick={() => setActive(!active)}>
                {active ? (
                  <img src={Close} alt="" />
                ) : (
                  <img id="" src={Burger} alt="" />
                )}
              </div>
              <div className="header_close">
                <img src={Close} alt="" />
              </div>

              <div className={active ? "header__info active" : "header__info"}>
                <div className="header__call">
                  <img src={Call} alt="" />
                  <div className="header__call_number">+7 (777) 654 44 54</div>
                </div>
                <div className="header__call">
                  <img src={Email} alt="" />
                  <div className="header__call_number">info@dentaltooth.kz</div>
                </div>
                <div className="header__icons">
                  <img src={Twitter} alt="" />
                  <img src={Instagram} alt="" />
                  <img src={Vk} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header ends   */}

        {/* Header Info start  */}
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
            <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <nav>
              <div className={active ? "header__info active" : "header__info"}>
                <div className="header__call">
                  <img src={Call} alt="" />
                  <div className="header__call_number">+7 (777) 654 44 54</div>
                </div>
                <div className="header__call">
                  <img src={Email} alt="" />
                  <div className="header__call_number">info@dentaltooth.kz</div>
                </div>
                <div className="header__icons">
                  <img src={Twitter} alt="" />
                  <img src={Instagram} alt="" />
                  <img src={Vk} alt="" />
                </div>
              </div>
              <Link className="nav__link" to="/">
                Главная
              </Link>
              <Link className="nav__link" to="/services">
                Услуги
              </Link>
              <Link className="nav__link" to="/Ourspecialists">
                Наши специалисты
              </Link>
              <Link className="nav__link" to="/reviews">
                Отзывы
              </Link>
              <Link className="nav__link" to="/block">
                Блог
              </Link>
              <Link className="nav__link" to="/contact">
                Контакты
              </Link>
            </nav>
            <button className="open-btn" onClick={() => setModalActive(true)}>
              Получить консультацию
            </button>
          </div>
        </div>
        <div className="header__burger__inner">
          <div
            className={active ? "header__info active" : "header__info"}
          ></div>
        </div>
        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </header>
    //  <!-- Header ends -->
  );
};
export default Header;
