import "../component"

function App() {

  let estilos = {
    backgroundColor : "#000",
    color: "#fff"
  }

  return (
    <div id='' className="" >
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Corazón de Aguacate</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Inicio
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Calzado Mujer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Calzado Hombre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Accesorios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
      </ul>
  
    </div>
    </div>
  </nav>
    </div>
  );
}

export default App;