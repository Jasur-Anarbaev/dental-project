import React from "react";
import { Layout } from "../../components/Layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News from "../../components/News";
import dataNews from "../../Faceobject/news";
import Reception from "../../components/Reception";
import Catalog from "../../components/Сatalog";

export const Block = () => {
  const isMobile = window.innerWidth <= 420;
  return (
    <div className="Block">
      <Layout>
        <Catalog home={"Главная"} adress={"Блог"} />

        <div className="news">
          <div className="container">
            <div className="news__items">
              <div className="news__text">Блог</div>
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
        <Reception />
      </Layout>
    </div>
  );
};
