using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WaveMove : MonoBehaviour
{
    
    float randomNumber;
    [SerializeField] Vector3 move;
    GameObject player;
    PointSystem cs;
    
    void Start(){
        player = GameObject.Find("Character");
        cs= player.GetComponent<PointSystem>();
    }
    
    void Update()
    {
        transform.Translate(move * Time.deltaTime);
    }

    // Update is called once per frame
    void OnTriggerEnter2D(Collider2D col){
        if (col.tag == "Wall"){
            int score=cs.getScore();
            if (score>=10){
                randomNumber = Random.Range(5, score);
            }
            else if (score>=5){
                randomNumber = Random.Range(3, score);
            }
            else{
                randomNumber = Random.Range(1, score);
            }
            if (move.y>0){
                move=new Vector3 (0,randomNumber,0);
                move=-move;
                return;
            }
            else if (move.y<0){
                move=new Vector3 (0,randomNumber,0);
                return;
            }
            else if (move.x>0){
                move=new Vector3 (randomNumber,0,0);
                move=-move;
                return;
            }
            else{
                move=new Vector3 (randomNumber,0,0);
                return;
            }
        }
    }


}
