

var puntuacion = 0;
var resul;
var num1;
var correcto;
var peces = $(".peh");
var pecesvivos;
var first = true;
var animating = false;
$(document).ready(function() {

 var snd = new Audio("img/instruccion2.mp3");
  track = snd.addTextTrack("subtitles","Instrucciones juego tiburon","es");
  track.addCue(new VTTCue(0, 3, "¿Cuantos peces se ha comido el tiburón?"));
  track.addCue(new VTTCue(3, 7, "Arrastra las fichas de abajo, a la casilla en blanco"));
  snd.play();






 elegirValores();
     $(".valor").addClass('hidden');


 $( function() {


    $( ".draggable" ).draggable({ revert: true });
    $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .find( "p" )
            .html( ui.draggable.attr("data-valor") );

           if(ui.draggable.attr("data-valor")!=correcto){
           	 $( this ).find( "p" ).css('color', 'black');
           	 $( this ).css('background-color', 'red');
           	 $( this ).animate({backgroundColor: '#FFF'}, 1000);
             $( this ).find( "p" ).animate({color: '#FFF'}, 1000);


           }else{

           	 $( this ).find( "p" ).css('color', 'black');
           	 $(".end").removeClass('hidden');
           	 $(".valor").addClass('hidden');
               puntuacion ++;
             $(".puntuacion").html("Puntos: "+puntuacion);
           }
      }
    });
  } );


$(document).keypress(function(e) {
  if(e.which >= 48 && e.which <= 57 && !animating && $("#reintentar").hasClass('hidden')) {

        var teclapulsada = e.which - 48;

        $( ".droppable" )
          .find( "p" )
            .html( teclapulsada );

           if(teclapulsada!=correcto){
           $( ".droppable" ).find( "p" ).css('color', 'black');
             $( ".droppable" ).css('background-color', 'red');
             $( ".droppable" ).animate({backgroundColor: '#FFF'}, 500);
           $( ".droppable" ).find( "p" ).animate({color: '#FFF'}, 500);


           }else{

             $( ".droppable" ).find( "p" ).css('color', 'black');
             $(".end").removeClass('hidden');
             $(".valor").addClass('hidden');
               puntuacion ++;
             $(".puntuacion").html("Puntos: "+puntuacion);
           }


  }
});


//Hacer clic en comenzar o continuar

$(document).keypress(function(e) {
  if(e.which == 13 || e.which == 32) {
    if(!$("#reintentar").hasClass('hidden')){

      if(!animating){
          if(!first) elegirValores();

            $( ".droppable" ).find( "p" ).css('color', '#fff');
            $(".end").addClass('hidden');
            $(".valor").removeClass('hidden');
            $("#reintentar").find("p").html("Siguiente");

        jugar();


      }

    }

  }
});



$("#reintentar").click(function(){
    if(!animating){
        if(!first) elegirValores();

          $( ".droppable" ).find( "p" ).css('color', '#fff');
          $(".end").addClass('hidden');
          $(".valor").removeClass('hidden');
          $(this).find("p").html("Siguiente");

      jugar();


    }


});





$("#info").click(function(){
	$("#informacion").toggle(500);
});



function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}





function elegirValores(){
	 var peces = $(".peh");
     $('.peh').attr('src',"img/pezbueno.png");
	 resul = Math.floor((Math.random() * 9)+1);
	 num1 = Math.floor((Math.random() * resul));
	 correcto = resul - num1;
	 $(".num1 p").html(resul);
	 $(".resultado>p").html(num1);
	//$(".resultado>p").attr("data-valor")=resul;
	$(".num1").attr("data-valor",resul);
	$(".resultado").attr("data-valor",num1);
    $('.peh').addClass('hidden');
	for (var i = 0; i < resul; i++) {
		indexToRemove=Math.floor((Math.random() * peces.length));
		peces.eq(indexToRemove).removeClass('hidden');
		peces.eq(indexToRemove).addClass('vivo');
		peces.splice(indexToRemove,1);
	}


}
//$("#tiburon").removeClass('hidden');
//$("#tiburon").animate({"display":"none"}, 2000);

function jugar(){

animating=true;

var time = 4000;
if(first){
  $("#mano").removeClass("hidden");
}else{

    time=0;

}

	$("#mano").animate({"top": "55%","left": "43%"}, time, function(){
		$("#mano").attr("src","img/mano-pulsado.png");
		//$("#valor3").animate({ "top": "-175%"}, 2000);
        $('.fantasma').removeClass("hidden");
        $('.fantasma').animate({"top": "13%","left": "39%"},time);
	} )

	$("#mano").animate({ "top": "18%","left": "39%" }, time, function(){
		$("#mano").attr("src","img/mano-nopulsado.png");
		$("#mano").addClass("hidden");
        $('.fantasma').addClass("hidden");
        $('.fantasma').animate({"top": "48%"},0);
		//$("#valor3").animate({ "top": "0%"}, 2000);

		$('#tiburon').removeClass('hidden');
        $('#tiburon').show();
		$('.peh').attr('src',"img/asustado.png");
		pecesvivos = $('.vivo');
        $('.peh').addClass('hidden');


        var peces = $(".peh");

		for (var i = 0; i < num1; i++) {

			indexToRemove=Math.floor((Math.random() * pecesvivos.length));
			pecesvivos.eq(indexToRemove).removeClass('vivo');
			pecesvivos.eq(indexToRemove).removeClass('hidden');
            pecesvivos.eq(indexToRemove).attr('src',"img/asustado.png");
			pecesvivos.splice(indexToRemove,1);

		}
        pecesvivos.attr('src',"img/muerto.png");
        pecesvivos.removeClass('hidden');

      $(".vivo").removeClass("vivo");


		$("#tiburon").fadeOut(5000);
        animating=false;
        first = false;


	} )



}

/*

Gris seleccionado
hijos radiobuttom

*/


});


