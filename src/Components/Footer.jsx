import facebook from './images/icons/facebook.svg';
import twitter from './images/icons/twitter.svg';
import instagram from './images/icons/instagram.svg';
import youtube from './images/icons/youtube.svg';
import googleplay from './images/googleplay.png';
import appstore from './images/appstore.png'

const Footer=()=> {
    return (
    <div className="container">
        <div className="row mt-5">
            <div className="col">
                <h2>Seguinos en nuestras redes sociales:</h2>
            </div>
            <div className="col">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='ms-3 iconhover'><img src={facebook} alt={'facebook'} width={'32'}/></a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className='ms-3 iconhover'><img src={twitter} alt={'twitter'} width={'32'}/></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='ms-3 iconhover'><img src={instagram} alt={'instagram'} width={'32'}/></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className='ms-3 iconhover'><img src={youtube} alt={'youtube'} width={'32'}/></a>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <div class="card bg-dark text-center">
                        <h5 class="card-header text-white">Soporte</h5>
                        <div class="card-body">
                            <h5 class="card-title text-white">Contanos tu problema</h5>
                            <p class="card-text text-white">Detallanos puntualmente el inconveniente que estas teniendo por mail</p>
                            <a href="./" class="btn btn-primary text-white">Enviar</a>
                        </div>
                    </div>
                </div>
                <div className="col text-center">
                    <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer"><img src={googleplay} alt={'googleplay'} width={'256'}/></a>
                    <a href="https://www.apple.com/la/app-store/" target="_blank" rel="noopener noreferrer"><img src={appstore} alt={'appstore'} width={'256'}/></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;