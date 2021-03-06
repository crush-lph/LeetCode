/**
 * JavaScript使用 Number 类型来表示数字（整数或浮点数），遵循IEEE754标准，通过64位来表示一个数字。
 * 
 * 两数相加时，会先转换成二进制，0.1 和 0.2 转换为 二进制的时候 尾数会无限循环，然后进行对阶运算，JS 引擎会 对二进制进行截断，所以造成精度损失。
 * 
 * 精度丢失可能出现在进制转换和对阶运算中。
 * 
 * 如果不考虑精度，还可以用 toFixed 进行进制转化。
 * Number.parseFloat(x).toFixed(2);
 * 
 * 如何解决精度丢失问题？
 * 
 * 将数字 转为 整数
 * 
 * 使用Math.js Big.js
 * 
 */