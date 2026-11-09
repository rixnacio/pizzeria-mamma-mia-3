
const Cart = ({ cart, setCart }) => {

  const increase = (id) => {
    setCart((currentCart) =>
      currentCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    )
  }

  const decrease = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    )
  }

  const total = cart.reduce(
    (accumulator, pizza) => accumulator + pizza.price * pizza.count,
    0
  )

  return (
    <main className="container py-5 cart-page">
      <section className="cart-container mx-auto">
        <h2 className="h4 mb-4">Detalles del pedido:</h2>

        {cart.length === 0 ? (
          <p className="text-secondary">Tu carrito está vacío.</p>
        ) : (
          <div className="d-flex flex-column gap-3">
            {cart.map((pizza) => (
              <div
                className="cart-item d-flex align-items-center gap-3"
                key={pizza.id}
              >
                <img
                  className="cart-image"
                  src={pizza.img}
                  alt={`Pizza ${pizza.name}`}
                />
                <span className="text-capitalize flex-grow-1">{pizza.name}</span>
                <strong className="cart-price">
                  ${pizza.price.toLocaleString('es-CL')}
                </strong>
                <button
                  className="btn btn-outline-danger btn-sm quantity-button"
                  type="button"
                  onClick={() => decrease(pizza.id)}
                  aria-label={`Disminuir ${pizza.name}`}
                >
                  -
                </button>
                <span className="quantity">{pizza.count}</span>
                <button
                  className="btn btn-outline-primary btn-sm quantity-button"
                  type="button"
                  onClick={() => increase(pizza.id)}
                  aria-label={`Aumentar ${pizza.name}`}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        )}

        <hr className="my-4" />
        <h3 className="h4 mb-3">
          Total: ${total.toLocaleString('es-CL')}
        </h3>
        <button className="btn btn-dark" type="button">
          Pagar
        </button>
      </section>
    </main>
  )
}

export default Cart
