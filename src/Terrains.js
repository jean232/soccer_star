import terrain1 from './images/terrain1.png'
import terrain2 from './images/terrain2.png'
import terrain0 from './images/terrain0.png'
import { useNavigate } from "react-router-dom";


const Terrains = () => {
    
    return ( 

        <div className="container">
            <center>
                <h3>Terrains</h3>
            <div className="cards">
                <div className="cards_box">
                    
                    
                    <div className="card"style={{ width: '0rem' }}></div>
                    <div className="card"style={{width: '45rem' }}>
                        
                        <img src={terrain0} alt="terrain 0" />              
                        
                        <div className="row">
                            <div className="col">
                            <h5>Terrain 0</h5>
                            </div>
                            <div className="col">
                            <p style={{ color: 'green' }}>disponible</p>
                            </div>
                            <div className="col">
                            <a href="/Contacter" className="link"><button className="btn btn-primary">contacter nous</button></a>
                            </div>
                        </div>
                    
                    </div>
                
                    <div className="card"style={{width: '45rem' }}>
                        
                        <img src={terrain1} alt="terrain 1" />              
                        
                        <div className="row">
                            <div className="col">
                            <h5>Terrain 1</h5>
                            </div>
                            <div className="col">
                            <p style={{ color: 'red' }}>indisponible</p>
                            </div>
                            <div className="col">
                            <a href="/Contacter" className="link"><button className="btn btn-primary">contacter nous</button></a>
                            </div>
                        </div>
                    
                    </div>
                    
                    

                    <div className="card"style={{width: '45rem' }}>
                        
                        <img src={terrain2} alt="terrain 2" />              
                        
                        <div className="row">
                            <div className="col">
                            <h5>Terrain 2</h5>
                            </div>
                            <div className="col">
                            <p style={{ color: 'green' }}>disponible</p>
                            </div>
                            <div className="col">
                            <a href="/Contacter" className="link"><button className="btn btn-primary">contacter nous</button></a>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            </center>
        </div>
        /*
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={terrain1} alt="terrain 1" />
                </div>

                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <p>Terrain 1</p>
                    </div>
                    <div className="col bg-danger">
                                
                    </div>
                    <div className="col-lg-6"><p>indisponible</p></div>
                </div>    
                        
            </div>
            <div className="row">
            <div className="col">
                    <img src={terrain2} alt="terrain 2" />
                </div>

                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <p>Terrain 2</p>
                    </div>
                    <div className="col bg-success">
                                
                    </div>
                    <div className="col-lg-6"><p>disponible</p></div>
                </div>    
            </div>
            
        </div>*/
        

     );
}
 
export default Terrains;