/* If you are seeing this, let it be known that I made this as a twelve year old. I apologize in advance*/

/*DO NOT MAKE FUN OF FLUFFY UNICORN! HE WILL EAT YOU IF YOU DO! (But seriously, this is my first program, so be nice!)*/

//we have to make the background way up here because if we don't, it will cover fluffy unicorn.
    background(39, 171, 194);

//the ground
    noStroke();
fill(0, 0, 255);
rect(-2, 282, 419, 137);

//the sun
fill(255, 255, 0);
ellipse(192, 16, 128, 108);

//clouds
fill(255, 255, 255);
ellipse(263,65,157,50);
ellipse(123,65,157,50);

//FLUFFY UNICORN DOESN'T LIKE OUTLINES
    noStroke();
    
//the unicorn's fluffy head
    fill(255, 0, 238);
ellipse(104, 94, 120, 73);

//the unicorn's fluffy body
    ellipse(211, 168, 229, 123);

//the unicorn's horn
    fill(255, 255, 0);
triangle(35,30,87,63,74,64);

//the unicorn's eyeballs
    fill(255, 255, 255);
ellipse(68,77,31,20);
ellipse(92,81,31,20);

//the unicorn's pupils
    fill(0, 0, 0);
ellipse(67, 80, 13, 13);
ellipse(91,84,13,13);

//the unicorn's smile
    arc(117, 101, 55, 35, -18, 153);
    
//the unicorn`s fluffy ear
    fill(255, 0, 238);
ellipse(129,54,19,19);
fill(0, 0, 0);
ellipse(129, 56, 10, 10);

//the unicorn's fluffy legs
    fill(255, 0, 238);
triangle(168, 210, 171, 323, 142, 206);
triangle(293, 205, 317, 321, 257, 206);

//the unicorn's fluffy tail
    fill(255, 0, 238);
rect(311, 153, 32, 16);
rect(331, 153, 13, 50);
