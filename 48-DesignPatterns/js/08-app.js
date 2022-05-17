//* Mediator
function Vendedor(nombre) {
    this.nombre=nombre;
    this.sala = null;
}

Vendedor.prototype ={
    oferta: (articulo, precio)=>{
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador =>{
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype={
    oferta: (cantidad, comprador)=>{
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar: usuario =>{
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

// Crear objetos
const diego = new Comprador('Diego');
const luis = new Comprador('Luis');

const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();

// Tienes que registrarlos
subasta.registrar(diego);
subasta.registrar(luis);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);

diego.oferta(350, diego);
luis.oferta(450, luis);
diego.oferta(500,diego);

vendedor.vendido('Diego')