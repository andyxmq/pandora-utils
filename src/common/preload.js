/**图片预加载*/
import { classOf } from './common-utils'
function PreLoad(imgs,options){
    this.imgs = (classOf(imgs) === 'String') ? [imgs] : imgs;
    this.opts = Object.assign({},PreLoad.DEFAULTS,options);
    if(this.opts.order === 'ordered'){
        this._ordered();
    }else{
        this._unordered();
    }
   
}

PreLoad.DEFAULTS = {
    order: 'unordered',
    each: null,
    all: null
}
PreLoad.prototype._ordered = function(){
    var opts = this.opts,
        imgs = this.imgs,
        len = imgs.length,
        count = 0;
    function load(){
        var imgObj = new Image();
        imgObj.onload = function(){
            opts.each && opts.each(count);
            if(count>=len){
                //所有图片加载完毕
                opts.all && opts.all();
            }else{
                load();
            }
            count++;
        }
        imgObj.onerror = function(){
            opts.each && opts.each(count);
            if(count>=len){
                //所有图片加载完毕
                opts.all && opts.all();
            }else{
                load();
            }
            count++;
        }
        imgObj.src = imgs[count];
    }
    load();
}
PreLoad.prototype._unordered = function(){
    var imgs = this.imgs,
        opts = this.opts,
        count = 0,
        len = imgs.length;

    imgs.forEach(function(src,index){
        if(classOf(src) !== 'String') return;

        var imgObj = new Image();

        imgObj.onload = function(){
            opts.each && opts.each(count);
            if(count >= len - 1){
                opts.all && opts.all(count);
            }
            count++;
        }
        imgObj.onerror = function(){
            opts.each && opts.each(count);
            if(count >= len - 1){
                opts.all && opts.all(count);
            }
            count++;
        }

        imgObj.src = src;
    });
  
}

export function preload(imgs,opts){
    new PreLoad(imgs,opts);
}

