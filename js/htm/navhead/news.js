/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */


$(function () {
    var o=H_o(),tp=(o['type']||'HTML').toUpperCase(), s=o['src'], t='';

    if(s){
        $.ajax({type:'get',url: s, success:function(x){
            //oHTML(x,1)
        }, error:function(){oHTML(t,1)}
        })
    }else if(t){
        oHTML(t,1);

    }

});
