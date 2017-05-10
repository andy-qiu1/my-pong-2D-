#pragma strict


function OnTriggerEnter2D (hitInfo:Collider2D) {
if (hitInfo.name == "ball"){
GetComponent.<AudioSource>().Play();
var wall_name = transform.name;
   GAME_MANAGER.score(wall_name);
}
hitInfo.gameObject.SendMessage("reset_ball");
}
