import React from "react";

function CarouselComponent() {
  return (
   <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/foto-gratis/retrato-mujer-belleza-natural-cerca-maquillaje-suave-labios-rojos-colores-calidos-verano-frescura-felicidad_291049-2705.jpg?w=900&t=st=1677109570~exp=1677110170~hmac=71dc397c1ac5eaf28766b07c071ce024fc41d99e5264bf99614052e59dbaf093" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <button className="btn btn-secondary btn-lg">Promociones</button>
         
      <h2 className='title text-center font-bold'>Promociones únicas</h2>
        <p>Compra tu Glasses AHORA.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/foto-gratis/madre-hijo-pequeno-tienda-gafas_1157-22940.jpg?w=900&t=st=1677111260~exp=1677111860~hmac=e4bc187925d82e1ee2c155061579c197cfe692d873abdb1456a0d2485ec75462" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2 className='title text-center font-bold'>Envío FULL</h2>
        <p>Todos nuestros productos cuentan con envío gratis a todo el pais.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/foto-gratis/vista-frontal-mano-que-sostiene-par-anteojos_23-2148429660.jpg?w=900&t=st=1677111063~exp=1677111663~hmac=b057568488e04ff111a4dd8ffefaef7435e86cb7ac10e4add65165e60e42a189" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2 className='title text-center font-bold'>Hasta 6 cuotas sin interes</h2>
        <p>Recibimos todas las tarjetas.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/foto-gratis/sonriendo-hermosa-mujer-asiatica-gafas-sol-tomando-selfie-parque-verano_1262-13013.jpg?w=900&t=st=1677111471~exp=1677112071~hmac=bac6d7d8851474a712a6834ae4d1ebcce59120bc6330642840d9246dc5cd1011" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2 className='title text-center font-bold'>Garantia</h2>
         <p>Garantia de 12 meses para todos nuestros productos.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/foto-gratis/madre-hijo-pequeno-tienda-gafas_1157-22940.jpg?w=900&t=st=1677111260~exp=1677111860~hmac=e4bc187925d82e1ee2c155061579c197cfe692d873abdb1456a0d2485ec75462" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2 className='title text-center font-bold'>20% OFF</h2>
        <p>En toda la tienda</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  );
}
export default CarouselComponent;