

1.物理层：传输比特流，解决两个硬件之间怎么通信的问题。

2.数据链路层：计算机网络中有很多干扰的存在，物理链路不可靠，功能：通过各种控制协议把有差错的物理信道变为无差错的，能可靠传输数据帧的"数据链路"

3.网络层：计算机网络中如果有很多台计算机，怎么找到要发的那台，如果有多个节点怎么选择路径？这层的主要任务就是，通过路由选择算法，
为报文(该层的数据单位，由上一层数据打包而来)，通过通信子网选择最适当的路径，这一层定义ip地址，通过ip地址寻址，所以产生了ip协议

4.传输层：监控数据传输服务的质量，保证报文正确传输。tcp，udp所在层。当发送大量数据时，还能可能会出现丢包的情况，另一台电脑要告诉是否收到全部的包。
如果缺了，就告诉丢了哪些，再发一次，直到全部接收为止。

5.会话层：自动寻址功能。虽然已经实现可以给正确的计算机，发送正确的封装过后的消息了，但是我们不可能总要调用传输层协议去打包，
然后再调用ip协议去找路由，所以我们要建立一个自动收发包，自动寻址的功能，于是会话层出现了，就是要建立和管理应用程序之间的通信

6.表示层：转化格式，将应用处理的信息转化为适合网络传输的格式，或者将来自下一层的数据转化为上层能处理的格式(SSL/TLS)

7.应用层：应用层是计算机用户，以及各种应用程序和网络之前的接口，其功能是直接向用户提供服务，完成用户希望再网络上完成的各种工作。

