import Button from "../components/button"
import {arrowRight} from '../assets/icons'
import { shoes,statistics } from "../constants"
import {bigShoe1, vid} from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"


/**
 * Renders the Hero section of the website, displaying the summer collection of Nike shoes.
 * @returns JSX element representing the Hero section.
 */
const Hero = () => {
const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28" >
         <p className="text-xl font-montserrat text-coral-red ">Our Summer Collection</p>
         <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10">The New </span>
          <br />
          <span className="text-coral-red inline-block mt-3"  style={{ textShadow: '10px 6px 4px black' }}>Arrival</span> Nike Shoes
         </h1>
         <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, 
          and innovation for your active life.
         </p>
         <Button label="Shop Now" iconURL={arrowRight}/>
         <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat,index) => {
             return(
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
             )
          })}
         </div>
         <div className="relative flex sm:gap-6 gap-4 absolute -bottom-[5%] left-[10%] z-30 sm:left-[2%] max-sm sm:px-6 sm:py-6 sm:mt-3">
        {shoes.map((shoe,index) => {
          return(
            <div key={index}>                           
              <ShoeCard
              imgURL={shoe}
              changeBigShoeImage = {(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}/>
            </div>
          )
        })}
      </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center
      xl:min-h-screen max-xl:py-40  bg-hero bg-cover bg-center rounded-2xl box-shadow:lg"style={{border:'0.7px solid gray '}}>
      <img className=" bg-background object-contain relative z-[10]
       border-r-orange-600 rounded-lg" src={bigShoeImg} alt="shoe collection" width={610} height={500}/>
            
  
        </div>

      
    </section>

  )
}

export default Hero