import cer1 from '../assets/img/logo.svg'
import cer2 from '../assets/img/etelogo.png'

import certificado1 from '../assets/Certificado/html.pdf'
import certificado2 from '../assets/Certificado/js.pdf'

function Certificados(){
    return(
        <section className="Certificados" id='certificados'>
            <div className="init">
                <h1>CErtificados</h1>
            </div>
            <div className="certs">
                <a href={certificado1} className='linka'>
                    <div className="box">
                        <div className="name">
                            <a href="https://www.dio.me/" target='_blank'>
                                <img src={cer1}  width='100'/>
                            </a>
                            <span>Introdução a criação de websites com HTML5 e CSS3</span>
                        </div>
                        <a href={certificado1} download="Certificado" >
                            <input type="button" value='Baixar Certificado' />
                        </a>
                    </div>
                </a>
                <a href={certificado2} className='linka'>
                    <div className="box">
                        <div className="name">
                            <a href="https://www.dio.me/" target='_blank'>
                                <img src={cer1}  width='100'/>
                            </a>
                            <span>Programação para internet com JavaScript</span>
                        </div>
                        <a href={certificado2} download='Certificado'>
                            <input type="button" value='Baixar Certificado' />
                        </a>
                    </div>
                </a>
                <div className="box">
                    <div className="name">
                        <a href="https://www.instagram.com/etecna_/" target='_blank'>
                            <img src={cer2}  width='130'/>
                        </a>
                        <span>Técnico em Logística</span>
                    </div>
                    <input type="button" value='indisponível' />
                </div>
            </div>
        </section>
    )
}
export default Certificados