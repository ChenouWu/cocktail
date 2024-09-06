import { Link,Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export const loader = async () => {
    const searchTerm = '';
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${searchTerm}`);
    return {  drinks:response.data.drinks,
      searchTerm,}
  };

const HomeLayout =()=>{

    return(
        <div>
            <NavBar/>
            <section className="page">
            <Outlet />
            </section>
            <Footer/>
        </div>
    )        
}   
export default HomeLayout;
