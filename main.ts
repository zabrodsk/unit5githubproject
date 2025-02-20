controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(WaterBoy)
})
let WaterBoy: Sprite = null
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
let FireGirl = sprites.create(img`
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
