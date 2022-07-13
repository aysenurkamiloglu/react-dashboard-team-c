import Navbar from './components/NavBar/Navbar';
import style from './components/app.module.css'

export default function App() {

  return (
    <div className={style.app}>
      <Navbar />
    </div>
  );
}
