import React from "react";
import "./Modal.css";
import Modal_img from "../assets/svg/modal_logo.svg";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(true)}
    >
      <div
        className={active ? "modal__content" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__items">
          <div className="modal__top">
            <div className="modal__logo">
              <img src={Modal_img} alt="" />
            </div>
            <div className="modal__close" onClick={() => setActive(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M0.977032 19.0005C0.72675 19.0005 0.476467 18.9053 0.28631 18.7137C-0.0954366 18.3319 -0.0954366 17.713 0.28631 17.3313L17.3313 0.28631C17.713 -0.0954366 18.3319 -0.0954366 18.7137 0.28631C19.0954 0.668056 19.0954 1.28696 18.7137 1.66895L1.66895 18.7137C1.47736 18.9041 1.22708 19.0005 0.977032 19.0005Z"
                  fill="#F0DFDF"
                />
                <path
                  d="M18.0232 19.0005C17.7729 19.0005 17.5229 18.9053 17.3325 18.7137L0.28631 1.66895C-0.0954366 1.28696 -0.0954366 0.668056 0.28631 0.28631C0.668056 -0.0954366 1.28696 -0.0954366 1.66895 0.28631L18.7137 17.3313C19.0954 17.713 19.0954 18.3319 18.7137 18.7137C18.5221 18.9041 18.2721 19.0005 18.0232 19.0005Z"
                  fill="#F0DFDF"
                />
              </svg>
            </div>
          </div>
          <div className="modal__title">Получить консультацию</div>
          <div className="subtitle_input">
            <input className="modal_input" type="text" placeholder="Ваше имя" />
          </div>
          <div className="subtitle_input">
            <input
              className="modal_input"
              type="tell"
              placeholder="Ваш телефон"
            />
          </div>
          <div className="modal__btn">
            <button className="modal__header_btn">Отправить</button>
          </div>
          <div className="modal__desc">
            Нажимая кнопку, я даю свое согласие на обработку моих персональных
            данных
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
