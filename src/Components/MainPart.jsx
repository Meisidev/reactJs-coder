import cod from './images/games/cod.jpg'
import csgo from './images/games/csgo.jpg'
import ds from './images/games/deadspace.jpg'
import hp from './images/games/hp.jpg'


const MainPart= () => {
    return (
        <div className= "container my-5">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={cod} className="d-block w-100" alt="cod"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Call of Duty Modern Warfare II y Warzone II!</h5>
                            <p>Oferta por tiempo limitado! <b>20% OFF</b></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={csgo} className="d-block w-100" alt="csgo"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Counter Strike: Global Offensive</h5>
                            <p>Ahora modo competitivo <b>GRATIS</b></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ds} className="d-block w-100" alt="ds"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Nueva Expansion de DeadSpace</h5>
                            <p>Compra el nuevo DLC y extiende las horas de juego.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={hp} className="d-block w-100" alt="hp"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5><b>Disponible el 10 de febrero.</b></h5>
                            <p>Preparate para la batalla mas epica en un mundo lleno de misterios</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}

export default MainPart;