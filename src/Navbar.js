const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>SoundStop</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/profile">Profile</a>
                <a href="/upload">Upload</a>
                <a href="/signout" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>Sign Out</a>

            </div>
        </nav>
      );
}
 
export default Navbar;
