// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { getSentryDsn } from 'src/utils/sentry';

Sentry.init({
	dsn: getSentryDsn(),
	ignoreErrors: [
		"undefined is not an object (evaluating 'document.getElementsByTagName('video')[0].webkitExitFullScreen')",
		'a.LegacyGlobal.LP_explicit_ignored is not a function',
		'ResizeObserver loop limit exceeded',
		'ResizeObserver loop completed with undelivered notifications.',
		"Unexpected token '...'. Expected a property name.",
		'Unexpected token ...',
		'vid_mate_check is not defined',
		'Non-Error promise rejection captured with value: Object Not Found Matching Id',
		'window.matchMedia is not a function',
		"Can't find variable: _AutofillCallbackHandler",
		"Can't find variable: instantSearchSDKJSBridgeClearHighlight",
		"undefined is not an object (evaluating 'window.webkit.messageHandlers[a].postMessage')",
		"undefined is not an object (evaluating 'ceCurrentVideo.currentTime')",
		'NotAllowedError: The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.',
	],
	// Note: if you want to override the automatic release value, do not set a
	// `release` value here - use the environment variable `SENTRY_RELEASE`, so
	// that it will also get attached to your source maps
	tracesSampleRate: 1.0,
});
