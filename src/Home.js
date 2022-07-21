import terrainX from './images/terrainX.png'
const Home = () => {
    return ( 
        <div className="home">
            <div className="row">
                <div className="col"></div>
                <div className="col-sm-7 col-lg-9 bg-success py-2">
                    
                    <h2><center>Soccer</center></h2>
                    <p><center>Découvrez tous nos conseils sur le soccer</center> <br></br> <center>pour vous améliorer et profiter de votre sport favori!"</center></p>
                    <a href="/conseils" className="link"><center>voir les conseils</center></a>
                </div>
                <div className="col"></div>
                
            </div>
            <br></br>
            <h2><center>Comment pouvons-nous vous aider</center></h2>
            <br />
            <div className="row">
                <div className="col"></div>
                <div className="col-lg-3">
                    <p>Voulez-vous vous entraîner seul ou avec des amis? Ayez un petit apercu des terrains libre!</p>
                    <br />
                    <br />
                    <a href="/Terrains" className="link">apercu des terrains libre</a>
                </div>
                <div className="col-lg-3">
                    <p>Besoin de renseignement? contactez nous maintenant!</p>
                    <br />
                    <br />
                    <a href="/Contacter" className="link">Contacter</a>
                </div>
                <div className="col"></div>
                
            </div>
            
        </div>
     );
}
 
export default Home;