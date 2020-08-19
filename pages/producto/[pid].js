import Link from 'next/link';
import data from '../data';
import { useRouter } from 'next/router'
import Header from '../components/Header'
import SubFooter from '../components/SubFooter'
import FormAction from '../components/FormAction'

import Footer from '../components/Footer'

export default function Producto (pid) {
  const router = useRouter()
   const productos = data.servicios.find(x => x._id === pid.pid);
    return<div className="container">
    {
        <>
        <Header />
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
      <FormAction />
    </div>
    </div>
    <Footer />
    </>
    }
</div>
}
Producto.getInitialProps = async (ctx) => {
  const {query} = ctx;
  const pid = (query.pid)
  return   {pid:pid}

}