//initialize variables
let player, floor;

function setup() {
  createCanvas(1680, 800);

  world.gravity.y = 10; //gravity

  //player 1 properties and creation
  player = new Sprite();
  player.bounciness = 0.1;
  player.rotationLock = true;
  player.friction = 0;

  //floor properites and creation
  floor = new Group();
  floor.w = 60;
  floor.h = 60;
  floor.x = 0;
  floor.y = 0;
  floor.tile = "=";
  floor.collider = "static";
  floor.color = "#C99958";

  new Tiles(
    [
      "=............................=",
      "=............................=",
      "=............................=",
      "=...........................==",
      "=...........................==",
      "=..........................===",
      "=..............=========...===",
      "=..........................===",
      "=.....====.................===",
      "=..........................===",
      "=.............===..........===",
      "=..........................===",
      "=======............===========",
    ],
    -30,
    50,
    floor.w,
    floor.h
  );
  // floor = new Sprite(200, 700, 300, 200, "static");
}

function draw() {
  background("skyblue");

  //player 1 movement
  if (kb.pressing("left")) {
    player.vel.x = -5;
  } else if (kb.pressing("right")) {
    player.vel.x = 5;
  } else if (kb.pressing("down")) {
    player.vel.y = 10;
  } else {
    player.vel.x = 0;
  }

  if (floor.colliding(player)) {
    if (kb.presses("up")) {
      player.vel.y = -7;
    }
  }
  //print(player.collid(floor));
}

print(player.collides(floor));
