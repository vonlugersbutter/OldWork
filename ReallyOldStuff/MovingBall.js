var xPos = 0;
var yPos = 400;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    xPos += 2;
    yPos -= 2;
};
