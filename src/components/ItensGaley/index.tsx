import ItemCard from '../ItemCard'

import "./style.scss"

interface ItensGaleryProps {
  showFilters: boolean;
}

const ItensGalery = ({showFilters}: ItensGaleryProps) => {
  return (
    <div className='itens-galery-container'>
      <div className='itens-filter'>
        <p className='galery-title'>Produtos Relacionados</p>
        {showFilters ? (<ul>
          <li>CELULAR</li>
          <li>ACESSORIOS</li>
          <li>TABLETS</li>
          <li>NOTEBOOKS</li>
          <li>TVS</li>
          <li>VER TUDO</li>
        </ul>):(
          <p className='see-all'>Ver Todos</p>
        )}
        
      </div>
      <div className='itens-galery'>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
      </div>
    </div>
  )
}

export default ItensGalery