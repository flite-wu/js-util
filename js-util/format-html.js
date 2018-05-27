
//格式化html，自动换行、对齐
function formatHTML(html){
	if(!html) return '';
	
	var out = '';
	var lastIndex = 0;
	var level = 0;
	var noCloseTag = '|input|br|img|hr|';
	var patt1 = RegExp(/<(\/)?(\w+)[^>]*>/gi);
	while(res = patt1.exec(html)){
		if(lastIndex && lastIndex<=res.index-1){
			//获取中间文本
			var text = html.substring(lastIndex, res.index).replace(/(^\s*)|(\s*$)/g,'');
			if(text){
				for(var i=0; i<level; i++){
					out += '\t';
				}
				out += text + '\n';
			}
		}
		var row = res[0] + '\n';
		if(res[1] == '/'){
			level--;
		}
		for(var i=0; i<level; i++){
			row = '\t' + row;
		}
		if(res[1] != '/' && noCloseTag.indexOf('|' + res[2].toLowerCase() + '|') < 0){
			level++;
		}
		lastIndex = res.index + res[0].length;
		out += row;
	}
	var lastTxt = html.substring(lastIndex).replace(/(^\s*)|(\s*$)/g,'');
	if(lastTxt) out += html.substring(lastIndex);	//补充最后的文本
	return out;
}