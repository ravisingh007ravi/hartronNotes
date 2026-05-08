import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SwiperImg() {
  const imgData = [
    "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/en/topspecialbanner/2026/04/21/KEB6mRBlamDP34Ho/m0owAEWD4HQNvauTjQzeoin4QIdePtFF.jpeg",
    "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/jp/topspecialbanner/2026/03/18/tAyil6oNw86uU5zT/HybpmAQXvUaSZJkatQYvl8PhJrFoAKSs.jpeg",
    "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/jp/topspecialbanner/2025/05/20/NERBQ2HMZjKSOEri/UI6HcxgNU9jpUQNaJ4dhCGybaHDPcsyy.jpeg",
    "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/jp/topspecialbanner/2025/04/03/ppDnRCB1Iut9NU6r/PmzliAeVfQ4lsHMO1zoyr59SB4dmfuVl.jpeg",
    "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/jp/topspecialbanner/2024/09/26/mSnkd5HM3FMFfmdf/KV-pc-jp.jpg"
  ]
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false, }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="z-50 select-none"
    >
      {
        imgData.map((v, i) => (
          <SwiperSlide key={i}><img src={v} alt="img" /></SwiperSlide>
        ))
      }
    </Swiper>
  )
}
