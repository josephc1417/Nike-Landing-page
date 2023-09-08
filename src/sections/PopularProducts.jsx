
import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";



const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12"> 
    <div className="flex flex-col justify-start gap-5">
    <h2 className="text-4xl font-palanquin font bold">Our<span className="text-coral-red">Popular</span>Products</h2>
    <p className="lg:max-w-lg mt-2 front-montserrat text-slate-gray">Experience top-notch quality and style with the latest selection. Discover a world of comfort, design, and value.</p>
      </div>
      <div className="mt-16 grid:lg grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => {
          return (
            <PopularProductCard key={product.name} {...product}/>
            /*each {product} of {products} thats mapped will return a {PopularProductCard-component} inside {Additional Component*/
            /*{PopularProductCard} needs to be created/imported for use*/
            /*Destructuring all kvp's from the {Products} obj as props*/
            );
        })}
      </div>
    </section>
  );
}

export default PopularProducts;
