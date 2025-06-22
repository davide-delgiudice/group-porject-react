import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom';

const CheckoutPage = () => {

  const { savedCheckoutDatas } = useCart();
  console.log("save-data", savedCheckoutDatas.items)

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
            {savedCheckoutDatas.items.map((data) => (
              <div key={`data-${data.items.id}`} className="card bg-secondary p-3 mb-3 d-flex flex-row align-items-center">
                <img src={data.items.image} className='w-25 rounded-2' alt={data.items.name} />
                <div className='mx-3'>
                  <h4 className='text-light fs-5 m-0'>{data.items.name}</h4>
                  <p className='text-light m-0'>{data.items.basePrice}&euro;</p>
                  <p className='text-light m-0'>Quantità: {data.items.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Colonna del sommario */}
          <div className="col-md-4">
            <div className="card bg-secondary text-light p-3">
              {savedCheckoutDatas.map((product) => (
                <div key={`product-${product.items.id}`} className='mb-2'>
                  <div>Prezzo: {product.items.unit_price}&euro;</div>
                </div>
              ))}
              <hr />
              {/* <h5>Totale: {product.total}&euro;</h5> */}
              <div className='btn btn-danger'>Checkout{' >'}</div>
              <span className='text-center'>oppure</span>
              <Link className='text-center' to="/SearchPage">{'< '}Continua gli acquisti</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPage