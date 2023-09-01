import React from "react";
import Clients from "../../components/Clients";
import Reception from "../../components/Reception";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Girl from "../../assets/img/girl_medic.png";
import Main_img from "../../assets/img/main_dental.png";
import User from "../../assets/img/user.png";
import User2 from "../../assets/img/user2.png";
import User3 from "../../assets/img/user3.png";
import User4 from "../../assets/img/user4.png";
import Tooth from "../../assets/img/tooth.png";
import Time from "../../assets/svg/clinic_time.svg";
import Hands from "../../assets/svg/clinic_b.svg";
import Star from "../../assets/svg/clinic_star.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News from "../../components/News";
import dataNews from "../../Faceobject/news";
import { Layout } from "../../components/Layout";

export const MainPage = () => {
  const isMobile = window.innerWidth <= 420;
  return (
    <div className="MainPage">
      <Layout>
        {/* Main start */}
        <section className="main">
          <div className="container">
            <div className="main__inner">
              <div className="main__content_item">
                <div className="main__content">
                  <div className="main__title">
                    Стоматологическая клиника Dental Tooth
                  </div>
                  <div className="main__subtitle">
                    Безболезненное лечение зубов
                  </div>
                  <div className="main__text">
                    Талантливая команда стоматологов, признанных за высокое
                    качество стоматологических процедур.
                  </div>
                  <button className="main_btn">Записаться на прием</button>
                </div>
              </div>
              <div className="main__img">
                <img src={Girl} alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="dental">
          <div className="container">
            <div className="dental__elements">
              <div className="dental__img">
                <img src={Main_img} alt="" />
              </div>
              <div className="dental__info">
                <div className="dental__title">
                  Стоматологическая клиника <span>Dental Tooth</span>
                </div>
                <p className="dental__content">
                  Мы предлагаем широкий спектр стоматологических услуг в общей
                  клинике. Вам будет предоставлен комплексный план лечения до
                  начала любых стоматологических услуг. Чтобы записаться на
                  прием или узнать больше об услугах, доступных в
                  стоматологической клинике, пожалуйста, позвоните по телефону
                </p>
                <div className="dental__services">Мы предлагаем услуги:</div>
                <div className="dental__items">
                  <div>
                    <div className="dental__services_info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <circle
                          cx="6.75021"
                          cy="7.58932"
                          r="6.75021"
                          fill="#2378C9"
                        />
                      </svg>
                      <div className="dental__text">Отбеливание зубов</div>
                    </div>

                    <div className="dental__services_info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <circle
                          cx="6.75021"
                          cy="7.58932"
                          r="6.75021"
                          fill="#2378C9"
                        />
                      </svg>
                      <div className="dental__text">Апноэ во сне</div>
                    </div>
                  </div>
                  <div>
                    <div className="dental__services_info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <circle
                          cx="6.75021"
                          cy="7.58932"
                          r="6.75021"
                          fill="#2378C9"
                        />
                      </svg>
                      <div className="dental__text">Лечение десен</div>
                    </div>

                    <div className="dental__services_info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <circle
                          cx="6.75021"
                          cy="7.58932"
                          r="6.75021"
                          fill="#2378C9"
                        />
                      </svg>
                      <div className="dental__text">Дизайн улыбки</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main end */}
        <div className="clinic_bag">
          <div className="container">
            <div className="clinic__desc">
              <div className="clinic__service">
                <div className="clinic__inner">
                  <div className="clinic__img">
                    <img src={Time} alt="" />
                  </div>
                  <div className="clinic__title">
                    Круглосуточная поддержка клиентов
                  </div>
                  <div className="clinic__subtitle">
                    Чтобы записаться на прием или узнать больше об услугах,
                    доступных
                  </div>
                </div>
                <div className="clinic__inner">
                  <div className="clinic__img">
                    <img src={Hands} alt="" />
                  </div>
                  <div className="clinic__title">
                    Доступная стоматологическая помощь
                  </div>
                  <div className="clinic__subtitle">
                    Чтобы записаться на прием или узнать больше об услугах,
                    доступных
                  </div>
                </div>
                <div className="clinic__inner">
                  <div className="clinic__img">
                    <img src={Star} alt="" />
                  </div>
                  <div className="clinic__title">
                    Команда талантливых врачей
                  </div>
                  <div className="clinic__subtitle">
                    Чтобы записаться на прием или узнать больше об услугах,
                    доступных
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*   Our specialists start*/}
        <div className=" Our__specialists_info">
          <div className="container">
            <div className="our__inner">
              <h2>Наши специалисты</h2>
              <p className="our__subtitle">
                Мы построили нашу стоматологию на прочных опорах 22 хирургов
                MDS. В нашей команде работают опытные специалисты с многолетним
                опытом работы.
              </p>

              <div className="Our__specialists">
                <div className="Our__specialists__blog">
                  <img src={User} alt="" />
                  <h3>Игорь Протопский</h3>
                  <p>Стоматолог</p>
                </div>
                <div className="Our__specialists__blog">
                  <img src={User2} alt="" />
                  <h3>Олег Григоревич</h3>
                  <p>Стоматолог</p>
                </div>
                <div className="Our__specialists__blog">
                  <img src={User3} alt="" />
                  <h3>София Грин</h3>
                  <p>Стоматолог</p>
                </div>
                <div className="Our__specialists__blog">
                  <img src={User4} alt="" />
                  <h3>Мария Александровна</h3>
                  <p>Стоматолог</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*   Our specialists end*/}
        {/* The cost of treatment from price start */}
        <div className="services">
          <div className="container">
            <div className="services__inner">
              <div className="servies__price">
                <div className="servies__price_menu">
                  <h4>Стоимость лечения от</h4>
                  <div className="services__text">
                    Доступные цены на каждую процедуру
                  </div>
                </div>

                <div className="services__elements">
                  <div className="content__desc">
                    <h5>Отбеливание зубов</h5>
                    <div className="price">120$</div>
                  </div>
                  <div className="content__desc">
                    <h5>Реставрации</h5>
                    <div className="price">200$</div>
                  </div>
                  <div className="content__desc">
                    <h5>Имплантационная стоматология</h5>
                    <div className="price">80$</div>
                  </div>
                  <div className="content__desc">
                    <h5>Лечение десен</h5>
                    <div className="price">150$</div>
                  </div>
                  <div className="content__desc">
                    <h5>Дизайн улыбки</h5>
                    <div className="price">160$</div>
                  </div>
                  <div className="content__desc">
                    <h5>Сознательная седация</h5>
                    <div className="price">200$</div>
                  </div>
                  <div className="content__desc">
                    <h5>Апноэ во сне</h5>
                    <div className="price">150$</div>
                  </div>
                </div>
              </div>
              <div className="servies__img">
                <img className="img" src={Tooth} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* The cost of treatment from price end  */}
        {/* News start  */}

        <div className="news">
          <div className="container">
            <div className="news__items">
              <div className="news__text">Новости Dental Tooth</div>
              <div className="news__inner">
                {isMobile ? (
                  <Slider
                    dots={true}
                    infinite={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplaySpeed={3000}
                    pauseOnHover={true}
                  >
                    {dataNews.map((obj) => (
                      <div key={obj.id}>
                        <News
                          img={obj.img}
                          name={obj.name}
                          comment={obj.comment}
                          title={obj.title}
                          subtitle={obj.subtitle}
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  dataNews.map((obj) => (
                    <News
                      key={obj.id}
                      img={obj.img}
                      name={obj.name}
                      comment={obj.comment}
                      title={obj.title}
                      subtitle={obj.subtitle}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        {/* News end  */}

        <Clients />
        <Reception />
      </Layout>
    </div>
  );
};
