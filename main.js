import { random, randomRGB } from "./modules/Util.js";
import { canvas, ctx, width, height, balls, count, para } from "./modules/Config.js";
import { Ball } from "./modules/Ball.js";
import { EvilCircle } from "./modules/EvilCircle.js";

while (balls.length <= 25) {
    let size = random(10, 20);
    let color = randomRGB();

    let ball = new Ball(
        random(0+size,width-size),
        random(0+size,height-size),
        random(-7,7),
        random(-7,7),
        color,
        size,
        ctx
    );

    balls.push(ball);  
}

let evil = new EvilCircle(random(0,width-10), random(0,height-10), ctx);
evil.setControls();

function loop() {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, width, height)

    balls.forEach(ball => {
        if (ball.exists) {
            ball.draw();    
        }
        ball.update();
        ball.collisionDetect();
    });

    evil.draw();
    evil.checkBounds();
    evil.collisionDetect();

    requestAnimationFrame(loop);
}

loop();