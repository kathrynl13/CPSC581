var btnSpeak = document.querySelector('#btnSpeak');
var synth = window.speechSynthesis;
var voices = [];

const gestures = ["Five", "Four", "Three", "Two", "One", "Peace"];

btnSpeak.addEventListener('click', ()=> {
    var toSpeak = new SpeechSynthesisUtterance('To unlock your phone, act out the hand gesture according to the description about to be given. The hand gesture is' + gestures[0]);
    var selectedVoiceName = 'en-US';
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
});

