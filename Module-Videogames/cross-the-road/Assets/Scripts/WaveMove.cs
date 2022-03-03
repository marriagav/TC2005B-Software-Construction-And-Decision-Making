/*
Miguel Arriaga
02/03/2022
Script that moves the foes
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WaveMove : MonoBehaviour
{
    //Initialize the attributes
    float randomNumber;
    [SerializeField] Vector3 move;
    GameObject player;
    PointSystem cs;
    
    void Start(){
        /// Retrieves the point system from the main character
        player = GameObject.Find("Character");
        cs= player.GetComponent<PointSystem>();
    }
    
    void Update()
    {
        /// Movement of the foes
        transform.Translate(move * Time.deltaTime);
    }

    void OnTriggerEnter2D(Collider2D col){
        /// Checks if the foes have collided with lateral walls and inverts movement
        if (col.tag == "Wall"){
            calculateRandomNumber();
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

    void calculateRandomNumber(){
        /// Calculates a random factor for the speed of the foes, which depends on the player score
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
    }

}
