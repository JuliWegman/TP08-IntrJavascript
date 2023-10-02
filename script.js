function CalcularEdad(){
    let nacimiento=prompt("ingresar tu fecha de nacimiento");
    const fecha1= new Date(nacimiento);
    const num1=fecha1.getFullYear();
    const fecha=new Date;
    const num2=fecha.getFullYear();
    const resultado=document.getElementById('result');
    resultado.innerText=num2-num1;
}

function TirarFruta(){
    const frutas=['manzana','pera','banana','frutilla','coco','anana','durazno','frambuesas','sandia','kiwi']
    let fruta=prompt("¿Que fruta queres saber si hay?");
    fruta=fruta.toLowerCase();
    const hay=document.getElementById('result');

    if(frutas.includes(fruta)){
       hay.innerText="Si, tenemos "+fruta+" :)";

    }else{
        hay.innerText="No tenemos "+fruta+" :(";

    }


}

function DatosYTipos(){
    alert("A.10 es igual a '10' con ==\nB.10 no es igual a '10' con ===\nC.10.6 es dato primitivo tipo number\nD.True es 0");
}

function YoObjeto(){
    const texto=document.getElementById('result');
    let text="";
    const ciudad ={
        nombre : "barcelona",
        fechaFundacion : 2018-12-09,
        poblacion : 777,
        extensión : 100
    }

    for(const propiedad in ciudad){
        text+=(`${propiedad}: ${ciudad[propiedad]} \n`);
    }
       
     texto.innerText=text;
}

function DobleElementos(){
    const numeros=[];
    let num=prompt("ingresa un numero para agregar al array, o x para terminar");

    while(num!="x"){
        console.log(num);
        numeros.push(num);
        
        num=prompt("ingresa un numero para agregar al array, o x para terminar");
    }
    const duplicados=numeros.map(num=>num*2);
    const texto=document.getElementById('result');
    let text="";
    duplicados.forEach(num=>{text+=num+"  "})
    console.log(text);
    texto.innerText=text;

}

function Triangulo(){
    const texto=document.getElementById('result');
    let altura=prompt("Ingresar alto de la piramide");
    let piramide="";
    let n=0;
    for(let i=1;i<=altura;i++){
        
        for (let j = 0; j < (altura-i); j++) {
            
            piramide+=" ";
        }
        n=0;
        while ( n < (altura-[altura-i])){
            
            piramide+="*";
            n++;
        }
        piramide+="\n";
    }
    texto.innerText=piramide;
}

function Piramide(){
    const texto=document.getElementById('result');
    let altura=prompt("Ingresar alto de la piramide");
    let piramide="";
    let anchura=-1;
    let n=-1;
    for (let i2 = 0; i2 < altura; i2++) {
        anchura+=2;
        
    }

    for (let i = 0; i < altura; i++) {
        n+=2;
       for (let j = 0; j < (anchura-n)/2; j++) {
        piramide+="-";
        
       }
       for (let z = 0; z < n; z++) {
        piramide+="*";
       }
       for (let j = 0; j < (anchura-n)/2; j++) {
        piramide+="-";
        
       }
       piramide+="\n";

    }
    texto.innerText=piramide;
}

function NombresConA(){
    const listaNombres=prompt("Ingresar una lista con nombres separados por una coma").split(',');
    const listaA=listaNombres.filter(nombre =>nombre.startsWith("A") || nombre.startsWith(" A"));
    const texto=document.getElementById('result');
    console.log(listaA);
    texto.innerText=listaA;

}

function ReemplazarPalabra(){
    const frase=prompt("Ingresar una frase a modificar");
    const palabraAreemplazar=prompt("Ingresar la palabra a reemplazar");
    const reemplazo=prompt("Ingresar el reemplazo");
    const texto=document.getElementById('result');

    const frase2=frase.replace(palabraAreemplazar,reemplazo);
    texto.innerText=frase2;
}

function CortarTexto(){
    const frase=prompt("Ingresar frase a cortar");
    const num=prompt("Ingresar cuantos caracteres queres");
    const resultado=frase.slice(0,num);
    const texto=document.getElementById('result');
    texto.innerText=resultado;

}

function StringSeparador(){
    const lista=prompt("Ingresar una lista de elementos separados por una coma");
    const texto=document.getElementById('result');
    const lista2=lista.replaceAll(",","-");
    texto.innerText=lista2;

}

function CalcularRecaudacion(){
    const lista=prompt("Ingresar una lista de compras separados por una coma con el precio").split(',');
    let total=0;
    for(const producto of lista){
         let precio=producto.split(":");
         total+=parseInt(precio[1]);
    }
    const texto=document.getElementById('result');
    texto.innerText=total;

}