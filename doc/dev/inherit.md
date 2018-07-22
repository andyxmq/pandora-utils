# 继承函数

## 描述

    inherit创建一个对象，继承自目标对象；防止库函数无意间修改那些不受你控制的对象；

## 语法
> inherit(obj) obj：对象

```js
    import { inherit } from 'pandora-utils';
    var parent = { x: 1, y: 2 }
    var child = inherit(parent); 
```

> 参数

   对象、函数

> 返回值

    新创建的对象
