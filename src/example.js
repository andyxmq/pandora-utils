import { preload } from './common/preload';

var imgs = [
    'https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201710/03/204231mfew33efpps7pu5i.jpg.thumb.jpg',
    'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
    'http://img3.redocn.com/tupian/20160108/lvsehuahuizhizhangfanyexiaoguobeijingsucai_5728265.jpg',
    'http://img03.tooopen.com/uploadfile/downs/images/20110714/sy_20110714135215645030.jpg',
    'http://www.qqma.com/imgpic2/cpimagenew/2018/4/5/6e1de60ce43d4bf4b9671d7661024e7a.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532282850458&di=172e3dc8f0a2c9531a1ebf97d5bb8dd3&imgtype=0&src=http%3A%2F%2Fwww.vsochina.com%2Fdata%2Fuploads%2Fresource%2Fbatch%2F193%2F23961517853a2c21f89ffa.jpg',
    'http://img3.redocn.com/tupian/20160108/lvsehuawentuankazhibeijingbiankuang_5728261.jpg',
    'http://img.zcool.cn/community/01cc0255411bca000001e71b3bca01.jpg@1280w_1l_2o_100sh.jpg',
    'http://pic.58pic.com/58pic/13/66/58/20258PICpDh_1024.png',
    'https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201710/03/204241z8ta66qzq33z853d.jpg.thumb.jpg',
    'https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201710/03/204249ocdqnxjxj1ncx1ij.jpg.thumb.jpg',
];

var len = imgs.length;
var div = document.createElement("div");
    //无序实现
    // preload(imgs,{
    //     each: function(count){
    //         div.innerHTML = Math.round((count+1)/len*100)+'%';
    //         document.body.appendChild(div)
    //     },
    //     all: function(count){
    //         document.title = '1/'+len;
    //     },
    // });

    //有序加载
    preload(imgs,{
        order: 'ordered',
        // each: function(count){
        //     div.innerHTML = Math.round((count+1)/len*100)+'%';
        //     document.body.appendChild(div)
        // },
        // all: function(count){
        //     document.title = '1/'+len;
        // },
    });
