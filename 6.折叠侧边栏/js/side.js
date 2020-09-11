var toggleEl = document.getElementById("toggle")
var navEl = document.getElementById("nav")
var centerEl = document.getElementById("center")
// 更改样式换位添加样式 classList一定要通过document获取的对象引用
toggleEl.addEventListener("click",()=>{
	document.body.classList.toggle("center")
})