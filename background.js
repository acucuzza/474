/*ensure that function is called once all the DOM elements of the page are ready to be used.*/
$(function(){

	var level1 = {

		objects : [],
		items : [],
		enemies : [],


		BackgroundLeft : function(){
			var z = this;
			for(var i = 0; i < z.objects.length; i++){
				z.objects[i].currentDX += 1;
			}
			for(var j =0; j < z.items.length; j++){
				z.items[j].currentDX +=1;	
			}
			for(var k =0; k < z.enemies.length; k++){
				var dx = z.enemies[k].get('currentDX');
				dx += 1;
				z.enemies[k].set('currentDX', dx);gg
			}
			$("#items").css({"background-position":"+=1px 0px"});

		
		},
		
		BackgroundRight : function(){
			var z = this;
			for(var k = 0; k < z.objects.length; k++){
				z.objects[k].currentDX -= 1;
			}
			for(var i =0; i < z.items.length; i++){
				z.items[i].currentDX -=1;	
			}
			for(var e =0; e < z.enemies.length; e++){
				var dx = z.enemies[e].get('currentDX');
				dx -= 1;
				z.enemies[e].set('currentDX', dx)
			}
			$("#items").css({"background-position":"-=1px 0px"});	
		}
	}
	});