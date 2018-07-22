# 获取class类型

## 描述

    classOf是一个求数据类型的简单方法,根据用户传入的数据，返回对应的数据类型

## 语法
> import { classOf } from 'pandora-utils';
> var a = null; classOf(a);
```js
    import { classOf } from 'pandora-utils';
    var arr = [];
    var className = classOf(arr); //return Array
```

> 参数

    任意类型的值

> 返回值

    js基本数据类型和引用数据类型;Null Undefined Array Object等 


