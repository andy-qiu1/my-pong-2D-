#pragma strict

var mainCam : Camera;
var top_wall : UnityEngine.BoxCollider2D;
var bottom_wall : UnityEngine.BoxCollider2D;
var left_wall : UnityEngine.BoxCollider2D;
var right_wall : UnityEngine.BoxCollider2D;

var player_1 :Transform;
var player_2 :Transform;

function Start(){GetComponent.<AudioSource>().Play();}



function Update () {
//move each wall to its edge location
top_wall.size= new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width * 2f, 0f ,0f)).x,1f);
top_wall.offset = new Vector2(0f, mainCam.ScreenToWorldPoint(new Vector3(0F,Screen.height,0f)).y+0.5f);

bottom_wall.size= new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width * 2f, 0f ,0f)).x,1f);
bottom_wall.offset = new Vector2(0f, mainCam.ScreenToWorldPoint(new Vector3(0F,0f,0f)).y-0.5f);

right_wall.size= new Vector2(1f,mainCam.ScreenToWorldPoint(new Vector3(0f ,Screen.height*2f ,0f)).y);
right_wall.offset = new Vector2( mainCam.ScreenToWorldPoint(new Vector3(Screen.width,0f,0f)).x+0.5f, 0f);

left_wall.size= new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3(0f ,Screen.height * 2f ,0f)).y);
left_wall.offset = new Vector2( mainCam.ScreenToWorldPoint(new Vector3(0F,0f,0f)).x-0.5f, 0f);


player_1.position.x = mainCam.ScreenToWorldPoint(new Vector3(75F,0f,0f)).x;
player_2.position.x = mainCam.ScreenToWorldPoint(new Vector3(Screen.width-75F,0f,0f)).x;


}
