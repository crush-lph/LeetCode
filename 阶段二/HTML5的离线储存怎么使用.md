HTML5的离线储存怎么使用

在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

更新缓存：一旦应用被缓存，它就会保持缓存直到发生下列情况：

用户清空浏览器缓存

manifest 文件被修改

由程序来更新应用缓存

如何使用： 1、页面头部像下面一样加入一个manifest的属性； 2、在cache.manifest文件的编写离线存储的资源； 3、在离线状态时，操作window.applicationCache进行需求实现。
