let p0, p1;

function setup() {
    createCanvas(800, 650);
    p0 = new particle(0, 300);
    p1 = new particle(300, 0);
    p2 = new particle(800, 650);
    p3 = new particle(600, 300);
  
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    // line(p0.x, p0.y, p1.x, p1.y);

    p0.update();
    p1.update();
    p2.update();
    p3.update();


    let delta = 0.05;
    colorMode(HSB);

    noFill();
    for (let t = 0; t <= 1.0001; t += delta) {
        stroke(t * 360, 255, 255, 1);
        // line(x1,y1,x2,y2);
        let v = cubic(p0, p1, p2, p3, t);
        vertex(v.x, v.y);
    }
}

function cubic(p0, p1, p2, p3, t) {

    let v1 = quadratic(p0, p1, p2, t);
    let v2 = quadratic(p1, p2, p3, t);
    let x = lerp(v1.x, v2.x, t);
    let y = lerp(v1.y, v2.y, t);

    line(v1.x, v1.y, v2.x, v2.y);
    return createVector(x, y);
}

function quadratic(p0, p1, p2, t) {
    let x1 = lerp(p0.x, p1.x, t);
    let y1 = lerp(p0.y, p1.y, t);
    let x2 = lerp(p1.x, p2.x, t);
    let y2 = lerp(p1.y, p2.y, t);
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);

    line(x1, y1, x2, y2);
    return createVector(x, y);
}