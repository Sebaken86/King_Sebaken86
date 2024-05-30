/* Función Modal para manipular los eventos */

const miVentanaEmergente = document.getElementById('ventanaEmergente')

/* agregar un observador sobre el modal */

miVentanaEmergente.addEventListener('show.bs.modal',function(event){
    console.log('se está abriendo el modal');

    /* reconocer el elementos que habilita el eventos modal */

    let boton = event.relatedTarget //etiquetado relacionado

    let mensaje = boton.getAttribute('data-titulo')
    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('tituloModal').innerText = mensaje
    document.querySelector('.modal-body').innerText = contenido
})



miVentanaEmergente.addEventListener('shown.bs.modal',function(){
    console.log('está abierto el modal');
})

miVentanaEmergente.addEventListener('hide.bs.modal',function(){
    console.log('se está cerrado el modal');
})

miVentanaEmergente.addEventListener('hidden.bs.modal',function(){
    console.log('está cerrado el modal');
})