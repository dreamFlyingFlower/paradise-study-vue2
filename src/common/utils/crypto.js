// jshint esversion:6
// jshint node:true
// node自带的crypt加密模块,无需其他依赖
const crypto = require("crypto");
const key = "#$%fet!@*";

export default class Crypto{
	constructor(){

	}
	static getCrypto(){
		return crypto;
	}
	static getMD5(){
		return crypto.createHash("md5");
	}
	static getSHA(){
		return crypto.createHash("sha");
	}
	static MD5(str){
		// 无法对update函数进行连续调用,会将上一次的值再次update,需要每次定义
		const MD5 = crypto.createHash("md5");
		return MD5.update(str).digest("base64");
	}
	static MD5Hex(str){
		const MD5 = crypto.createHash("md5");
		return MD5.update("").update(str).digest("hex");
	}
	static SHA(str){
		const SHA = crypto.createHash("sha");
		return SHA.update(str).digest("base64");
	}
	static SHAHex(str){
		const SHA = crypto.createHash("sha");
		return SHA.update(str).disgest("hex");
	}
	static MD5KeyBase64(str){
		const hmac = crypto.createHmac('md5', key);//创建一个带秘钥的sha1或者md5算法
		return hmac.update(str).digest("base64");
	}
	static MD5KeyHex(str){
		const hmac = crypto.createHmac('md5', key);
		return hmac.update(str).digest("hex");
	}
	static SHAKeyBase64(str){
		const hmac = crypto.createHmac('sha', key);//创建一个带秘钥的sha1或者md5算法
		return hmac.update(str).digest("base64");
	}
	static SHAKeyHex(str){
		const hmac = crypto.createHmac('sha', key);
		return hmac.update(str).digest("hex");
	}
	static AESEncode(str){
		const cipher = crypto.createCipher("aes192",key);
		let encode = cipher.update(str,"utf8","base64");
		return encode+=cipher.final("utf8");
	}
	static AESDecode(str){
		const cipher = crypto.createDecipher("aes192",key);
		let decode = cipher.update(str,"base64","utf8");
		return decode+=cipher.final("utf8");
	}
}