import React from "react";
import "./Blog.scss";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="cardSec__title">
          <h2>OUR LATEST BLOG</h2>
          <div className="line"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>
        <div className="blog__cards">
          <div className="blog__cards__card">
            <div className="blog__cards__card__img">
              <img
                src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg.webp"
                alt=""
              />
            </div>
            <h5>Playback: Akufo-Addo speaks to business community</h5>
            <p className="date">
              Posted by <span>admin</span> at 04 Feb, 2017
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sagittis iaculis velit in tristique. Curabitur ac urna urna sed
              accumsan... Read More
            </p>
          </div>

          <div className="blog__cards__card">
            <div className="blog__cards__card__img">
              <img
                src="https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg.webp"
                alt=""
              />
            </div>
            <h5>Playback: Akufo-Addo speaks to business community</h5>
            <p className="date">
              Posted by <span>admin</span> at 04 Feb, 2017
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sagittis iaculis velit in tristique. Curabitur ac urna urna sed
              accumsan... Read More
            </p>
          </div>

          <div className="blog__cards__card">
            <div className="blog__cards__card__img">
              <img
                src="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg.webp"
                alt=""
              />
            </div>
            <h5>Playback: Akufo-Addo speaks to business community</h5>
            <p className="date">
              Posted by <span>admin</span> at 04 Feb, 2017
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sagittis iaculis velit in tristique. Curabitur ac urna urna sed
              accumsan... Read More
            </p>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Blog;
