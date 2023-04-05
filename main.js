prediction1 = "";


Webcam.set({

width: 350,
height: 350,
image_format: "png",
png_quality: 90

});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {

Webcam.snap(function (data_uri){

document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';


});

}

console.log('ml5version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jEpy2JzMa/model.json', modelloaded);

function modelloaded() {

console.log('modelloaded')

}

function speak() {

var synth = window.speechSynthesis;
speak_data1 = "first prediction is " + prediction1;
var utterthis = new SpeechSynthesisUtterance(speak_data1);
synth.speak(utterthis);

}

function check() {

img = document.getElementById("captured_image")
classifier.classify(img, gotResult)

}

function gotResult(error, results) {

if(error) {

console.log(error);

}

else {

console.log(results);
document.getElementById("hand_name").innerHTML = results[0].label;
document.getElementById("update_emoji").innerHTML =  results[1].label;
prediction1 = results[0].label;

speak();

if(results[0].label == "peace") {
document.getElementById("update_emoji").innerHTML = "✌️"
}

if(results[0].label == "thumbsup") {
document.getElementById("update_emoji").innerHTML = "👍"
}

if(results[0].label == "thumbsdown") {
document.getElementById("update_emoji").innerHTML = "👎"

}

if(results[0].label == "OK") {
document.getElementById("update_emoji").innerHTML = "👌"
    
}









}
}

