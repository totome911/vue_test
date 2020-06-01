<style type="text/css"></style>
<template>
	<div style="text-align:left;padding:20px">
		<h2 style="text-align:center">文档说明</h2>
		<blockquote>
  <p>本工程已集成bootstrap、jquery、axios网络框架、vue-router、mescroll下拉滚动插件、vueBus组件间通信（轻量级vuex）</p>

 
</blockquote>

  <div >网络请求     <router-link to="/login"> /login</router-link></div>
  <pre>
   var obj = {xkh000:9999,yymm00:''}
    this.getAxios(this.$api.getUserDepartInfo,obj)
    .then((data)=>{
      console.info(data)
    })
    .catch((err)=>{
       console.info(err)
    })
  </pre>
</br>


   <div >vueBus 事件参数传递  </div>
  <pre>
     事件发送  多个参数
    $bus.emit('setTitle',参数1,参数2);

    事件接受   
      this.$bus.on('setTitle',(参数1,参数2)=>{

                  

             });
  </pre>
    <button  v-on:click="turn" class="btn btn-default">测试返回页面不要刷新，滚动原位置</button>
	</div>
</template>

<script>
export default {
  data(){
      return {
       
      }

  },
  created(){
    /**
     * 测试get
     */
    var obj = {xkh000:9999,yymm00:''}
    this.getAxios(this.$api.getUserDepartInfo,obj)
    .then((data)=>{
      console.info(data)
    })
    .catch((err)=>{
       console.info(err)
    })

    // this.postAxios(this.$api.getUserDepartInfo,obj)
    // .then((data)=>{
    //   console.info(data)
    // })
    // .catch((err)=>{
    //    console.info(err)
    // })

  },
  methods:{
    turn:function(){
      this.$router.push('/login',)
    }
  }
}
</script>
