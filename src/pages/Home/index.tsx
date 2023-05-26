import Banner from "../../components/Banner"
import BigShortcutCarsGroup from "../../components/BigShortcutCardsGroup"
import CategoriesButton from "../../components/CategoriesButton"
import ItensGalery from "../../components/ItensGaley"
import "./style.scss"

const Home = () => {
  return (
    <main>
      <Banner/>

      <CategoriesButton/>

      <ItensGalery showFilters={true}/>

      <BigShortcutCarsGroup/>
      
      <ItensGalery showFilters={false}/>

      <BigShortcutCarsGroup/>

      <ItensGalery showFilters={false}/>
    </main>
  )
}

export default Home