import React from "react";
import "../../styles/Reviews.css";
import { Layout } from "../../components/Layout";
import Catalog from "../../components/Сatalog";
import Bag from "../../assets/img/reviews__bag.png";
import box_img from "../../assets/img/user_comment.png";
import Reception from "../../components/Reception";
export const Reviews = () => {
  return (
    <div className="Reviews">
      <Layout>
        <Catalog
          home={"Главная  /  Блог "}
          adress={" Что стоматолог может сделать для ваших зубов"}
        />
        <div className="container">
          <div className="reviews__content">
            <div className="img">
              <img src={Bag} alt="#" />
            </div>

            <div className="data_info">
              <div className="year">05 ноября 2022 </div>
              <div className="comment">
                <span>1</span> комментарий{" "}
              </div>
            </div>
            <h1>Что стоматолог может сделать для ваших зубов?</h1>
            <p className="blog1">
              Для того, чтобы вы могли видеть, откуда все это рожденное
              заблуждение тех, кто обвиняет удовольствие и восхваляет страдание,
              я раскрою все дело и объясню то самое, что было сказано этим
              открывателем истины и как бы архитектором истины. счастливая
              жизнь. Ибо никто не презирает, не ненавидит и не бежит от
              удовольствия не потому, что оно есть удовольствие, а потому, что
              великие страдания причиняют тому, кто не умеет разумно следовать
              за удовольствием.
            </p>
            <br />
            <p className="blog2">
              Кроме того, нет никого, кто, потому что он любит боль, преследует
              ее, хочет ее получить, а потому, что никогда не бывает таких
              времен, когда он ищет большого удовольствия через труд и боль.
              Ибо, говоря в мельчайших подробностях, кто из нас предпринимает
              какие-либо физические упражнения, требующие труда, кроме как для
              того, чтобы извлечь из них какую-либо пользу? Но кто может
              справедливо критиковать того, кто хочет быть в удовольствии,
              которое не приносит дискомфорта, или того, кто избегает той боли,
              которая не приносит удовольствия?»
            </p>
            <br />
            <span className="title_span">Как быть?</span>
            <p className="blog3">
              Но на самом деле мы и обвиняем, и низвергаем тех, кто достоин
              справедливой ненависти, кто смягчился лестью сиюминутных
              удовольствий, кто какими скорбями и какими бедами испорчен.
            </p>
            <br />
            <span className="title">Что с этим делать?</span>
            <p>
              Но на самом деле мы и обвиняем их, и справедливой ненавистью
              приводим тех, кто этого заслуживает, и обращаем их в бегство. Тех,
              кто размягчен и развращен лестью сиюминутных удовольствий, тех,
              кто исполнен печалей. Равным образом виновны и те, которые
              оставляют свои обязанности из-за слабости ума, то есть трудов и
              болей. Ибо в свободное время, когда мы свободны в выборе, ничто не
              мешает нам ни в малейшей степени. С другой стороны, мы осуждаем с
              праведным негодованием и неприязнью к людям, которые настолько
              обольщены и деморализованы прелестями сиюминутного удовольствия,
              настолько ослеплены желанием, что не могут предвидеть страданий и
              бед, которые неизбежно последуют за ними; и в равной степени
              виноваты те, кто не выполняет свой долг.
            </p>

            <div className="slider__inner_item">
              <div className="slider__inner">
                <div className="slider__left">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="28"
                      viewBox="0 0 48 28"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_204_822)">
                        <path
                          d="M13.1646 27.1646L15.3026 25.0264L5.78827 15.5119L48 15.5119L48 12.4881L5.78827 12.4881L15.3026 2.97369L13.1646 0.835523L2.66382e-06 14.0001L13.1646 27.1646Z"
                          fill="#302D2D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_204_822">
                          <rect
                            width="48"
                            height="28"
                            fill="white"
                            transform="translate(48 28) rotate(180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="slider__text">
                    Видео о стоматологии Dental Tooth
                  </div>
                </div>

                <div className="slider__right">
                  <div className="slider__text">
                    Как выбрать стоматологию и не ошибиться?
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="28"
                      viewBox="0 0 48 28"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_204_827)">
                        <path
                          d="M34.8354 0.835449L32.6974 2.97362L42.2117 12.4881L0 12.4881L0 15.5119L42.2117 15.5119L32.6974 25.0263L34.8354 27.1645L48 13.9999L34.8354 0.835449Z"
                          fill="#302D2D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_204_827">
                          <rect width="48" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment__items">
              <div className="leave__a_comment">
                <div className="comment__title">Оставить комментарий</div>
                <form>
                  <input
                    className="input_text"
                    type="text"
                    placeholder="Ваше имя"
                  />
                  <input
                    className="input_text"
                    type="email"
                    placeholder="Ваш email"
                  />
                  <textarea
                    name=""
                    id=""
                    cols="9"
                    rows="5"
                    placeholder="Комментарий"
                  ></textarea>
                </form>
                <button className="reviews_btn">Отправить</button>
              </div>

              <div className="comment__blog">
                <div className="desc">
                  <span> 1</span> комментарий о посте <br /> “Стоматология
                  липкий”
                </div>
              </div>
            </div>

            <div className="user__box">
              <div className="box_img">
                <img src={box_img} alt="" />
              </div>
              <div className="box__inner">
                <div className="user_name">Лена До</div>
                <div className="user_data">
                  08 сентября, 2022 1 минуту назад
                </div>
                <div className="description">
                  Очень интересный пост. Узнала много нового.
                </div>
                <div className="message">Ответить</div>
              </div>
            </div>
          </div>
        </div>
        {/* <Reception /> */}
      </Layout>
    </div>
  );
};
