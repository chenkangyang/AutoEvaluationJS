(function() {
    'use strict';
    // Your code here...
    var iframe1 = document.getElementById("iframeautoheight");
    if(iframe1 !== null)
    {
    	document.getElementsByClassName("top")[3].getElementsByClassName("sub")[0].getElementsByTagName("a")[0].click();
        iframe1.onload = function(){
            var iframeDocument = iframe1.contentWindow.document;
            var timer = setInterval(function(){
                var table = iframeDocument.getElementById("DataGrid1");
                if(table !== null){
                    var rows = table.getElementsByTagName("tr");
                    var classes = iframeDocument.getElementById("pjkc");
                    if (classes.options[classes.length - 1].selected === true) {
                        console.log("评价完成。");
                        clearInterval(timer);
                    }
                    var emmm = 0;
                    for (var i = 1; i < rows.length; i++) {
                        var selectOptions = rows[i].getElementsByTagName("select");
                        if(selectOptions.length){
                        	
	                        for(let j = 0; j < selectOptions.length; j++){
	                            var option = selectOptions[j];
	                            if(emmm == 0){
	                                option.value = option.options[2].value;  //相对认同
	                            }
	                            else{
	                                option.value = option.options[1].value;  //完全认同
	                            }
                        	}
                        	emmm ++;
                        }
                    }
                    var btn1 = iframeDocument.getElementById("Button1");
                    if (classes.options[classes.length - 1].selected !== true){
                    	btn1.click();
                    }
                }
            },1000);
        };
    }
})();