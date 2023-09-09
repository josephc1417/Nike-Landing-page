
import { star } from "../assets/icons"
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img className="w-[280px] h-[280px]"src={imgURL} alt={name}/>
      <div className="mt-8 flex justify-start gap-2.5">
       <img src={star} alt="rating" width={24} height={24}/>
       <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
     </div>
  )
}

export default PopularProductCard