Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById('result').innerHTML='<img id="capture_img" src="'+ data_uri+'"/>';
    });
}
console.log('ml5.version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/b26-WwUBo/',modelLoaded);
function modelLoaded(){
    console.log('modelloaded');
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="first predidction is"+ prediction_1;
    speak_data_2="second predidction is"+ prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function check(){
    img=document.getElementById('capture_img');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
    console.error(rror);
    }
    else{
        console.log(results);
        document.getElementById("result_hand_name1").innerHTML=results[0].label;
        document.getElementById("result_hand_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if (results[0].label=="Victory"){
            document.getElementById("update_hand1").innerHTML="&#9996;";
        }
        if (results[0].label=="Good"){
            document.getElementById("update_hand1").innerHTML="&#128077;";
        }
        if (results[0].label=="Super"){
            document.getElementById("update_hand1").innerHTML="&#128076;";   
        }
        if (results[0].label=="Bad"){
            document.getElementById("update_hand1").innerHTML="&#128078;";   
        }
        if (results[0].label=="Angry"){
            document.getElementById("update_hand1").innerHTML="&#x270A;";   
        }
        if (results[0].label=="Strong"){
            document.getElementById("update_hand1").innerHTML="&#128170;";   
        }
        if (results[0].label=="You rock"){
            document.getElementById("update_hand1").innerHTML="&#129304;";
        }
        if (results[0].label=="I/You Call"){
            document.getElementById("update_hand1").innerHTML="&#129305;";
        }
        if (results[0].label=="Victory"){
            document.getElementById("update_hand2").innerHTML="&#9996;";
        }
        if (results[0].label=="Good"){
            document.getElementById("update_hand2").innerHTML="&#128077;";
        }
        if (results[0].label=="Super"){
            document.getElementById("update_hand2").innerHTML="&#128076;";   
        }
        if (results[0].label=="Bad"){
            document.getElementById("update_hand2").innerHTML="&#128078;";   
        }
        if (results[0].label=="Angry"){
            document.getElementById("update_hand2").innerHTML="&#x270A;";   
        }
        if (results[0].label=="Strong"){
            document.getElementById("update_hand2").innerHTML="&#128170;";   
        }
        if (results[0].label=="You rock"){
            document.getElementById("update_hand2").innerHTML="&#129304;";
        }
        if (results[0].label=="I/You Call"){
            document.getElementById("update_hand2").innerHTML="&#129305;";
        }
    }
}