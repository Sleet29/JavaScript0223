var select = document.querySelector('#icon');
        var img = document.querySelector('#iconImg');
        
        select.addEventListener('change', show);
        
        function check() {
        	var id = document.getElementById("id");
        	if (id.value.trim() == "") {
        		alert("ID를 입력 하세요");
        		id.focus();
        		return false;
        	}
        	
        	var id = document.getElementById("pass");
        	if (id.value.trim() == "") {
        		alert("비밀번호 입력 하세요");
        		id.focus();
        		return false;
        	}
        	
        	var jumin1 = document.getElementById("jumin1");
        	if (id.value.trim() == "") {
        		alert("주민번호 앞자리를 입력 하세요");
        		id.focus();
        		return false;
        	}
        	
        	if (jumin1.value.length != 6) {
        		alert("주민번호 앞자리 6자리를 입력하세요");
        		jumin1.value = "";
        		jumin1.focus();
        		return false;
        	}
        	
        	var jumin2 = document.getElementById("jumin2");
        	if (id.value.trim() == "") {
        		alert("주민번호 뒷자리를 입력 하세요");
        		jumin2.focus();
        		return false;
        	}
        	
        	if (jumin2.value.length != 7) {
        		alert("주민번호 뒷자리 7자리를 입력하세요");
        		jumin2.value = "";
        		jumin2.focus();
        		return false;
        	}
        	
        	
        	// 라디오 버튼 선택 유효성 검사
        	var gender1 = document.getElementById("gender1");
        	var gender2 = document.getElementById("gender2");
        	if (gender1.checked == false && gender2.checked == false) {
				alert("남, 여 중에서 1개를 선택하세요");
				return false;
			} 
        	
        	var cnt = 0;
        	var hobbys = document.getElementByName("hobby");
        	for(var i=0;i<hobbys.length;i++) {
				if(hobbys[i].checked)
					cnt++;
			}
			
			if (cnt<2) {
				alert("2개이상 취미를 선택하세요")
				return false;
			}
			
			// 우편번호 공백 유효성 검사
			var post1 = document.getElementById("post1");
			if (post1.value.trim() == "") {
				alert("우편번호를 입력하세요");
				post1.focus();
				return false;
			}
			
			if (hobbyChecked < 2) {
       		alert('취미를 2개 이상 선택해주세요.');
        	return false;
   			}
   			
   			return true;
}

			
			