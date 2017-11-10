//declarar un arreglo que representará los asientos
// de nuestro avión con false indicando que estos
//están vacións,

// ocupado=true
//disponible=true


var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

//contador que nos ayudará a rastrear el numero de asientos ocupados

var busySeats = 0;
var paintSeats = function(array) {
  var containerSeats = document.getElementById('seats');
  for(var i = 0; i < array.length ; i++){
    var seat = document.createElement('div');
    seat.className = 'seats' ;
    // del primer elemento al cuarto, en nuestro arreglo va a ser Primera Clase,
    if (i<4) {
      seat.style.background = 'purple' ;
    } else {
      seat.style.background = 'yellow';
    }
    containerSeats.appendChild(seat);
  }
};
var reserve= function() {
  var btn = document.getElementById('btn');
  btn.addEventListener('click', chooseZone);
};

var chooseZone = function() {
  var choice = prompt(
    ' En que zona prefieres reservar \n 1. Primera Clase \n 2. Clase Económica \n \n Por favor ingrese el número de preferencia'
  );

  if(choice == 1) {
    checkFirstClassZone();
  } else if ( choice == 2) {
    checkEconomicZone();
  } else if {
    alert('Por favor ingrese número válido')
  }
};

  var checkFirstClassZone = function() {
    var zone =  ' Primera Clase' ;
    // utilizo for para recorrer por indices  y verifica disponibilidad
    for (var index = 0; index < 4 ; i++) {
      if (airlineSeats[index] == false) {
        airlineSeats[index] = true;
        reserveSeat(index);
        // para interrumpir el for si se reservar
        break;
      } else if (index === 3 && airlineSeats[index] == true) {
        reasignEconomicZone(zone);
      }
    }
  };

  var checkEconomicZone = function() {
    var zone = 'Económica' ;
    for(var index = 4; index < 10 ; index ++ ){
      if (airlineSeats[index] == false) {
        airlineSeats[seats] = true ;
        reserveSeat(index);
        break
      } else if (index === 9 && airlineSeats[index] == true) {
        reasignFirstClassZone(zone);
      }
    }
  };

var reasignEconomicZone = function(zone) {
  var reasign = confirm(
    ' ya no quedan asientos disponibles en ' +
    zone +
    ' :( \n quieres reservar en zona económica? '
  );
  if( reasign == true) {
    checkEconomicZone();
  } else {
    nextFligth();
  }
};

var reasignFirstClassZone =function(zone) {
  var reasign = confirm (
    'ya no quedan asientos en ' +
    zone +
    ' :( \n quieres reservar en primera clase? '
  );
  if (reasing == true) {
    checkFirstClassZone();
  } else {
    nextFligth();
  }
};


var nextFligth = function () {
  alert('proximo vuelo es en tres horas');
};

var reserveSeat = function(indexToPoint) {
  var seat = document.getElementsByClassName('seats');
  seat[indexToPoint].textContent= 'ocupado';
};





paintSeats(airlineSeats) ;
reserve();
