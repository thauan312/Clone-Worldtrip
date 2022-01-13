import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './images/Header.png';
import Banner from './images/BannerEurope.png';
import Vector from './images/Vector.png';
import Info from './images/Info.png';
import Londres from './images/Londres.png';
import Paris from './images/Paris.png';
import Roma from './images/Roma.png';
import Praga from './images/Praga.png';
import Amsterda from './images/Amsterdã.png';


export default function Europe() {
    return (
      <div className="europe">
      <header>
        <div className="logo">
          <Image
            src={Logo}
            unsized={true}
          />
          <div className="voltar">
            <Link href="./">
              <a>
              <Image
              src={Vector}
              unsized={true}
              />
              </a>
            </Link>
          </div>
        </div>
        <div className="banner">     
          <Image
            src={Banner}
            unsized={true}
          />
        </div>
      </header>
      <body>
      
        <div className="bio">
          <p>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</p>
        </div>
        <div className="info">     
          <Image
            src={Info}
            unsized={true}
          />
        </div>
        <div className="cities">
          <p className="info3">Cidades +100</p>
          <div className="londres">
          <Image 
            src={Londres}
            unsized={true}
          />
          </div>
          <div className="paris">
          <Image 
            src={Paris}
            unsized={true}
          />
          </div>
          <div className="roma">
          <Image 
            src={Roma}
            unsized={true}
          />
          </div>
          <div className="praga">
          <Image 
            src={Praga}
            unsized={true}
          />
          </div>
          <div className="amsterda">
          <Image 
            src={Amsterda}
            unsized={true}
          />
          </div>

        </div>
    </body>
    </div>
    ) 
  }