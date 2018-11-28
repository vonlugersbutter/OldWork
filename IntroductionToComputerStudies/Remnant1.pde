float a = 0;
float b = 295;
float c = 0;

void setup () {
 size(900, 500);
}

void draw () {
 background(255);
 frameRate(10);
 arc(295, 300, a, a, PI, TWO_PI, CHORD);
 a = a +1;
 if (a>50) {
   a = 0;
 }
 
 ellipse(b,b,c,c);
 b=b-1;
 c=c+1;
 
}
