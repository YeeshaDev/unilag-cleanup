

export default function Quote() {
  return (
   <section id="quote" className=" relative overflow-hidden ">
    <article className="relative mt-10 py-10 max-w-[700px] mx-auto gap-x-5 " data-aos="fade-up" data-aos-duration={1000}>

   
    <figure className="absolute right-4 top-0 ">
        <img src="/images/borderup.svg" alt="border" className="w-[150px] " />
    </figure>
    <div className="text-xl text-center py-10 w-[90%] mx-auto">
        <p>{`Here is the "Unilag Cleanup" initiative –
a collective effort to transform our campus
into a pristine and sustainable environment.
Join us in fostering cleanliness, waste management,
and community engagement. Let's make our
campus a shining example of environmental
responsibility!`}</p>
    </div>
    <figure className="absolute left-4 bottom-0 ">
        <img src="/images/borderdown.svg" alt="border" className="w-[150px] " />
    </figure>
    
    </article>
    <div className='rollers absolute right-2 lg:right-32 top-[355px] sm:top-[250px] lg:top-[180px] flex items-end justify-end '>
            <img src='/images/rollers.svg'
            alt='rollers'
            className="w-[140px] h-[140px] lg:w-[200px] lg:h-[200px]"
            />
            <div className="absolute bg-orange w-12 h-12 top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-xl"></div>
          </div>
    <article className="w-[80%] xl:w-full mx-auto mt-20">
    <h1 className="text-3xl font-semibold text-center mt-10">How It Works</h1>
    <div className="flex flex-col text-center xl:flex-row gap-5 justify-center mt-10" >
        <div className="bg-[#fcfcfc] shadow-lg rounded-xl py-4 px-5 flex flex-col items-center justify-center lg:mb-5" data-aos="fade-left" data-aos-duration={1000}>
            <img src="/images/how1.svg" alt="how it works" className="w-[300px] h-[300px] object-cover" />
            <h2 className="text-2xl font-medium text-center">Monitor Your Environment</h2>
            <p className="text-[1.1rem] mt-3">Be environmentally vigilant by monitoring <br />any area where there is heap of dirts.</p>
        </div>

        <div className="bg-[#fcfcfc] shadow-lg rounded-xl py-4  px-5 flex flex-col items-center justify-center lg:mb-5" data-aos="fade-right" data-aos-duration={1000}>
            <img src="/images/how2.svg" alt="how it works" className="w-[300px] h-[300px] object-cover" />
            <h2 className="text-2xl font-medium">Report Any
Dirty Area</h2>
<p className="text-[1.1rem] mt-3  font-normal">Be environmentally vigilant by monitoring <br />any area where there is heap of dirts.</p>
        </div>
        <div className="bg-[#fcfcfc] shadow-lg rounded-xl py-4  px-5 flex flex-col items-center justify-center mb-5" data-aos="fade-left" data-aos-duration={1000}>
            <img src="/images/how3.svg" alt="how it works" className="w-[300px] h-[300px] object-cover" />
            <h2 className="text-2xl font-medium "> We Swing into Action</h2>
            <p className="text-[1.1rem] mt-3 font-normal">Be environmentally vigilant by monitoring <br />any area where there is heap of dirts.</p>
        </div>
    </div>
    </article>
   </section>
  )
}
