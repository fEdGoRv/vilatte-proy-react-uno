import { Box } from "@chakra-ui/react";
import { products } from '../../util/products'
import { customFetch } from "../../util/customFetch";
import { ItemList } from './ItemList/ItemList';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Loader } from "../Loader/Loader"
import { Encabezado } from "../Encabezado/Encabezado"
import logo from "../../assets/logoAmarillo.jpg"
import { db } from "../../firebase/Firebase"
import { collection, getDocs } from "firebase/firestore";

const ItemListConteiner = () => {
    const p = useParams()
    const compararCategoria = (product) => {
        if (product.Categoria == p.categoria) {
            return (product)
        }
    }
    const [loading, setLoading] = useState(true)
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {

        setLoading(true)
        const productsCollection = collection(db, "products")
        const query = getDocs(productsCollection)

            .then(snapshot => {
                setLoading(false)
                const Productos = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(), Id: doc.id
                    }
                })
                if (p.categoria) {
                    setListProducts(Productos.filter((compararCategoria)))
                } else {
                    setListProducts(Productos)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [p, p.categoria])


    if (loading) {
        return (
            <Loader />
        )
    } else {
        return (
            <Box>
                <Encabezado Titulo="Bienvenidos :)" Subtitulo="Visita nuestras secciones de Yoga Y Fitnes" Abatar={logo} />
                <ItemList listProducts={listProducts} />
            </Box>

        )
    }
}
export default ItemListConteiner;