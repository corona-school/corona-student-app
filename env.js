// Define envs to use...
const vars = {
	REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
	REACT_APP_SENTRY_URL: process.env.REACT_APP_SENTRY_URL,
};

const js = `window.env=${JSON.stringify(vars)}\n`;
exports.default = js;
