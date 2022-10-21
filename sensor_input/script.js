/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

var btnSpeak = document.querySelector("#btnSpeak");
var synth = window.speechSynthesis;
var voices = [];

function texttospeechinst() {
  var toSpeak = new SpeechSynthesisUtterance(
    "To unlock your phone, you will have to act out the hand gesture according to the description given."
  );
  var selectedVoiceName = "en-US";
  voices.forEach((voice) => {
    if (voice.name === selectedVoiceName) {
      toSpeak.voice = voice;
    }
  });
  synth.speak(toSpeak);
}

function tts_unlock() {
  var toSpeak = new SpeechSynthesisUtterance(
    "YOUR PHONE HAS BEEN UNLOCKED."
  );
  var selectedVoiceName = "en-US";
  voices.forEach((voice) => {
    if (voice.name === selectedVoiceName) {
      toSpeak.voice = voice;
    }
  });
  synth.speak(toSpeak);
}

btnSpeak.addEventListener("click", texttospeechinst);
//btnSpeak.removeEventListener("click", texttospeechinst);

/*
btnSpeak.addEventListener("click", function nextpg() {
  location.href = "page_2.html";

  btnSpeak.removeEventListener("click", nextpg);
  btnSpeak.addEventListener("click", texttospeechinst);
});
*/

function nextpg() {
  location.href = "page_2.html";
}
function wait() {
  setTimeout(nextpg, 7800);
  //setTimeout(nextpg, 1000);
}
btnSpeak.addEventListener("click", wait);

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
