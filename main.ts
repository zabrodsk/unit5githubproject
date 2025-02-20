function spawn_enemy () {
    enmy1 = sprites.create(img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `, SpriteKind.Enemy)
    tiles.placeOnTile(enmy1, tiles.getTileLocation(4, 12))
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(FireGirl)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(FireGirl)
})
function level1 () {
    WaterBoy = sprites.create(img`
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 f 9 f 9 9 . . . . . 
        . . . 9 9 f 9 9 9 f 9 9 . . . . 
        . . . . 9 9 f f f 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 . . . 9 9 9 9 9 9 . . 9 9 . 
        9 . . . . 9 9 9 9 9 . . . 9 9 . 
        9 9 . . . 9 9 9 9 . . . . 9 9 . 
        9 9 . . . . 9 . 9 . . . . 9 9 . 
        9 9 . . . 9 9 . 9 . . . . 9 9 . 
        . . . . . 9 . . 9 9 . . . . . . 
        . . . . . 9 . . . 9 . . . . . . 
        . . . . 9 9 . . . 9 9 . . . . . 
        . . . 9 9 9 9 . . . 9 9 . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(WaterBoy)
    FireGirl = sprites.create(img`
        . . 2 . 2 . . 2 . . 2 . . . . . 
        . 2 . . 2 . . 2 . . 2 . . . . . 
        . 2 2 . 2 . . 2 . . 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . . 2 f 2 f 2 f 2 f 2 . . . . . 
        . . 2 f 2 2 2 2 2 f 2 . . . . . 
        . . 2 f f f f f f f 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        2 . . . . 2 2 2 2 . . . . 2 2 . 
        . 2 . . . 2 2 2 . . . 2 2 . . . 
        . . 2 . 2 2 2 2 2 . 2 . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 . . . . 2 . . . . . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(FireGirl)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(WaterBoy, sprites.dungeon.stairEast)
    tiles.placeOnRandomTile(FireGirl, sprites.dungeon.stairWest)
    spawn_enemy()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(WaterBoy)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(WaterBoy)
})
let fire: Sprite = null
let WaterBoy: Sprite = null
let FireGirl: Sprite = null
let enmy1: Sprite = null
level1()
game.onUpdateInterval(1500, function () {
    fire = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 4 4 4 4 4 4 4 2 . . . . 
        . . 2 4 2 2 2 2 2 2 2 4 2 . . . 
        . . 2 4 2 4 4 4 4 4 2 4 2 . . . 
        . . 2 4 2 4 2 2 2 4 2 4 2 . . . 
        . . 2 4 2 4 2 2 2 4 2 4 2 . . . 
        . . 2 4 2 4 2 2 2 4 2 4 2 . . . 
        . . 2 4 2 4 4 4 4 4 2 4 2 . . . 
        . . 2 4 2 2 2 2 2 2 2 4 2 . . . 
        . . . 2 4 4 4 4 4 4 4 2 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, enmy1, 27, 0)
})
