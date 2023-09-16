// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "ashngmi is writing...";
export const SITE_DESCRIPTION =
  "Web3 Developer Relations Engineer making blockchain easy to understand, with a knack for connecting with developers through writing";
export const TWITTER_HANDLE = "@ashngmi";
export const MY_NAME = "Ashutosh Tripathi";

const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
