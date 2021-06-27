function Autos(marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

for(var i=0; i<31; i++) {
    var autoNuevo = new Autos("Ford","T", 1908+i);
    console.log(autoNuevo);    
}