<style type="text/css"></style>
<template>
	<div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input  v-model="username" type="text" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="pwd" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
 
  <button  v-on:click="postData" class="btn btn-default">Submit</button>
  <button  v-on:click="back" class="btn btn-default">测试返回</button>


	</div>
</template>

<script type="text/javascript">

  export default {
     data () {
          return {
              username: '',
              pwd:'',
              
          }
      },

    mounted:function(){

     
    },
    methods:{
      postData: function (){
        var obj = new Object()
        obj.username = this.username;
        obj.pwd = this.pwd;
         this.$http.post(this.utils.baseUrl+'/apiCheckUser', obj)
                    .then(function (response) {
                        console.log(response);
                        var data = response.data;
                        if(data.code ==1)
                        {
                           
                  
                        }
                        else{
                            
                          
                        }


                    })
                    .catch(function (error) {
                        console.log(error);
                    });
      },

      back:function()
      {
        this.$router.back()
      }


    },

   }
  


</script>