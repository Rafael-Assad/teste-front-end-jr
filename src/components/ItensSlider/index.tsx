import { ReactNode } from "react";
import LeftArrowIcon from "../../assets/icons/leftArrow.svg"
import RightArrowIcon from "../../assets/icons/rightArrow.svg"

import "./style.scss"

interface ItemsSliderProps {
  children?: ReactNode[];
}

const ItemsSlider = ({children}:ItemsSliderProps) => {
  let selectedItens

  if(children){
    selectedItens = children.slice(0, 4)
  }

  return (
    <div className="products-slider">
        <div className='itens-galery'>
        {selectedItens}
        </div>

    <div className="slider-arrows">
      <div className="left-arrow">
        <img src={LeftArrowIcon} alt="" />
      </div>

      <div className="right-arrow">
        <img src={RightArrowIcon} alt="" />
      </div>
    </div>
  </div>
  )
}

export default ItemsSlider