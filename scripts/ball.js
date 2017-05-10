#pragma strict
var ball_speed = 100f;
function Start () {
yield WaitForSeconds(2);
go_ball();

}


function OnCollisionEnter2D (colInfo : Collision2D) {
   if(colInfo.collider.tag == "PLAYER 1"){
   GetComponent.<AudioSource>().pitch = Random.Range(0.8f,1.2f);
   GetComponent.<AudioSource>().Play();
   GetComponent.<Rigidbody2D>().velocity.y =Random.Range(-5,5) +GetComponent.<Rigidbody2D>().velocity.y/2 + colInfo.collider.GetComponent.<Rigidbody2D>().velocity.y/2;
   if(GetComponent.<Rigidbody2D>().velocity.x>0){
    GetComponent.<Rigidbody2D>().velocity.x =10f;
   }else{ GetComponent.<Rigidbody2D>().velocity.x =-10f;}
  
   }
}

function go_ball(){
	var random_number = Random.Range(0f,1f);
   if (random_number<0.5){
   GetComponent.<Rigidbody2D>().AddForce(new Vector2(ball_speed,10f));
   }else{
   GetComponent.<Rigidbody2D>().AddForce(new Vector2(-ball_speed,-10f));
   }
}

function reset_ball(){
GetComponent.<Rigidbody2D>().velocity.x = 0f;
GetComponent.<Rigidbody2D>().velocity.y = 0f;
transform.position.x = 0f;
transform.position.y = 0f;
yield WaitForSeconds(1);
go_ball();
}

