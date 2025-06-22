export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.ico","favicon.png","font/simple-icons.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.D9FvyYsa.js",app:"_app/immutable/entry/app.Bhgv7xVC.js",imports:["_app/immutable/entry/start.D9FvyYsa.js","_app/immutable/chunks/DT6qcCZC.js","_app/immutable/chunks/BAavZCSB.js","_app/immutable/chunks/RA9D6DOg.js","_app/immutable/chunks/DHA8C5Fd.js","_app/immutable/entry/app.Bhgv7xVC.js","_app/immutable/chunks/BAavZCSB.js","_app/immutable/chunks/D7DDQPYW.js","_app/immutable/chunks/Bbfo1y9A.js","_app/immutable/chunks/CbAdYpSM.js","_app/immutable/chunks/CkOffrDd.js","_app/immutable/chunks/B8gzMNkt.js","_app/immutable/chunks/RA9D6DOg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/contact","/nexo_project","/projects","/skills"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
