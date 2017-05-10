#pragma strict

static var player_score_1 : int = 0;
static var player_score_2 : int = 0;

var the_ball : Transform;

var skin: GUISkin;
function Start(){
the_ball = GameObject.FindGameObjectWithTag("ball").transform;

}

static function score (Wall_name : String) {
      if( Wall_name == "right_wall"){
          player_score_1 +=1;

      }else if (Wall_name == "left_wall"){
         player_score_2 +=1;
      }


}
function OnGUI(){
   GUI.skin = skin;
   GUI.Label (new Rect(Screen.width/2 -50,20 ,100 ,100),""+player_score_1);
   GUI.Label (new Rect(Screen.width/2 +50,20 ,100 ,100),""+player_score_2);
   if(GUI.Button(new Rect(Screen.width/2-18,20 ,36 ,13.5),"Reset")){

player_score_1= 0;
player_score_2= 0;
the_ball.gameObject.SendMessage("reset_ball");
   }

}
