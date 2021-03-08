function consultarTemperatura() {
    let temperatura = Math.floor((Math.random() * ( 30 - 5 + 1 )) + 5)
    return temperatura
}

export async function consultarClima(date) {
    return new Promise((resolve,reject)=>{    
    setTimeout(()=>{
    let climaDelDia = {
        fecha: date,
        temperatura: consultarTemperatura() + '° C',
        tipoClima: '',
        imgClima: ''
    }
    let tipoClima = Math.floor((Math.random() * ( 3 -1 + 1 )) + 1)
    switch (tipoClima) {
        case 1:
            climaDelDia.tipoClima = 'Despejado'            
            climaDelDia.imgClima = './img/sun-solid.svg'
            break
        case 2: 
            climaDelDia.tipoClima = 'Nublado'
            climaDelDia.imgClima = './img/cloud-solid.svg'
            break
        case 3: 
            climaDelDia.tipoClima = 'Lluvioso'
            climaDelDia.imgClima = './img/cloud-showers-heavy-solid.svg'
            break
        }
        if (date !== null){
            resolve(climaDelDia)
        }else {
            reject(Error('Error al consultar'))
        }
    },3000)
    })
}


