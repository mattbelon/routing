import React from 'react';

function FormAction() {
    return <form className="">
    {
        <>
        <div className="message is-link">
        <div className="message-header">
    <p>Conseguí tu cuenta con este formulario</p>

  </div>
  </div>
         <div className="field">
         <label className="label">Nombre</label>
         <div className="control">
           <input className="input is-large" type="text" placeholder="Ingresa tu nombre" />
         </div>
       </div>
       
       <div className="field">
         <label className="label">Email</label>
         <div className="control ">
           <input className="input is-danger is-large" type="email" placeholder="Ingresa tu email"  />
           <span className="icon is-small is-left">
             <i className="fas fa-envelope"></i>
           </span>
           <span className="icon is-small is-right">
             <i className="fas fa-exclamation-triangle"></i>
           </span>
         </div>
         <p className="help is-danger">This email is invalid</p>
       </div>
       
       <div className="field">
         <label className="label">Selecciona tu plan</label>
         <div className="control">
           <div className="select">
             <select>
               <option>Plan 1 Pantalla $230</option>
               <option>Plan 2 pantallas $300</option>
               <option>Plan 4 pantallas $360</option>
             </select>
           </div>
         </div>
       </div>
       
       
       
       
       
         <div className="control">
           <button className="button is-medium is-fullwidth is-link">Comprar</button>
         </div>
         
       </>
    }
</form>
}
export default FormAction;
