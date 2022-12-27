function NavBar(){
    return(
        <nav className="Menu">
            <input type="checkbox" id="check" />
            <div className="Content">
                <div className="links">
                    <a href="#" className="nav">
                        <i class='bx bxs-home'></i>
                    </a>
                    <a href="#sobre" className="nav">
                        <i class='bx bxs-show'></i>
                    </a>
                    <a href="#certificados" className="nav">
                        <i class='bx bx-file'></i>
                    </a>
                </div>
                <label htmlFor="check">
                    <div className="More">
                        <i class='bx bx-plus-medical'></i>
                    </div>
                </label>
            </div>
        </nav>
    )
}
export default NavBar