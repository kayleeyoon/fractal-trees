window.onload = draw;

height = 325;
width = 400;

function draw() {
    this.canvas = document.getElementById("myCanvas");
    this.context = canvas.getContext("2d");
    var sunset = context.createLinearGradient(0, 0, 0, this.height);
    sunset.addColorStop(0, "#263e63");
    sunset.addColorStop(.1, "#3d2f6d");
    sunset.addColorStop(.3, "#a03580");
    sunset.addColorStop(.5, "#d8d486");
    sunset.addColorStop(.8, "#e0740f");
    sunset.addColorStop(1, "#c46429");
    context.fillStyle = sunset;
    context.fillRect(0, 0, this.width, this.height);
    this.context.translate(this.width / 2, this.height);
}

function handleClick() {
    makeBranch(75);
}

function makeBranch(len) {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    if (len > 2) {
        randomNum = Math.random();

        context.beginPath();
        context.moveTo(0, 0);   // line start
        context.lineTo(0, -len);  // line end
        context.lineWidth = 1;
        context.strokeStyle = "white";;
        context.stroke();

        context.translate(0, -len);

        context.save();
        context.rotate(Math.PI / 4 * randomNum);
        makeBranch(len * .75);
        context.restore();

        context.save();
        context.rotate(-Math.PI / 4 * randomNum);
        makeBranch(len * .75);
        context.restore();

        if (Math.random() > .9) {
            context.save();
            makeBranch(len * .75);
            context.restore();
        }
    }
}
