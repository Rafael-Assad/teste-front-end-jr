import DevicesIcon from "../../assets/icons/devices.svg"
import MarketIcon from "../../assets/icons/market.svg"
import DrinksIcon from "../../assets/icons/whiskey.svg"
import ToolsIcon from "../../assets/icons/tools.svg"
import HealcareIcon from "../../assets/icons/healthcare.svg"
import RunIcon from "../../assets/icons/run.svg"
import FashionIncon from "../../assets/icons/fashion.svg"

import "./style.scss"

const CategoriesButton = () => {
  return (
    <div className="categories-buttons">
      <span>
        <figure>
          <img src={DevicesIcon} alt=""/>
          <figcaption>Tecnologia</figcaption>
        </figure>
      </span>

      <span>
        <figure>
          <img src={MarketIcon} alt=""/>
          <figcaption>
            Supermercado
          </figcaption> 
        </figure>
      </span>

      <span>
        <figure>
          <img src={DrinksIcon} alt=""/>
          <figcaption>
          Bebidas
          </figcaption>
        </figure>
      </span>

      <span>
        <figure>
          <img src={ToolsIcon} alt=""/>
          <figcaption>
            Ferramentas
          </figcaption>
        </figure>
      </span>

      <span>
        <figure>
          <img src={HealcareIcon} alt=""/>
          <figcaption>
            Saúde
          </figcaption>
        </figure>
      </span>

      <span>
        <figure>
          <img src={RunIcon} alt=""/>
          <figcaption>
          Esportes e Fitness
          </figcaption>
        </figure>
      </span>

      <span>
        <figure>
          <img src={FashionIncon} alt=""/>
          <figcaption>
            Moda
          </figcaption>
        </figure>
      </span>
    </div>
  )
}

export default CategoriesButton