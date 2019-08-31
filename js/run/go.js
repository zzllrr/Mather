/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

$(function(){


	$('#go').on('click',function(){
		var tool=$('[name=tool]:checked').val(), o=($('#subject2').val()||'').toLowerCase(), i0=$('#input0'),i1=$('#input1'),i0v=i0.val().trim(),i1v=i1.val().trim();
		
		$('#svgs.toggle').click();
		if(tool=='solve'){
			if(!i0v){
				var v=$('.inputTip .eg').last().attr('data-eg')||'';
				i0.val(v);
				i0v=v;
			}
			OH(KxA(solve[o](i0v,questionA())));
			
			setTimeout(function(){
				$('#oHTML').find('.oLaTeX').eq(0).click();
				Scroll('scrollB');
				$('#zMatherHide').click();
			},300);

		}
		if(tool=='graphic'){
			$('#oHTML').empty();
			var dmid='outPlot'+(new Date()).getTime()+(Math.random()+'').substr(2), gs=$('#graphicGround .task.seled');
			if(gs.length<1){
				gs=$('#graphicGround .level.seled').last();
			}
			if(i0v && gs.length){
				
			
			
				gs.each(function(){
					Graphic.drawSVG(furi($(this))[0].join('/'),i0v,'oHTML');
				});

				/*
				do{
					$('#oHTML text').filter(function(){return /\$.+\$/.test($(this).text())}).each(function(){
						var t=$(this).text();
						graphic.drawHTMLinSVG('latex',kx(t.replace(/\$.+\$)\$/g,'$1')),'',this);
					});
				}while($('#oHTML text').filter(function(){return /\$.+\$/.test($(this).text())}).length)
				
				
				
				$('#oHTML').children().children('svg').each(function(){
					var zi=[],Z,me=$(this);
					$('#Caps').children('svg,textarea,span').each(function(){zi.push(+$(this).css('z-index')||2000)});
					Z=max(zi)+1;
					me.clone().appendTo('#Caps');
					$('#Caps').find('#'+this.id).attr({'id':'graphic'+Time.now5()+(Math.random()+'').substr(2)})
					.css({'position':'absolute', 'z-index':Z,'top':$('#Caps').position().top,'height':me.height()})
					//L.drawShapeNow='';
				});
				
				
				$('#Pointer').click();
				//$('#oHTML').empty();
				toolTip(gM('copied2CanvasTip'));
				*/
			}
			
		}
		if(tool=='show'){
			var s=$('#showGround .ground0 .level.seled').attr('data-i'), ss=s.toLowerCase();
			
			OH('<iframe src="'+ss+'.html" width="99%" height="400px" class=resize></iframe>');
			
		}

		setTimeout(function(){
			dayOrNight();
		},200);

	});

});

