//percuso par exibição de vetores, modo antigo:

/* let valores = [8,1,7,4,2,9]

for(let pos=0; pos < valores.length; pos++){
    console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
} */

// Novo modo:

let num = [8,1,7,4,2,9]

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    
}