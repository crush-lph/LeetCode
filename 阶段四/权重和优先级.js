
// 从0开始，一个行内样式+1000，一个id选择器+100，一个属性选择器、class或者伪类+10，一个 元素选择器，或者伪元素+1，通配符+0
//权重相同，写在后面的覆盖前面的
// 使用 !important 达到最大优先级，都使用 !important 时，权重大的优先级高
//内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器
