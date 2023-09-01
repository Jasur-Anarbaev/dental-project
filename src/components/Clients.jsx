import React from "react";
import Client from "../assets/img/client_reviews.png";
import Dental from "../assets/img/dental.png";
import Tw from "../assets/svg/icon_tw.svg";
import Vk from "../assets/svg/icon_vk.svg";
import Left from "../assets/svg/slider_left.svg";
import Right from "../assets/svg/slider_right.svg";
import "../styles/Clients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Clients = () => {
  return (
    <section>
      <div className="our__clients">
        <div className="container">
          <div className="our__inner">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="our__blog">
                  <div className="blog__title">Что говорят наши клиенты</div>
                  <div className="blog__reviews">
                    <div className="reviews__items">
                      <div className="review_img">
                        <img src={Client} alt="" />
                      </div>

                      <div className="review__comment">
                        <div className="review__content">
                          Отличная стоматология. Заболел зуб. Обратился в эту
                          стоматологию. Качество обслуживания на высшем уровне.
                          Сделали отбеливание зубов. Все отлично. Однозначно
                          рекомендую.
                        </div>
                        <div className="box">
                          <div className="client__name">Алина Беляева</div>
                          <div className="icons">
                            <div className="client__social">
                              <img src={Tw} alt="" />
                            </div>
                            <div className="client__social">
                              <img src={Vk} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="our__blog">
                  <div className="blog__title">Что говорят наши клиенты</div>
                  <div className="blog__reviews">
                    <div className="reviews__items">
                      <div className="review_img">
                        <img src={Client} alt="" />
                      </div>
                      <div className="review__comment">
                        <div className="review__content">
                          Отличная стоматология. Заболел зуб. Обратился в эту
                          стоматологию. Качество обслуживания на высшем уровне.
                          Сделали отбеливание зубов. Все отлично. Однозначно
                          рекомендую.
                        </div>
                        <div className="box">
                          <div className="client__name">Алина Беляева</div>
                          <div className="icons">
                            <div className="client__social">
                              <img src={Tw} alt="" />
                            </div>
                            <div className="client__social">
                              <img src={Vk} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="our__blog">
                  <div className="blog__title">Что говорят наши клиенты</div>
                  <div className="blog__reviews">
                    <div className="reviews__items">
                      <div className="review_img">
                        <img src={Client} alt="" />
                      </div>

                      <div className="review__comment">
                        <div className="review__content">
                          Отличная стоматология. Заболел зуб. Обратился в эту
                          стоматологию. Качество обслуживания на высшем уровне.
                          Сделали отбеливание зубов. Все отлично. Однозначно
                          рекомендую.
                        </div>
                        <div className="box">
                          <div className="client__name">hjgjhgjghj Беляева</div>
                          <div className="icons">
                            <div className="client__social">
                              <img src={Tw} alt="" />
                            </div>
                            <div className="client__social">
                              <img src={Vk} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="our__blog">
                  <div className="blog__title">Что говорят наши клиенты</div>
                  <div className="blog__reviews">
                    <div className="reviews__items">
                      <div className="review_img">
                        <img src={Client} alt="" />
                      </div>

                      <div className="review__comment">
                        <div className="review__content">
                          Отличная стоматология. Заболел зуб. Обратился в эту
                          стоматологию. Качество обслуживания на высшем уровне.
                          Сделали отбеливание зубов. Все отлично. Однозначно
                          рекомендую.
                        </div>
                        <div className="box">
                          <div className="client__name">Алина Беляева</div>
                          <div className="icons">
                            <div className="client__social">
                              <img src={Tw} alt="" />
                            </div>
                            <div className="client__social">
                              <img src={Vk} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Clients;
