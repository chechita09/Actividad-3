import { consultarClima } from './API-clima.js'

const btn = document.getElementById('botonConsultar')
const date = document.getElementById('datePicker')
const fechaMorning = document.getElementById('resultFechaMorning')
const imgMorning = document.getElementById('resultImgMorning')
const tipoClimaMorning = document.getElementById('resultTipoClimaMorning')
const temperaturaMorning = document.getElementById('resultTemperaturaMorning')

const fechaAfternoon = document.getElementById('resultFechaAfternoon')
const imgAfternoon = document.getElementById('resultImgAfternoon')
const tipoClimaAfternoon = document.getElementById('resultTipoClimaAfternoon')
const temperaturaAfternoon = document.getElementById('resultTemperaturaAfternoon')

const fechaEvening = document.getElementById('resultFechaEvening')
const imgEvening = document.getElementById('resultImgEvening')
const tipoClimaEvening = document.getElementById('resultTipoClimaEvening')
const temperaturaEvening = document.getElementById('resultTemperaturaEvening')


const mensajeError = document.getElementById('mensajeError')

const climaManana = document.getElementById('morning')
const climaTarde = document.getElementById('afternoon')
const climaNoche = document.getElementById('evening')

const fechaHoy = new Date()
const fechaFormateada = (fecha) =>{
    let dia = fecha.getDate() <= 9 ? '0'+fecha.getDate() : fecha.getDate(),
    mes = fecha.getMonth() <= 8 ? '0'+ (fecha.getMonth()+1) : (fecha.getMonth()+1),
    anio = fecha.getFullYear()
    return String(anio+'-'+mes+'-'+dia)
}

date.setAttribute('value', fechaFormateada(fechaHoy))

btn.addEventListener('click', () => {    
    mensajeError.innerText = ''
    if (date.value == null || date.value == '') {
        mensajeError.innerText = 'Debe selecionar una fecha válida.'
        return
    }

    if (date.value == fechaMorning.textContent) return

    if (date.value == fechaFormateada(fechaHoy)){
        climaManana.classList.add('hide')
        mostrarClimaHoy()
    }else{
        climaManana.classList.add('hide')
        climaTarde.classList.add('hide')
        climaNoche.classList.add('hide')
    }
    
    let resultMorning
    async function realizarConsultaManana(){
        resultMorning = await consultarClima(date.value)
        climaManana.classList.remove('hide')
        fechaMorning.innerText = resultMorning.fecha
        temperaturaMorning.innerText = resultMorning.temperatura
        imgMorning.setAttribute('src', resultMorning.imgClima)
        tipoClimaMorning.innerText = resultMorning.tipoClima
    }
    realizarConsultaManana()
    
})

const mostrarClimaHoy= ()=> {
    let resultAfternoon
    async function realizarConsultaTarde(){    
        resultAfternoon = await consultarClima(date.value)
        climaTarde.classList.remove('hide')
        fechaAfternoon.innerText = resultAfternoon.fecha
        temperaturaAfternoon.innerText = resultAfternoon.temperatura
        imgAfternoon.setAttribute('src', resultAfternoon.imgClima)
        tipoClimaAfternoon.innerText = resultAfternoon.tipoClima
    }
    realizarConsultaTarde()
    let resultEvening 
    async function realizarConsultaNoche(){
        resultEvening = await consultarClima(date.value)
        climaNoche.classList.remove('hide')
        fechaEvening.innerText = resultEvening.fecha
        temperaturaEvening.innerText = resultEvening.temperatura
        imgEvening.setAttribute('src', resultEvening.imgClima)
        tipoClimaEvening.innerText = resultEvening.tipoClima
    }
    realizarConsultaNoche()
}
