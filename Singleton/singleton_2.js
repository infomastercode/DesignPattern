/* XMLHttpRequest is a built-in object in web browsers. */

/* This is not a singleton

let http = (function(){
	let instance;
	function createInstance(){ 
		console.log('createInstance');
		return new XMLHttpRequest();
	}
	function getInstance(){ console.log('getInstance');
		if(!instance){ 
			instance = createInstance();
		}
		return instance;
	}

	return getInstance();
})();

let http1 = http;
let http2 = http;
let http3 = http;

console.log(http1 === http2);
*/


/* This is not singleton */

let http = (function(){
	let instance;
	function createInstance(){
		console.log('createInstance');
		return new XMLHttpRequest();
	}
	function getInstance(){
		console.log('getInstance');
		if(!instance){
			instance = createInstance();
		}
		return instance;
	}
	return {
		getInstance
	}
})();

let http1 = http.getInstance();
let http2 = http.getInstance();
let http3 = http.getInstance();

http3.open('GET', 'https://jsonplaceholder.typicode.com/posts');
http3.onreadystatechange = () => {
	if(http3.readyState === 4 && (http3.status === 200 || http3.status == 0) ){
		console.log(http3.responseText);
	}
}
http3.send(null);
