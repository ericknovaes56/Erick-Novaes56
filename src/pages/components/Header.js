import imgerick from '../../assets/img/Erick.jpg'
import TypeIt from "typeit";

function start(){
    new TypeIt("#element", {
        speed: 10,
        strings: [""],
      }).go();
}

setTimeout(() => {
    start()
}, 1);
const Insta = 'https://www.instagram.com/ericknovaes56/'
const likein = 'https://www.linkedin.com/in/erick-nogueira-47621a25b/'
const mailin = 'mailto:ericknovaes56@gmail.com?subject=Quero%20Te%20Conhecer'
function Header(){
    return (
        <header>
            <img src={imgerick} alt="none" className='img' />
            <div className='Text'>
                <div className='mobile'>
                    <img src={imgerick} className='img2' alt="none" /><h1>Erick Nogueira</h1>
                </div>
                <div className='console'>
                    <span>Console - console.log(erick_info)</span>
                    <p id='element'>
                        Técnico em Logística com conhecimento holístico de
                        desenvolvimento de software e design. Também com vasto
                        conhecimento na área de computação.
                    </p>
                </div>
                <a href="#sobre">
                    <input type="button" value='Ver Mais' />
                </a>
                <div className='Redes'>
                    <ul>
                        <li><a href={Insta} target='_blank'><i class='bx bxl-instagram-alt' ></i></a></li>
                        <li><a href={likein}><i class='bx bxl-linkedin-square'></i></a></li>
                        <li><a href={mailin}><i class='bx bxs-envelope' ></i></a></li>
                    </ul>
                    <span><span className='none'>-</span> ericknovaes56@gmail.com</span>
                </div>
            </div>
        </header>
    )
}
export default Header