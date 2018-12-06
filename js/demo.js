

var time=null;
var num=5;
var corlorArr=['red','blue','yellow','black'];
var game=document.getElementsByClassName('game')[0]	;
var jishu=0;
var flag=true;
init()
function init(){//初始化
	bind()
}

function bind(){//点击开始
	$('.bind').click(function(){
		flag=true
		num=5
		$('.game').empty()
		$('#integral').html(jishu)
	$(this).hide()
	gameStart()
	
})
}

function gameStart(){//游戏开始
	
	establish()
	move()
	
}

function establish(){//动态创建div
	
	var divs=document.createElement('div')
		divs.setAttribute('class','divs')
	
	 
	var	box=null
	var cont=parseInt(Math.random()*4)
		for(var i=0;i<4;i++){
			box=document.createElement('div')
			box.setAttribute('class','box')			
			if(i==cont){
			box.setAttribute('name','i')	
			box.style.background=corlorArr[i]	
			}
			divs.appendChild(box)
		}	
		var haizi = game.children
	 		
		game.insertBefore(divs,game.childNodes[0])
//		console.log(haizi.length)
		if(haizi.length>=6){
			for(var j=0;j<4;j++){
			if(haizi[haizi.length-1].children[j].hasAttribute('name')){
			
				alert('游戏结束')
				clearInterval(time)
				flag=false
				jishu=0
				$('.bind').show()
			}
			
		}
			game.removeChild(haizi[haizi.length-1])
		}
		
}


function move(){//盒子移动
	time=setInterval(function(){
		
		var tops=$('.game').position().top
		
		if(tops>=0){
//			console.log(tops)
			$('.game').css('top','-150px')
			establish()
		}else{
			$('.game').css('top',tops+num+'px')
			
		}
		
	},20)
	
	gameBind()
}


function gameBind(){//游戏的点击
	
		game.onmousedown=function(e){
			
			if(flag){
				var aa=e.target
					
				
				if(!aa.hasAttribute('name','i')){
					
					clearInterval(time)
//					alert('游戏结束')
					console.log("点击错误")
					flag=false;
					jishu=0
					$('.bind').show()
				}else{
				    jishu++
				    console.log("点击正确")
					aa.removeAttribute('name')
					aa.style.background='silver'
					$('#integral').html(jishu)
					
				}
				
				if(jishu%10==0){
					num++
					console.log(num)
				}
		}
		
	}
		
	
}

