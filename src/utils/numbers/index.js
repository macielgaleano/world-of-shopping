const GERMAN_FORMAT = 'de-DE';

export const showWithPoints = (value = 0) => (new Intl.NumberFormat(GERMAN_FORMAT).format(value));
