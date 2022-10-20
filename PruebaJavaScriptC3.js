//
//
//
console.log('****Ejercicio1*****')


const dias = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
var matriz_precios =[10000,20000,600,400,200];


//Definimos las variables, en este caso los dias con String
//matriz precios con valores, descuento como general

function descuentos(matriz_precios){ 
    const descuento = 0.20;

    for(let i = 0; i < matriz_precios; i++) {   
        console.log(i);
        if(i == matriz[0] && i == matriz[3]){
            console.log('El total de la compra es :'+ i * descuento);
        }
    }
}
descuentos(matriz_precios)

console.log('****Ejercicio2*****');

var compras_descuento = 0;   //Debemos crear una variable que vaya aumentando hasta llegar a 3

function descuento_general(matriz_precios){
    let descuento_cantidad = 0.05;//Usar let para definir dentro de una funcion

    for(let i = 0; i < compras_descuento; i++) {   
        console.log(i);
            compras_descuento ++;
    if(compras_descuento >3 && matriz_precios > 10000)
        console.log(matriz_precios*descuento_cantidad);
}
descuento_general(matriz_precios)

console.log('****Ejercicio3*****');

function verificador(items_a_comprar){

var items_a_comprar = 0; //Tambien se podria usar do while mientras la condicion de compras sea mayor o = a 3

    for(let i = 0; i <= items_a_comprar; i++) {   
        console.log(i);
        if(matriz_precios <=0){
            console.log('Hay problema con el precio de un item');
            console.log('Item se encuentra en : '+ matriz_precios[i]+ 'Y el item es: ' +matriz_precios(i));
        }
}
function verificador(10)//Colocamos 10 productos como ejemplo a comprar

console.log('****Ejercicio4*****');

var valores = [200,5500,900,700,500,300];

var minimo = numeros[0];

var mayor + numeros [];

for(var i=0;i <=valores ;i++){
    if(minimo<valores[i++]){
        console.log('El valor mas bajo es: ' + mumeros[i]);
        minimo = valores[i];
    } for(var i=0;i <=valores ;i++){
    else if(mayor> valores){
        console.log('El valor mas alto es: ' + mumeros[i]);
        mayor = valores [i];
    } else(){
        console.log('Nada que realizar');
    }
    }
    console.log('Valor minimo es :' + minimo);
    console.log('Valor mayor es :' + mayor);
