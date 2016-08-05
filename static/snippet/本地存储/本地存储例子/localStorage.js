var name = localStorage.username;
name = localStorage['username'];
if (!name) {
	name = prompt('what is your name?');
	localStorage.username = name;
}
// 迭代所有存储的 name/value 对
for (var name in localStorage) {
	var value = localStorage[name];
}


// 当存储一个数字的时候，会自动转换成一个字符串
// 但是，获取该值的时候别忘记了手动将其转换成数字类型
localStorage.x = 10;
var x = parseInt(localStorage.x)

// 同样存储一个日期类型的数据的时候进行编码，获取的时候进行解码
localStorage.lastRead = (new Date()).toUTCString();
var lastRead = new Date(Date.parse(localStorage.lastRead));

// 使用 JSON 可以使得对基本数据类型编码的工作变得很方便
localStorage.data = JSON.stringify(data);
var data = JSON.parse(localStorage.data);

localStorage.setItem("x", 1);
localStorage.getItem("x");

// 枚举所有存储的名字/值对
for (var i = 0; i < localStorage.length; i++) {
	var name = localStorage.key(i);
	var value = localStorage.getItem(name);
}

localStorage.removeItem("x");
localStorage.clear();
