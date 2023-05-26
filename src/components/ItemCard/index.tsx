import Button from "../Button"

import "./style.scss"

const ItemCard = () => {
  return (
    <div className="item-card-container">
      <img src="*" alt="Imagem do produto" />

      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h3>

      <p className="regular-price">
        RS Preço antigo
      </p>

      <p className="discount-price">
        RS Preço Novo
      </p>

      <p className="payments-details">
        Condiçoes de pagamento
      </p>

      <p className="free-delivery">
        Frete Gratis
      </p>

      <Button buttonName="COMPRAR" />
    </div>
  )
}

export default ItemCard