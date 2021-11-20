
function valuap(respuest){ //recibe un entero que indica la respuesta seleccionada
  if(parseInt(respuest)==this.correcta){
        var reto;
        alert("Es correcta");
        reto=true;
        return reto
        }else{
            alert("Es false");
            return reto
            }
}

function pregunta(pregun,respuesta1,respuesta2,correcta){
        this.pregun=pregun;
        
        this.respuestas=[];
        
        this.respuestas[0]=respuesta1;
        this.respuestas[1]=respuesta2;
        
        this.correcta=parseInt(correcta);
        this.ocupado=false;
        this.valuap=valuap;       
}
var retorno=[];
var preguntas=[];

preguntas[0]=new pregunta("¿Cuál es el objetivo de la teoría de conjuntos?","Estudiar las características y operaciones de los conjuntos","Estudiar las leyes de la informática",0);
preguntas[1]=new pregunta("A parte de elementos, ¿Con qué otro nombre se le conoce a los objetos dentro de los conjuntos?","Conjunciones","Miembros.",1);
preguntas[2]=new pregunta("¿Quién es considerado como el Padre de la teoría de Conjuntos?","René Descartes","Georg Cantor",1);
preguntas[3]=new pregunta("¿Qué es un conjunto?","Una colección de objetos","Un número infinito",0);
preguntas[4]=new pregunta("¿Qué característica hace posible describir en lista los elementos de un conjunto?","Que sea finito.","Que sea un subconjunto",0);
preguntas[5]=new pregunta("¿A qué equivale la semántica de predicados de la mano con la teoría de conjuntos?","Diagrama de Pert.","Tablas de verdad",1);
preguntas[6]=new pregunta("¿Cómo se debe definir un conjunto?","De manera precisa y concisa.","De manera específica y muy detallada",0);
preguntas[7]=new pregunta("¿Con qué otro nombre se le conoce a la teoría de conjuntos que propuso Georg Cantor?","Teoría básica o Intuitiva de Conjuntos.","Teoría General de los Conjuntos.",0);
preguntas[8]=new pregunta("Dos requisitos para poder formar un conjunto.","La jerarquía es importante y Los elementos se representan con @","Agrupar los elementos o miembros de manera bien definida y Todos los elementos deben de ser distintos, no es posible repetir" ,1);
preguntas[9]=new pregunta("¿Cómo se llama el diagrama con el que se representan los conjuntos?","Diagrama de Venn Euler","Diagrama de Gantt.",0);
preguntas[10]=new pregunta("¿Qué signo gramatical se utiliza para separar los elementos de un conjunto?","Coma","Punto y coma",0);
preguntas[11]=new pregunta("¿En qué consiste la descripción de conjuntos por Extensión?","En crear una cadena infinita de conjuntos","En Describir los elementos de un conjunto como listado.",1);
preguntas[12]=new pregunta("¿En qué consiste la descripción de conjuntos por Compresión?","En dejar el menor número de elementos en un conjunto.","Se menciona una regla que nos ayuda a encontrar a los elementos de un conjunto.",1);
preguntas[13]=new pregunta("¿Qué es un conjunto finito?","Es un conjunto cuya cardinalidad se desconoce","Es un conjunto con cardinalidad o número de elementos definida.",1);
preguntas[14]=new pregunta("Da un ejemplo de conjunto finito.","{x| x es una vocal} ,A= {a, e, i, o, u}","{x es una raza canina} = {a1,a2,a3,a4}",0);
preguntas[15]=new pregunta("¿Qué es un conjunto infinito?","Es un conjunto que solo tiene dos elementos.","Es un conjunto que no tiene su cardinalidad definida",1);
preguntas[16]=new pregunta("Es un ejemplo de conjunto infinito","{La cantidad de granos de arena en una playa}","{Número de dedos en una mano}",0);
preguntas[17]=new pregunta("¿Cómo se expresa la cardinalidad indefinible de un conjunto?","n (x) = ∞","N(x)= 1",0);
preguntas[18]=new pregunta("¿Qué es un conjunto vacío?","Es un conjunto que no se puede relacionar con otros.","Es un conjunto que no tiene elementos",1);
preguntas[19]=new pregunta("¿Con qué símbolos se expresa un conjunto vacío?","φ, {}.","<, |, °.",0);
preguntas[20]=new pregunta("¿Qué es un conjunto equivalente?","Son aquellos que tienen 5 elementos finitos.","Son aquellos que comparten la misma cardinalidad",1);
preguntas[21]=new pregunta("¿Con qué símbolo se expresa un conjunto equivalente?","≅","=Son aquellos elementos están separados.",0);
preguntas[22]=new pregunta("¿Qué son los conjuntos disjuntos?","Son aquellos elementos están separados.","Son aquellos cuyos elementos no tienen nada en común",1);
preguntas[23]=new pregunta("¿Qué es la cardinalidad de un conjunto?","Es la ubicación de un conjunto","La cardinalidad de un conjunto es el número que indica el número de elementos dentro de un conjunto.",1);
preguntas[24]=new pregunta("¿Qué es la unión de conjuntos?","Es la ubicación de un conjunto","Es el conjunto formado por todos los elementos que pertenecen a ambos conjuntos.",1);
preguntas[25]=new pregunta("¿Qué es la intersección de conjuntos?","Es cuando dos conjuntos se traslapan.","Es una operación que resulta en otro conjunto que contiene los elementos comunes a los conjuntos de inicio.",0);
preguntas[26]=new pregunta("¿Qué es el complemento de conjuntos?","Es un conjunto infinito.","Es otro conjunto que posee todos los elementos que no están en el conjunto inicial.",1);
preguntas[27]=new pregunta("¿Qué es una diferencia de conjuntos?","Es una operación que da como resultado otro conjunto con los miembros del conjunto de inicio sin los elementos del segundo conjunto.","Es cuando dos conjuntos son diferentes.",0);
preguntas[28]=new pregunta("¿Qué es una diferencia simétrica ente conjuntos?","Es cuando un conjunto tiene todos sus lados iguales","Es una operación que da como resultado a otro conjunto que posee a los elementos que pertenecen a uno de los conjuntos de inicio, pero no a ambos al mismo tiempo.",1);
preguntas[29]=new pregunta("¿Qué analiza la teoría de conjuntos?","A los atributos de los elementos que conforman a un conjunto","La vida de Georg Cantor.",0);
preguntas[30]=new pregunta("Los conjuntos se representan con:","Letras minúsculas","Letras Mayúsculas",1);
preguntas[31]=new pregunta("Los elementos de un conjunto se representan con:","Letras Minúsculas","Letras mayúsculas",0);
preguntas[32]=new pregunta("¿Cómo se define la unión de conjuntos?","∪"," ∩",0);
preguntas[33]=new pregunta("¿Cómo se define la intersección de conjuntos?","∪"," ∩",1);
preguntas[34]=new pregunta("¿Cómo se define la diferencia de conjuntos?","−","Δ",0);
preguntas[35]=new pregunta("¿Cómo se define la diferencia simétrica de conjuntos?","−","Δ",1);
preguntas[36]=new pregunta("¿Cómo se define el producto cartesiano de conjuntos?","X","Y",0);
preguntas[37]=new pregunta("A ∩ A = A,  A ∪ A = A; ¿A qué ley pertenecen?","Idempotencia","Absorción",1);
preguntas[38]=new pregunta("A ∩ ∅ = ∅,  A ∪ U = U; ¿A qué ley pertenecen?","Neutro","Dominancia",1);
preguntas[39]=new pregunta("A ∪ ∅ = A,  A ∩ U = A; ;¿A qué ley pertenecen?","Neutro","Dominancia",0);
preguntas[40]=new pregunta("Sean los siguientes conjuntos: A = { mango, pera, ciruela, naranja, melón, uva} B = {piña, melón, sandía, fresa, pera, durazno, uva} Obtener A ∩ B ","A ∩ B = {pera, melón, uva}","A ∩ B = {pera, fresa, uva}",0);
preguntas[41]=new pregunta("Dados los siguientes conjuntos: A = {azul, amarillo, naranja, rojo, rosa, verde} B = {azul, café, lila, morado, rojo, verde, gris} Obtener A U B ","A U B = {azul, amarillo, naranja, rojo, rosa, verde, café, lila, morado, gris}","A U B = {azul, amarillo, naranja}",1);
preguntas[42]=new pregunta("Dados los siguientes conjuntos: U = {3, 6, 12, 15, 18, 21, 24, 27} A = {3,6, 12, 18, 21, 17} B = { 3, 9, 12, 21,24,27} Obtener A  ̶̶  φ = A","A  ̶̶  φ = A  El vacío al no tener elementos al restarlo del primer conjunto representa al mismo conjunto","No es posible",1);
preguntas[43]=new pregunta("¿Cuáles son las formas de representar conjuntos?","Por extensión, comprensión y diagramas de Venn","Por extensión y cardinalidad",0);
preguntas[44]=new pregunta("¿Cómo se representan los conjuntos por extensión?","Con asteriscos","Los elementos de los conjuntos se colocan entre llaves y se forma una lista que se separa por comas.",1);
preguntas[45]=new pregunta("¿Cómo se representan los elementos por comprensión?","Los elementos se expresan a través de una regla que determina su naturaleza.","Aleatoriamente ",0);
preguntas[46]=new pregunta("¿En el conjunto finito los elementos tienen un fin?","No, contienen el vacío","Sí, ya que los elementos se pueden contar",1);
preguntas[47]=new pregunta("¿Por definición a cuánto equivale la cardinalidad del conjunto vació?","Cero","cuatro",0);
preguntas[48]=new pregunta("¿Qué ayuda a fundamentar la teoría de conjuntos?","La teoría de la relatividad","La lógica de predicados.",1);
preguntas[49]=new pregunta("¿La teoría de  conjuntos de Georg Cantor ha sido modificada en varias ocasiones?","Verdadero","falso",0);





