/**
 * A component that displays a review card with an image, customer name, rating, and feedback.
 * @param {string} imgURL - The URL of the image to display.
 * @param {string} customerName - The name of the customer who left the review.
 * @param {string} rating - The URL of the rating image to display.
 * @param {string} feedback - The feedback left by the customer.
 * @returns The JSX element representing the review card.
 */

import { star } from "../assets/icons"


const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img  className="rounded-full object-cover w-[120px] h-[120px]" src={imgURL} alt={customerName}/>
        <p className="mt-6 text-center max-w-sm info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center
        gap-2.5">
            <img className="object-cover m-0" src={star} width={24} height={24} alt="rating"/>
            <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center
        font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard