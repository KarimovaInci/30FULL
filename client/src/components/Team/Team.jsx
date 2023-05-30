import React from "react";
import "./Team.scss"

const Team = () => {
  return (
    <>
      <div className="team">
        <div className="cardSec__title">
          <h2>MEET OUR TEAM</h2>
          <div className="line"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>
        <div className="team__cards">
          <div className="team__cards__card">
            <div className="team__cards__card__img">
              <img
                src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg.webp"
                alt=""
              />
            </div>
            <div className="team__cards__card__body">
              <h4>Gonzalez Gina</h4>
              <p>Web Developer</p>
            </div>
          </div>

          <div className="team__cards__card">
            <div className="team__cards__card__img">
              <img
                src="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg.webp"
                alt=""
              />
            </div>
            <div className="team__cards__card__body">
              <h4>Holly Vincenzini</h4>
              <p>Media Partner</p>
            </div>
          </div>

          <div className="team__cards__card">
            <div className="team__cards__card__img">
              <img
                src="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg.webp"
                alt=""
              />
            </div>
            <div className="team__cards__card__body">
              <h4>Ramirez Minita</h4>
              <p>Graphick Design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
