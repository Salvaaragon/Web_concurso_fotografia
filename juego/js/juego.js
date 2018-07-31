var stage;
var tamanio;
var bitmap;
var puntuacion = 0;
var numImagen = 1;
var sprite;
     
function inicializar() {
	stage = new createjs.Stage("escenario");
	stage.removeAllChildren();
	stage.removeAllEventListeners("click");
   	cargarImagen();
   	cargarPregunta();
}

function cargarImagen()
{
	var img = new Image();
	switch(numImagen){
		case 1:
			img.src = "imagenes/p1.png";
			break;
		case 2:
			img.src = "imagenes/p2.png";
			break;
		case 3:
			img.src = "imagenes/p3.png";
			break;
		case 4:
			img.src = "imagenes/p4.png";
			break;
		case 5:
			img.src = "imagenes/p5.png";
			break;
		case 6:
			img.src = "imagenes/p6.png";
			break;
	}
	img.onload = function() {
		bitmap = new createjs.Bitmap(img);
		bitmap.setTransform(100,10, 0.68,0.50);
		stage.addChild(bitmap);
		stage.update();
	}
}

function cargarPregunta()
{
	var pregunta = new createjs.Text("¿A qué estilo pertenece esta imagen?", "34px Arial", "#1726C6");
	var resp1 = new createjs.Text("A) Naturaleza", "34px Arial", "#497DF0");
	var resp2 = new createjs.Text("B) Paisaje", "34px Arial", "#497DF0");
	var resp3 = new createjs.Text("C) Astronomía", "34px Arial", "#497DF0");
	var resp4 = new createjs.Text("D) Retrato", "34px Arial", "#497DF0");
	var resp5 = new createjs.Text("E) Publicidad", "34px Arial", "#497DF0");
	var resp6 = new createjs.Text("F) Arquitectura", "34px Arial", "#497DF0");
	pregunta.x=100;
	pregunta.y=300;
	resp1.x = 100;
	resp1.y = 350;
	resp2.x = 100;
	resp2.y = 400;
	resp3.x = 100;
	resp3.y = 450;
	resp4.x = 400;
	resp4.y = 350;
	resp5.x = 400;
	resp5.y = 400;
	resp6.x = 400;
	resp6.y = 450;
	switch(numImagen)
	{
		case 1:
			resp1.addEventListener("click", fallo);
			resp2.addEventListener("click", fallo);
			resp3.addEventListener("click", fallo);
			resp4.addEventListener("click", fallo);
			resp5.addEventListener("click", fallo);
			resp6.addEventListener("click", acierto);
			break;
		case 2:
			resp1.addEventListener("click", acierto);
			resp2.addEventListener("click", acierto);
			resp3.addEventListener("click", acierto);
			resp4.addEventListener("click", fallo);
			resp5.addEventListener("click", fallo);
			resp6.addEventListener("click", fallo);
			break;
		case 3:
			resp1.addEventListener("click", acierto);
			resp2.addEventListener("click", fallo);
			resp3.addEventListener("click", fallo);
			resp4.addEventListener("click", fallo);
			resp5.addEventListener("click", fallo);
			resp6.addEventListener("click", fallo);
			break;
		case 4:
			resp1.addEventListener("click", acierto);
			resp2.addEventListener("click", acierto);
			resp3.addEventListener("click", fallo);
			resp4.addEventListener("click", fallo);
			resp5.addEventListener("click", fallo);
			resp6.addEventListener("click", fallo);
			break;
		case 5:
			resp1.addEventListener("click", fallo);
			resp2.addEventListener("click", fallo);
			resp3.addEventListener("click", fallo);
			resp4.addEventListener("click", fallo);
			resp5.addEventListener("click", acierto);
			resp6.addEventListener("click", fallo);
			break;
		case 6:
			resp1.addEventListener("click", fallo);
			resp2.addEventListener("click", fallo);
			resp3.addEventListener("click", fallo);
			resp4.addEventListener("click", acierto);
			resp5.addEventListener("click", fallo);
			resp6.addEventListener("click", fallo);
			break;
	}
    stage.addChild(pregunta, resp1, resp2, resp3, resp4, resp5, resp6);
    stage.update();
}

function acierto(event){
	puntuacion++;
	if(numImagen == 6)
		mostrarPuntuacion();

	else{
		stage.removeChild(bitmap);
		console.log('Aviso consola: ¡Has pulsado en el texto! ACIERTO');
		numImagen++;
		
		cargarImagen();
   		cargarPregunta();
	}
}


function fallo(event){
	if(numImagen == 6)
		mostrarPuntuacion();
	else{
		stage.removeChild(bitmap);
		numImagen++;
		cargarImagen();
	   	cargarPregunta();
		console.log('Aviso consola: ¡Has pulsado en el texto! FALLO');
	}
}

function mostrarPuntuacion() {
	stage = new createjs.Stage("escenario");
	res1 = new createjs.Text("HAS ACERTADO " + puntuacion +" FOTOGRAFÍAS DE 6", "34px Arial", "#1726C6");
	res1.x=60;
	res1.y=100;

	if(puntuacion < 2) {
		res2 = new createjs.Text("¡SIGUE INTENTÁNDOLO!", "34px Arial", "#1726C6");
		res2.x = 175;
		res2.y = 150;
	}
	if(puntuacion >= 2 && puntuacion < 4) {
		res2 = new createjs.Text("¡NO ESTÁ NADA MAL!", "34px Arial", "#1726C6");
		res2.x = 200;
		res2.y = 150;
	}	
	if(puntuacion >= 4 && puntuacion < 6) {
		res2 = new createjs.Text("¡CASI LO TIENES!", "34px Arial", "#1726C6");
		res2.x = 230;
		res2.y = 150;
	}
	if(puntuacion == 6) { 
		res2 = new createjs.Text("¡FELICIDADES, HAS ACERTADO TODAS!", "34px Arial", "#1726C6");
		res2.x = 45;
		res2.y = 150;	
	}		

	stage.addChild(res1, res2);
	stage.update();
}