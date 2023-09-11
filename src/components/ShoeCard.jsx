/**
 * A functional component that represents a shoe card.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.imgURL - The URL of the shoe image.
 * @param {function} props.changeBigShoeImage - A function to change the big shoe image.
 * @param {string} props.bigShoeImg - The URL of the current big shoe image.
 * @returns The shoe card component.
*/
import AiFillStar from "./icon"



const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {
 
const handleClick = () => {
  if (bigShoeImg !== imgURL.bigShoe) {
    changeBigShoeImage(imgURL.bigShoe)
  }
}

    return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe? 'border-coral-red' 
        : 'border-transparent'
        } cursor-pointer max-sm:flex-1
        `}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover
        sm-40 sm:h-40 rounded-xl max-sm:p-4 ">
        <AiFillStar/>
            <img src={imgURL.thumbnail} 
            alt="show collection"
            width={127}
            height={103}
            className="object-contain "
            />
        </div>
    </div>
    
  )
}

export default ShoeCard 