import { MouseEvent } from "react";
import "./style.scss"

interface ProductModalProps {
  show: boolean;
  toggleModal: () => void;
  productName: string;
  finalPrice: number;
  productDetails: string;
  photo: string;
}

const ProductModal = ({show, toggleModal, productName, finalPrice, productDetails, photo}: ProductModalProps) => {
  const closeModal = (e:MouseEvent) => {
    if(e.target === e.currentTarget){
      toggleModal()
    }
  }

  return (
    <>
      {show && (
        <div onClick={closeModal} className="modal-container">
          <div className="product-hiighlight-box">
            <div onClick={toggleModal} className="close-x">
              X
            </div>

            <div className="product-info">
              <figure>
                <img src={photo} alt="product pic" />
              </figure>

              <div className="product-details">
                <h3>{productName}</h3>

                <p className="product-value">
                  {finalPrice.toLocaleString('pt-BR', 
                    {style: "currency",currency: "BRL"})}
                </p>

                <p className="product-description">
                  {productDetails}
                </p>

                <a href="*">
                  Veja mais detalhes do produto {'>'}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) }
    </>
  )
}

export default ProductModal