export const numeros = () =>{
   return [1,2,3,4,5,6,7,8,9,'</x', 0, 'x/>' ]
}

export const operadores = () =>{
    return ['+', '-', '*', '/', 'C', '=']
}

export const eliminarPrimero = (str) =>{
str = str.split('')
str.shift()
return str.join('')
};

export const eliminarUltimo = (str) =>{
    str = str.split('')
    str.pop()
    return str.join('')
    };

 

const division = (str)=>{
    let numeros = str.split('/');
    if(numeros.length<2 || numeros.includes('')) throw Error( 'se requiere dividendo y divisor')
    let resultado= numeros[0] / numeros[1]
numeros.forEach( (num,i) =>{
    if(i >1 ){
        let siguiente = i +1
            if(resultado){
               resultado = resultado / num
            }else{
                resultado = num / numeros[siguiente];
       }
    }
})
return resultado;
}
//console.log(division('10/2'))
const multiplicacion = (str)=>{
    if(!str.includes('*')) throw Error('falta el operando * para multiplicar');
    let numeros = str.split('*');
    if(numeros.length < 1 || numeros.includes('')) throw Error('se requiere multiplicando y multiplicador')
    let resultado = numeros[0] * numeros[1]
    numeros.forEach( (num,i) =>{
        if(i> 1){
            resultado = resultado * num
        }
    })
    return resultado
}
// console.log(multiplicacion('8*2'))

const multiplicacionDivision = (str) => {
    let total;
    let indexDivision = str.split('').findIndex((e) => e=== '/')
    let indexMultiplicacion = str.split('').findIndex((e)=> e === '*')
    if(indexDivision !== -1 && indexDivision < indexMultiplicacion) {
        let termino = str.split('*') 
        termino.forEach( num => {
            if(total === undefined){
                console.log(total)
                if(num.includes('/')) total = division(num)
                else total = num
            }else{
                if(num.includes('/')) {
                    let numeros = num.split('/')
                    numeros.forEach((e,i)=>{
                        if(i === 0)  total = total * e
                        else
                        total = total / e
                    
                    })
                }else{
                    total = total * num
                }
            }
        })
        return total
    }
    if(indexMultiplicacion !== -1 && indexMultiplicacion < indexDivision){
        let termino = str.split('/')
        console.log(termino)
        termino.forEach( num => {
            if(total === undefined){
                if(num.includes('*')) total = multiplicacion(num)
                else total = num
            }else{
                console.log(total)
                if(num.includes('*')) {
                    let numeros = num.split('*')
                    numeros.forEach((e,i)=>{
                        if(i === 0)  total = total / e
                        else
                        total = total * e
                    
                    })
            }else{
                total = total / num
            }
        }})
        return total
    }
    
    }

const resta = (str)=>{
let terminosResta = str.split('-');
let total;
console.log(terminosResta)
let terminos = terminosResta.map(termino => {
let resultadoTermino=0;
console.log(termino.includes('/'))
if(termino.includes('/') && !termino.includes('*') && !termino.includes('+')){
    console.log(termino)
    console.log(division(termino))
    if(division(termino) === NaN) throw Error('orrio un error')
    resultadoTermino =  division(termino)
    return resultadoTermino
}
console.log(termino.includes('*'))

if(termino.includes('*') && !termino.includes('/') && !termino.includes('+')){
    if(multiplicacion(termino)=== NaN) throw Error('orrio un error')
    resultadoTermino =  multiplicacion(termino)
    return resultadoTermino
}
if(termino.includes('*') && termino.includes('/') && !termino.includes('+')){
    if(multiplicacionDivision(termino ) === NaN) throw Error('error en multiplicacionDivision')
    resultadoTermino = multiplicacionDivision(termino)
    return resultadoTermino
}
console.log(termino)
return termino
})
console.log(terminos)
terminos.forEach( resTermino =>{
    console.log(resTermino)
    if(total === undefined) total = resTermino
    else
    total = total - resTermino
})
return total
}
 export const resultado = (str) =>{
    let terminos = str.split('+');
    let t = terminos.map(element => {
        if(element.includes('-')){
            return resta(element)
        }else 
        if(!element.includes('-') && element.includes('/') && !element.includes('*')){
            return division(element)
        }else
        if(!element.includes('-') && !element.includes('/') && element.includes('*')){
            return multiplicacion(element)
        }else
        if(!element.includes('-') && element.includes('/') && element.includes('*')){
            return multiplicacionDivision(element)
        }
        return element
    });
    let total=0;
    t.forEach(element => {
        total += Number(element)
    })
    return total
}


    // console.log(resultado('10+2/2*5+5-5-10/5*2/5+4-8-2*8*1/8*0+1'))
    // console.log(10+2/2*5+5-5-10/5*2/5+4-8-2*8*1/8*0+1)