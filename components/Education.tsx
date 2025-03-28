import React from "react";

export default function Education() {
  return (
    <div id="timeline" className="timeline">
      <div className="timeline__item">
        <div className="timeline__item-header">
          <button
            className="timeline__arrow"
            type="button"
            id="item1"
            aria-labelledby="item1-name"
            aria-expanded="false"
            aria-controls="item1-ctrld"
            aria-haspopup="true"
            data-item="1"
          >
            <svg
              className="timeline__arrow-icon"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <use href="#arrow" />
            </svg>
          </button>
          <span className="timeline__dot"></span>
          <span id="item1-name" className="timeline__meta">
            <time className="timeline__date" dateTime="17-05-2026">
              June 2022 - May 2026
            </time>
            <br />
            <h3 className="font-bold text-lg">Dharmsinh Desai University</h3>
          </span>
        </div>
        <div
          className="timeline__item-body timeline__item-body--expanded"
          id="item1-ctrld"
          role="region"
          aria-labelledby="item1"
          aria-hidden="true"
        >
          <div className="timeline__item-body-content flex items-center">
            <div className="mr-2">
              <svg
                fill="#ffffff"
                height="12px"
                width="12px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 
                    C255,161.018,253.42,157.202,250.606,154.389z"
                  ></path>
                </g>
              </svg>
            </div>
            <p className="text-sm">
              B.Tech Computer Engineering <br />
              <span className="font-medium">CPI: 8.88/10</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
