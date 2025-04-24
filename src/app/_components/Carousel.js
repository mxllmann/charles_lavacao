"use client";

import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "../_style/carousel.css"; //Tive de usar CSS pois o Swiper não aceita CSS-in-JS

import { Autoplay, Pagination, Navigation } from "swiper/modules"; // <-- ATUAL!

const Carousel = () => {
  const router = useRouter();

  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
      >
        <SwiperSlide>
          <img
            src="/assets/lavacao.jpg"
            alt="Imagem da Lavação"
            onClick={() => {
              localStorage.setItem('scrollTarget', 'lavacao'); 
              router.push('/servicos');
            }}
            className="slide-image"
          />
          <div className="overlay-text">
            <h2>Lavação Técnica com Cera</h2>
            <p>Deixe seu carro brilhando! Clique aqui para saber mais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/interior.jpg"
            alt="Imagem do Interior"
            onClick={() => {
              localStorage.setItem('scrollTarget', 'interior'); 
              router.push('/servicos');
            }}
            className="slide-image"
          />
          <div className="overlay-text">
            <h2>Higienização de Interiores</h2>
            <p>Deixe seu carro cheiroso! Clique aqui para saber mais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/motor.jpg"
            alt="Imagem do Motor"
            onClick={() => {
              localStorage.setItem('scrollTarget', 'motor'); 
              router.push('/servicos');
            }}
            className="slide-image"
          />
          <div className="overlay-text">
            <h2>Limpeza do Cofre do Motor</h2>
            <p>Faça seu motor voar! Clique para saber mais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/vidro.jpg"
            alt="Imagem dos Vidros"
              onClick={() => {
              localStorage.setItem('scrollTarget', 'vidro'); 
              router.push('/servicos');
            }}
            className="slide-image"
          />
          <div className="overlay-text">
            <h2>Remoção de Manchas dos Vidros de Chuva Ácida</h2>
            <p>Deixe seus vidros um espelho! Clique para saber mais</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
