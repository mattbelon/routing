import Link from 'next/link';
import data from '../data';
import { useRouter } from 'next/router'

const Producto = () => {
  const router = useRouter()
  const { pid } = router.query
  const productos = data.servicios.find(x => x._id === pid);

    return<div className="container">
    {
        <>
  <div className="notification">
    Conoce todos los <strong>detalles de {productos.name}</strong> que necesitas saber.     <Link href="/">Volver atras</Link>
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
    </div>
    </div>
    </>
    }
</div>
}
export default Producto;
