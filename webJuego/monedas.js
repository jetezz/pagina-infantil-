



$(document).ready(function() {




$("#contar").click(function () {
	alert($("ul:eq(0) > li").length);
});

$("#cambiar").click(function () {
	$("ul").prepend($("li").eq(1));
});

$("#add").click(function () {
	$("ul > li:last").after("<li> nuevo elemento </li>");
});

$("#enum").click(function() {

	$("li").each(function(i){
		var aux = $(this).html();
		if (aux.substr(0, 1) != "[") $(this).html("["+i+"]" + aux);

	});

});


$("#repetir").click(function () {
	//$("ul").append("<li>" + $("li:last").html() + "</li>");
	$("ul").append($("li:last").clone());
});



//////////////////////////////////////////////////////////////////////////////
contador=0;
monedas=0;
maximo=0;
valor=0;
randon=-1;
precio=9;
acertado=false;

colocadas=0;
eliminadas=0;
interacciones=0;
aciertos=0;

var n = 0;

window.setInterval(function(){

  n++;
},1000);


 var snd = new Audio("img/instruccion.ogg");
  track = snd.addTextTrack("subtitles","Instrucciones juego tiburon","es");
  track.addCue(new VTTCue(0, 3, "¿Cuántas monedas necesitas para comprar el juguete?"));
  track.addCue(new VTTCue(3, 7, "Arrastra las monedas al cerdito"));

  snd.play();

while(randon<0 || randon>=6){
	randon=Math.floor((Math.random() * 10) + 1);
}

	precio=Math.floor((Math.random() * 5) + 1);
	if(precio==1){
		precio=9;
	}
	if(precio==2){
		precio=13;
	}

if(precio==3){
		precio=17;
	}

if(precio==4){
		precio=20;
	}

if(precio==5){
		precio=25;
	}




   $("#objeto").html("<img id='camion' src='img/"+randon+"objeto.png' '/>");
   $("#objeto").append("<img src='img/etiqueta"+precio+".png'  id='etiqueta' >");

    $( "#moneda1" ).draggable({ revert: "valid" });
    $( "#moneda2" ).draggable({ revert: "valid" });
     $( "#moneda5" ).draggable({ revert: "valid" });

 /////PULSAR MONEDA/////

 $( "#moneda1" ).click(function() {
 	if(maximo<15){
      		interacciones++;
      		colocadas++;
      		maximo++;
      		valor=parseInt (  $( "#moneda1" ).attr("data-valor"));
      		 console.log(contador);
	      	contador+= valor;


	        $( this ).find( "h2" ).html( contador +"$" );
	        monedas++;
	        var moneda = $(" <img id='numon"+monedas+"' src='img/moneda"+ $( "#moneda1" ).attr("data-valor")+".png' height='50' data-valor='"+moneda+"'/>");
	        moneda.click(function() {

	        	valor=parseInt($( "#moneda1" ).attr("data-valor"));
	        	contador=contador-valor;
	        	maximo--;
	        	eliminadas++;
	        	interacciones++;
	        	$(this).remove();
	        	comprobarprecio();
	        	 $("#hucha").find( "h2" ).html( contador +"$" );
	        });
	         $("#contenido").prepend(moneda);
	     }
	     comprobarprecio();

	      $("#hucha").find( "h2" ).html( contador +"$" );

 	 });

  $( "#moneda2" ).click(function() {
 	if(maximo<15){
      		interacciones++;
      		colocadas++;
      		maximo++;
      		valor=parseInt (  $( "#moneda2" ).attr("data-valor"));
      		 console.log(contador);
	      	contador+= valor;


	        $( this ).find( "h2" ).html( contador +"$" );
	        monedas++;
	        var moneda = $(" <img id='numon"+monedas+"' src='img/moneda"+ $( "#moneda2" ).attr("data-valor")+".png' height='50' data-valor='"+moneda+"'/>");
	        moneda.click(function() {

	        	valor=parseInt($( "#moneda2" ).attr("data-valor"));
	        	contador=contador-valor;
	        	maximo--;
	        	eliminadas++;
	        	interacciones++;
	        	$(this).remove();
	        	comprobarprecio();
	        	 $("#hucha").find( "h2" ).html( contador +"$" );
	        });
	         $("#contenido").prepend(moneda);
	     }
	     comprobarprecio();

	      $("#hucha").find( "h2" ).html( contador +"$" );

 	 });

   $( "#moneda5" ).click(function() {
 	if(maximo<15){
      		interacciones++;
      		colocadas++;
      		maximo++;
      		valor=parseInt (  $( "#moneda5" ).attr("data-valor"));
      		 console.log(contador);
	      	contador+= valor;


	        $( this ).find( "h2" ).html( contador +"$" );
	        monedas++;
	        var moneda = $(" <img id='numon"+monedas+"' src='img/moneda"+ $( "#moneda5" ).attr("data-valor")+".png' height='50' data-valor='"+moneda+"'/>");
	        moneda.click(function() {

	        	valor=parseInt($( "#moneda5" ).attr("data-valor"));
	        	contador=contador-valor;
	        	maximo--;
	        	eliminadas++;
	        	interacciones++;
	        	$(this).remove();
	        	comprobarprecio();
	        	 $("#hucha").find( "h2" ).html( contador +"$" );
	        });
	         $("#contenido").prepend(moneda);
	     }
	     comprobarprecio();

	      $("#hucha").find( "h2" ).html( contador +"$" );

 	 });
   //PULSAR NUMERO///

	$(document).keypress(function(event) {
		console.log(event.which)


if(event.which==13){
	if(precio==contador){
			$("#bosi").click();ç
		}
		
		
	}


	if(event.which==46){
		var aashh="numon"+monedas;
		
		
		valor=parseInt($( "#"+aashh+"").attr("data-valor"));
		console.log(valor);
		contador=contador-valor;
		maximo--;
		eliminadas++;
		interacciones++;
		$("#"+aashh+"").remove();
		comprobarprecio();
	    $("#hucha").find( "h2" ).html( contador +"$" );
	    monedas--;
	}
	if(event.which == 49){


		if(maximo<15){
      		interacciones++;
      		colocadas++;
      		maximo++;
      		valor=parseInt (  $( "#moneda1" ).attr("data-valor"));
      		 console.log(contador);
	      	contador+= valor;


	        $( "#hucha" ).find( "h2" ).html( contador +"$" );
	        monedas++;
	        var moneda = $(" <img id='numon"+monedas+"' src='img/moneda"+ $( "#moneda1" ).attr("data-valor")+".png' height='50' data-valor='1'/>");
	        moneda.click(function() {

	        	valor=parseInt($( "#moneda1" ).attr("data-valor"));
	        	contador=contador-valor;
	        	maximo--;
	        	eliminadas++;
	        	interacciones++;
	        	$(this).remove();
	        	comprobarprecio();
	        	 $("#hucha").find( "h2" ).html( contador +"$" );
	        });
	         $("#contenido").prepend(moneda);
	     }





	}else if(event.which == 50){


			if(maximo<15){
      		interacciones++;
      		colocadas++;
      		maximo++;
      		valor=parseInt (  $( "#moneda2" ).attr("data-valor"));
      		 console.log(contador);
	      	contador+= valor;


	        $( "#hucha"  ).find( "h2" ).html( contador +"$" );
	        monedas++;
	        var moneda = $(" <img id='numon"+monedas+"' src='img/moneda"+ $( "#moneda2" ).attr("data-valor")+".png' height='50' data-valor='2'/>");
	        moneda.click(function() {

	        	valor=parseInt($( "#moneda2" ).attr("data-valor"));
	        	contador=contador-valor;
	        	maximo--;
	        	eliminadas++;
	        	interacciones++;
	        	$(this).remove();
	        	comprobarprecio();
	        	 $("#hucha").find( "h2" ).html( contador +"$" );
	        });
	         $("#contenido").prepend(moneda);
	     }



	}
	else if(event.which == 53){

		if(maximo<15){
      		interacciones++;
      		colocadas++;
      		maximo++;
      		valor=parseInt (  $( "#moneda5" ).attr("data-valor"));
      		 console.log(contador);
	      	contador+= valor;


	        $( "#hucha" ).find( "h2" ).html( contador +"$" );
	        monedas++;
	        var moneda = $(" <img id='numon"+monedas+"' src='img/moneda"+ $( "#moneda5" ).attr("data-valor")+".png' height='50' data-valor='5'/>");
	        moneda.click(function() {

	        	valor=parseInt($( "#moneda5" ).attr("data-valor"));
	        	contador=contador-valor;
	        	maximo--;
	        	eliminadas++;
	        	interacciones++;
	        	$(this).remove();
	        	comprobarprecio();
	        	 $("#hucha").find( "h2" ).html( contador +"$" );
	        });
	         $("#contenido").prepend(moneda);
	     }



	}

	comprobarprecio();
});

// DROPPABLE ///
    $( "#hucha" ).droppable({

      drop: function( event, ui ) {
      	if(maximo<15){
      		interacciones++;
      		colocadas++;
      		maximo++;
      		valor=parseInt (ui.draggable.attr("data-valor"));
	      	contador+= valor;
	        $( this ).find( "h2" ).html( contador +"$" );
	        monedas++;
	        var moneda = $(" <img id='numon"+monedas+"' src='img/moneda"+ui.draggable.attr("data-valor")+".png' height='50' data-valor='"+moneda+"'/>");
	        moneda.click(function() {
	        	valor=parseInt(ui.draggable.attr("data-valor"));
	        	contador=contador-valor;
	        	maximo--;
	        	eliminadas++;
	        	interacciones++;
	        	$(this).remove();
	        	comprobarprecio()
	        	 $("#hucha").find( "h2" ).html( contador +"$" );
	        });
	         $("#contenido").prepend(moneda);
	     }
	     comprobarprecio();
      }
    });

    $("#siguiente").click(function() {
    	 $("#contenido").empty();
    	 aciertos++;

contador=0;
monedas=0;
maximo=0;
valor=0;
randon=-1;
precio=9;
acertado=false;


 $("#hucha").find( "h2" ).html( contador +"$" );

while(randon<0 || randon>=6){
	randon=Math.floor((Math.random() * 10) + 1);
}

	precio=Math.floor((Math.random() * 5) + 1);
	if(precio==1){
		precio=9;
	}
	if(precio==2){
		precio=13;
	}

if(precio==3){
		precio=17;
	}

if(precio==4){
		precio=20;
	}

if(precio==5){
		precio=25;
	}




   $("#objeto").html("<img id='camion' src='img/"+randon+"objeto.png' '/>");
   $("#objeto").append("<img src='img/etiqueta"+precio+".png'  id='etiqueta' >");

   $("#siguiente").toggle("hidden");

    	 });



$("#mano").toggle("hidden");
	$("#mano").animate({ "bottom": "-=13em", "right" : "-=20em" }, 2000, function(){
		$("#mano").attr("src","img/mano-pulsado.png");
		$("#moneda1").animate({ "bottom": "-=15em", "right" : "-=30em" }, 2000);
	} )

	$("#mano").animate({ "bottom": "-=15em", "right" : "-=30em" }, 2000, function(){
		$("#mano").attr("src","img/mano-nopulsado.png");
		$("#mano").toggle("hidden");
		$("#moneda1").animate({ "bottom": "+=15em", "right" : "+=30em" }, 2000);
	} )







function comprobarprecio(){
	if(precio==contador && acertado==false){
	     	$("#siguiente").toggle("hidden");
	     	acertado=true;


	     }if(contador!=precio&&acertado==true){
	     	$("#siguiente").toggle("hidden");
	     	acertado=false;
	     }
}




$("#info").click(function(){
	$("#informacion").toggle(500);
	$("#informacion").html("<p>Numero de interacciones="+interacciones+"</p><p>Numero de monedas colocadas="+colocadas+"</p><p>Numero de monedas eliminadas="+eliminadas+"</p><p>Numero de aciertos="+aciertos+"</p><p>Tiempo transcurrido="+n+"</p>");

});



function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

/*

Gris seleccionado
hijos radiobuttom

*/


});


