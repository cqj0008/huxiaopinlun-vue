Vue.component('comment-post',{
	template:`
	<div class="post">
	<p class="reminde" v-show="isReminde">客官,8个字起评,不讲价哟</p>
	<textarea cols="80" rows="6" placeholder="客官,8个字起评,不讲价哟" v-model="input" @keyup.enter="btn"></textarea></br>
	<button @click="btn">发表</button>


	</div>

	`,  //comment-post部分
	data:function (){  // 挂载数据input
		return {
			input:'',
			isReminde:false,
		}
	},
	props:{

	},
	methods:{
		
		btn(){ // 判断input文字的长度和是否为空,设置提示文字,延迟3秒消失
			if(this.input != ''){
				if(this.input.trim().length < 8) {
				console.log('文字不够');
				this.isReminde = true;
				this.input='';
				setTimeout(() => {
					this.isReminde = false;
				},3000)
				} else {
						
					this.$emit('input',this.input);
					console.log(this.input);
					this.input='';
				}
			}
		}
	}
})