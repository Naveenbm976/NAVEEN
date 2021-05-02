Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>";
    });
}

prediction1="";
prediction2="";

function speak(){
    var synth=window.speechSynthesis;
    sentence1="the first prediction is"+prediction1;
    sentence2="The second prediction is"+prediction2;
    content=sentence1+sentence2;
    var utterthis=new SpeechSynthesisUtterance(content);
    synth.speak(utterthis);
}

console.log("ml5 version is ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/C4xbyNPhv/model.json",modelloaded);

function modelloaded(){
    console.log("model is loaded");
}