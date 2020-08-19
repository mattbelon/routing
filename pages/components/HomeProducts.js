import Link from 'next/link';
import data from '../data';

function HomeProducts() { 
    return  <div className="container">
    {
        <>
  <div className="notification">
    Conoce todos los <strong>servicios</strong> que ofrecemos.
  </div>
  <div className="columns">
      {data.servicios.map(producto =>
      <div className="column" key={producto._id}>
      <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <Link  href={'/producto/' + producto._id} >
          <img src={producto.image} alt="Placeholder" />
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
          <Link href={'/producto/' + producto._id} pid={producto._id} >{producto.name}</Link> 
            <p className="subtitle is-6">Tipo de servicio: {producto.category}</p>
          </div>
        </div>
        <div className="content" key={producto._id}>
            <ul>
                <li>
          {producto.description}
          </li>
          <li>
              Precio : <b>{producto.price}</b>
          </li>
          </ul>
          <div className="buttons">
          <button className="button is-medium is-fullwidth is-danger">Comprar</button>
    
          </div>
        </div>
      </div>
    </div>
    </div>
    )}
    </div>
    </>
    }
</div>
}
export default HomeProducts;
