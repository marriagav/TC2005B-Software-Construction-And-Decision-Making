/*
Miguel Arriaga
02/03/2022
Script that moves the main character
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CharacterMove : MonoBehaviour
{
    //Initialize atributes move and speed
    Vector3 move;
    [SerializeField] float speed = 0.5f;

    // Update is called once per frame
    void Update()
    {
        //Read input from keyboard or gamepad
        move.x = -1*Input.GetAxis("Horizontal");
        move.y = -1*Input.GetAxis("Vertical");

        //Apply the data to the movement to transform
        transform.Translate(move*speed*Time.deltaTime);

        //Check if the character has collided with lateral walls
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
