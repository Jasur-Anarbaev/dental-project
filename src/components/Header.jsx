import React from "react";
import "../styles/Header.css";
import location from "../assets/svg/location.svg";
import Call from "../assets/svg/call.svg";
import Email from "../assets/svg/email.svg";
import Twitter from "../assets/svg/twitter.svg";
import Instagram from "../assets/svg/instagram.svg";
import Vk from "../assets/svg/vk.svg";
import Logo from "../assets/svg/logo.svg";

const Header = () => {
  return (
    // <!-- Header  start  -->
    <header>
      <div className="header__address">
        <div className="container">
          <div className="header__items">
            <div className="header__location">
              <img src={location} alt="" />
              <div className="header__street">
                ул. Протопского 28А город Алматы
              </div>
            </div>

            <div className="header__info">
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
            <img src={Logo} alt="" />
          </div>
          <nav>
            <a className="nav__link" href="http://localhost:3000/">
              Главная
            </a>
            <a className="nav__link" href="">
              Услуги
            </a>
            <a className="nav__link" href="">
              Наши специалисты
            </a>
            <a className="nav__link" href="http://localhost:3000/reviews">
              Отзывы
            </a>
            <a className="nav__link" href="http://localhost:3000/block">
              Блог
            </a>
            <a className="nav__link" href="">
              Контакты
            </a>
          </nav>
          <button>Получить консультацию</button>
        </div>
      </div>
    </header>
    //  <!-- Header ends -->
  );
};
export default Header;
