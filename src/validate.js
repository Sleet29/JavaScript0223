function check() {
    var id = document.getElementById('id').value.trim();
    var pass = document.getElementById('pass').value.trim();
    var jumin1 = document.getElementById('jumin1').value.trim();
    var jumin2 = document.getElementById('jumin2').value.trim();
    var email = document.getElementById('email').value.trim();
    var domain = document.getElementById('domain').value.trim();
    var hobbyChecked = document.querySelectorAll('input[name="hobby"]:checked').length;

    if (!id || !pass || !jumin1 || !jumin2 || !email || !domain || !hobbyChecked) {
        alert('항목을 모두 입력해주세요.');
        return false;
    }

    if (hobbyChecked < 2) {
        alert('취미를 2개 이상 선택해주세요.');
        return false;
    }

    return true;
}

function idcheck() {
    var id = document.getElementById('id').value.trim();

    if (!id) {
        alert('ID를 입력하세요.');
        return;
    }

    window.open('idcheck.html?id=' + id, '', 'width=300, height=250');
}

function move() {
    var jumin1 = document.getElementById('jumin1');
    var jumin2 = document.getElementById('jumin2');

    if (isNaN(jumin1.value)) {
        alert('숫자를 입력하세요.');
        jumin1.focus();
        return;
    }

    if (jumin1.value.length === 6) {
        jumin2.focus();
    }

    if (isNaN(jumin2.value)) {
        alert('숫자를 입력하세요.');
        jumin2.focus();
        return;
    }
}

function domain1() {
    var select = document.getElementById('sel');
    var domain = document.getElementById('domain');
    var selectedOption = select.options[select.selectedIndex].value;

    domain.value = selectedOption;
}

function post() {
    new daum.Postcode({
        oncomplete: function(data) {
            document.getElementById('post1').value = data.zonecode; // Set the postcode
            document.getElementById('address').value = data.address; // Set the full address
        }
    }).open();
}