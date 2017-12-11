// 最大的父组件,负责数据的全部来源,父组件与子组件data数据,子组件data是function方式返回一个对象挂载
let vm = new Vue({
	el:'#app',
	data:{
		user,
		message,
		isReminde:false,
	},
	props:{

	},
	
});