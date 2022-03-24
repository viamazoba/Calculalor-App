

function theme(option){
    
    switch(option){

        case 1:
            document.documentElement.style.setProperty('--Very-dark-main', '');

            document.documentElement.style.setProperty('--screen-background', '');// Forma de cambiar variables en CSS (:root) desde JavaScript

            document.documentElement.style.setProperty('--toggle-background', '');

            // Key backgrounds

            document.documentElement.style.setProperty('--reset-color', '');

            document.documentElement.style.setProperty('--reset-shadow', '');

            document.documentElement.style.setProperty('--equal-color', '');

            document.documentElement.style.setProperty('--equal-shadow', '');

            document.documentElement.style.setProperty('--buttons-color', '');

            document.documentElement.style.setProperty('--buttons-shadow', '');

            // Text

            document.documentElement.style.setProperty('--text-color', '');

            document.documentElement.style.setProperty('--equal-text', '');

            document.getElementById("del").style.color= "";
            document.getElementById("equal").style.color= "";
            document.getElementById("reset").style.color= "";
            break;

            
        case 2:
            document.documentElement.style.setProperty('--Very-dark-main', 'hsl(0, 0%, 90%)');

            document.documentElement.style.setProperty('--screen-background', 'hsl(0, 0%, 93%)'); /*#dfdfdf*/

            document.documentElement.style.setProperty('--toggle-background', 'hsl(0, 5%, 81%)');

            // Key backgrounds

            document.documentElement.style.setProperty('--reset-color', 'hsl(185, 42%, 37%)');

            document.documentElement.style.setProperty('--reset-shadow', 'hsl(185, 58%, 25%)');

            document.documentElement.style.setProperty('--equal-color', 'hsl(25, 98%, 40%)');

            document.documentElement.style.setProperty('--equal-shadow', 'hsl(25, 99%, 27%)');

            document.documentElement.style.setProperty('--buttons-color', 'hsl(45, 7%, 89%)');

            document.documentElement.style.setProperty('--buttons-shadow', 'hsl(35, 11%, 61%)');

            // Text

            document.documentElement.style.setProperty('--text-color', 'hsl(60, 10%, 19%)');

            document.documentElement.style.setProperty('--equal-text', '#282623');

            document.getElementById("del").style.color= "#ffffff";
            document.getElementById("equal").style.color= "#ffffff";
            document.getElementById("reset").style.color= "#ffffff";
            break;
        
        case 3:

            document.documentElement.style.setProperty('--Very-dark-main', 'hsl(268, 75%, 9%)');

            document.documentElement.style.setProperty('--screen-background', 'hsl(268, 71%, 12%)'); /*#dfdfdf*/

            document.documentElement.style.setProperty('--toggle-background', 'hsl(268, 71%, 12%)');

            // Key backgrounds

            document.documentElement.style.setProperty('--reset-color', 'hsl(281, 89%, 26%)');

            document.documentElement.style.setProperty('--reset-shadow', 'hsl(285, 91%, 52%)');

            document.documentElement.style.setProperty('--equal-color', 'hsl(176, 100%, 44%)');

            document.documentElement.style.setProperty('--equal-shadow', 'hsl(177, 92%, 70%)');

            document.documentElement.style.setProperty('--buttons-color', 'hsl(268, 47%, 21%)');

            document.documentElement.style.setProperty('--buttons-shadow', 'hsl(290, 70%, 36%)');

            // Text

            document.documentElement.style.setProperty('--text-color', 'hsl(52, 100%, 62%)');

            document.documentElement.style.setProperty('--equal-text', 'hsl(52, 100%, 62%)');

            document.getElementById("del").style.color= "#ffffff";
            document.getElementById("equal").style.color= "hsl(198, 20%, 13%)";
            document.getElementById("reset").style.color= "#ffffff";
            break;

    }
}

// Variables globales para la calculadora
var num_list= [];
var screen=""
var finish_list=[];

/* La siguiente función es la principal y se encarga de
escribir los números en pantalla y coordinar las diferentes operaciones*/

function write_element(num){

    if(document.getElementById("screen").innerHTML.length<10 || num==="del" || num==="res"){

        if(typeof num==="string" || num instanceof String){

        
            if(num==="res"){
                
                clean(num_list,screen);
            
            }else if(num==="del"){
    
                del_simbol(num_list,screen);
    
            }else if(num_list.length===0 || typeof num_list[num_list.length-1]==="string" || num_list[num_list.length-1] instanceof String){
                alert("Ingrese un número por favor");
            
            }else{

                
                screen=document.getElementById("screen").innerHTML+num;
                document.getElementById("screen").innerHTML= screen;
                num_list.push(num);
            }
    
        }else{

            if(document.getElementById("screen").innerHTML==="0"){
                console.log("Entró en el cero");
                document.getElementById("screen").innerHTML= screen+num.toString();
                screen=document.getElementById("screen").innerHTML;
                num_list.push(num);
            }else{
                console.log(document.getElementById("screen").innerHTML);
                screen=document.getElementById("screen").innerHTML;
                document.getElementById("screen").innerHTML= screen+num.toString();
                screen=document.getElementById("screen").innerHTML;
                num_list.push(num);
            }
            
        }
    
    }else{
        alert("Memoria llena");
    }

   
}

function clean(lista,texto){
    document.getElementById("screen").innerHTML=0;
    lista.length=0;
    screen="";
    console.log(num_list);

}

function del_simbol(lista,texto){
    if(document.getElementById("screen").innerHTML!==0 && lista.length===1 ){
        screen= "";
        document.getElementById("screen").innerHTML=screen;
        lista.pop();
        
    }else if(document.getElementById("screen").innerHTML!==0){
        screen= screen.slice(0,-1);
        document.getElementById("screen").innerHTML=screen;
        lista.pop();
    }

    if(document.getElementById("screen").innerHTML===""){
        document.getElementById("screen").innerHTML=0;
    }
}

/* La siguiente función es la encargada de generar las operaciones
de la calculadora*/

function calculator(lista,screen){

    finish_list.push(lista.shift());
    let i=0;

    while(lista.length>0){

        if(typeof lista[0]==="string" && lista[0]!="."){
            finish_list.push(lista.shift());
            i+=2;
            finish_list[i]=0;

        }else if(lista[0]==="."){

            lista.shift();
            if(lista.length!==0){

                var z=1;
                while(typeof lista[0]!=="string"){
                    finish_list[i]=finish_list[i]+lista.shift()/(10*z);
                    console.log("Primera pasada: ",finish_list[i])
                    z+=1;

                    if(lista.length===0){
                        break;
                
                    }
                }
                console.log("Salió del while!")
                finish_list[i]=parseFloat(parseFloat(finish_list[i]).toFixed(3)); // De esta forma tomas dos cifras decimales

            }
            
            
            
            
            
        }else{
            finish_list[i]=finish_list[i]*10+lista.shift();
        }

    }

    if(typeof finish_list[finish_list.length]=== "string"){
        finish_list.pop();
    }

    console.log("Lista para operaciones: ", finish_list);

    let result=finish_list.shift();

    while(finish_list.length>0){

        if(finish_list[0]==="+"){

            finish_list.shift();
            result+=finish_list.shift();

        }else if(finish_list[0]==="-"){

            finish_list.shift();
            result-=finish_list.shift();

        }else if(finish_list[0]==="/"){

            if(finish_list[1]===0){
                alert("Error: División por cero");
                finish_list.length=0;
                document.getElementById("screen").innerHTML=0;
                screen="";
                break;
            }else{
                finish_list.shift();
                result/=finish_list.shift();
            }
        }else if(finish_list[0]==="x"){

            finish_list.shift();
            result*=finish_list.shift();
        }
        
    }

    if(document.getElementById("screen").innerHTML!==0){
        result=Math.round(result * 100) / 100

        document.getElementById("screen").innerHTML= result.toString();
        screen= document.getElementById("screen").innerHTML;
        num_list.push(result);
    }
    
    
}