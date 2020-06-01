<template>
  <div>
    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>

      <van-button type="primary" @click="show2 = true">底部弹窗</van-button>

      <van-popup v-model="show2" position="bottom">
        <van-picker
          show-toolbar
         value-key="content"
          :columns="columns"
          @confirm="onConfirm"
          @cancel="show2 = false"
        />
      </van-popup>
    </van-row>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data() {
    return {
      show2: false,
    //    columns: [
    //     { text: '杭州', disabled: true },
    //     { text: '宁波' },
    //     { text: '温州' }
    //   ]
      columns: [{"content":"杭州","id":2},{"content":"嘉兴","id":1},{"content":"宁波","id":3},{"content":"湖州","id":4}]

    }
    
  },
  methods:{
     onConfirm(value, index) {
        //  Toast('xxx')
        console.info(value)
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
  }
}
</script>
