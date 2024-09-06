    import axios from "axios";
    import { useLoaderData } from 'react-router-dom';
    import DrinksList from "../components/DrinksList";
    
    //This is pre-fetech 
    export const loader = async () => {
      const searchTerm = '';
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      return {  drinks:response.data.drinks,
        searchTerm}
    };

    const Landing =()=>{
      const {drinks,searchTerm} = useLoaderData();
      const id = drinks.id;
      return(
        <h1>
          <DrinksList drinks={drinks}/>
        </h1>
        )
    }


    export default Landing;
