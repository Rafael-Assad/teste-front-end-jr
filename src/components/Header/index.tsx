import LogoImg  from "../../assets/logos/Logo.svg"
import ShieldImg  from "../../assets/icons/ShieldCheck.svg"
import TruckImg  from "../../assets/icons/Truck.svg"
import CreditCardImg  from "../../assets/icons/CreditCard.svg"
import MagnifyingGlassImg from "../../assets/icons/MagnifyingGlass.svg"
import BoxImg  from "../../assets/icons/Box.svg"
import HeartImg  from "../../assets/icons/Heart.svg"
import UserCircleImg  from "../../assets/icons/UserCircle.svg"
import ShoppingCartImg  from "../../assets/icons/ShoppingCart.svg"
import CrownImg from "../../assets/icons/CrownSimple.svg"

import "./style.scss"

const Header = () => {
  return (
    <header>
      <div className="calltoaction-container">
        <span>
          <img src={ShieldImg} alt="" /> 
          Compra <strong>100% segura</strong>
        </span>

        <span>
          <img src={TruckImg} alt="" />
          <strong>Frete grátis</strong> acima de R$ 200
        </span>
        
        <span>
          <img src={CreditCardImg} alt="" />
          <strong>Parcele</strong> suas compras
        </span>
      </div>

      <div className="header-area">
        <figure>
          <img src={LogoImg} alt="Logo" />
        </figure>

        <span>
          <input type="text" />
          <img src={MagnifyingGlassImg} alt="" />
        </span>

        <span>
          <img src={BoxImg} alt="" />
          <img src={HeartImg} alt="" />
          <img src={UserCircleImg} alt="" />
          <img src={ShoppingCartImg} alt="" />
        </span>
      </div>

      <nav>
        <ul>
          <li>Todas as Categorias</li>

          <li>Supermercado</li>

          <li>Livros</li>

          <li>Moda</li>

          <li>Lançamentos</li>

          <li>Ofertas do dia</li>

          <li><img src={CrownImg} alt="" /> Assinatura</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header