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

export const utilsSumar = (str) =>{
    let terminos = str.split('+');
    let total=0;
    let t = terminos.map(element => {
       let resultadoDivision;
        if(element.includes('/')){
            let terminosDivision = element.split('/')
            console.log(terminosDivision)
            terminosDivision.forEach((elementDivision,i) =>{
                let siguiente = i + 1
                if(siguiente < terminosDivision.length ){
                    console.log('s',siguiente)
                    console.log(elementDivision / terminosDivision[siguiente])
                    if(!resultadoDivision){

                        resultadoDivision = elementDivision / terminosDivision[siguiente]
                    }else{
                        resultadoDivision = resultadoDivision / terminosDivision[siguiente]
                    }
                    console.log('s',resultadoDivision)
                }
            })
            return resultadoDivision 
        }
        return element
    });
    t.forEach(element => {
        total += Number(element)
    })
    console.log(t)
    console.log(total)
}
console.log(utilsSumar('10/2+20/2+10+10/2'))

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

const resta = (str)=>{
let terminosResta = str.split('-');
let total;
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
    let d = '/'
let indexDivision = termino.split('').findIndex((e) => e=== '/')
let indexMultiplicacion = termino.split('').findIndex((e)=> e === '*')
let subTermino = termino.split('/')
subTermino = termino.split('')
console.log(subTermino)
console.log(indexDivision)
console.log(indexMultiplicacion)
if(indexDivision < indexMultiplicacion){

}

}
console.log(resultadoTermino)
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

console.log(resta('100-50/2-10/4*2'))

const multiplicacionDivision = (str) => {
    let total;
    let indexDivision = str.split('').findIndex((e) => e=== '/')
    let indexMultiplicacion = str.split('').findIndex((e)=> e === '*')
    let resultadoTermino=0;
    if(indexDivision !== -1 && indexDivision < indexMultiplicacion) {
        let termino = str.split('*')
    let subTermino =    termino.map( (element,i) => {

                if(element.includes('*')){
                    return multiplicacion(element)
                }else{
                    return element
                }
        })
        console.log(subTermino)
        subTermino.forEach( num => {
            if(total === undefined){
                console.log(total)
                if(num.includes('/')) total = division(num)
                else total = num
            }else{
                if(num.includes('/')) total = total * division(num)
                else total = total * num
            }
        })
        return total
    }

    }
console.log('4*8/3')
    console.log(multiplicacionDivision('4*8/3'))