export const getSentryDsn = (): string => {
	return process.env.NODE_ENV === 'production'
		? String(process.env.NEXT_PUBLIC_SENTRY_DSN)
		: '';
};
