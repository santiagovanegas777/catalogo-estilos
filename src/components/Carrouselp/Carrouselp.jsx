import '../../styles/Carrouselp/carrousel.css'

const Carrouselp = () => {
    return (
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://res.cloudinary.com/dz3qrv6vz/image/upload/v1710067799/estilo/uwtasxilwchi8kwv52jh.jpg" class="imgCarrousel" alt="bob esponja"/>
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dz3qrv6vz/image/upload/v1710075288/estilo/otgbcdl2pgvsejlo5huk.jpg" class="imgCarrousel" alt="gatos"/>
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dz3qrv6vz/image/upload/v1714922562/estilo/qihx9bazn0owphvjortl.jpg" class="imgCarrousel" alt="prueba"/>
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dz3qrv6vz/image/upload/v1714922427/estilo/b7veequnlvgzqbeci0bj.jpg" class="imgCarrousel" alt="prueba"/>
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dz3qrv6vz/image/upload/v1714922473/estilo/agxsvagvs45vjpa2wvc5.jpg" class="imgCarrousel" alt="prueba"/>
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dz3qrv6vz/image/upload/v1714922532/estilo/nqy9o6kjsiiamoszxwj2.jpg" class="imgCarrousel" alt="prueba"/>
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dz3qrv6vz/image/upload/v1714922544/estilo/tesfyxo8ysuq08jsilga.jpg" class="imgCarrousel" alt="prueba"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Carrouselp




