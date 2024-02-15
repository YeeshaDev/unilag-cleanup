import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade,Autoplay } from 'swiper/modules';
import { FaArrowDown } from 'react-icons/fa';

function Hero() {
    return (
        <section>
            <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        centeredSlides
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={false}
        modules={[EffectFade,Autoplay]}
        className="mySwiper"
      >
        {Details.map((item) => (
            <SwiperSlide key={item?.id}>
            <div className='overlay '></div>
            <img src={item.image} />
            <div className='absolute top-[25%] sm:top-[40%] left-1/2 text-white text-4xl lg:text-6xl -translate-x-1/2 -translat-y-1/2 z-50'>
                <h1 className='sm:whitespace-nowrap w-[350px] sm:w-full'>A Cleaner <span className='text-orange semibold'>UNILAG</span>  Starts With  Us</h1>
                <h2 className='my-5 '>Let’s Clean Up <span className='text-orange font-semibold'>{item?.location}
</span></h2>

            </div>
          
         
        </SwiperSlide> 
        ))}
       
      </Swiper>
      <div className=' absolute bottom-16 sm:top-[530px]!w-[150px] !h-[150px]  sm:!w-[180px] sm:!h-[180px] left-1/2 text-white text-4xl lg:text-6xl -translate-x-1/2 -translat-y-1/2  z-[10]'>
        <img src="/images/heroindicator.png"  alt="indicator" className='w-full h-full object-cover' />
       <span className='absolute animate-bounce top-[40%] left-[40%] -translate-x-1/2 -translat-y-1/2 text-orange text-4xl'> <FaArrowDown /></span>
      </div>
        </section>
    )
}

export default Hero
 const Details = [
    {
        id:1,
        image:"/images/hero.png",
        location:'Science'
    },
    {
        id:2,
        image:"/images/hero-2.jpg",
        location:'Gate'
    },
    {
        id:3,
        image:"/images/hero4.jpg",
        location:'Lagoon Front'
    },
    {
        id:4,
        image:"/images/hero3.webp",
        location:'New Hall'
    }

 ]