import { Howl } from 'howler';

// Obtener las notas y la guitarra
var notes = document.querySelectorAll(".note");
var guitar = document.querySelector(".guitar");

// Importamos los sonidos
const { Howl } = require ('howler');
var note1 = new Howl{src:['note1.mp3']}
var note2 = new Howl({src:['note2.mp3']});
var note3 = new Howl({src:['note3.mp3'] });
var note4 = new Howl({ src:['note4.mp3'] });

// Agregar un evento para cada nota
notes.forEach(note => {
  note.addEventListener("transitionend", function() {
    note.classList.remove("pressed");
  });

  // Detectar la pulsación de la tecla correspondiente a la nota
  document.addEventListener("keydown", function(event) {
    if(event.keyCode == note.getAttribute("data-key")) {
      note.classList.add("pressed");
      var sound = document.querySelector("#sound" + note.getAttribute("data-key").charAt(1));
      sound.currentTime = 0;
      sound.play();
    }
  });
});

// Detectar la pulsación de la tecla correspondiente a la guitarra
document.addEventListener("keydown", function(event) {
  if(event.keyCode == 32) {
    guitar.classList.add("pressed");
  }
});

// Detectar cuando se suelta la tecla correspondiente a la guitarra
document.addEventListener("keyup", function(event) {
  if(event.keyCode == 32) {
    guitar.classList.remove("pressed");
  }
});