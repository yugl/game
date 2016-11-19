/*===================按关键字获取本地缓存
 * @param key[string] 关键字字符串
 * @return Array
 */
function getLocalStg( key ){
	var _data = localStorage.getItem( key ); 
	return JSON.parse( _data );
};



/*===================按关键字获取本地缓存
 * @param key[string] 关键字字符串 
 * @param data[array] 初始数据 
 */ 
function setLocalStg( key, data ){
	var _data = typeof( data ) == "string"? data : JSON.stringify(data);
	localStorage.setItem( key, _data ) ;  
};



/*===================删除指定关键字的本地缓存
 * @param key[string] 关键字字符串  
 */ 
function removeLocalStg( key ){
	localStorage.removeItem( key );
};



/*===================随机获取数组中的选项
 * @param array[arry] 数组
 * @method getRandomStr return[String]: 获取随机产生的字符串
 * @method getData return [array]: 获取当前数组
 * @method getLength return [array]: 获取数组长度
 * @method removeStrByIndex( idx ): 删除数组中指定位置的元素
 * @method getRandom(): 获取随机数
 */
function GetRandomstrFromArry( arry ){
	var data = arry; 

	var _getRandomstrFromArry = {
		_min: 0,
		_max: 0,
		_data: [],
		_init: function(){
			this._data = data;
		},
		/*获取随机的字符串*/
		getRandomStr: function(){
			var me = this;
			var _index = me.getRandom();

			if( me._data.length == 0 ){
				alert('没有数据了!')
				return '';
			};
			var _str = me._data[_index]; 

			me.removeStrByIndex( _index ); 
			return _str; 
		},
		/*获取当前数组*/
		getData: function(){
			return this._data;
		},
		/*获取数组长度*/
		getLength: function(){
			return this._data.length;
		},
		/*删除数组中指定位置的字符串*/
		removeStrByIndex: function( _idx ){ 
			this._data.splice( _idx, 1 );  
		},
		/*获取闭区间随机数[min,max]*/
		getRandom: function(){
			var me = this;
			var min = 0;
			var max = me._data.length - 1; 

			return Math.floor(Math.random() * (max - min + 1)) + min;
		} 
	};
	_getRandomstrFromArry._init();
	return _getRandomstrFromArry;
}; 
