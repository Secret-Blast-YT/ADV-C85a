//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
var car_width = 80;
var car_height = 130;
var car_x = 10;
var car_y = 10;

background_image = "parkingLot.jpg";
car_image = "car.png";



function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;
    
    car_imgTag = new Image();
    car_imgTag.onload = uploadgreencar();
    car_imgTag.src = car_image;

}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	{
		if(car_y >=0)
		{
			car_y = car_y - 10;
			console.log("When up arrow is pressed =" + car_x + "-" + car_y);
			uploadBackground()
			uploadgreencar();
		}
	}
}

function down()
{
	if(car_y <=500)
	{
		car_y = car_y + 10;
		console.log("When down arrow is pressed x =" + car_x + "| y =" + car_y);
		uploadBackground()
		uploadgreencar();
		}
	
}

function left()
{
	{
		if(car_x >=0)
		{
			car_x = car_x - 10;
			console.log("When left arrow is pressed =" + car_x + "| y =" + car_y);
			uploadBackground()
			uploadgreencar();
		}
	}
}

function right()
{
	{
		if(car_x <=700)
		{
			car_x = car_x + 10;
			console.log("When right arrow is pressed, x =" + car_x + "-" + car_y);
			uploadBackground()
			uploadgreencar();
		}
	}
}
