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