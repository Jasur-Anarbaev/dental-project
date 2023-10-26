import React from "react";
import { Layout } from "../../components/Layout";
import "../Page not found/Notfound.css";
import img_404 from "../../assets/img/notfound_img.png";
export const Notfound = () => {
  return (
    <Layout>
      <div className="notfound__bag">
        <div className="container">
          <div className="notfound__top">
            <div className="notfound_img">
              <img src={img_404} alt="" />
            </div>
          </div>
          <div className="notfound__box">
            <div className="not__title">Страница не найдена</div>
            <div className="not__subtitle">
              Перейти на <a href="http://localhost:3000">главную</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
