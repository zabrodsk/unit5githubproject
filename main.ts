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
