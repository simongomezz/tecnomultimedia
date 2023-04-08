// Gómez Simón
// tp0 comisión 1

PImage desierto;
size(800, 400);
desierto = loadImage("paisaje.jpg");
desierto.resize(400, 400);
background (94, 230, 252);

noStroke ();

fill (205, 237, 252);
rect (0, 200, 400, 21);
fill (172, 229, 255);
rect (0, 180, 400, 20);

fill (240, 165, 120);
rect (0, 220, 400, 220);

fill (178, 166, 188);
triangle (70, 183, 145, 222, 50, 222);
triangle (208, 190, 230, 222, 180, 222);
triangle (230, 185, 265, 222, 190, 222);
triangle (265, 190, 290, 222, 242, 222);
triangle (285, 183, 320, 222, 260, 222);
quad (300, 198, 380, 195, 400, 222, 300, 222);

fill (134, 59, 19);
triangle (0, 0, 150, 0, 0, 350);
triangle (35, 240, 100, 345, 10, 325);
ellipse (170, 20, 150, 100);
triangle (330, 0, 400, 220, 230, 110);
triangle (329, 0, 400, 0, 400, 222);
triangle (190, 67, 222, 80, 213, 50);

fill (192, 119, 76);
quad (253, 93, 310, 105, 365, 190, 300, 180);
triangle (75, 0, 100, 30, 80, 40);

fill (202, 127, 95);
circle (390, 380, 40);
triangle (350, 350, 400, 370, 370, 400);
triangle (200, 0, 330, 0, 230, 110);
triangle (0, 320, 400, 400, 0, 400);
rect (340, 380, 30, 30);

image (desierto, 400, 0);
