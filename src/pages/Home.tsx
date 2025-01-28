import '../styles/Home.css'
import homeImage2 from '../assets/no_background2.png';
import homeLogo2 from '../assets/logo_turismo.png';
// import homeImage from '../assets/entraqda.png';
// import homeLogo from '../assets/LOGO-blanco.png';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <section className='home'>
            
            <article className='home-image'>
                <img src={homeLogo2} alt="Logo fusa" />
                
            </article>
            <article className='home-options'>
                <div className='options-container'>
                    <h1>Explore World</h1>
                    <img src={homeImage2} alt="" />
                    <div className='entrada'>
                        <ul>
                            <li>
                                <button className="btn-01">
                                    <Link to="/galeria">GALERIA</Link>
                                    <div className="overlay"></div>
                                </button>
                            </li>
                            {/* <li>
                                <button className="btn-01">
                                    <Link to="/menu/promociones">PROMOCIONES</Link>
                                    <div className="overlay"></div>
                                </button>
                            </li> */}
                            <li>
                                <button className="btn-01">
                                    <Link to="" target="_blank">CONTACTO</Link>
                                    <div className="overlay"></div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    );
};
