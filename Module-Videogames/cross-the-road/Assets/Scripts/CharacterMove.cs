using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CharacterMove : MonoBehaviour
{
    Vector3 move;
    [SerializeField] float speed = 0.5f;

    // Start is called before the first frame update
    void Start()
    {
        
    }
    // Update is called once per frame
    void Update()
    {
        //Read input from keyboard or gamepad
        move.x = -1*Input.GetAxis("Horizontal");
        move.y = -1*Input.GetAxis("Vertical");

        //Apply the data to the moveent to transform
        transform.Translate(move*speed*Time.deltaTime);

        if (transform.position.x>2.7){
            Vector3 pos =transform.position;
            pos.x=2.7f;
            transform.position=pos;
        }
        if (transform.position.x<-2.7){
            Vector3 pos =transform.position;
            pos.x=-2.7f;
            transform.position=pos;
        }
    }
}
