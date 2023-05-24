import "./style.scss"

const Header = () => {
  return (
    <header>
      <figure>
        <img src="*" alt="Logo" />
        <figcaption>Logo</figcaption>
      </figure>

      <div>
        <div>
          <span>
            incone texto <strong></strong>
          </span>

          <span>
            incone texto <strong></strong>
          </span>
          
          <span>
            incone texto <strong></strong>
          </span>
        </div>
      </div>

      <div>
        <span>
          <input type="text" />
          icone
        </span>

        <span>
          icones
          icones
          icones
          icones
        </span>
      </div>

      <nav>
        <ul>
          <li>Todas as Categorias</li>

          <li>Supermercado</li>

          <li>Livros</li>

          <li>Moda</li>

          <li>Lançamentos</li>

          <li>Ofertas do dia</li>

          <li>icone Assinatura</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header