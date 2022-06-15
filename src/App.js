// https://youtu.be/FdrEjwymzdY?t=453
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {
  //const myHTML = `<h1>John Doe</h1>`;
  return (
    <div className="App">
      <Router>
        <Header />
          <AnimatedRoutes />
        <Footer />
      </Router>
      {/* <div dangerouslySetInnerHTML={{ __html: myHTML }}></div> */}
    </div>
  )
}

export default App
