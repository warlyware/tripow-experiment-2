var counter = 0;

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('bokeh-holder');
    background(0);
}

function draw() {
    if (Number.isInteger(counter/100)) {
        var circle = new BokehCircle();
        circle.show();
    }
    counter += 1;
}

window.onresize = function() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
};

function BokehCircle() {
    this.pt = {
        x: random(0, width),
        y: random(0, height)
    }
    this.color = {
        r: random(240, 244),
        g: random(220, 224),
        b: random(86, 90)
    }
    this.radius = random(30, 200)

    this.show = function() {
        ellipse(this.pt.x, this.pt.y, this.radius, this.radius);
    }

    fill(this.color.r, this.color.g, this.color.b, 100);
    noStroke();
    return this;
}