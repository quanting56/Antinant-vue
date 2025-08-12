function e(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function n(t,r){return fetch(t,r).then(e)}export{n as t};
