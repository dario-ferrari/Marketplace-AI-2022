import contr from "../../data/contr.json";

/**const API_URL = 'https://fakestoreapi.com/products'   en donde dice inscripciones iba API_URL    en async y await fetch() va url**/

const fetchData = async (contr) =>{
    const response = await fetch(contr);
    const data = await response.json();
    return contr;
}
export const fetchProducts = (param = "all" ) => {
    if(param === "all") return fetchData(contr);
    return fetchData(contr.param); /**`${contr}/category/${param}` */
}