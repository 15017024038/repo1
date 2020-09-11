const movice = document.getElementById("movie")
const movie_container = document.getElementById("movie-container")
// querySelector为静态集合 getElementById动态集合
const container = document.querySelector(".container")
const seat = document.querySelectorAll("#row .seat:not(.occupied)")
const total = document.getElementById("total")
// NodeList 只能通过索引来获取

// querySelectorAll()和getElementsByTagName()两者的主要区别就是返回值。前者返回的是NodeList集合，后者返回的是HTMLCollection集合。其前者是一个动态集合，后者是一个静态集合。 HTMLCollection 无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。

// 其中动态集合和静态集合的最大区别在于：动态集合指的就是元素集合会随着DOM树元素的增加而增加，减少而减少；静态集合则不会受DOM树元素变化的影响。

// window 对象。它表示浏览器窗口。
// 所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。
// 全局变量是 window 对象的属性。
// 全局函数是 window 对象的方法


// 选中座位
container.addEventListener('click', function(e) {
	// e.currentTarget获取父元素绑定 e.target 目标源
	// toggle有添加，没有删除  对象的引用.classList还有移出/包含/增加
	if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
		e.target.classList.toggle("selected")
		compute()
	}
})

//选中影片
movice.addEventListener("change", e => {
	compute()
	let priceValue = e.target.value
	let priceIndex = e.target.selectedIndex
	localStorage.setItem("priceValue", priceValue)
	localStorage.setItem("priceIndex", priceIndex)
})

//计算 代码封装 
function compute() {
	let price = document.getElementById("movie").value
	let selectLength = document.querySelectorAll("#row .selected").length
	count.innerText = selectLength
	total.innerText = selectLength * price

	// 本地存储
	let selected = document.querySelectorAll("#row .selected")
	let seatArr = [...seat]
	let selectedArr = [...selected]
	// console.log("selectedArr",selectedArr)
	//  重点：forEach 无返回值(undefined)  map 返回数组  length>0 == []。 null 因为类型是对象
	if (selectedArr !== null && selectedArr.length > 0) {
		let seatIndex = selectedArr.map((a, b, c) => seatArr.indexOf(a))
		// console.log(typeof seatIndex)
		localStorage.setItem("seatIndex", JSON.stringify(seatIndex))
	}

}

function render() {
	let seatIndex = localStorage.getItem("seatIndex")
	let priceValue = localStorage.getItem("priceValue")
	let priceIndex = localStorage.getItem("priceIndex")

	let seatArr = [...seat]
	// console.log(seatArr)
	if (seatIndex != null && seatIndex.length > 0) {
		seatArr.forEach((a, b, c) => {
			// 重点 
			if (seatIndex.indexOf(b) > -1) {
				console.log("s", seatIndex.indexOf(b))
				a.classList.add("selected")
				let selectLength = document.querySelectorAll("#row .selected").length
				count.innerText = selectLength
				total.innerText = selectLength * priceValue
			}
		})
	}
}
render()
