const whats = 'https://wa.me/81300723'
const Insta = 'https://www.instagram.com/ericknovaes56/'
const discord = 'https://discord.gg/UjsrfXdDWw' 
function Footer(){
    return (
        <footer id="footer">
            <div className="columns">
                <div className="column">
                <h3>Contato</h3>
                <ul className="links especial_btn">
                  <li className="link"><a href={whats} target='_blank' className="w"><i class='bx bxl-whatsapp'></i> Whatsapp</a></li>
                  <li className="link"><a href={discord} target='_blank' className="d"><i class='bx bxl-discord-alt' ></i> Discord</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Redes</h3>
                <ul className="links especial_btn">
                  <li className="link"><a href={whats} target='_blank' className="w"><i class='bx bxl-whatsapp'></i> Whatsapp</a></li>
                  <li className="link"><a href={Insta} target='_blank' className="i"><i class='bx bxl-instagram-alt'></i> Instagram</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Paginas</h3>
                <ul className="links especial_btn">
                  <li className="link"><a href="#" className="page">Home</a></li>
                </ul>
              </div>
            </div>
            <div className="direitos">
              <p className="copyright">© Erick Novaes. Todos os direitos reservados.</p>
            </div>
        </footer>

    )
}
export default Footer