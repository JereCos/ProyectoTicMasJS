const nombre = document.getElementById('nombre');
const foto = document.getElementById('imagen');
const boton1 = document.getElementById('btnradio1');
const boton2 = document.getElementById('btnradio2');
const boton3 = document.getElementById('btnradio3');
const boton4 = document.getElementById('btnradio4');
const boton5 = document.getElementById('btnradio5');
const btnExperiencia = document.getElementById('experiencia');
const info = document.getElementById('info');
const btnEstudios = document.getElementById('estudios');

nombre.innerHTML = `Datos Personales`

traerDatos();

async function traerDatos() {
    const response = await fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole');
    const datos = await response.json();
    const usuario = datos[0];
    let persona = new Persona(usuario.first, usuario.last, usuario.address, usuario.created, usuario.email, 'https://randomuser.me/api/portraits/lego/4.jpg')

    boton1.addEventListener('click', () => { nombre.innerHTML = `${persona.nombre} ${persona.apellido}` })
    boton2.addEventListener('click', () => { nombre.innerHTML = `${persona.address}` })
    boton3.addEventListener('click', () => { nombre.innerHTML = `${persona.fecha}` })
    boton4.addEventListener('click', () => { nombre.innerHTML = `${persona.email}` })

    imagen.innerHTML = `<img src="${persona.foto}" class="rounded" alt="fotoCV">`
}

class Persona {
    constructor(nombre, apellido, address, fecha, email, foto) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.address = address;
        this.fecha = fecha;
        this.email = email;
        this.foto = foto;
    }
}

btnExperiencia.addEventListener('click', () => {
    info.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum asperiores eos, voluptate soluta autem corrupti at rem maiores ut dolores, adipisci voluptas praesentium. Temporibus excepturi quod voluptatibus magnam eum?`
})
btnEstudios.addEventListener('click', () => {
    info.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum asperiores eos, voluptate soluta autem corrupti at`
})