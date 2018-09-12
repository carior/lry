function loadHtml(obj,url,_callback){
    $.ajax({
        type: "GET",
        url: url,      //提交到一般处理程序请求数据     
        success: function(data){
            obj.html(data);
            setTimeout(function(){
                if(_callback) _callback()
            },150);
        }
    });
}
