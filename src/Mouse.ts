import robot from "robotjs";
var mouse=robot.getMousePos();
console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
//Move the mouse down by 100 pixels.
if(mouse.y > 400)
{
	robot.moveMouse(mouse.x,mouse.y-5);
} else {
	robot.moveMouse(mouse.x,mouse.y+5);
}
