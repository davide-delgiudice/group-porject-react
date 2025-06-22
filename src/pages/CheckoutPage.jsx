import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom';

const CheckoutPage = () => {

  const { cartProducts, price } = useCart();

  return (
    <>
      <div className='container'>
        {/* RIGA CON I TITOLI */}
        <div className="row align-items-center mt-5 mb-3">
          <div className="col-md-8">
            <h3>Carrello</h3>
          </div>
          <div className="col-md-4">
            <h3>Sommario</h3>
          </div>
        </div>

        {/* RIGA CON I CONTENUTI */}
        <div className="row">
          {/* Colonna dei prodotti */}
          <div className="col-md-8">
            {cartProducts.map((product) => (
              <div key={`product-${product.id}`} className="card bg-secondary p-3 mb-3 d-flex flex-row align-items-center">
                <img src={product.image} className='w-25 rounded-2' alt={product.name} />
                <div className='mx-3'>
                  <h4 className='text-light fs-5 m-0'>{product.name}</h4>
                  <p className='text-light m-0'>{product.price}&euro;</p>
                  <p className='text-light m-0'>Quantità: {product.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Colonna del sommario */}
          <div className="col-md-4">
            <div className="card bg-secondary text-light p-3">
              {cartProducts.map((product) => (
                <div key={`product-${product.id}`} className='mb-2'>
                  <div>Prezzo ufficiale: {product.price}&euro;</div>
                  <div>Sconto: {(product.price*product.offer).toFixed(2)}&euro;</div>
                </div>
              ))}
              <hr />
              <h5>Totale: {price}&euro;</h5>
              <div className='btn btn-danger'>Checkout{' >'}</div>
              <span className='text-center'>oppure</span>
              <Link className='text-center' to="/SearchPage">{'< '}Continua gli acquisti</Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        {cartProducts.map((product) => (
          <>
            <div>{product.id}</div>
            <div>{product.quantity}</div>
            <div>{price}</div>
          </>
        ))}
      </div> */}
    </>
  )
}

export default CheckoutPage