import Drinks from "./Drinks"
const DrinksList =({drinks})=>{

    if(!drinks){
        return <h4 className="text-aglin">No Drinks Found</h4>
    }

    const formatDrinks = drinks.map((item)=>{
        const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} =
         item
        return {
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass}
        })

        return(
        <div className="grid grid-cols-3 gap-7">
               {formatDrinks.map( (item)=>{
                return <Drinks key={item.id} {...item}/>
                })}
        </div>
        )
}

export default DrinksList