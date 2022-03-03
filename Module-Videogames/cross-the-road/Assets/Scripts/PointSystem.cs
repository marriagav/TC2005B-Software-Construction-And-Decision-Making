using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PointSystem : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] int score;
    
    void OnTriggerEnter2D(Collider2D col){
        if (col.tag == "Finish")
        {
            score++;
            resetPosition();
        }
    }

    void OnCollisionEnter2D(Collision2D col){
        if (col.gameObject.tag == "Foe")
        {
            if (score!=0){
                score--;
            }
        }
    }

    void resetPosition(){
        Vector3 pos =transform.position;
        pos.x=0;
        pos.y=-4.64f;
        transform.position=pos;
    }

    public int getScore(){
        return score;
    }
}
