x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
draw_apple = "";

function preload(){
  apple = loadImage("apple.png")
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();


function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content)
 if(Number.isInteger(content)){
   document.getElementById("status").innerHTML = "Drawing the Apple" 
 }
 else{
   document.getElementById("status").innerHTML = "System does not recognize" 
 }
 
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width, screen_height-150)
 canvas.position(0, 150)
}

function draw() {
  if(draw_apple == "set")
  {
    for(var loop = 1; loop <= to_number; loop ++){
      x = Math.floor(Math.random() * 600)
      y = Math.floor(Math.random() * 400)
      image(apple, x, y, 60, 60)
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            