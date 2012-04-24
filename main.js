enchant();

window.onload=function(){
	game = new Game(320,480);
	// game.preload();
	game.onload=function(){
		game.rootScene.backgroundColor="#FF0000";
        game.fps = 30;

        bg = new Sprite(310, 470);
        bg.backgroundColor = "#00FFFF";
        bg.x = 5;
        bg.y = 5;
        game.rootScene.addChild(bg);

        a = new Sprite(10,10);
        a.backgroundColor = "black";
        a.x = 10;
        a.y = 10;
        a.tl.delay(10).scaleTo(2,2,10,enchant.Easing.QUAD_EASEIN).loop();
        game.rootScene.addChild(a);
    }
	game.debug();
}


function rand (i)
{
    return Math.floor(Math.random() * i);
}

function rand01 ()
{
    return Math.floor(Math.random() * 2);
}

function randBy (i1, i2)
{
    return i1 + Math.floor(Math.random() * i2);
}
