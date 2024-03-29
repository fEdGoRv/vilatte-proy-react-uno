import { Box } from "@chakra-ui/react";
import { ItemList } from './ItemList/ItemList';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Loader } from "../Loader/Loader"
import { Encabezado } from "../Encabezado/Encabezado"
import logo from "../../assets/logoAmarillo.jpg"
import { db } from "../../firebase/Firebase"
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

const ItemListConteiner = () => {
    const p = useParams()
    const [loading, setLoading] = useState(true)
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        
        const compararCategoria = (product) => {
            if (product.Categoria === p.categoria) {
                return (product)
            }
        }

        setLoading(true)
        const productsCollection = collection(db, "products")
        const query = getDocs(productsCollection)
            query
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
            .catch(error => {
                toast.error("error")
            })
    }, [p.categoria])


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