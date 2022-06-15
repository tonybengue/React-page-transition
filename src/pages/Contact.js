import { motion } from "framer-motion"
import '../styles/Contact.css'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div id="img-container">
        <img src="https://hellobiz.fr/wp-content/uploads/2020/01/Pizza-Hut-d%C3%A9voile-une-bo%C3%AEte-biod%C3%A9gradable-990x557.jpg" alt="" />
      </div>
      <div id="form-container">
        <h1>Contact US</h1>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <div>
              <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </motion.section>
  )
}