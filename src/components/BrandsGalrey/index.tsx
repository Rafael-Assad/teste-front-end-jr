import BrandBubbleIcon from '../BrandsBubbleIcon'

import "./style.scss"

const BrandsGalery = () => {
  return (
    <div className='brands-galery'>
        <h3>Navegue por marcas</h3>

        <div className='brand-bubble-icon-container'>
            <BrandBubbleIcon/>
            <BrandBubbleIcon/>
            <BrandBubbleIcon/>
            <BrandBubbleIcon/>
            <BrandBubbleIcon/>
        </div>
    </div>
  )
}

export default BrandsGalery