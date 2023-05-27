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
        <span className='title-area'>
          <hr />
          <p className='galery-title'>Produtos Relacionados</p>
          <hr />
        </span>
        {showFilters ? (
          <ul>
            <li>CELULAR</li>
            <li>ACESSÓRIOS</li>
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
            <ItemCard key={index} productName={product.productName}
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