/*
   ( var cards ) Cria e inicializa a lista de cartas.
   ( var endTime, startTime ) Cria e inicializa variavel de time.
   ( var openCards ) Cria variavel lista para 2 cartas abertas.
   ( var valDeck ) Cria variavel que recebe o elemento do DOM de Id. "#deck*" para atribuição do event Click.
   ( var moveCounter ) Cria variavel para controlar contador de movimentos e inicializa.
   ( var matchCar ) Cria variavel para controlar contador de cartas que combinam.
   ( var stars1 ) Cria e inicializa variavel para controle de quantidade de estrelas.
   ( var operationTook ) Cria e inicializa variavel de tempo de operaçao.	 
*/
var cards = ["fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor","fa fa-bolt","fa fa-cube","fa fa-leaf","fa fa-bicycle","fa fa-bomb"];
var openCards = [];
var valDeck;
var moveCounter = 0;
var matchCar = 0;
var stars1 = 3;
var endTime, startTime = new Date();
var operationTook = 0;
stopWatch();
limpaLista();


/*
( Função shuffle )  Embaralha a lista de cartas e retorna uma nova lista para array.
*/
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


/*
( Função limpaLista ) Utilizada para restart do jogo.
( openCards ,moveCounter, matchCar ) Inicializa as variaveis lista de cartas abertas e contadores de movimento.
Remove as cartas da lista e oculta os símbolo da carta.
Apresenta o valor de quantidade de movimentos.
Chama a função stopWatch().
Chama a função novaLista().
*/
function limpaLista() {
  	openCards = [];
	matchCar = 0;
	moveCounter = 0;
	stars1 = 3
	$('.card').removeClass("card match open show").addClass("card");
  	startTime = new Date();
  	$('.moves').html( "<em>" + moveCounter + "  MOVES  " +  "</em>" );
	stopWatch();
  	novaLista();
return;  	
}


/*
( Função novaLista )  Chama função shuffle que embaralha a lista de cartas e retorna um nova lista.
Altera a localização das cartas no DOM ('li') com base na nova lista criada.
*/
function novaLista() {
	var array = cards.concat(cards);
	array = shuffle(array);
	$('.fa-star').remove();
	var star = $('.stars');
	var currLi = $('li i');
		for (var y = 0; y < array.length; y++) {
				currLi[y].classList = array[y];
	}
		for ( var i = 0; i < 3; i++) {
				star.append('<li><i class="fa fa-star"></i></li>');
		}
return;		
}

	
/*
configurar o ouvinte de eventos para cada carta com base no Id. Se uma carta for clicada:
*/
$("#deck1").on('click', function() {
	valDeck = $("#deck1");
	displayCard(valDeck);
});

$("#deck2").on('click', function() {
	valDeck = $("#deck2");
	displayCard(valDeck);
});

$("#deck3").on('click', function() {
	valDeck = $("#deck3");
	displayCard(valDeck);
});

$("#deck4").on('click', function() {
	valDeck = $("#deck4");
	displayCard(valDeck);
});

$("#deck5").on('click', function() {
	valDeck = $("#deck5");
	displayCard(valDeck);
});

$("#deck6").on('click', function() {
	valDeck = $("#deck6");
	displayCard(valDeck);
});

$("#deck7").on('click', function() {
	valDeck = $("#deck7");
	displayCard(valDeck);
});

$("#deck8").on('click', function() {
	valDeck = $("#deck8");
	displayCard(valDeck);
});

$("#deck9").on('click', function() {
	valDeck = $("#deck9");
	displayCard(valDeck);
});

$("#deck10").on('click', function() {
	valDeck = $("#deck10");
	displayCard(valDeck);
});

$("#deck11").on('click', function() {
	valDeck = $("#deck11");
	displayCard(valDeck);
});

$("#deck12").on('click', function() {
	valDeck = $("#deck12");
	displayCard(valDeck);
});

$("#deck13").on('click', function() {
	valDeck = $("#deck13");
	displayCard(valDeck);
});

$("#deck14").on('click', function() {
	valDeck = $("#deck14");
	displayCard(valDeck);
});

$("#deck15").on('click', function() {
	valDeck = $("#deck15");
	displayCard(valDeck);
});

$("#deck16").on('click', function() {
	valDeck = $("#deck16");
	displayCard(valDeck);
});


 /*
 ( Função displayCard ) Função call back do ouvinte de eventos se a carta for clicada.
 Mostra o simbolo da carta clicada e adiciona a lista de cartas aberta.
 Quando 2 cartas na lista, chama a função matchCard() para verificar se combinam.
 Quando 3 cartas na lista, remove da lista 2 cartas ( index 0 e 1), esconde o simbolo da carta.
 */
function displayCard(valDe) {
   	valDe.addClass('open show');
   	openCards.push(valDe);  // adinciona no fim da lista 
	if ( openCards.length === 2 ) {
        matchCards();		
	} else if ( openCards.length === 3 ) { 
			openCards[0].toggleClass('open show');
      		openCards[1].toggleClass('open show');	
      		openCards.shift();  // remove da lista
      		openCards.shift();  
      		checkMoveCounter();
	}
return;
}


/*
 ( Função matchCards ) Se as cartas coincidirem, trava as cartas na posição aberta.
*/
function matchCards() {
	var card1 = openCards[0].children().first();
	var card2 = openCards[1].children().first();
	var cla1 = card1[0].classList
	var cla2 = card2[0].classList
	if ( cla1[1] === cla2[1] ) {
    	matchCar++;
    	openCards[0].toggleClass('match open show');
    	openCards[1].toggleClass('match open show');
    	checkMoveCounter();
    } 
return; 
}


/*
 Incrementar o contador de movimentos e exibi na página
 E verifica se todos os cartões combinam.    
 */
function checkMoveCounter() {
	moveCounter++;
	$('.moves').html( "<em>" + moveCounter + "  MOVES  " +  "</em>" );
		if ( matchCar === 8 ) {
				$('.moves').html( "<em>" + moveCounter + "  MOVES  " +  "</em>" );
				endTime = new Date();
				operationTook =  (endTime.getMinutes() - startTime.getMinutes());
				scoreStar();
				finaliza();
		} else {
		scoreStar();
	    }	 
return;
}


/*
 Incrementar o contador de estrelas e exibi durante o jogo e no modal. 
*/
function scoreStar() {
	if ( moveCounter === 18 ) { 
		stars1 = 2; // 2 estrelas
		$('.fa-star').remove();
		$('.stars').append('<li><i class="fa fa-star"></i></li>');
		$('.stars').append('<li><i class="fa fa-star"></i></li>');
	} else if ( moveCounter === 22 ) {
		stars1 = 1; // 1 estrela
		$('.fa-star').remove();
		$('.stars').append('<li><i class="fa fa-star"></i></li>');
	} else if ( moveCounter === 29 ) {
		stars1 = 0; // 0 estrelas
		$('.fa-star').remove();
	}
return;	
}


/* Se todos os cartões tiverem correspondido, exibe uma mensagem com a pontuação final no modal com resultado final.    
 Mensagem de encerramento.
 */
function finaliza() {		
	$( "div.modal-body" ).html(function() {
  		var emphasis = "<em> With " + moveCounter + " Moves and " + stars1 + " Stars." + "</em>";
  		return "<p class='fa fa-star fa-3x'>" + emphasis + "</p>";
	});
	$('div.modal-body').append("<h3> You took  " + operationTook + "  minutes to complete." + "</h3>");
	$('#game1').modal('toggle'); 
return;
}


// Apresenta relogio temporizador
function stopWatch() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  $("#stopWatch").html( h + ":" + m + ":" + s );
  var t = setTimeout(stopWatch, 500);
}


// Adiciona zero em frente para numero < 10 
function checkTime(i) {
  if (i < 10) {i = "0" + i};   
    return i;
}
