import React from 'react'
import Feature from '../components/MainMenu/FeaturedSection/Feature';
import HeroSection from '../components/MainMenu/HeroSection/HeroSection';

function Home() {
    return (
        <div>
            <HeroSection />
            <Feature />
        </div>
    )
}

export default Home;

// .hero-container {
//     /* background: url('/images/img-home.jpg') center center/cover no-repeat; */
//     height: 87vh;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
//     object-fit: contain;
//     padding-top: 217px;
//   }

//   .hero-container > h1 {
//     color: #fff;
//     font-size: 100px;
//     margin-top: -145px;
//   }

//   .hero-container > p {
//     margin-top: 8px;
//     color: #fff;
//     font-size: 32px;
//     font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
//       'Lucida Sans', Arial, sans-serif;
//   }

//   .hero-btns {
//     margin-top: 32px;
//   }

//   .hero-btns .btn {
//     margin: 6px;
//   }

//   .fa-play-circle {
//     margin-left: 4px;
//   }

//   @media screen and (max-width: 960px) {
//     .hero-container > h1 {
//       font-size: 66px;
//       margin-top: -239px;
//     }
//   }

//   @media screen and (max-width: 768px) {
//     .hero-container > h1 {
//       font-size: 50px;
//       margin-top: -100px;
//     }

//     .hero-container > p {
//       font-size: 30px;
//     }

//     .btn-mobile {
//       display: block;
//       text-decoration: none;
//     }

//     .btn {
//       width: 100%;
//     }
//   }