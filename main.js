function preload()
{

}
function setup()
{
    
    canvas = createCanvas(640 , 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

  
}

function draw()
{
    image(video , 230 , 150 , 220, 200);
    tint(tint_color);
    
    rect(85, 30, 500, 30);
    fill(224, 164, 214);
    stroke(43, 7, 84);

    ellipse(70, 46, 55, 55);
    fill(224, 164, 214);
    stroke(43, 7, 84);


    ellipse(600, 46, 55, 55);
    fill(175, 133, 222);
    stroke(43, 7, 84);

     
    rect(85, 430, 500, 30);
    fill(224, 164, 214);
    stroke(43, 7, 84);

    ellipse(70, 450, 55, 55);
    fill(224, 164, 214);
    stroke(43, 7, 84);


    ellipse(600, 450, 55, 55);
    fill(175, 133, 222);
    stroke(43, 7, 84);

   
}


function take_snapshot()
{
    save("myselfie.png");
}

function apply_tint()
{
    tint_color = document.getElementById("color_name").value;
}