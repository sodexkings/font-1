function setup(){
    video = createCapture(VIDEO)
    video.size(550,500)
    
    canvas = createCanvas(550,500)
    canvas.position(560,150)

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose',gotposes)
}

function draw()
{
    background('#ff6347')
    textSize(difference)
    fill('#000000')
text("Temidara",150,250)
}
   

function modelLoaded()
{
    poseNet('PoseNet Is Initilized')
}

function gotposes(results)
{
if(results.length > 0)
{
    console.log(results)
leftWristX =results[0].pose.leftWrist.x
righttWristX =results[0].pose.rightWrist.x
difference = floor(leftWristX  - rightWristX)
}
}
leftWristX = 0;
rightWristX = 0;
difference = 0;

