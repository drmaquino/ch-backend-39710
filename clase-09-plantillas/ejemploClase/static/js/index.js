console.log('holaaaaa')

const fnPlantilla = Handlebars.compile('<p>{{contenido}}</p>')

const holder = document.querySelector('#contenidos')
if (holder) {
    fetch('/api/contenido').then(res => res.json()).then(json => {
        holder.innerHTML = fnPlantilla(json)
    })
}