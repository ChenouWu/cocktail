import { Link, useOutletContext } from "react-router-dom"

const Drinks = ({image,name,id,info,glass})=>{
    return(
        <div className="border-2 border-x-amber-50 mt-40 shadow-xl rounded-xl">
            <Link className=" hover:-row-end-9 rounded-sm font-serif" to={`./cocktail/${id}`}>
            <img className="size-45" src={image}/>
            <div className="shadow-inner">
                <h3 className="font-bold">{name}</h3>
                <p className="font-serif">{glass}</p>
                <p className="font-serif">{info}</p>
            </div>
            </Link>
        </div>
    )
}
export default Drinks