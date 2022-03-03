/*
Miguel Arriaga
02/03/2022
Script that keeps count of the score
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PointSystem : MonoBehaviour
{
    // Initialize score
    [SerializeField] int score;
    
    void OnTriggerEnter2D(Collider2D col){
        /// Checks if the character has traversed the whole screen and adds one point
        if (col.tag == "Finish")
        {
            score++;
            resetPosition();
        }
    }

    void OnCollisionEnter2D(Collision2D col){
        ///Checks if the character has collided with foe and removes one point
        if (col.gameObject.tag == "Foe")
        {
            if (score!=0){
                score--;
            }
        }
    }

    void resetPosition(){
        ///Resets the position of the main character to the start position
        Vector3 pos =transform.position;
        pos.x=0;
        pos.y=-4.64f;
        transform.position=pos;
    }

    public int getScore(){
        /// Returns the score, public getter
        return score;
    }
}
