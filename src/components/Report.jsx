
export default function Report() {
  return (
   <section className="bg-[#1D1818] text-brown p-5 pb-12 lg:p-8" id="report" data-aos="fade-in" data-aos-duration={1000}>
     <h1 className="text-3xl font-semibold text-white mb-5 text-center mt-10"> Make Report </h1>
     <form action="" className="max-w-[800px] py-5 px-5 sm:px-8 mx-auto rounded-lg bg-[#ebebeb]">
        <label htmlFor="">
            Name
            <input type="text" placeholder="Your Name" />
        </label>
        <label htmlFor="">
          Location
            <input type="text" placeholder="Dirt Location" />
        </label>
        <label htmlFor="">
            Message
          <textarea name="" id="" cols="30" rows="10" placeholder="Additional notes" className="h-[200px]"></textarea>
        </label>
        <div>
            <button className="bg-brown text-white py-5 px-10 rounded-md flex items-center justify-center text-[1rem] mt-5">Upload Images</button>
        </div>
        <div>
            <button className="bg-brown text-white mx-auto w-full py-5 px-10 rounded-md flex items-center justify-center text-[1rem] mt-5">Submit Report</button>
        </div>

     </form>
   </section>
  )
}
