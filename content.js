//===-------- content.js - implements scan for deletion --------===//
//
//
//
//
//
//
//
//
//
//===-----------------------------------------------------------===//

function scan() {
	var el = document.getElementsByTagName(target);
	for(var i = 0; i < el.length; i++){
	   if(el[i].className.indexOf(input) > -1)
	   {
		   	el[i].parentNode.removeChild(el[i]); 
	   }
	}
}

window.setInterval(scan, 1);