async function start() {
    while (true) {
        const hayMegustas = await fetch('servidor/megustas').then(res => res.text())
        if (hayMegustas) {
            // manejar evento
        }
    }
}

start()