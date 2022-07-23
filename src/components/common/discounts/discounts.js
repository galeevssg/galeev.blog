import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StaticImage } from "gatsby-plugin-image";
import Creator from "../creator";
// import * as classes from '../discounts.module.scss';

const Discounts = () => {
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <div className="row jusrify-content-space-between">
            <div className="col-12 col-xl-7 col-lg-7">
              <StaticImage
                src="../../../img/Video.png"
                alt=""
                quality={100}
                backgroundColor="transparent"
                placeholder="none"
                objectFit={"contain"}
                width={640}
                height={800}
              />
            </div>
            <div className="col-12 col-xl-4 col-lg-5">
              <h2 style={{ marginBottom: "20px" }}>the creator network®</h2>
              <div className="d-flex justify-content-space-between">
                <Creator
                  img="https://ucarecdn.com/f286d995-56e2-467c-9970-940cbc7b14bb/AlbertGaleev.png"
                  name="Galeev Albert"
                />
                <Creator icon name="Blog" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row jusrify-content-space-between">
            <div className="col-12 col-xl-7 col-lg-7">
              <StaticImage
                src="../../../img/Video.png"
                alt=""
                quality={100}
                backgroundColor="transparent"
                placeholder="none"
                objectFit={"contain"}
                width={640}
                height={800}
              />
            </div>
            <div className="col-12 col-xl-4 col-lg-5">qwer</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Discounts;
