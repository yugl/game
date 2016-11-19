var LocalKey = "Zxh"; 


if( !getLocalStg( LocalKey ) ){ 
	var _arry = getZxhData(); 
	setLocalStg( LocalKey, _arry ); 
};  

var gamezj = GetRandomstrFromArry( getLocalStg( LocalKey ) );
document.getElementById('textLeave').innerHTML = gamezj.getLength(); 

if( gamezj.getLength() == 0 ){
	clearLocalStg(); 
};

/*=============== 清理缓存*/
function clearLocalStg(){
	var _flag = confirm('您没有可供使用的问题了，请点确认获取数据！');

	if( _flag ){
		removeLocalStg( LocalKey );
		location.reload( true );
	};
};

/*=============== 获取随机产生的数据*/
function getRandomVal(){ 

	document.getElementById('word').value = gamezj.getRandomStr();  
	document.getElementById('textLeave').innerHTML = gamezj.getLength(); 

	setLocalStg( LocalKey, gamezj.getData() )
}; 

/*=============== 获取数据*/
function getZxhData(){
	var _data = ['555', '666', '777']; 
	return _data;
}; 