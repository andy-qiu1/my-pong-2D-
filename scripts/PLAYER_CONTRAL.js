#pragma strict
var MoveUp : UnityEngine.KeyCode;
var MoveDown : UnityEngine.KeyCode;
var MoveRight: UnityEngine.KeyCode;
var MoveLeft : UnityEngine.KeyCode;

var speed : float = 10;

function Update () {
   if(Input.GetKey(MoveUp)){
   GetComponent.<Rigidbody2D>().velocity.y = speed;
      
   }
   else if(Input.GetKey(MoveDown)){
   GetComponent.<Rigidbody2D>().velocity.y = speed* -1;
      
   }else{
   GetComponent.<Rigidbody2D>().velocity.y = 0;
      
   }

}


