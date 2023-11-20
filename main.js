noseX = 0;
noseY = 0;
function preload() {
 clown_nose = loadImage('https://postimg.cc/6TzvDGk3');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}
function take_snapshot() {
    save('filter.png');
}

function draw() {
    image(video, 0, 0, 300, 300);           
    image(clown_nose, noseX, noseY, 30, 30);
}

function modelLoaded() {
    console.log ('poseNet is initialized');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(result);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX );
        console.log("nose y =" + noseY);
    }
}
