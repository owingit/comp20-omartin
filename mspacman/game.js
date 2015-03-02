function init() {
	draw();
}

function draw() {
    var canvas = document.getElementById('game_canvas');
        
    // Check if canvas is supported on browser
    if (canvas.getContext) {
        var ctx = document.getElementById('game_canvas').getContext('2d');
	    var img = new Image();
	    var ms_pac_img = new Image();
	    img.onload = function(){
	      ctx.drawImage(img,320,0,600,135,0,0,600,140);
	      ctx.drawImage(ms_pac_img,80,25,20,18,36,35,21,20);
  		};
  		img.src = 'pacman10-hp-sprite.png';
  		ms_pac_img.src = 'pacman10-hp-sprite.png';
    }

    else {
        alert('Sorry, canvas is not supported on your browser!');
	}
}
