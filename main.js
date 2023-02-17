canvas =document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
Nasa_Images = ["1","2","3","4"];
random_number = Math.floor(Math.random()*4);
console.log(random_number);
roverWidth = 100;
roverHeight = roverWidth-(roverWidth/10);
rover_x = 10;
rover_y = 10;
background_image = Nasa_Images[random_number];
console.log("background_image = "+background_image);
rover_Image = "rover.png";
Movement_Distance = 10;
function add() {
    background_imgtag = new image();
    background_imgtag.onload = uploadBackground();
    background_imgtag.src = background_image;
    rover_imgtag = new image();
    rover_imgtag.onload = uploadRover;
    rover_imgtag.src = rover_Image;
}
function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, roverWidth, roverHeight);
}
window.addEventListener("keyDown", myKeyDown);
function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38'){
        up();
        console.log("up");
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
    }
    if (keyPressed == '37'){
        left();
        console.log("left");
    }
    if (keyPressed == '39'){
        right();
        console.log("right");
    }
}
function up(){    
    if(rover_y >=0){
        rover_y = rover_y - Movement_Distance;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover_y <=500){
        rover_y =rover_y+ Movement_Distance;
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){    
    if(rover_x >=0){
        rover_x = rover_x - Movement_Distance;
        console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();         
        uploadrover();
    }
}
function right(){
    if(rover_x <=500){
        rover_x =rover_x+ Movement_Distance;
        console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
