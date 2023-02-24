const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', ()=> {
    Notification.requestPermission().then(resultado =>{
        console.log('Respuesta:', resultado);
    })
})

const verNotificacion =document.querySelector('#vernotificacion');

verNotificacion.addEventListener('click', ()=>{
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Github',{
            icon: 'g.png',
            body: 'LeoAristizabal'
        });

        notificacion.onclick = function(){
            window.open('https://github.com/leoaristizabal')
        }
          
    }
})