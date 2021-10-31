mustache_x = 0;
mustache_y = 0;

function preload(){
mustache = loadImage("https://i.postimg.cc/qvjdqBPV/m.png");
}
function setup(){
    canvas = createCanvas(400,400);
    cam = createCapture(VIDEO);
    cam.hide();

    pose = ml5.poseNet(cam, modelLoaded);
    pose.on('pose', gotPoses);
}
function draw(){
    image(cam, 0, 0, 400, 400);
    image(mustache, mustache_x, mustache_y, 30, 30);
}
function modelLoaded(){
    console.log("Model is Loaded");
}
function Capture(){
    save('funny_filter.png');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        mustache_x = results[0].pose.nose.x - 80;
        mustache_y = results[0].pose.nose.y - 60;
        }
}