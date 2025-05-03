import { ProductProps } from "../interface"
import { notify } from "../utils/alerts"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'

const showProducts = async () => {
    try {
        let data = await fetch(url)
        let products = await data.json()
        let response: ProductProps[] = []
        for (let index = 10; index < 30; index++) {
            response.push({
                id: products.drinks[index].idDrink,
                title: products.drinks[index].strDrink,
                price: 70.95 - index,
                image: products.drinks[index].strDrinkThumb
            })
        }
        return response;
    } catch (error) {
        console.log(error)
        notify({text: '🤡 An error ocurred.'})
    }
    return []
}


export {
    showProducts
}
