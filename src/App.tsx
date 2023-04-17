import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './App.module.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
  
  <section className={styles.topnav}> 
    <input type="checkbox" className={styles.menutoggle} id={styles.menutoggle} />
    <label className={styles.menubuttoncontainer} htmlFor={styles.menutoggle}>
    <div className={styles.menubutton}></div>
  </label>
    <ul className={styles.menu}>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
  </section>
 
    </div>
  )
}

export default App
