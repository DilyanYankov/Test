﻿#pragma strict
var levelManager: LevelManager;
var player: PlayerController;


function Start () {
	levelManager = FindObjectOfType(LevelManager);
	player = FindObjectOfType(PlayerController);
}

function Update () {

}


function OnTriggerEnter2D(other: Collider2D){

	if(other.name == "Player"){
		levelManager.currentCheckpoint = gameObject;
		Debug.Log("trriger");
		player.isDead = false;
	}
}