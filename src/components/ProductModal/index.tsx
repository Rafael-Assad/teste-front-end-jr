import { MouseEvent } from "react";
import "./style.scss"

interface ProductModalProps {
  show: boolean;
  toggleModal: () => void;
}

const ProductModal = ({show, toggleModal}: ProductModalProps) => {
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
                <img src="*" alt="product pic" />
              </figure>

              <div className="product-details">
                <h3>LOREM IPSUM DOLOR SIT AMET</h3>

                <p className="product-value">R$ Valor final do produto</p>

                <p className="product-description">Many desktop publishing packages and web page editors now many desktop publishing</p>

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