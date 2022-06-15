import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/Home.css'

export default function Home() {
  return (
    <motion.section
        id="home"
        // initial={ false }
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        exit={{ y: window.innerHeight, transition: { duration: 1 } }}
      >
      <img src="https://i.unimedias.fr/2022/04/13/pizza_e_coli.jpg" loading='lazy' alt="pizza"/>
        <div id="home-container">
            <h2>Tony's Pizzeria</h2>
            <p>PIZZA TO FIT ANY TASTE</p>
            <Link to="/menu">
              <button>ORDER NOW</button>
            </Link>
        </div>
    </motion.section>
    // <section id="home">
    //   <img src="https://www.destaquenoticias.com.br/wp-content/uploads/2021/07/pizza.png" alt="" srcset="" />
    // </section>
  )
}