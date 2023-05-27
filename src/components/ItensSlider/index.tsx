import { ReactNode,  useState } from "react";
import LeftArrowIcon from "../../assets/icons/leftArrow.svg"
import RightArrowIcon from "../../assets/icons/rightArrow.svg"

import "./style.scss"

interface ItemsSliderProps {
  children: ReactNode[];
}

const ItemsSlider = ({children}:ItemsSliderProps) => {
  let selectedItens: any = []
  const [startItem, setStartItem] = useState<number>(0)
  const [endItem, setEndItem] = useState<number>(4)
  const endItemLimit = children?.length

  if(children){
    selectedItens = children.slice(startItem, endItem)
  }

  if(10 < endItem && endItem <= 13){
    const itemsExceed = children.slice(0, endItem - 10)

    selectedItens.push(itemsExceed)
  }
  
  const goToNextProduct = () =>{
    if( endItemLimit && endItem <= endItemLimit){
      setStartItem(startItem + 1)
      setEndItem(endItem + 1)

    } else if(endItem < 13){
      setStartItem(startItem + 1)
      setEndItem(endItem +1)

      const itemsExceed = children.slice(0, endItem - 10)

      selectedItens.push(itemsExceed)
    } else{
      setStartItem(0)
      setEndItem(4)
    }
  }

  const goToPreviousProduct = () =>{
    if(startItem > 0){
      setEndItem(endItem -1)
      setStartItem(startItem - 1)
    } else{
      setStartItem(6)
      setEndItem(10)
    }
  }
  return (
    <div className="products-slider">
        <div className='itens-galery'>
        {selectedItens}
        </div>

    <div className="slider-arrows">
      <div onClick={goToPreviousProduct} className="left-arrow">
        <img src={LeftArrowIcon} alt="" />
      </div>

      <div onClick={goToNextProduct} className="right-arrow">
        <img src={RightArrowIcon} alt="" />
      </div>
    </div>
  </div>
  )
}

export default ItemsSlider