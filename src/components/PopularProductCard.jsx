/**
 * Renders a popular product card component.
 * @param {string} imgURL - The URL of the product image.
 * @param {string} name - The name of the product.
 * @param {string} price - The price of the product.
 * @returns The rendered popular product card component.
 */


import { star } from "../assets/icons"


const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
    <img className="w-[280px] h-[280px] "src={imgURL} alt={name} />
      <div className="mt-8 flex justify-start gap-2.5">
       <img src={star} alt="rating" width={24} height={24}/>
       <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2x1 leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 front-semibold font-montserrat text-coral-red text-2lx leading-normal">{price}</p>
     </div>
  )
}

export default PopularProductCard