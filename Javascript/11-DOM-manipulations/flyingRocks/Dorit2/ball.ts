let myPic:any = document.getElementById('myPic')
let ctx = myPic.getContext('2d')
myPic.width = window.innerWidth
myPic.height = window.innerHeight
function Ball(x, y, velX, velY, color, size) { //startX, startY, directionX, directionY, color, size 
    this.x = x; //start
    this.y = y; //start
    this.velX = velX; //diraction
    this.velY = velY; //diraction
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function () {
    ctx.beginPath(); //from where starting
    ctx.fillStyle = this.color; //whichi color to see
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //create ball 
    ctx.fill(); // fill the ball
}
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'; //background black
    ctx.fillRect(0, 0, width, height); //

    while (balls.length < 10) { //count of balls
        const ball = new Ball( //startX, startY, directionX, directionY, color, size 
            random(0, width), //x
            random(0, height), //y
            random(0, 7), //velX
            random(0, 7), //velY
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')', //color
            random(10, 20) //size
        );

        setInterval(() => {
           console.log(ball)
        }, 1000)

        balls.push(ball);
    }

    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        //balls[i].update();
        //balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();