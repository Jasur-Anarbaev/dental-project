import React from "react";
import "../styles/Reception.css";
import Resection from "../assets/img/reception_img.png";
const Reception = () => {
  return (
    <section>
      <div className="reception_bag">
        <div className="container">
          <div className="reception__items">
            <div className="reception__box">
              <div className="reception__tile">Записаться на прием</div>
              <div className="input_name">
                <input type="text" placeholder="Ваше имя" />
              </div>
              <div className="input_name">
                <input type="tell" placeholder="Ваш телефон" />
              </div>
              <div className="reception_btn">
                <button className="button">Записаться на прием</button>
              </div>
              <div className="subtitle">
                <p className="reception_text">
                  Нажимая кнопку, я даю свое согласие на обработку моих
                  персональных данных
                </p>
              </div>
            </div>
            <div className="reception_img">
              <img src={Resection} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Reception;
