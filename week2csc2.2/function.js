function flip-a-coin()
{
    var player1 = Math.ceil(Math.random()*2);
    var headimage = "harleyhead.jpg";
    var tailimage = "tailsection.jpg";

    if (player1 == 1)
    {
        document.getElementById("player1Img").src = headimage;
    }
    else (player1 == 2)
    {
        document.getElementById("player1Img").src = tailimage:
    }
}

