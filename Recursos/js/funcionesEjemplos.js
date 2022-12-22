//Animaciones
function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.right = pos + "px"; 
      }
    }
  }

//Eventos
function mOver(obj) {
  obj.innerHTML = "Gracias"
}

function mOut(obj) {
  obj.innerHTML = "Pon el Raton sobre mi"
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Liberame";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Gracias!!";
}

//Navegacion

function navegar() 
{
  document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;
}

function nodo() {
  document.getElementById("id04").innerHTML = document.getElementById("id03").firstChild.nodeValue;
}

//ListadeNodos
function listaNodos() {
  const myNodelist = document.querySelectorAll("p");
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.color = "blue";
  }
}

//Colecciones
function colecciones() {
  const myNodelist = document.querySelectorAll("h2");
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.color = "purple";
  }
}

//Event Listener
  //Para el ejemplo 1
function añadirEventosListener()
{
  document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("myBtn").innerHTML="Aplicaciones de Tecnologías Web";
  });
}

  //Para el ejemplo 2
var x = document.getElementById("myBtn");
var x2 = document.getElementById("myBtn2");
var x3 = document.getElementById("myBtn3");
x.addEventListener("mouseover", myFunction);
x2.addEventListener("click", mySecondFunction);
x3.addEventListener("mouseout", myThirdFunction);

function miPrimeraFuncion() {
  document.getElementById("demo").innerHTML += "El ratón esta sobre el Botón!<br>";
}

function miSegundaFuncion() {
  document.getElementById("demo").innerHTML += "Click sobre el botón!<br>";
}

function miTerceraFuncion() {
  document.getElementById("demo").innerHTML += "El ratón ha salido del botón!<br>";
}
//http://www.mywonderland.es/curso_js/addevent/index.html


//Nodos

function añadirNodos()
{
  const para = document.createElement("p");
  const node = document.createTextNode("Este es un nuevo texto.");
  para.appendChild(node);
  const element = document.getElementById("div1");
  const child = document.getElementById("p1");
  element.insertBefore(para,child);
}

/*jQuery HTML*/
  /*jQuery Get*/
function agregarJQueryGet1()
{
  $(document).ready(function(){
    $("#btn1").click(function(){
      alert("Text: " + $("#test").text());
    });
  });
}

function agregarJQueryGet2()
{
  $(document).ready(function(){
    $("#btn2").click(function(){
      alert("HTML: " + $("#test").html());
    });
  });
}

function agregarJQueryGetMetodoVal()
{
  $(document).ready(function(){
    $("button").click(function(){
      alert("Valor: " + $("#texto").val());
    });
  });
}

 /*jQuery Set*/
 function agregarJQuerySet()
 {
  $(document).ready(function(){
    $("#btn1").click(function(){
      $("#test1").text("Hola Mundo!");
    });
    $("#btn2").click(function(){
      $("#test2").html("<b>Aplicaciones de Tecnolgías Web!</b>");
    });
    $("#btn3").click(function(){
      $("#test3").val("Nathaly Maribel");
    });
  });
 }
 

 function agregarJQuerySetFDevolucion()
 {
  $(document).ready(function(){
    $("#btn4").click(function(){
      $("#parrafo1").text(function(i, origText){
        return "Viejo texto: " + origText + " Nuevo texto: Hola mundo! (index: " + i + ")"; 
      });
    });
  
    $("#btn5").click(function(){
      $("#parrafo2").html(function(i, origText){
        return "Viejo html: " + origText + " Nuevo html: Hola <b>mundo!</b> (index: " + i + ")"; 
      });
    });
  });
 }

  /*jQuery Add*/
  function agregarJQueryAddFinal()
  {
    $(document).ready(function(){
      $("#btn1").click(function(){
        $("p").append(" <b>Texto adjuntado al final</b>.");
      });
    
      $("#btn2").click(function(){
        $("ol").append("<li>Elemento adjuntado al final</li>");
      });
    });
  }

  function agregarJQueryAddPrincipio()
  {
    $(document).ready(function(){
      $("#btn3").click(function(){
        $("p").prepend("<b>Se agrego el texto al principio</b>. ");
      });
      $("#btn4").click(function(){
        $("ul").prepend("<li>Se agrego un elemento al principio</li>");
      });
    });
  }

  function appendText() {
    var title1 = "<h1>Texto.</h1>";        // Create text with HTML
    var title2 = $("<h1></h1>").text("Texto.");  // Create text with jQuery
    var title3 = document.createElement("h1");
    title3.innerHTML = "Texto.";         // Create text with DOM
    $("body").append(title1, title2, title3);   // Append new elements
  }

  /*jQuery Remove*/

  function agregarJQueryRemove()
  {
    $(document).ready(function(){
      $("button").click(function(){
        $("#div1").remove();
      });
    });
  }

  function agregarJQueryEmpty()
  {
    $(document).ready(function(){
      $("button").click(function(){
        $("#div2").empty();
      });
    });
  }

  function filtrarJQueryEmptyRemove()
  {
    $(document).ready(function(){
      $("button").click(function(){
        $("p").remove(".test");
      });
    });
  }

  /*jQuery Dimensions*/

  function agregarJQueryWidthHeight()
  {
    $(document).ready(function(){
      $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height();
        $("#div1").html(txt);
      });
    });
  }

  function agregarJQueryInnerWidthInnerHeight()
  {
    $(document).ready(function(){
      $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div2").width() + "</br>";
        txt += "Height of div: " + $("#div2").height() + "</br>";
        txt += "Inner width of div: " + $("#div2").innerWidth() + "</br>";
        txt += "Inner height of div: " + $("#div2").innerHeight();
        $("#div2").html(txt);
      });
    });
  }

function agregarJQueryOuterWidthOuterHeight()
{
  $(document).ready(function(){
    $("button").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div3").width() + "</br>";
      txt += "Height of div: " + $("#div3").height() + "</br>";
      txt += "Outer width of div: " + $("#div3").outerWidth() + "</br>";
      txt += "Outer height of div: " + $("#div3").outerHeight();
      $("#div3").html(txt);
    });
  });
}