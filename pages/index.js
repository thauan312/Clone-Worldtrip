import React from 'react';
import styled from 'styled-components';
import SwiperCore, {Navigation,Pagination,Mousewheel,Keyboard} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import Image from 'next/image';
import Logo from './images/Header.png';
import Banner from './images/Banner.png';
import Traveltypes from './images/Traveltypes.png';
import Slide from './images/ContinentSlide.png';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <div className="home">
      <header>
        <div className="logo">
          <Image
          src={Logo}
          unsized={true}
         />
        </div>
        <div className="banner">
          <Image
          src={Banner}
          unsized={true}
          />
        </div>

      </header>
        <body>
          <div className="travel">
            <Image
            src={Traveltypes}
            unsized={true}
            />
          </div>
          <p className="divider"></p>

          <div>
            <h2>Vamos nessa?<br/>Então escolha seu continente</h2>
          </div>

          <div className="container">
          <Swiper 
            cssMode={true} 
            navigation={true} 
            pagination={true} 
            mousewheel={true} 
            keyboard={true} 
            className="mySwiper">
          <SwiperSlide> 
            <Link href="/europe">
             <a><Image src={Slide}/></a>

             </Link>
             <p className="info2">Europa</p>

             <p className="description">O continente mais antigo.</p>
            
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper>
          </div>
        </body>
    </div>
  ) 
}
