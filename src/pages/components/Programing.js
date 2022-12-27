import demo1 from '../../assets/img/demo1.png'
import demo2 from '../../assets/img/demo2.png'

const imgs = [demo1, demo2 ]

var num = 0
setInterval(() => {
    var img = document.querySelectorAll(".img")
    var slide = document.querySelector('.slide')
    slide.scrollBy(slide.clientWidth,0)

    num++

    if (num == img.length ){
        var init = slide.clientWidth * img.length 
        slide.scrollBy('-'+init,0)
        num = 0
    }
}, 3000);
function Programing(){
    return(
        <section className="Programing">
            <div className="lingua">
                <i class='bx bxl-html5'></i>
                <i class='bx bxl-javascript' ></i>
                <i class='bx bxl-css3' ></i>
                <i class='bx bxl-php' ></i>
                <i class='bx bxl-react' ></i>
            </div>
            <div className="nivel">
                <div className='nece'>
                    <div className='slide'>
                        {imgs.map(img => (
                            <img src={img} className='img' />
                        ) )}
                        <a href="https://github.com/ericknovaes56" target='_blank' className='link'>
                            <div className='img div'>
                                <i className='bx bxl-github change'></i>
                                <h1 className='jk'>Veja todos Meus Os Projetos</h1>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="text">
                    <h1>Programação</h1>
                    <p>Erick ainda está aprendendo cada membro dessa família de linguagens, deseja se transforma em um júnior no futuro, mas o mesmo já realizou diversos projetos só com o que sabe.</p>
                </div>
            </div>
        </section>
    )
}
export default Programing