Vue.component('comment-item',{
	template:`
	<div class="item">
		<div class="item_date">{{sanindex}}
			<div class="block_up" @click="on(item)">
			<div class="up" :class="{down:item.isnoShow}"></div>
			</div>
			<img :src="item.userImg" height="50" width="50"><span>{{item.userName}}</span><b>{{item.date}}</b>
		<p>{{item.content}}</p>
		</div>
		<comment-contains :message-aa="item.childrencomments" :zeroindex="sanindex" v-show="item.isnoShow"></comment-contains>
		<div class="item_on">
		<span class="lt">
		<img src="images/０３.png" height="15" width="16" class="finger" @click="my_click"><em @click="my_click" v-show="sanindex == 1" class="finger">我要点评</em>
		<em @click="my_click" v-show="sanindex != 1">回复</em>
		</span>
		<span class="ft" v-show="sanindex == 1">
		<img src="images/０１.png" height="15" width="16" class="finger" @click="add_good(item)"><em>{{item.good}}</em>
		<img src="images/０２.png" height="15" width="16" class="finger" @click="add_bad(item)"><em>{{item.bad}}</em>
		</span>
		</div>
		<comment-post v-show="toggle" :zeroindex="sanindex" @input="replyBtn"></comment-post>
		

 
	</div>

	`, // 数据展示
	data:function (){ //设置挂载数据
		return {
			toggle:false,
			
			twoindex:this.oneindex, // 转换变量名,只能在该组件使用
		}
	},
	computed:{ // 计算下标,函数返回return
		 sanindex:function(){
		 	return ++this.twoindex;
		 }
			
		
	},
	props:{ // 接收父组件的信息
		item:{
			type:Object,
			default:function (){
				return {}
			}
		},
		oneindex:{
			type:Number,

		},
		user1:{
			type:Object,
			default:function(){
				return {}
			}
		}
	},
	methods:{ // 点击实现开关
		my_click(){
			this.toggle = !this.toggle;
		},
		on(item){
			item.isnoShow = !item.isnoShow;
		},
		replyBtn(input1){
			console.log(input1);
			let oDate = new Date(); // 获取当前的时间
			let time = `${oDate.getFullYear()}-${oDate.getMonth() + 1}-${oDate.getDate()}`;
			if(this.item.childrencomments){
				// 有子评论的时候
				this.item.childrencomments.push({
					userName:this.user1.userName, //用户名,变量
					userImg:this.user1.userImg,
					date:time,
					isnoShow:false,
					content:input1,
					good:0,
					bad:0
				});
			} else {
				// 没有子评论
				Vue.set(this.item,'childrencomments',[]);
				this.item.childrencomments.push({
					userName:'匿名', //用户名,变量
					userImg:'images/45_1480471028.jpeg',
					date:time,
					isnoShow:false,
					content:input1,
					good:0,
					bad:0
				});
			}
		},
		add_good(item){
			console.log(1111111111111);
			this.$emit('add');
			item.good = item.good + 1;
			

		},
		add_bad(item){
			console.log(22222);
			this.$emit('add');
			item.bad = item.bad + 1;

		}
	}
})