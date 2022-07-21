
//function exécuté lors du click du boutton
const onSubmit = e =>{
    e.preventDefault();
    alert('message envoyé')
}

const Contacter = () => {
    return ( 
        
        <center>
            <h3>Contacter</h3>
        <form onSubmit={onSubmit}>
            <div class="row-mb-3">
                <label for="inputemail" class="form-label">Votre Email</label>
                <div className="col-md-6">
                    <input type="email" className="form-control" id="inputemail"/>
                </div>  
                
            </div>

            <div class="row-md-6">
                <label for="inputMessage" class="form-label">Votre Message</label>
                <div className="col-md-6">
                    <textarea id="inputMessage" cols="30" rows="10" className="form-control"></textarea>
                </div>
            </div>
            <div className="row">
                <dic className="col">
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </dic>
            </div>
            
        
        </form>
        <br />
        <p>NB: Pour reserver un terrain, veuillez nous envoyé un message comprenant le numéro du terrain que vous souhaitez reserver et la date <br /> nous vous recontacterons a l'adresse courriel fournie</p>
        </center>
        
     );
}
 
export default Contacter;