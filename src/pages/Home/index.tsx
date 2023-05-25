import Banner from "../../components/Banner"
import CategoriesButton from "../../components/CategoriesButton"
import ItensGalery from "../../components/ItensGaley"
import "./style.scss"

const Home = () => {
  return (
    <main>
      <Banner/>
      <CategoriesButton/>
      <ItensGalery/>
    </main>
  )
}

export default Home