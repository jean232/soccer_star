import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar  navbar-expand-sm bg-ligh mb-3 py-2" >
            <div className="container">
                <a href="/" className="navbar-brand">Soccer Star</a>
            </div>
            
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/">Acceuil</Link>
                    <Link to="/Terrains">Terrains</Link>
                    <Link to="/Contacter">contacter</Link>
                    <Link to="/Conseils">conseils</Link>   
                </div>
            </div>

        </nav>
        

     );
}
 
export default Navbar;