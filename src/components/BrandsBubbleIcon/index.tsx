import LogoImg  from "../../assets/logos/Logo.svg"

import "./style.scss"

const BrandBubbleIcon = () => {
  return (
    <div className="brand-bubble-icon">
      <figure>
        <img src={LogoImg} alt="" />
      </figure>
    </div>
  )
}

export default BrandBubbleIcon