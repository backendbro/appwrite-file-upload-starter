import "../styles/Navbar.css"

const Navbar = () => {
  
    return (
      <header>
      <div class="container">
        <h1 class="logo">Photo Galleria</h1>
  
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/uploads">Uploads</a></li>
          </ul>
        </nav>
        
      </div>
    </header>
      )
  }
  
  export default Navbar