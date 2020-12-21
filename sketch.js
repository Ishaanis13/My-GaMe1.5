var ThiefImage, CowboyImage, backgroundImage ,
cowBoy, Thief, BulletImage1, BulletImage


function preload() {

    ThiefImage = loadImage("Images/Thief.png");
    CowBoyImage = loadImage("Images/Capture.png");
    backgroundImage = loadImage("Images/BackGround.jpg")
    BulletImage1 = loadImage("Images/Bullet.jpg")
    BulletImage = loadImage("Images/ThiefBullet.png")

}



function setup() {
     cowBoy = createSprite(380, 500, 10, 50);
     Thief = createSprite(880, 500, 10, 50);
    Thief.addImage(ThiefImage);
    cowBoy.addImage(CowBoyImage);
}


function draw() {
    createCanvas(displayWidth - 40, displayHeight-160);
    background(backgroundImage);
    
    drawSprites();
} 

function bulletCowBoy() {
    var bullet = createSprite(380, cowBoy.y);
    bullet.velocityX = 4;
    bullet.addImage(BulletImage1);
    bullet.scale = 0.06
}
function bulletThief() {
    var bullet2 = createSprite(380, Thief.y);
    bullet2.velocityX = 4;
    bullet2.addImage(BulletImage);
}
function keyPressed() {
    if (keyCode === 32) {
        bulletCowBoy();
    }
}