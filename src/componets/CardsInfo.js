import React from 'react';

const CardsInfo = () => {
  return (
    <div className="row d-flex">
         <div className="col flex-row">
          <div className="card bg-light">
          <img src="https://img.freepik.com/free-photo/summer-vacation-concept-beautiful-sunglasses-with-straw-hat-sand-beach-lifestyle-toning_1220-1209.jpg?w=900&t=st=1677179225~exp=1677179825~hmac=e9324075409d0246029f315c5e082fdc4609fcb682e6a52c1a2080fbb0d0c9e3" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title font-bold">Polaroid</h5>
             <p className="card-text">Calidad y Diseño</p>
          </div>
        </div>
      </div>
      <div className="col flex-row">
        <div className="card bg-light">
          <img src="https://img.freepik.com/free-photo/summer-garden-lawn-background-park_1150-1180.jpg?w=900&t=st=1677179301~exp=1677179901~hmac=201abedb79503fbbc83adc7859dd840e35f47230822d61ee0a246918e383b5eb" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title font-bold">Rimland</h5>
            <p className="card-text">Lee con placer</p>
          </div>
        </div>
      </div>
      <div className="col flex-row">
        <div className="card bg-light">
          <img src="https://img.freepik.com/free-photo/sun-glasses-wood_1339-126.jpg?w=900&t=st=1677179428~exp=1677180028~hmac=1a90727f759583c8900ae2b5542a247f76d554c560066f49602b268e2ad09966" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title font-bold">Prototype</h5>

            <p className="card-text">Proteccion para tu vista</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsInfo;