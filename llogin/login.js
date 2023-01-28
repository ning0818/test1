const notyf = new Notyf({position: {x: 'right',y: 'top',}});

function login() { 
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    if (username.value == "") {
	notyf.error("请输入用户名");
    } else if (pass.value  == "") {
	notyf.error("请输入密码");
    } else if(hex_sha1(username.value) == 'a40eb3af3502a5be5c9e788b9ae7727ba221dbaf' && hex_sha1(pass.value)== 'a40eb3af3502a5be5c9e788b9ae7727ba221dbaf'){
	notyf.success('登录成功，跳转中!');
setTimeout(function(){
window.localStorage.setItem("username",username.value);
window.localStorage.setItem("password",pass.value);
window.location.href=getQueryVariable('next','/')+window.location.hash;
},1500)
    } else {
	notyf.error("请输入正确的用户名和密码!");
    }
}

if(isLogin()){
    window.location.href=getQueryVariable('next','/')+window.location.hash;
}

if(hex_sha1(getQueryVariable('username','/')) == 'a40eb3af3502a5be5c9e788b9ae7727ba221dbaf' && hex_sha1(getQueryVariable('pass','/')) == "a40eb3af3502a5be5c9e788b9ae7727ba221dbaf"){
    window.localStorage.setItem("username",username.value);
    window.localStorage.setItem("password",pass.value);
    window.location.href=getQueryVariable('next','/')+window.location.hash;
}