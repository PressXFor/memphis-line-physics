// Create canvas and drawing context
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

// Set width and height
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

function Line(x, y) {
    /* This function creates a Line object, which will be drawn
    on the canvas and updated when the user moves their mouse */

    // line segment location
    this.x = x; this.y = y;

    this.draw = function(e) {
        /* Draw the line on the canvas, rotated to match the user's cursor */

        // Create a point directly to the right, with a fixed length
        let point = {x: this.x + 30, y: this.y};
        let center = {x: this.x, y: this.y};

        // a2 + b2 = c2, c = sqrt(a2 + b2)
        let a = Math.pow(e.offsetY - this.y, 2);
        let b = Math.pow(e.offsetX - this.x, 2);
        let distance = Math.sqrt(a + b);

        // Save the height of the "triangle"
        let opposite = (e.offsetY - this.y);

        // SOH CAH TOA
        // sin(theta) = opposite / hypotenuse
        // sin(theta) = opposite / distance
        let theta = Math.asin( opposite / distance );
        if (this.x > e.offsetX) theta = -theta + Math.PI;

        // Rotate the line segment to match the mouse
        var rotatedX = Math.cos(theta) * (point.x - center.x) - Math.sin(theta) * (point.y-center.y) + center.x;
        var rotatedY = Math.sin(theta) * (point.x - center.x) + Math.cos(theta) * (point.y - center.y) + center.y;

        // Draw the line
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.strokeStyle = "blue";

        ctx.moveTo(this.x, this.y);
        ctx.lineTo(rotatedX, rotatedY);
        ctx.stroke();
    }
}

// An array of lines for demonstration
// Displays as a 12 x 4 grid on the screen

var points = [];
for (let i = 1; i <= height/30; i++)
    for (let j = 1; j <= width/30; j++)
        points.push( new Line(j * 38, 60 * i) );

function draw(e) {
    /* Clear the canvas and draw every line */
    ctx.clearRect(0,0, width,height);

    let lingrad = ctx.createLinearGradient(0,0, width, height);
    lingrad.addColorStop(0, "lime");
    // lingrad.addColorStop(0.5, "yellow");
    lingrad.addColorStop(1, "blue");

    ctx.globalCompositeOperation = "source-over";
    for (line of points) line.draw(e);

    ctx.globalCompositeOperation = "source-in";
    ctx.fillStyle = lingrad;
    ctx.fillRect(0,0, width, height);
}

// Update on mousemove
canvas.addEventListener("mousemove", function(e){ draw(e); });
