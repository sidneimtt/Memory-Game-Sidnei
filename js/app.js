/*
   ( var array ) Cria e inicializa a lista de cartas.
   ( var array1 ) Cria variavel lista para 2 cartas abertas.
   ( var valDeck ) Cria variavel que recebe o elemento do DOM de Id. "#deck*" para atribuição do event Click.
   ( var moveCounter ) Cria variavel para controlar contador de movimentos e inicializa.
   ( var matchCar ) Cria variavel para controlar contador de cartas que combinam.	 
*/

var array = ["fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor","fa fa-bolt","fa fa-cube","fa fa-anchor","fa fa-leaf",
"fa fa-bicycle","fa fa-diamond","fa fa-bomb","fa fa-leaf","fa fa-bomb","fa fa-bolt","fa fa-bicycle","fa fa-paper-plane-o","fa fa-cube"];
var array1 = [];
var valDeck;
var moveCounter = 0;
var matchCar = 0;
var endTime, startTime = new Date();
var operationTook = 0;


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
( array1 ,moveCounter, matchCar ) Inicializa as variaveis lista de cartas abertas e contadores de movimento.
Remove as cartas da lista e oculta os símbolo da carta.
Apresenta o valor de quantidade de movimentos.
Chama a função novaLista().
*/

function limpaLista() {
  	array1 = [];
	matchCar = 0;
	$('.card').removeClass("card match open show").addClass("card");
  	startTime = new Date();
  	novaLista();
}


/*
( Função novaLista )  Chama função shuffle que embaralha a lista de cartas e retorna um nova lista.
Altera a localização das cartas no DOM ('li') com base na nova lista criada.
*/

function novaLista() {
	array = shuffle(array);
	$('.fa-star').remove();
	moveCounter = 0;
	var star = $('.stars');
	var currLi = $('li i');
		for (var y = 0; y < array.length; y++) {
				currLi[y].classList = array[y];
	}
		for ( var i = 0; i < 3; i++) {
				star.append('<li><i class="fa fa-star"></i></li>');
		}
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
   	array1.push(valDe);  // adinciona no fim da lista 
	if ( array1.length === 2 ) {
        matchCards();		
	} else if ( array1.length === 3 ) { 
			array1[0].toggleClass('open show');
      		array1[1].toggleClass('open show');	
      		array1.shift();  // remove da lista
      		array1.shift();  
      		checkMoveCounter();
	}
return;
}


/*
 ( Função matchCards ) Se as cartas coincidirem, trava as cartas na posição aberta.
*/

function matchCards() {
	var card1 = array1[0].children().first();
	var card2 = array1[1].children().first();
	var cla1 = card1[0].classList
	var cla2 = card2[0].classList
	if ( cla1[1] === cla2[1] ) {
    	matchCar++;
    	array1[0].toggleClass('match open show');
    	array1[1].toggleClass('match open show');
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
	if ( matchCar === 8 ) {
		$('.moves').html( moveCounter );
		$('#Moves').text(' MOVES -  GAME OVER ');
		endTime = new Date();
		operationTook =  (endTime.getMinutes() - startTime.getMinutes());
		scoreStar();
		return;
	} 
}


/*
 Incrementar o contador de estrelas e exibi na modal com resultado final. 
 Se todos os cartões tiverem correspondido, exibe uma mensagem com a pontuação final.    
 Mensagem de encerramento.
*/
function scoreStar() {
	var stars1 = 0;
	if ( moveCounter <= 18 ) { 
		stars1 = 5; /// 5 estrelas
	} else if ( moveCounter <= 24 ) {
		stars1 = 4; 
	} else if ( moveCounter > 24 ) {
		stars1 = 3; /// 3 estrelas
	}	
	$( "div.modal-body" ).html(function() {
  		var emphasis = "<em> With " + moveCounter + " Moves and " + stars1 + " Stars." + "</em>";
  		return "<p class='fa fa-star fa-3x'>" + emphasis + "</p>";
	});
	$('div.modal-body').append("<h3> You took  " + operationTook + "  minutes to complete." + "</h3>");
	$('#game1').modal('toggle'); 
return;
}


