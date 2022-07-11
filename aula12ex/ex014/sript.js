function carregar() {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date()
    var hora = 15 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'manhap.png'
        document.body.style.background = '#e0a84c'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'tardep.png'
        document.body.style.background = '#1b998b'
    } else {
        // Boa noite
        img.src = 'noitep.png'
        document.body.style.background = '#435760'
    }
}
