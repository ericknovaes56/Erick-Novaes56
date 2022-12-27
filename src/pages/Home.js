import Certificados from "./Certificados"
import Header from "./components/Header"
import Main from "./components/Main"
import Programing from "./components/Programing"


import vetor from '../assets/img/vetorimg.png'
import Footer from "./components/layout/Footer"

function Home() {
    return (
        <>
            <Header/>
            <Main img={vetor} title='Sobre' sobre='Erick Nogueria é Técnico em Logística formado na escola: "Escola Técnica Estadual Clóvis Nogueira Alves". Erick participou de diversas palestras e projetos sobre diversos tema relacionado a logística, com isso pode agregar de diversas forma ao seu lado...'/>
            <Programing/>
            <Certificados/>
            <Footer/>
        </>
    )
}
export default Home