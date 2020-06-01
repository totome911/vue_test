import http from '@/utils/http'
import { Toast } from 'vant';
export default {
    getData(params)
    {
        http.get('/api/enquiry/web/query',params).then((res)=>{
            return Promise.resolve(res)
        }).catch((res)=>{
          Toast('网络请求失败');
        })
    }
}