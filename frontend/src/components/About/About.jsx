
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import '../../index.css'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <section>
        <div className="container">
            <div className="flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                <div className="relative w-3/4 lg:w-1/2 xl:w-[720px] z-10 order-2 lg:order-1">
                    <img src={aboutImg} alt="" />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]
                    lg:right-[22%]'>
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 xl:w-[760px] order-1 lg:order-2'>
                    <h2 className='font-[700] text-[45px]'>Proud to be one of the nation best</h2>
                    <p className='text-textColor text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil quia enim quae autem fugit sit voluptatum possimus aliquid dignissimos tenetur, animi porro iusto repellendus expedita ipsam debitis, accusamus sint.</p>
                    <p className='text-textColor text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil quia enim quae autem fugit sit voluptatum possimus aliquid dignissimos tenetur, animi porro iusto repellendus expedita ipsam debitis, accusamus sint.</p>
                    <Link to='/'>
                        <button className="btn">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default About
