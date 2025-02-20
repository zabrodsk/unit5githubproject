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
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(WaterBoy)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(WaterBoy)
})
let WaterBoy: Sprite = null
let FireGirl: Sprite = null
level1()
