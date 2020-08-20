// 用到的DOM节点 返回对象引用 标签本质是一个函数
const username = document.getElementById("username");
// email=<input id="email" placeholder="请输入邮箱" type="text" /> 键名和键值 类似js的对象
// getElementById() 方法可返回对拥有指定 ID 的第一个对象的引用。 对象赋值的变量
// Person person;  person = new Person("张三"); person是一个引用，是指向一个可以指向Person类的对 象 的 引 用。
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");
var small = document.getElementsByTagName('small');

//  方法为动词 
function getKeyWord(input) {
	// 可以截取数组 star索引值
	return input.placeholder.slice(3);
}

// 检查是否为空 实现代码重构 打字快省时间
// ${} 模板字符串的占位符
function checkRequire(inputArr) {
	inputArr.forEach(function(value, index) {
		if (value.value == '') {
			var input = value.parentElement;
			input.className = 'form-cotroller error';
			const small = input.querySelector('small');
			// small.style.visibility = 'visible'
			small.innerText = `${getKeyWord(value)}` + "为必填项";
		} else {
			value.parentElement.className = 'form-cotroller success';
		}
	})
}

// 检查长度  
function checkLength(input,min,max) {
	if(input.value.length < min && input.value !==''){
		var inp = input.parentElement;
		inp.className = 'form-cotroller error';
		const small = inp.querySelector('small');
		small.innerText =`${getKeyWord(input)}`+"至少"+`${min}`+"字符";
	}else if(input.value.length > max){
		var inp = input.parentElement;
		inp.className = 'form-cotroller error';
		const small = inp.querySelector('small');
		small.innerText =`${getKeyWord(input)}`+"少于"+`${max}`+"字符";
	}
}
// 检查邮箱
function checkMail(input){
	var regExp=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	// 返回对象
	console.log(input.value.match(regExp)) 
	// regexp.test() 用正则表达式检查这个布尔 match 这个值和正则表达式匹配object
		if(regExp.test(input.value.trim())){
			
		}else{
			var inp = input.parentElement;	
			inp.className = 'form-cotroller error';
			// querySelector（'#demo'）获取id
			const small = inp.querySelector('small');
			small.innerText =`${getKeyWord(input)}`+"格式不正确";
		}
}
// 检查确认密码
function checkUandP(input,input2){
	if(input.value !== input2.value){
		// 获取父节点
		var inp = input2.parentElement;
		inp.className = 'form-cotroller error';
		const small = inp.querySelector('small');
		small.innerText =`${getKeyWord(input2)}`+"不正确";
	}else{
		
	}
}

// 监听 目标源.addEventListener(“事件（常见7种 改变HTML时，点击事件，提交，鼠标移入，移出，按下键盘）”,函数处理,布尔类型)
form.addEventListener('submit', function(e) {
	e.preventDefault();
	console.log(username)
	checkRequire([username, email, password, password2])
	checkLength(username, 3, 12);
	checkLength(password, 6, 15);
	checkMail(email);
	checkUandP(password,password2);
})
