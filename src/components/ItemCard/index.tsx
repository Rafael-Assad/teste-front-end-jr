import { useState } from "react"

import Button from "../Button"
import ProductModal from "../ProductModal"

import "./style.scss"

const ItemCard = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const toogleModal = () => setShowModal(!showModal)

  return (
    <>
      <div onClick={toogleModal} className="item-card-container">
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

      <ProductModal show={showModal} toggleModal={toogleModal}/>
    </>
  )
}

export default ItemCard