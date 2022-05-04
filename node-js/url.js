import url from 'url'

const my_url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname?q=value');
console.log(my_url.pathname);
console.log(my_url.hostname);
console.log(my_url.protocol);
console.log(my_url.search);
console.log(my_url.origin);
console.log(JSON.stringify(my_url));