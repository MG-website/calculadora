export const numeros = () =>{
   return [1,2,3,4,5,6,7,8,9,'</x', 0, 'x/>' ]
}

export const operadores = () =>{
    return ['+', '-', '*', '/', 'C', '=']
}

export const eliminarPrimero = (str) =>{
str = str.split('')
srt.shift()
return srt.join('')
};

export const eliminarUltimo = (str) =>{
    str = str.split('')
    srt.pop()
    return srt.join('')
    }