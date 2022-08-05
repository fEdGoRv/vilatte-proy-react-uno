import { Box, Heading, Text } from "@chakra-ui/react";
/*import { ItemCount } from "../ItemDetailConteiner/ItemDetail/ItemCount/ItemCount";*/
import  {products}  from '../../util/products'
import {customFetch} from "../../util/customFetch";
import {ItemList} from './ItemList/ItemList';
import { useState, useEffect } from "react";

const ItemListConteiner = ({ nombre }) => {
    const [loading, setLoading] = useState(true)
    const [listProducts, setListProducts] = useState([])

    useEffect(()=>{
        setLoading(true)
        customFetch(products)
        .then(res => {
            setLoading(false)
            setListProducts(res)
        })
    },[])

    return (
        <Box textAlign="center">
            <Heading bg="lightgreen">
                Bienvenido {nombre}!
            </Heading>
            {!loading ? <ItemList listProducts={listProducts} />
            :<Text>Cargando...</Text>}
            {/*<ItemCount inicial={1} stock={10} onAdd={()=>{}}/>*/}
        </Box>
    )
}

export default ItemListConteiner;