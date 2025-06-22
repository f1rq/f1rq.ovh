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
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/nexo_project",
				pattern: /^\/nexo_project\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
