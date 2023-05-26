import ItemCard from '../ItemCard'


import "./style.scss"
import { ProductDeatils } from '../../types';
import ItemsSlider from '../ItensSlider';

interface ItensGaleryProps {
  showFilters: boolean;
  productList: ProductDeatils[]
}

const ItensGalery = ({showFilters,  productList}: ItensGaleryProps) => {


  return (
    <div className='itens-galery-container'>
      <div className='itens-filter'>
        <p className='galery-title'>Produtos Relacionados</p>
        {showFilters ? (
          <ul>
            <li>CELULAR</li>
            <li>ACESSORIOS</li>
            <li>TABLETS</li>
            <li>NOTEBOOKS</li>
            <li>TVS</li>
            <li>VER TUDO</li>
          </ul>
        ):(
          <p className='see-all'>Ver Todos</p>
        )}
        
      </div>

      <ItemsSlider >
        {productList.map((product, index) =>{
          return (
            <ItemCard productName={product.productName}
              descriptionShort={product.descriptionShort}
              photo={product.photo}
              price={product.price}
              />
          )
        })}
      </ItemsSlider>
    </div>
  )
}

export default ItensGalery