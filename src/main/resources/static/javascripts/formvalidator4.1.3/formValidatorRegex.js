var regexEnum = 
{
	keyword:"^[a-zA-Z0-9_\u4E00-\u9FA5]+$",//查询输入关键字(中文,英文字母,数字,下划线)
	cnEnNum:"^[a-zA-Z0-9\u4E00-\u9FA5]+$",//(中文,英文字母,数字的组合)
	remark:'^[^\'\"\<\>]+$',//备注
		
	intege:"^-?[1-9]\\d*$",					//整数
	intege1:"^[1-9]\\d*$",					//正整数
	intege2:"^-[1-9]\\d*$",					//负整数
	num:"^([+-]?)\\d*\\.?\\d+$",			//数字
	num1:"^[1-9]\\d*|0$",					//正数（正整数 + 0）
	num2:"^-[1-9]\\d*|0$",					//负数（负整数 + 0）
	decmal:"^([+-]?)\\d*\\.\\d+$",			//浮点数
	decmal1:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",	//正浮点数
	decmal2:"^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$", //负浮点数
	decmal3:"^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",//浮点数
	decmal4:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$", //非负浮点数（正浮点数 + 0）
	decmal5:"^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",//非正浮点数（负浮点数 + 0）
	
	amount:"^[0-9]{1,16}(\.[0-9]{1,2})?$",//金额 (0和小数点保留2位的正浮点数) add by fanghw 20130304
	name:"(^[\u4E00-\u9FA5]{1,20}$)|(^[a-zA-Z]+[\s\.]?([a-zA-Z]+[\s\.]?){0,10}[a-zA-Z]$)",//中英文姓名 add by fanghw 20130325
	corpName:"(^[\u4E00-\u9FA5\\(\\)\uff08\uff09\u00b7\u2022]{1,50}$)|(^([A-Za-z\\(\\)\\.\\,\\&]+\\s?)*[A-Za-z\\(\\)\\.\\,\\&]+$)",//中英文企业名称

	bankAcctName:"(^[a-zA-Z0-9\u4E00-\u9FA5\\(\\)\uff08\uff09\u00b7\u2022\\-]+$)|(^([A-Za-z\\(\\)\\.\\,\\&]+\\s?)*[A-Za-z\\(\\)\\.\\,\\&]+$)",//(中文,英文字母,数字的组合,及其特殊字符) 收款方账户名

	email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
	color:"^[a-fA-F0-9]{6}$",				//颜色
	url:"^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",	//url
	chinese:"^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",					//仅中文
	ascii:"^[\\x00-\\xFF]+$",				//仅ACSII字符
	zipcode:"^\\d{6}$",						//邮编
	mobile:"^1\\d{10}$",						//手机
	ip4:"^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",	//ip地址
	notempty:"^\\S+$",						//非空
	picture:"(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",	//图片
	rar:"(.*)\\.(rar|zip|7zip|tgz)$",								//压缩文件
	date:"^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",					//日期
	qq:"^[1-9]*[1-9][0-9]*$",				//QQ号码
	tel:"^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",	//电话号码的函数(包括验证国内区号,国际区号,分机号)
	username:"^\\w+$",						//用来用户注册。匹配由数字、26个英文字母或者下划线组成的字符串
	letter:"^[A-Za-z]+$",					//字母
	letter_u:"^[A-Z]+$",					//大写字母
	letter_l:"^[a-z]+$",					//小写字母
	idcard:"^[1-9]([0-9]{14}|[0-9]{17})$",	//身份证
	
	//Portal Rules
	CorAmt: "^(([^0].*)|(.[^\.].*)|(..[^0].*)|(...[^0].*))$",
	isPositiveNumber_12_2 : "^\\d{1,10}(\\.\\d{0,2}){0,1}$",
	isChineseOrNumberOrEnglishWord:"^[A-Za-z0-9\u4e00-\u9fa5]+$",
	isLoginName : "^[A-Za-z][A-Za-z0-9\\_\\@\\.]+$",
	isFaxNumber : "(^[0-9]*)([0-9-]*)([0-9]+$)",
	isNumOrWord : "^[A-Za-z0-9]+$",
	isPassWord :  "^[A-Za-z0-9\\_\\@]+$",
	isPassWord2 :  "^[A-Za-z0-9\\_\\@]{8,20}$",
	isNotEmpty : ".+",
	isNotSpace : "^\\S+$",
	isPositiveNumber : "^\\d+\\.?\\d*$",
	isPositiveNumber_10_2 : "^\\d{1,8}(\\.\\d{0,2}){0,1}$",
	isPositiveNumber_10_3 : "^\\d{1,7}(\\.\\d{0,3}){0,1}$",
	isPositiveInteger : "^\\d*[1-9]+\\d*$",
	isPositiveNumber_15_3 : "^\\d{1,12}(\\.\\d{0,3}){0,1}$",
	isMobile : "^\\d{9}$",
	isZipCode : "^\\d{6}$",
	isBpNumber : "^\\d{5,8}[-]?\\d{3,7}$",
	isPhoneNumber : "^\\d{6,8}$",     
	isPhoneNumber2 : "^(\\d{3,4})-(\\d{7,8})$",          
	isFileName : "^[a-zA-Z0-9\\.-_]+$",
	isWord : "^\\w+$",
	isPidNumber : "^[1-9]\\d{14,17}[xX]?$",
	isValidDate : "^((1[6-9]|[2-9]\\d)?\\d{2})-(((0[13578]|1[02])-31)|((0[1,3-9]|1[0-2])-(29|30)))$|^(((1[6-9]|[2-9]\\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))-(02-29)$|^((1[6-9]|[2-9]\\d)?\\d{2})-((0[1-9])|(1[0-2]))-(0[1-9]|1\\d|2[0-8])$",
	isValidDateNum : "^(undefinedundefined)|((1[6-9]|[2-9]\\d)?\\d{2})(((0[13578]|1[02])31)|((0[1,3-9]|1[0-2])(29|30)))$|^(((1[6-9]|[2-9]\\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))(0229)$|^((1[6-9]|[2-9]\\d)?\\d{2})((0[1-9])|(1[0-2]))(0[1-9]|1\\d|2[0-8])$",
	isValidDateWithTime: "^((1[6-9]|[2-9]\\d)?\\d{2})-(((0[13578]|1[02])-31)|((0[1,3-9]|1[0-2])-(29|30)))(\\s((\\b0\\d\\b)|(1\\d)|(2[0-3])):((\\b0\\d\\b)|([1-5]\\d))){0,1}$|^(((1[6-9]|[2-9]\\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))-(02-29)(\\s((\\b0\\d\\b)|(1\\d)|(2[0-3])):((\\b0\\d\\b)|([1-5]\\d))){0,1}$|^((1[6-9]|[2-9]\\d)?\\d{2})-((0[1-9])|(1[0-2]))-(0[1-9]|1\\d|2[0-8])(\\s((\\b0\\d\\b)|(1\\d)|(2[0-3])):((\\b0\\d\\b)|([1-5]\\d))){0,1}$",
	isEmail : /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
	isChineseName : "^[\u4E00-\u9FA5]{2,}$",
	isChinese: "^[\u4E00-\u9FA5]+$",
	isURL : "^((https|http|ftp|rtsp|mms)?://)" 
	 + "?(([0-9a-z_!~*'().&:+$%-]+: )?[0-9a-z_!~*'().&:+$%-]+@)?"
	        + "(([0-9]{1,3}\.){3}[0-9]{1,3}"
	        + "|"
	        + "([0-9a-z_!~*'()-]+\.)*"
	        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\."
	        + "[a-z]{2,6})"
	        + "(:[0-9]{1,4})?"
	        + "((/?)|"
	        + "(/[0-9a-z_!~*'().,?:@&:+$,%#-]+)+/?)$", 
	        
	isValidDateText:"^[0-9]{4}[-\\.\/][0-1]{1}[0-9]{1}[-\\.\/][0-9]{1,2}$",
	isDbString:"[^'%\"<>]+",
	isSpecNumber : "^\\-?\\d*[0-9]+\\d*$",
	isPosiInteger : "^\\d*[0-9]+\\d*$",
	isBillDt : "^((1[6-9]|[2-9]\\d)?\\d{2})(0[1-9]|10|11|12)$",
	isNumber2 : "^\\d{2}$",
	isNumber4 : "^\\d{4}$",
	isNumber5 : "^\\d{5}$",
	isNumber6 : "^\\d{6}$",
	isNumber7 : "^\\d{7}$",
	isNumber8 : "^\\d{8}$",
	isNumber9 : "^\\d{9}$",
	isNumber10 : "^\\d{10}$",
	isNumber11 : "^\\d{11}$",
	isNumber19 : "^\\d{19}$",
	isNumber20 : "^\\d{20}$",
	isPositiveNumber11 : "^\\d{11}$",
	isPassWord6 :  "^[A-Za-z0-9\\_\\@]{6}$",
	isRate : "^((\\d{1,2}\\.\\d{1})|(\\d{1,2})|(100)|(100\\.0))$",
	isRate2 : "^((\\d{1,2}\\.\\d{1,2})|(\\d{1,2})|(100)|(100\\.0)|(100\\.00))$",
	isMon : "^((\\d{1,6}\\.\\d{1,2})|(\\d{1,6}))$",
	isValidDateFormat : "(\\d{4}\\-((0[1-9])|(1[012]))\\-((0[1-9])|([1-2][0-9])|(3[01])))",
	isMon14 : "^((\\d{1,12}\\.\\d{1,2})|(\\d{1,12}))$",
	isAmount : "^((([1-9]{1}\\d{0,9}))|([0]{1}))((\\.(\\d){0,2}))?$",//金额0-9999999999.99 原金额逻辑有问题 .不能正确校验
    isNum8AndLetter: "^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{8,20}$",
    isfilerString:"^((?!-).)*$" ,
    isNumberAndLettr:"^[A-Za-z0-9]+$",
    isTelarea:"^\\d{3,4}$",
    keywordChN:"^[a-zA-Z0-9\u4E00-\u9FA5]+$"//查询输入关键字(中文,英文字母,数字,下划线)
}

var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"} 

//根据正则表达式来校验值的格式
function checkValueByRE(value,regexp){
	return new RegExp(regexp).test(value);
}

function isCardID(sId){ 
	var iSum=0 ;
	var info="" ;
	if(!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误"; 
	sId=sId.replace(/x$/i,"a"); 
	if(aCity[parseInt(sId.substr(0,2))]==null) return "你的身份证地区非法"; 
	sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2)); 
	var d=new Date(sBirthday.replace(/-/g,"/")) ;
	if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return "身份证上的出生日期非法"; 
	for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
	if(iSum%11!=1) return "你输入的身份证号非法"; 
	return true;//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女") 
} 

//短时间，形如 (13:04:06)
function isTime(str)
{
	var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
	if (a == null) {return false}
	if (a[1]>24 || a[3]>60 || a[4]>60)
	{
		return false;
	}
	return true;
}

//短日期，形如 (2003-12-05)
function isDate(str)
{
	var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/); 
	if(r==null)return false; 
	var d= new Date(r[1], r[3]-1, r[4]); 
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
}

//长时间，形如 (2003-12-05 13:04:06)
function isDateTime(str)
{
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/; 
	var r = str.match(reg); 
	if(r==null) return false; 
	var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]); 
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
}

function isTestChar(val){
	if(parseFloat(val)==0)
	{return "输入金额不能为0"}
}


function testNewPassword(val){
    var num = /^(?:\d*)$/;
    var upperLetter = /^([A-Z]*)$/;
    var lowLetter = /^([a-z]*)$/;
    var special = /^([\~\!\@\#\^\*\-\[\]\{\}\:\?]*)$/;
    var isNewPassword = /^[a-zA-Z0-9\~\!\@\#\^\*\-\[\]\{\}\:\?]{8,20}$/;
    var isNotNewPassword = /^(?:\d*|[a-zA-Z]*|[\w\~\!\@\#\^\*\-\[\]\{\}\:\?]*)$/;

    var tip1 = "至少使用8-20位大小写英文字母、数字或标点符号两种组成";
    var tip2 = "输入字符有误，支持的字符为~!@#^*_-[],{}:?";
    if(val.match(isNotNewPassword) == null){
        return tip2;
    }
    if(val.match(num)!=null || val.match(upperLetter)!=null || val.match(lowLetter)!=null || val.match(special)!=null ){
        return tip1;
    }
    if(val.match(isNewPassword) == null){
        return tip1;
    }
}

function isRemarkChar(val){
    var remark = /^[\u4E00-\u9FA5a-zA-Z0-9\~\!\@\#\^\*\-\[\]\{\}\:\?]+$/;
    var tip = "请使用中文、英文字母、数字和标点符号的组合，支持的标点字符为~!@#^*_-[],{}:?";
    if(val.match(remark) == null){
        return tip;
    }
}

function isPassport(val){
	//在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
	var Expression=/^(P\d{7})|(G\d{8})|(S\d{7,8})|(E\d{7})|((14|15)\d{7})$/;
	var objExp=new RegExp(Expression);
	if(!objExp.test(val)){
	   return true;
	}else{
	   return "此证件号非境外护照，请重新填写或选择证件类型为大陆居民身份证";
	} 
}
