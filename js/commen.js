Vue.component('comment',{
	template:`
	<div class="main">
		<h3>发表评论</h3></br>
		<img :src="user.userImg" height="50" width="50"><i>{{user.userName}}</i>
		<comment-post @input="newInput"></comment-post>
		<h4>默认评论</h4>
		<comment-contains :messageAa="message" :user="user"></comment-contains>


	</div>

	`, // 分为两个大模块comment-post 和comment-contains
	props:{ // 注册数据,设置默认值default,确定类型type
		user:{
			type:Object,
			default:function() {
				return {
					userName:'匿名',
					userImg:'images/1.jpg'
				}
			}
		},
		message:{
			type:Array,
			default:function(){
				return []
			}
		}
	},
	methods:{  // 方法的使用
		
		newInput(text){  // 向上传递事件,第二个参数是附带的值,在这个函数括号里面接收

			let oDate = new Date(); // 获取当前的时间
			let time = `${oDate.getFullYear()}-${oDate.getMonth() + 1}-${oDate.getDate()}`;
			console.log(time)
			console.log(text)
			this.message.unshift({ // 把对象放进数组里面
				userName:this.user.userName, //用户名,变量
				userImg:this.user.userImg,
				date:time,
				isnoShow:false,
				content:text,
				good:0,
				bad:0
			})
		},
		
	}
})