import React from "react";
import "../styles/Catalog.css";
import { Link } from "react-router-dom";

const Сatalog = ({ home, adress }) => {
  return (
    <div className="catalog__bag">
      <div className="container">
        <div className="catalog__inner">
          <div className="catalog__img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M24.8102 11.6674L20.1975 7.72831C20.2028 7.70136 20.2082 7.67442 20.2136 7.64209V2.49053C20.2082 2.18337 19.9657 1.93549 19.6586 1.92472H17.0828C16.7864 1.92472 16.5439 2.18876 16.5439 2.49053V4.62444L12.8527 1.47746C12.6533 1.30502 12.357 1.30502 12.1522 1.47746L0.194741 11.662C-0.0369714 11.8506 -0.0639147 12.1901 0.124688 12.4218C0.313292 12.6535 0.652777 12.6805 0.88449 12.4919C0.889879 12.4865 0.889879 12.4865 0.895267 12.4811L12.5024 2.5983L16.6571 6.13865L19.1413 8.25101L24.115 12.4865C24.3413 12.6805 24.6808 12.6535 24.8748 12.4272C25.0634 12.2009 25.0365 11.8614 24.8102 11.6674ZM19.1305 6.81762L17.6217 5.5459V3.00784H19.1305V6.81762Z"
                fill="#302D2D"
              />
              <path
                d="M22.4338 12.7559L20.9196 11.4627L12.8528 4.57055C12.6534 4.39811 12.357 4.39811 12.1523 4.57055L4.08545 11.4627L2.57124 12.7559C2.34491 12.9499 2.31797 13.2894 2.51196 13.5157C2.70056 13.7421 3.03466 13.769 3.2556 13.5804L3.26098 13.575L3.93457 12.993V23.0968C3.93996 23.3985 4.18783 23.6464 4.4896 23.6518H20.5101C20.8119 23.6464 21.0597 23.4039 21.0651 23.0968V12.993L21.7387 13.575C21.8357 13.6558 21.9543 13.7043 22.0836 13.7043C22.2399 13.7043 22.3907 13.6343 22.4931 13.5157C22.6925 13.284 22.6602 12.9445 22.4338 12.7559ZM14.658 22.5687H10.3471V16.7489H14.658V22.5687ZM15.7357 22.5687V16.2262C15.7357 15.9299 15.5148 15.6712 15.2184 15.6712H9.78665C9.49028 15.6712 9.26934 15.9299 9.26934 16.2262V22.5687H5.0123V12.0716L12.5025 5.69139L19.9928 12.0716V22.5687H15.7357Z"
                fill="#302D2D"
              />
            </svg>
          </div>
          <div className="text">
            <Link to="/">{home}</Link> /<Link to=""> {adress}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Сatalog;
