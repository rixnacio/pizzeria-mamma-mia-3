import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../data/pizzas'

const Home = () => {
  return (
    <main>
      <Header />

      <section className="container py-5">
        <div className="row g-4 justify-content-center">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
