<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import demo from '@/api/demo'
export default {
  
  mounted(){
   
        demo.getData({id:1}).then((res)=>{
            console.info(res)
        })
  }
}
</script>
