

export default function Quote() {
  return (
   <section >
    <article className="relative mt-10 py-10 max-w-[700px] mx-auto gap-x-5">

   
    <figure className="absolute right-0 top-0 ">
        <img src="/images/borderup.svg" alt="border" className="w-[150px] " />
    </figure>
    <div className="text-xl text-center py-10 w-[75%] mx-auto">
        <p>{`Here is the "Unilag Cleanup" initiative –
a collective effort to transform our campus
into a pristine and sustainable environment.
Join us in fostering cleanliness, waste management,
and community engagement. Let's make our
campus a shining example of environmental
responsibility!`}</p>
    </div>
    <figure className="absolute left-0 bottom-0 ">
        <img src="/images/borderdown.svg" alt="border" className="w-[150px] " />
    </figure>
    </article>
   
    <article className="w-[80%] xl:w-full mx-auto">
    <h1 className="text-3xl font-semibold text-center mt-10">How It Works</h1>
    <div className="flex flex-col xl:flex-row gap-5 justify-center mt-10">
        <div className="bg-white shadow-xl rounded-xl py-4 xl:px-5 flex flex-col items-center justify-center">
            <img src="/images/how1.svg" alt="how it works" className="w-[300px] h-[300px] object-cover" />
            <h2 className="text-2xl font-medium">Monitor Your Environment</h2>
            <p className="text-[1.1rem] mt-3">Be environmentally vigilant by monitoring <br />any area where there is heap of dirts.</p>
        </div>
        <div className="bg-white shadow-xl rounded-xl py-4  xl:px-5 flex flex-col items-center justify-center">
            <img src="/images/how2.svg" alt="how it works" className="w-[300px] h-[300px] object-cover" />
            <h2 className="text-2xl font-medium">Report Any
Dirty Area</h2>
<p className="text-[1.1rem] mt-3  font-normal">Be environmentally vigilant by monitoring <br />any area where there is heap of dirts.</p>
        </div>
        <div className="bg-white shadow-xl rounded-xl py-4  xl:px-5 flex flex-col items-center justify-center">
            <img src="/images/how3.svg" alt="how it works" className="w-[300px] h-[300px] object-cover" />
            <h2 className="text-2xl font-medium "> We Swing into Action</h2>
            <p className="text-[1.1rem] mt-3 font-normal">Be environmentally vigilant by monitoring <br />any area where there is heap of dirts.</p>
        </div>
    </div>
    </article>
   </section>
  )
}
