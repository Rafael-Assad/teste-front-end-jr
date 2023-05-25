import Button from "../Button"
import "./style.scss"

const Banner = () => {
  return (
    <div className="banner">
      <h2>
        Venha conhecer nossas 
        <br />
        promoções
      </h2>

      <h3>
        50% Off nos produtos 
      </h3>

      <Button buttonName="Ver Produtos"/>
    </div>
  )
}

export default Banner