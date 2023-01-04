
//récuperer le contenu texte de la baslise <h1>//

const h1 = document.getElementsByClassName('title');
console.log(h1[0].textContent);

//récupérer le HTML de la première balise//

var li = document.querySelector('#menu li');
console.log ("first LI",li.innerHTML);


var li = document.querySelector('#menu li');
console.log ("first LI2",li.innerHTML);


var li = document.querySelector('#menu li');
console.log ("first LI3",li.innerHTML);

//Récupérer le HTML de la dernière balise <li>//

var last = document.querySelector('#menu li:last-child');
console.log ("Récuperer Le HTML du dernier <li>",last.innerHTML);

//Récupérer le HTML de la troisième balise <li>//
var third = document.querySelector('#menu li:nth-child(3)');
console.log ("récuperer le HTML du troisieme <li>",third.innerHTML);

// Récupérer le HTML du parent de la balise <ul>//

var parent = document.querySelector('ul');
console.log ('récuperer le HTML du parent de la balise <ul> ',parent.parentNode.innerHTML )

//Récupérer le HTML du parent de la quatrième balise <li>//

var par = document.querySelector('li:nth-child(4)')
console.log ('récuperer le HTML du parent de la quatrième balise <li>',par.innerHTML)

//Quand la souris survole <ul>, tout le texte passe en rouge, sinon en noir.//

var survol = document.querySelector('ul');
console.log (survol)
survol.addEventListener('mouseover',function handleMouseOver(){

    survol.style.color = 'red';

})

survol.addEventListener('mouseout', function handleMouseOut(){

    survol.style.color = 'black';
})














