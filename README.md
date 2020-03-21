# babel-plugin-remove-vconsole
此插件主要在生产环境中移vconsole模块



```javascript 1.8
import VConsloe from 'vconsole';
new VConsole();

//将上面两个句移除，这样vconsole在生产环境就去掉了，只对生产环境有效 process.env.NODE_ENV = 'production'

```

###使用
```javascript 1.8
{
    "presets": [
        ["@babel/preset-env", {
            "modules": false,
            "targets": {
                "browsers": ["> 1%", "last 10 versions", "not ie <= 8"]
            }
        }]
    ],
    "plugins": [
        //...
        "babel-plugin-remove-vconsole"
    ]
}
```
