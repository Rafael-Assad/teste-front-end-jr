import Banner from "../../components/Banner"
import BigShortcutCarsGroup from "../../components/BigShortcutCardsGroup"
import BrandsGalery from "../../components/BrandsGalrey"
import CategoriesButton from "../../components/CategoriesButton"
import ItensGalery from "../../components/ItensGaley"
import "./style.scss"

const Home = () => {
  return (
    <main>
      <Banner/>

      <CategoriesButton/>

      <ItensGalery showFilters={true}/>

      <BigShortcutCarsGroup headline="Parceiros"/>

      <ItensGalery showFilters={false}/>

      <BigShortcutCarsGroup headline="Produtos"/>

      <BrandsGalery/>

      <ItensGalery showFilters={false}/>
    </main>
  )
}

export default Home