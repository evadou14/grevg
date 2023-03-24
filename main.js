function preload(){

}
function setup(){
    canvas = createCanvas(340,340);
    canvas.center();
    canvas.background("white");
    camera = createCapture(VIDEO);
    camera.hide();
    posenet = ml5.poseNet('poseNet',modelLoaded);
    posenet.on('pose',gotResults);
}
function draw(){
image(camera, 0,0, 340 ,340);
}
function saveImage(){
    
}
function modelLoaded(){
    console.log("Model has been loaded correctly");
}
function gotResults(results){
    console.log(results);
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("X coordinate of the nose"+noseX);
        console.log("Y coordinate of the nose"+noseY);
    }
}
