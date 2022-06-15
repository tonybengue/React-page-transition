import { motion } from "framer-motion"
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'

export default function Menu() {
  return (
    <motion.section
      id="menu"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}

      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
    <h1>Our Menu</h1>
    <div className="menuList">
      {
        MenuList.map((menu, key) => {
          return (
            <MenuItem
              key={key}
              image={menu.image}
              name={menu.name}
              price={menu.price}
            />
          )
        })
      }
    </div>
    </motion.section>
  )
}