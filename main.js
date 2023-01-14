function setup()
{
    Canvas = createCanvas(600,500);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide()

}

function draw()
{
    image(video, 0, 0, 600, 500)
}

function preload()
{
    song1 = loadSound("WSV.mp3");
    song2= loadSound("topgun.mp3");
}

function play()
{
    song2.play();
}

function stop()
{
    song2.stop();
}