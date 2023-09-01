import React from "react";
import "../styles/News.css";

const News = ({ img, name, comment, title, subtitle }) => {
  return (
    <section>
      <div className="news__inner1">
        <div className="news__content">
          <div className="news__content_desc">
            <div className="img">
              <img src={img} alt="" />
            </div>
            <div className="news__data">
              <h6>{name}</h6>
              <div className="comment">
                <span>0 </span> {comment}
              </div>
            </div>
            <div className="news__texts">
              <div className="news__title">{title}</div>
              <div className="news__subtitle">{subtitle}</div>
              <div className="news_btn">
                <button className="btn">Читать далее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default News;
