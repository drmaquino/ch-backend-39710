fetch('http://localhost:8080/personas', {
    method: 'POST',
    headers: {
        'Content-Type': 'Application/json'
    },
    body: JSON.stringify({ nombre: 'marian', rol: 'profe' })
})