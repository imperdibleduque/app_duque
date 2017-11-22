
/*declaramos el objeto app*/
var app={
    /*médotos del objeto app*/
  
  iniciaBotones: function(){
    //guardamos en la variable botonClaro una referencia al elemento sobre
	//el que queremos poner el comportamiento ...id de css claro
	var botonClaro = document.querySelector('#claro');
    var botonOscuro = document.querySelector('#oscuro');
    
	//addEventListener es el escuchador de eventos y si hacemos click llama al ponloClaro
	//ayuda--> eventos como en scratch..al hacer click en botonClaro
    botonClaro.addEventListener('click',this.ponloClaro,false);
    //al hacer click en botonOscuro llamamos a la función ponloOscuro()
	botonOscuro.addEventListener('click',this.ponloOscuro,false);
  },

  //estos serían los manejadores de eventos  
  //coge el fondo y lo pone un className( nombre de la clase) del css
  ponloClaro: function(){
    document.body.className = 'claro';
  },

  ponloOscuro: function(){
    document.body.className = 'oscuro';
  },

};

app.iniciaBotones(); //instanciamos ..llamamos al método iniciaBotones

