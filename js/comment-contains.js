Vue.component('commentContains',{
	template:`
	<div>
	
		<div v-for = "item in messageAa">
			<ul>
				<comment-item :item="item" :oneindex="zeroindex" :user1="user"></comment-item>
			</ul>
		</div>
	</div>

	`, // commentContains部分,for循环,分发每个对象
	props:{   // 接收父组件信息
		messageAa:{
			type:Array,
			default:function(){
				return []
			}
		},
		zeroindex:{ // 获取当前的下标,默认为0
			type:Number,
			default:0
		},
		user:{
			type:Object,
			default:function(){
				return {}
			}
		}
	},
	
	
})