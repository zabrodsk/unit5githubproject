// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`100010000303030101030303030303010303030301111111111111111111111111111104031111111111111111111111111111010311111111111111110d0211111111030111111111111111110802111111110303111111111111111108021111111101031111111111111111080211090d1101011111111111111111080211100811030311111111111111110802111008110303090a0e0a0e0a0d110802111008110301111111111111081108021110081103031111090d11110811080211100811030111110c1111110811080211100811030311110c0811110f11080211100811030511110c08111111110802070b12110603020201020202020102010202020203`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . 2 2 . . . . 2 
2 . . . . . . . . 2 2 . . . . 2 
2 . . . . . . . . 2 2 . . . . 2 
2 . . . . . . . . 2 2 . 2 2 . 2 
2 . . . . . . . . 2 2 . 2 2 . 2 
2 . . . . . . . . 2 2 . 2 2 . 2 
2 2 2 2 2 2 2 2 . 2 2 . 2 2 . 2 
2 . . . . . . 2 . 2 2 . 2 2 . 2 
2 . . 2 2 . . 2 . 2 2 . 2 2 . 2 
2 . . 2 . . . 2 . 2 2 . 2 2 . 2 
2 . . 2 2 . . 2 . 2 2 . 2 2 . 2 
. . . 2 2 . . . . 2 2 . 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark1,sprites.dungeon.floorDark0,sprites.dungeon.floorDark4,sprites.dungeon.stairLarge,sprites.dungeon.stairEast,sprites.dungeon.stairWest,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest1,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleOuterSouthWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
