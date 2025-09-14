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
		client: {start:"_app/immutable/entry/start.DEtnRn5n.js",app:"_app/immutable/entry/app.BCF5scbo.js",imports:["_app/immutable/entry/start.DEtnRn5n.js","_app/immutable/chunks/_2bUIeaP.js","_app/immutable/chunks/ChfmKmBW.js","_app/immutable/chunks/BogjC8C8.js","_app/immutable/chunks/BP9IoLwl.js","_app/immutable/entry/app.BCF5scbo.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/BogjC8C8.js","_app/immutable/chunks/ChfmKmBW.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/D-q4v0vN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
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
