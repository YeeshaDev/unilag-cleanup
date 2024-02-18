

export default function Community() {
  return (
   <section className="my-10 " id="community" data-aos="fade-in" data-aos-duration={1000}>
    <h1 className="text-3xl font-semibold text-center mt-10">Our Community</h1>
   <div className="flex flex-col-reverse xl:flex-row gap-x-10 justify-center px-2  sm:px-5 mt-10 max-w-[1300px] mx-auto">
  <div>
  <p className="text-[1.1rem] my-5 text-center xl:text-start">UCU is a dynamic platform where students actively engage in monitoring and managing waste within our school environment. By joining this community, students become part of a collaborative effort to create a cleaner and more sustainable campus. </p>
<p className="text-[1.1rem] my-5 text-center xl:text-start">{`By joining Unilag CleanUp, students embark on a journey of empowerment and responsibility. Through their active participation, 
they contribute directly to the efforts of maintaining a cleaner and healthier school environment.
 Whether it's reporting littered areas, organizing clean-up activities, or implementing waste reduction initiatives, every student's contribution matters.`}</p>
   <button className="bg-orange py-3 text-lg px-10 rounded-lg  flex items-center justify-center mx-auto xl:mx-1 mb-5">Join Us</button>
  </div>
    <img src="https://img.freepik.com/premium-photo/team-volunteers-picking-up-rubbish_274689-1113.jpg?size=626&ext=jpg&uid=P113225061&ga=GA1.1.1295037106.1699551090&semt=ais" alt="" className="rounded-xl object-cover " />
   
   </div>
   </section>
  )
}
