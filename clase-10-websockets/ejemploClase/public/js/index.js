// @ts-ignore
const serverSocket = io('http://localhost:8080/')

const btnEnviar = document.querySelector('#btnEnviar')

if (btnEnviar) {
    btnEnviar.addEventListener('click', evento => {
        const inputAutor = document.querySelector('#inputAutor')
        const inputMensaje = document.querySelector('#inputMensaje')

        if (!(inputAutor instanceof HTMLInputElement) || !(inputMensaje instanceof HTMLInputElement)) return

        const autor = inputAutor.value
        const mensaje = inputMensaje.value

        if (!autor || !mensaje) return

        serverSocket.emit('nuevoMensaje', { timestamp: Date.now(), autor, mensaje })
    })
}

const plantillaMensajes = `
{{#if hayMensajes }}
<ul>
    {{#each mensajes}}
    <li>({{this.fecha}}) {{this.autor}}: {{this.mensaje}}</li>
    {{/each}}
</ul>
{{else}}
<p>no hay mensajes...</p>
{{/if}}
`
const armarHtmlMensajes = Handlebars.compile(plantillaMensajes)

serverSocket.on('actualizarMensajes', mensajes => {
    const divMensajes = document.querySelector('#mensajes')
    if (divMensajes) {
        // divMensajes.innerHTML = JSON.stringify(mensajes)
        divMensajes.innerHTML = armarHtmlMensajes({ mensajes, hayMensajes: mensajes.length > 0 })
    }
})
