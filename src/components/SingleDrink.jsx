import { useLoaderData,Link } from "react-router-dom";
import axios from "axios";

const singleCocktailUrl ='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';


export const loader2 = async ({params}) => {
    const {id} = params;  
    const {data} = await axios.get(`${singleCocktailUrl}${id}`);    
    return {id, data};
}


const SingleDrink = ()=>{

    const{id, data} = useLoaderData();
    const singleDrink = data.drinks[0];

    const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
      } = singleDrink;

    return(
      <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center text-left">
        <img src={image} alt={name} className="w-80 h-80 border-2 mb-4" />
        <div className="drink-info">
          <p>
            <span className="drink-data font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="drink-data font-bold">Category:</span> {category}
          </p>
          <p>
            <span className="drink-data font-bold">Info:</span> {info}
          </p>
          <p>
            <span className="drink-data font-bold">Glass:</span> {glass}
          </p>
          <p>
            <span className="drink-data font-bold">Instructions:</span> {instructions}
          </p>
          <div className="mt-14">
          <Link
            to="/"
            className="font-semibold size-10  hover:underline"
          >
            Back Home
          </Link>
          </div>
        </div>
      </div>
    </div>
    )
}

export default SingleDrink