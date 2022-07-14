let amigo = {nome: 'João', 
sexo: 'M', 
peso: 96.6, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)