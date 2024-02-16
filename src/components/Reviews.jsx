import { Swiper, SwiperSlide } from 'swiper/react';
import { IoStar } from "react-icons/io5";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

export default function Reviews() {
  return (
  <section className='px-4 sm:px-0'>
     <h1 className="text-3xl font-semibold text-black mb-5 text-center mt-10 "> Your Reviews Matters </h1>
    <article className="relative mt-10 py-10 px-3 max-w-[1200px] mx-auto gap-x-5">

   
<figure className="absolute right-0 top-0 ">
    <img src="/images/borderup.svg" alt="border" className="w-[150px] " />
</figure>
<div>
<Swiper
 spaceBetween={10}
 slidesPerView={1}
        
        navigation={false}
        
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
           
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
           
          }}
        modules={[Pagination,Autoplay]}
        
        className="mySwiper grid grid-cols-3"
      >
        {reviewsData.map((item) => (
          <SwiperSlide key={item.id} >
       <div className='bg-brown text-white p-3 w-full rounded-lg sm:w-[350px] mx-auto'>
       <p>{item?.quote}</p>
        <div className='flex items-center gap-x-5 mt-3'>
          <img src={item?.img}  alt={item.name} className='!w-16 object-contain !h-16 rounded-full' />
          <div className='flex flex-col items-start '>
          <p>{item.name}</p>
          <span className='flex items-center text-orange gap-2'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
          </div>
        </div>
       </div>
          </SwiperSlide>
        ))}
        </Swiper>
</div>
<figure className="absolute left-0 bottom-0 ">
        <img src="/images/borderdown.svg" alt="border" className="w-[150px] " />
    </figure>
</article>
<button className='w-[200px] mt-7 h-14 border-2 rounded-lg mx-auto flex items-center justify-center text-lg mb-5 border-brown '>Drop a Review</button>
  </section>
  )
}
 const reviewsData = [
  {
    id:1,
    quote:`"This platform
    exceeded my expectations. They
    were not only efficient but also
    thorough in ensuring every corner
    of our campus was spotless.
    Highly recommend their
    meticulous work.”`,
    name:'Jane Doe',
    img:'https://img.freepik.com/premium-photo/happy-woman_68067-544.jpg?size=626&ext=jpg&uid=P113225061&ga=GA1.1.1295037106.1699551090&semt=ais'
  },
  {
    id:2,
    quote:`"This platform
    exceeded my expectations. They
    were not only efficient but also
    thorough in ensuring every corner
    of our campus was spotless.
    Highly recommend their
    meticulous work.”`,
    name:'Jane Doe',
    img:'https://img.freepik.com/premium-photo/happy-woman_68067-544.jpg?size=626&ext=jpg&uid=P113225061&ga=GA1.1.1295037106.1699551090&semt=ais'
  },
  {
    id:3,
    quote:`"The university ucu platform
    exceeded my expectations. They
    were not only efficient but also
    thorough in ensuring every corner
    of our campus was spotless.
    Highly recommend their
    meticulous work.”`,
    name:'John Doe',
    img:'https://img.freepik.com/premium-photo/happy-woman_68067-544.jpg?size=626&ext=jpg&uid=P113225061&ga=GA1.1.1295037106.1699551090&semt=ais'
  },
  {
    id:4,
    quote:`"The university ucu platform
    exceeded my expectations. They
    were not only efficient but also
    thorough in ensuring every corner
    of our campus was spotless.
    Highly recommend their
    meticulous work.”`,
    name:'John Doe',
    img:'https://img.freepik.com/premium-photo/happy-woman_68067-544.jpg?size=626&ext=jpg&uid=P113225061&ga=GA1.1.1295037106.1699551090&semt=ais'
  },
  {
    id:5,
    quote:`"The university ucu platform
    exceeded my expectations. They
    were not only efficient but also
    thorough in ensuring every corner
    of our campus was spotless.
    Highly recommend their
    meticulous work.”`,
    name:'John Doe',
    img:'https://img.freepik.com/premium-photo/happy-woman_68067-544.jpg?size=626&ext=jpg&uid=P113225061&ga=GA1.1.1295037106.1699551090&semt=ais'
  },
 ]