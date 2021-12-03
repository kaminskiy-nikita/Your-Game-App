import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContext from '../../context/context'
import logo from './img/logo.png';

const Navbar = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div className={styles.navbar}>
      <div className="container">
        <ul className={styles.links}>
          <Link to='/'><li className={styles.link}><img src={logo} alt="" width="118px" height="48px" className="d-inline-block align-text-top" /></li></Link>
          {
            state.user &&
            <div className='d-flex'>
	            <p style={{ color: 'whitesmoke', marginRight: '20px'}}>Очки {state.user.username}: {state.user.result}</p>
	            <Link to='/stat'><li className={styles.link}>Статистика</li></Link>
	            <Link to='/logout'><li className={styles.link}>Выход</li></Link>
            </div>
          }
          {
            !state.user &&
            <>
             <div className='d-flex'>
	            <Link to='/stat'><li className={styles.link}>Статистика</li></Link>
              <Link to='/login'><li className={styles.link}>Вход</li></Link>
              <Link to='/registration'><li className={styles.link}>Регистрация</li></Link>
	           </div>
            </>
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar

