var LocalKey = "Dmx";   

if( !getLocalStg( LocalKey ) ){ 
	var _arry = getDmxData(); 
	setLocalStg( LocalKey, _arry ); 
};  

var gamezj = GetRandomstrFromArry( getLocalStg( LocalKey ) );
document.getElementById('textLeave').innerHTML = gamezj.getLength(); 

function getRandomVal(){ 

	document.getElementById('word').value = gamezj.getRandomStr();  
	document.getElementById('textLeave').innerHTML = gamezj.getLength(); 

	setLocalStg( LocalKey, gamezj.getData() )
}; 

function getDmxData(){
	var _data = ['555', '666', '777']; 
	return _data;
}; 


 