

export default function Work() {
  return (
   <section id="works" data-aos="fade-right" data-aos-duration={1000}>
    <h1 className="text-3xl font-semibold text-black mb-5 text-center mt-10"> At Work </h1>
    <article className='grid  sm:grid-rows-2 sm:!grid-flow-col gap-5  place-content-center px-5 lg:px-0'>
        <img src="/images/work1.png" alt="work"  className="sm:w-[400px] sm:h-[300px] w-full h-[300px]  object-cover  rounded-xl" />
        <img src="/images/work2.png" alt="work"  className="sm:w-[400px] sm:h-[300px] w-full h-[300px] object-cover  sm:-mt-12 rounded-xl"/>
        <img src="/images/work3.png" alt="work" className="sm:w-[400px] sm:h-[350px] w-full h-[300px]  object-cover  rounded-xl" />
        <img src="/images/work4.png" alt="work" className="sm:w-[400px] sm:h-[250px] w-full h-[300px]  object-cover  rounded-xl" />
        <img src="/images/work5.png" alt="work"className='row-span-2 sm:w-[450px] w-full h-[300px] sm:h-[620px] object-cover  rounded-xl' />
    </article>
   </section>
  )
}
