import { Link } from 'react-router-dom';
import docImage from '../assets/images/hero-img01.png' ;
import heroimg2 from'../assets/images/hero-img02.png';
import heroimg3 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import { BiRightArrow } from 'react-icons/bi';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import About from '../components/About/About.jsx';
import ServiceList from '../components/Services/ServicesList.jsx';

const Home = () => {
  return (
    <>
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
          <div className="lg:w-[570px]">
            <div>
              <h1 className="text-[35px] leading-14 text-headingColor font-[800] md:text-[60px]
              md:leading-[70px] ">We Help Patients live  a Healthy, Longer lIfe</h1>
              <p className="pt-[15px] font-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus ea officia cum quaerat explicabo porro maxime! Harum quisquam temporibus corporis, sint praesentium quaerat amet laborum dolorum debitis in iste?</p>
             <button className="btn">Request An Appointment</button>
            </div>
            <div className="lg:mt-[70px] mt-[30px] flex flex-col lg:flex-row lg:items-center gap-5  lg:gap-[30px">
              <div>
                <h2 className="text-[30px] leading-[40px] lg:text-[40px] lg:leading-[45px] font-700 text-headingColor">30 +</h2>
                <span className="bg-yellowColor w-[100px] h-2 rounded-full block mt-[-14px]"></span>
                <p>30+ years of experience</p>
              </div>
              <div>
                <h2 className="text-[30px] leading-[40px] lg:text-[40px] lg:leading-[45px] font-700 text-headingColor">15 +</h2>
                <span className="bg-purpleColor w-[100px] h-2 rounded-full block mt-[-14px]"></span>
                <p>clinic Loactions</p>
              </div>
              <div>
                <h2 className="text-[30px] leading-[40px] lg:text-[40px] lg:leading-[45px] font-700 text-headingColor">100+</h2>
                <span className="bg-irisBlueColor w-[100px] h-2 rounded-full block mt-[-14px]"></span>
                <p>satisfy patients</p>
              </div>
            </div>

          </div>
          <div className='flex  justify-end gap-[30px]'>
            <div><img src={docImage} alt="" /></div>
             <div className='mt-[30px]'>
              <img src={heroimg2} alt="" className='mb-4' />
              <img src={heroimg3} alt="" />
             </div>
          </div>
        </div>

      </div>
      
    </section>

    <section>
      <div className="container">
        <div className='lg:w-[470px] mx-auto' >
          <h2 className='heading text-center'>Providing the best medical services</h2>
          <p className=' text__para text-center'>world class care for everyone. Our health System offers unmatched, expert health care</p>
        </div>
       
          
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
          lg:mt-[ 55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01}/>

              </div>
              <div className='mt-[30px'>
                <h2 className='text-[36px] lleading-9 text-headingColor font-[700px] text-center' >Find Doctor</h2>
                <p className=' text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>world class care for everyone. Our health System offers unmatched, expert health care</p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-black
                 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BiRightArrow/>
                </Link>
              </div>

            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02}/>

              </div>
              <div className='mt-[30px'>
                <h2 className='text-[36px] lleading-9 text-headingColor font-[700px] text-center' >Find Location</h2>
                <p className=' text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>world class care for everyone. Our health System offers unmatched, expert health care</p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-black
                 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BiRightArrow/>
                </Link>
              </div>

            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03}/>

              </div>
              <div className='mt-[30px'>
                <h2 className='text-[36px] lleading-9 text-headingColor font-[700px] text-center' >Boook Appointment</h2>
                <p className=' text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>world class care for everyone. Our health System offers unmatched, expert health care</p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-black
                 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BiRightArrow/>
                </Link>
              </div>

            </div>
          </div>
          

       
      </div>
    </section>
    <About/>
    <section>
      <div className="container">
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our medical Services</h2>
          <p className='text-center text__para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero ut ratione necessitatibus ipsa provident veniam, eveniet ipsam dolor sit placeat iste ab sapiente minima porro soluta tempora similique? Repellendus, aut?</p>
        </div>
        <ServiceList/>
      </div>
      
    </section>
    </>
  )
}

export default Home ;
