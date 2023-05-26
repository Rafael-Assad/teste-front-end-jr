import { useState } from "react"

import Button from "../Button"
import ProductModal from "../ProductModal"

import "./style.scss"
import { ProductDeatils } from "../../types"


const ItemCard = ({productName, descriptionShort, photo,price}: ProductDeatils) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const toogleModal = () => setShowModal(!showModal)

  const discountPrice = price - (price * 0.1)
  const parcelValue = price/2

  return (
    <>
      <div onClick={toogleModal} className="item-card-container">
        <img src={photo} alt="Imagem do produto" />

        <h3>
          {productName}
        </h3>

        <p className="regular-price">
          {price.toLocaleString('pt-BR', 
            {style: "currency", currency: "BRL"}
          )}
        </p>

        <p className="discount-price">
          {discountPrice.toLocaleString('pt-BR', 
            {style: "currency", currency: "BRL"}
          )}
        </p>

        <p className="payments-details">
          ou 2x de {parcelValue.toLocaleString('pt-BR', 
            {style: "currency", currency: "BRL"}
          )} sem juros
        </p>

        <p className="free-delivery">
          Frete Gratis
        </p>

        <Button buttonName="COMPRAR" />
      </div>

      <ProductModal show={showModal} 
        toggleModal={toogleModal}
        productName={productName}
        productDetails={descriptionShort}
        finalPrice={discountPrice}
        photo={photo}
      />
    </>
  )
}

export default ItemCard