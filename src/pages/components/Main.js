import vetor from '../../assets/img/vetorimg.png'
function Main({title, sobre, img, orienta}) {
    return (
        <main id='sobre' className={orienta}>
            <div className="right">
                <h1>{title}</h1>
                <p>{sobre}</p>
            </div>
            <div className="left">
                <img src={img} />
            </div>
        </main>
    )
}
export default Main
