import Menu from "../Menu"
import NewsLetterSignBox from "../NewsLetterSignBox"

import { AboutMenuMock, InfosMenuMock } from "./MenusMock"

import EcoverseImg from "../../assets/logos/ecoverse.svg"
import LogoInverseImg from "../../assets/logos/LogoInverse.svg"

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
        <div className="sitemap-and-payment-methods">
          <section className="about-area">
            <h3>Sobre nós</h3>

            <Menu menuInfo={AboutMenuMock} />

            <span className="social-icons">
              <img src={FacebookIcon} alt="" />
              <img src={InstagramIcon} alt="" />
              <img src={YouTubeIcon} alt="" />
            </span>
          </section>

          <section>
            <h3>INFORMAÇÕES ÚTEIS</h3>

            <Menu menuInfo={InfosMenuMock} />
          </section>

          <section className="payment-methods">
            <h3>FORMAS DE PAGAMENTO</h3>

            <span className="payment-methods-icons">
              <figure>
                <img src={VisaLogo} alt="" />
              </figure>

              <figure>
                <img src={EloLogo} alt="" />
              </figure>

              <figure>
                <img src={AleloLogo} alt="" />
              </figure>

              <figure>
                <img src={DinnersLogo} alt="" />
              </figure>

              <figure>
                <img src={IfoodLogo} alt="" />
              </figure>

              <figure>
                <img src={MastercardLogo} alt="" />
              </figure>

              <figure>
                <img src={PixLogo} alt="" />
              </figure>

              <figure>
                <img src={AmexLogo} alt="" />
              </figure>

              <figure>
                <img src={TicketLogo} alt="" />
              </figure>

              <figure>
                <img src={SodexoLogo} alt="" />
              </figure>
            </span>
          </section>
        </div>

        <section>
          <NewsLetterSignBox/>
        </section>
      </div>

      <div className="footer-disclaimer">
        <span>
          COPYRIGHT © 2019. TODOS OS DIREITOS RESERVADOS. TODAS AS MARCAS E SUAS IMAGENS SÃO DE PROPRIEDADE DE SEUS RESPECTIVOS DONOS
        <br/>
        É VEDADA A REPRODUÇÃO, TOTAL OU PARCIAL, DE QUALQUER CONTEÚDO SEM EXPRESSA AUTORIZAÇÃO
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