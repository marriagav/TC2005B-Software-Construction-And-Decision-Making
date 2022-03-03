/*
Miguel Arriaga
02/03/2022
Script that displays score on screen
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreDisplay : MonoBehaviour
{
    //Initialize attributes
    GameObject player;
    [SerializeField] Text txt;
    PointSystem cs;
    int score;
    // Start is called before the first frame update
    void Start()
    {
        /// Retrieves the points from the player
        player = GameObject.Find("Character");
        cs= player.GetComponent<PointSystem>();
    }

    // Update is called once per frame
    void Update()
    {
        ///  Modifies the text object to display the score 
        score=cs.getScore();
        txt.text = "Score: " + score.ToString();
    }
}
