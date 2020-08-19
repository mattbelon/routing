import Link from 'next/link';
import FormAction from './FormAction';
import data from '../data';

function DetailProduct(props) {

  const productos = data.servicios.find(x => x._id === props.match.params.id);

    return<div className="container">
    {
        <>
  <div className="notification">
    Conoce todos los <strong>detalles de {productos.name}</strong> que necesitas saber.     <Link to="/">Volver atras</Link>
  </div>
  <div className="columns">
      <div className="column">
      <article className="message is-link">
  <div class="message-header">
    <p>Características de : {productos.name}</p>
  </div>
  <div className="message-body">
  {productos.description.split("\n").map((i,key) => {
            return <p key={key}>{i}</p>;
        })}
  </div>
</article>
    </div>
    <div className="column">
        <FormAction />
    </div>
    </div>
    </>
    }
</div>
}
export default DetailProduct;
