import { useEffect, useState } from "react"
import Banner from "../../components/Banner"
import BigShortcutCarsGroup from "../../components/BigShortcutCardsGroup"
import BrandsGalery from "../../components/BrandsGalrey"
import CategoriesButton from "../../components/CategoriesButton"
import ItensGalery from "../../components/ItensGaley"

import api from "../../services/api"

import "./style.scss"
import { ProductDeatils } from "../../types"

const Home = () => {
  const [productList, setProductList] = useState<ProductDeatils[]>([])

  useEffect(() => {
    api.get('/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(response =>{
        const { products } = response.data

        setProductList(products)
      })
 
  }, [])

  return (
    <main>
      <Banner/>

      <div className="content-area">
        <CategoriesButton/>

        <ItensGalery showFilters={true} productList={productList} />

        <BigShortcutCarsGroup headline="Parceiros"/>

        <ItensGalery showFilters={false} productList={productList}  />

        <BigShortcutCarsGroup headline="Produtos"/>

        <BrandsGalery/>

        <ItensGalery showFilters={false} productList={productList}  />
      </div>
    </main>
  )
}

export default Home