status = "";

function setup(){
    canvas = createCanvas(700,600)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}

function draw(){
    image(video, 0, 0, 700, 600);
}