import EcoverseImg from "../../assets/logos/ecoverse.svg"
import LogoInverseImg from "../../assets/logos/LogoInverse.svg"
import Menu from "../Menu"
import { AboutMenuMock, InfosMenuMock } from "./MenusMock"

import FacebookIcon from "../../assets/icons/Facebook.svg"
import InstagramIcon from "../../assets/icons/Instagram.svg"
import YouTubeIcon from "../../assets/icons/YouTube.svg"

import VisaLogo from "../../assets/logos/visa.svg"
import EloLogo from "../../assets/logos/elo.svg"
import AleloLogo from "../../assets/logos/alelo.svg"
import DinnersLogo from "../../assets/logos/dinners.svg"
import IfoodLogo from "../../assets/logos/ifood.svg"
import MastercardLogo from "../../assets/logos/mastercard.svg"
import PixLogo from "../../assets/logos/pix.svg"
import AmexLogo from "../../assets/logos/amex.svg"
import TicketLogo from "../../assets/logos/ticket.svg"
import SodexoLogo from "../../assets/logos/sodexo.svg"

import "./style.scss"


const Footer = () => {
  return (
    <footer>
      <div className="footer-menus">
        <section>
          sobre nos
          <Menu menuInfo={AboutMenuMock} />
          <span>
            <img src={FacebookIcon} alt="" />
            <img src={InstagramIcon} alt="" />
            <img src={YouTubeIcon} alt="" />
          </span>
        </section>

        <section>
          informacoes uteis
          <Menu menuInfo={InfosMenuMock} />
        </section>

        <section className="payment-methods">
          formas de pagamento
          <span className="payment-methods-icons">
            <img src={VisaLogo} alt="" />
            <img src={EloLogo} alt="" />
            <img src={AleloLogo} alt="" />
            <img src={DinnersLogo} alt="" />
            <img src={IfoodLogo} alt="" />
            <img src={MastercardLogo} alt="" />
            <img src={PixLogo} alt="" />
            <img src={AmexLogo} alt="" />
            <img src={TicketLogo} alt="" />
            <img src={SodexoLogo} alt="" />
          </span>
        </section>

        <section>newsletter</section>
      </div>

      <div className="footer-disclaimer">
        <span>
        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
        <br/>
        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
        </span>

        <span className="signature-logos">
          <img src={EcoverseImg} alt="" />
          <img src={LogoInverseImg} alt="" />
        </span>
      </div>
    </footer>
  )
}

export default Footer