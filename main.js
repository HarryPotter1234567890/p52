hpx = 0;
hpy = 0;

function preload(){
harrypotter = loadImage("https://i.postimg.cc/PxrdLKpc/9701875fbfb9e24e200c6b529bda4633.jpg");
}
function draw(){
image(video, 0, 0, 300, 300);
image(harrypotter, hpx, hpy, 100, 100);

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("it is not working D:");
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
hpx = results[0].pose.leftEye.x - 65;
hpy = results[0].pose.leftEye.y - 50;

}

}