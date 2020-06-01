export default{
  baseUrl :'https://www.cnorigin.cn',
   // baseUrl :'http://127.0.0.1:8000/',

   //转换时间
   toDDMMMYYYY:function(now){
   	   var year = now.getFullYear();  
	    var month =(now.getMonth() + 1).toString();  
	    var day = (now.getDate()).toString();  
	    var hour = (now.getHours()).toString();  
	    var minute = (now.getMinutes()).toString();  
	    var second = (now.getSeconds()).toString();  
	    if (month.length == 1) {  
	        month = "0" + month;  
	    }  
	    if (day.length == 1) {  
	        day = "0" + day;  
	    }  
	    if (hour.length == 1) {  
	        hour = "0" + hour;  
	    }  
	    if (minute.length == 1) {  
	        minute = "0" + minute;  
	    }  
	    if (second.length == 1) {  
	        second = "0" + second;  
	    }  
	     // var dateTime = year + "-" + month + "-" + day +" "+ hour +":"+minute+":"+second;  
	       var dateTime = year + "-" + month + "-" + day ;
	     return dateTime;  
   }
 
}
