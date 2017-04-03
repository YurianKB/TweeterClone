var contadorLetras = 0;
function textArea(){
  var tweet = document.getElementById("textoTweet").value;

  var nuevoTweet = document.getElementById("nuevosTweets");
  var usuario = document.getElementById("usuario").value;

  nuevoTweet.innerHTML = tweet + "<br>" + "Por: " + usuario;
  //nuevoTweet.innerHTML = usuario;
}

/*function contadorTexto(){
  var tweet = document.getElementById("textoTweet").value;
  tweet.innerHTML = tweet.lenght;
  tweet = 140 --;

}*/

/*function contadorTexto(){

      	document.forms[0].caracteres.value  = document.forms[0].texto.value.length
}*/

//function contadorde

















/*var contador = 0;

function click(){
  contador++;
}*/
