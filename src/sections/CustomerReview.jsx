
/**
 * Renders a section displaying customer reviews.
 * @returns JSX element representing the customer review section.
*/
import ReviewCard from "../components/ReviewCard"
import  {reviews}  from "../constants"





const CustomerReview = () => {
  return (
    <section className="max-container">
    <h3 className="font-palanquin text-center text-4xl font-bold">
    What are
      <span className="text-coral-red"> Customers</span> Saying?
    </h3>
    <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their 
    exceptional experiences</p>
    
    <div className="mt-24 flex flex-1 justify-evenly items-center
    max-lg:flex-col gap-14">
    {/**Get all the properties from reviews and pass them into the review card component */}
    {reviews.map((review) => {
      return(
        <ReviewCard 
        key={review.customerName} 
        imgURL={review.imgURL}
        customerName={review.customerName}
        rating={review.rating}
        feedback={review.feedback}/>
      )
    })}
    </div>
    </section>
  )
}

export default CustomerReview