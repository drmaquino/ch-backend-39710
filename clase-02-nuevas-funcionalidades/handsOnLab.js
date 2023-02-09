class TicketManager {
    static precioBaseGanancia = 0.15;
    eventos

    constructor() {
        this.eventos = [];
    }

    getEventos() {
        return this.eventos;
    }

    agregarEvento(evento) {
        // cargos por el servicio
        evento.precio += evento.precio * TicketManager.precioBaseGanancia

        // identificador del evento
        if (this.eventos.length === 0) {
            evento.id = 1;
        } else {
            evento.id = this.eventos[this.eventos.length - 1].id + 1;
        }

        // registro el evento
        this.eventos.push(evento);
    }

    agregarUsuario(idEvento, idUsuario) {
        const evento = this.eventos.find(e => e.id === idEvento);
        if (!evento) {
            throw new Error("Evento no encontrado");
        }

        const usuarioRegistrado = evento.participantes.includes(idUsuario);
        if (usuarioRegistrado) {
            throw new Error("Usuario ya registrado para asistir a este evento");
        }

        evento.participantes.push(idUsuario);
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        const evento = this.eventos.find(e => e.id === idEvento);
        if (!evento) {
            throw new Error("Evento no encontrado");
        }
        const newEvento = {
            ...evento,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            id: this.eventos[this.eventos.length - 1].id + 1,
            participantes: []
        }
        this.eventos.push(newEvento);
    }
}

class Evento {
    constructor(nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString()) {
        this.nombre = nombre
        this.lugar = lugar
        this.precio = precio
        this.capacidad = capacidad
        this.fecha = fecha
        this.participantes = []
    }
}

//Pruebas

const manejadorEventos = new TicketManager();

console.log('agregando Evento coder 1 para Argentina, precio: 200, para 50 participantes')
manejadorEventos.agregarEvento(new Evento('Evento coder 1', 'Argentina', 200, 50));

console.log('agregando al evento con id 1 la participacion del usuario con id 2')
manejadorEventos.agregarUsuario(1, 2);

console.log('creando una copia vacía del evento 1 pero en mexico y para el 2024')
manejadorEventos.ponerEventoEnGira(1, 'Mexico', '30/11/2024');

console.log(manejadorEventos.getEventos());