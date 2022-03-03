using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreDisplay : MonoBehaviour
{
    GameObject player;
    [SerializeField] Text txt;
    PointSystem cs;
    int score;
    // Start is called before the first frame update
    void Start()
    {
        player = GameObject.Find("Character");
        cs= player.GetComponent<PointSystem>();
    }

    // Update is called once per frame
    void Update()
    {
        score=cs.getScore();
        txt.text = "Score: " + score.ToString();
    }
}
