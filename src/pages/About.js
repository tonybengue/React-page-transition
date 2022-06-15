import { motion } from "framer-motion"
import '../styles/About.css'


export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <img src="https://www.stationpizza.com/wp-content/uploads/elementor/thumbs/crust-delicious-dinner-2271194-okbumm3a584r1106mitw5k1mo1ca360o2vfjnfdtfk.jpg" alt="" srcset="" />
      <div id="about-text">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam explicabo aut pariatur quos itaque corporis, impedit porro, dolore veniam possimus aliquid molestiae voluptas? Deleniti fugiat rerum enim, fugit saepe labore nulla sed voluptatem esse, minima qui, sint repellat dicta ducimus debitis consectetur ad unde. Hic, rerum ad! Illo, debitis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatum.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eos omnis iure laudantium velit culpa, soluta rem quidem harum enim alias sequi placeat odio recusandae maiores voluptatum voluptas numquam quaerat.</p>
      </div>
    </motion.section>
  )
}