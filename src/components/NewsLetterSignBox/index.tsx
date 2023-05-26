import Button from "../Button"
import "./style.scss"

const NewsLetterSignBox = () => {
  return (
    <div className="newsletter-sign-box-container">
      <p className="main-catchphrase">
        CADASTRE-SE E RECEBA NOSSAS
        <strong> NOVIDADES E PROMOÇOES</strong>
      </p>

      <p className="details">
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum
      </p>
      
      <span className="subscribe-area">
        <input type="text" placeholder="SEU E-MAIL" />

        <Button buttonName="OK"/>
      </span>
    </div>
  )
}

export default NewsLetterSignBox