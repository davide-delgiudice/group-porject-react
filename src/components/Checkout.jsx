import React from "react";

const orderData = {
  date: "2023-01-20T10:30:00Z",
  status: true,
  discount: {
    discountCode: "SUMMER25",
    discountAmount: 10,
  },
  videogames: [
    { name: "The Last of Us", price: 40 },
    { name: "God of War", price: 35 },
  ],
  totalAmount: 65,
};

export default function Checkout() {
  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Dettagli Ordine</h5>
          <p>
            <strong>Data Ordine:</strong>{" "}
            {new Date(orderData.date).toLocaleString()}
          </p>
          <p>
            <strong>Status Ordine:</strong>{" "}
            {orderData.status ? "Completato" : "In corso"}
          </p>
          <p>
            <strong>ID Coupon:</strong> {orderData.discount.discountCode}
          </p>
          <p>
            <strong>Sconto Applicato:</strong> €{orderData.discount.discountAmount.toFixed(2)}
          </p>

          <h6>Videogiochi:</h6>
          <ul className="list-group mb-3">
            {orderData.videogames.map((game, index) => (
              <li key={index} className="list-group-item">
                {game.name} - €{game.price.toFixed(2)}
              </li>
            ))}
          </ul>

          <h5 className="mt-4">
            Totale: €{orderData.totalAmount.toFixed(2)}
          </h5>
          <button className="btn btn-primary">Finalizza Ordine</button>
        </div>
      </div>
    </div>
  );
}