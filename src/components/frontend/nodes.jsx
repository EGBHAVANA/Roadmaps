

export const baseNodeStyleProps = {
  backgroundColor: "#bfdbfe",                             // tailwind blue-200
  border: "2px solid #2563eb",                            // blue-600
  borderRadius: 10,
  padding: 10,
  fontSize: "0.775rem",                                   // text-sm
  fontWeight: 600,                                        // strong but not shouting
  color: "#1e3a8a",                                       // blue-900
  boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
  connectable: false,
};
export const parentNodeStyleProps = {
  backgroundColor: "#fde68a",                             // yellow-300
  border: "2px solid #f59e0b",                            // yellow-500
  borderRadius: 10,
  padding: 10,
  fontSize: "0.8rem",                                       // text-base
  fontWeight: 700,                                        // bold for hierarchy
  color: "#78350f",                                       // amber-900
  boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
};



export const initialNodes = [

  { id: 'html', data: { label: 'HTML' }, position: { x: -630, y: 60 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'top' },
  { id: 'learn-the-basics', data: { label: 'Learn the Basics' }, position: { x: -630, y: -240 }, style: { ...baseNodeStyleProps, width: 220 } },
  { id: 'semantic-html', data: { label: 'Writing Semantic HTML' }, position: { x: -630, y: -180 }, style: { ...baseNodeStyleProps, width: 220 } },
  { id: 'forms-validations', data: { label: 'Forms and Validations' }, position: { x: -630, y: -120 }, style: { ...baseNodeStyleProps, width: 220 } },
  { id: 'accessibility', data: { label: 'Accessibility' }, position: { x: -630, y: -60 }, style: { ...baseNodeStyleProps, width: 220 } },
  { id: 'seo-basics', data: { label: 'SEO Basics' }, position: { x: -630, y: 0 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom' },
  { id: 'internet', data: { label: 'Internet' }, position: { x: -110, y: -200 }, style: { ...parentNodeStyleProps, width: 220 }, targetPosition: 'left', sourcePosition: 'right' },
  { id: 'how-internet-works', data: { label: 'How does the internet work?' }, position: { x: 160, y: -330 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
  { id: 'http', data: { label: 'What is HTTP?' }, position: { x: 160, y: -270 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
  { id: 'domain-name', data: { label: 'What is Domain Name?' }, position: { x: 160, y: -210 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
  { id: 'hosting', data: { label: 'What is hosting?' }, position: { x: 160, y: -150 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
  { id: 'dns', data: { label: 'DNS and how it works?' }, position: { x: 160, y: -90 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
  { id: 'browsers', data: { label: 'Browsers and how they work?' }, position: { x: 160, y: -30 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
  { id: 'css', data: { label: 'CSS' }, position: { x: -200, y: 180 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'left' },
  { id: 'learn-basics', data: { label: 'Learn CSS Basics' }, position: { x: 60, y: 120 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
  { id: 'layouts', data: { label: 'Making Layouts' }, position: { x: 60, y: 180 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
  { id: 'responsive', data: { label: 'Responsive Design' }, position: { x: 60, y: 240 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
  { id: 'js', data: { label: 'JavaScript' }, position: { x: -195.60, y: 368.95 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'left' },
{ id: 'learn-js-basics', data: { label: 'Learn JS Basics' }, position: { x: -484.63, y: 281.04 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },
{ id: 'dom', data: { label: 'Learn DOM Manipulation' }, position: { x: -484.63, y: 345.60 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },
{ id: 'fetch', data: { label: 'Fetch API / Ajax (XHR)' }, position: { x: -484.19, y: 430.77 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },

{ id: 'vcs', data: { label: 'Version Control Systems' }, position: { x: 114.46, y: 366.95 }, style: { ...parentNodeStyleProps, width: 220 }, targetPosition: 'left' },
{ id: 'git', data: { label: 'Git' }, position: { x: 114.59, y: 432.91 }, style: { ...baseNodeStyleProps, width: 220 } },

{ id: 'vcs-hosting', data: { label: 'VCS Hosting' }, position: { x: 406.07, y: 357.03 }, style: { ...parentNodeStyleProps, width: 220 } },
{ id: 'github', data: { label: 'GitHub' }, position: { x: 406.80, y: 167.95 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'gitlab', data: { label: 'GitLab' }, position: { x: 404.53, y: 233.91 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'bitbucket', data: { label: 'Bitbucket' }, position: { x: 406.66, y: 291.07 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'package-managers', data: { label: 'Package Managers' }, position: { x: 186.34, y: 577.16 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'left' },
{ id: 'npm', data: { label: 'npm' }, position: { x: -70.40, y: 524.14 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },
{ id: 'yarn', data: { label: 'yarn' }, position: { x: -70.35, y: 580.14 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },
{ id: 'pnpm', data: { label: 'pnpm' }, position: { x: -70.42, y: 637.31 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },

{ id: 'pick-a-framework', data: { label: 'Pick a Framework' }, position: { x: 12, y: 819 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'right' },
{ id: 'react', data: { label: 'React' }, position: { x: 312, y: 667 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
{ id: 'vue', data: { label: 'Vue.js' }, position: { x: 312, y: 725 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
{ id: 'angular', data: { label: 'Angular' }, position: { x: 312, y: 781 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
{ id: 'svelte', data: { label: 'Svelte' }, position: { x: 312, y: 830 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
{ id: 'solid', data: { label: 'Solid JS' }, position: { x: 312, y: 882 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
{ id: 'qwik', data: { label: 'Qwik' }, position: { x: 312, y: 938 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },

{ id: 'writing-css', data: { label: 'Writing CSS' }, position: { x: -600, y: 819 }, style: { ...parentNodeStyleProps, width: 220 }, targetPosition: 'right' },
{ id: 'tailwind', data: { label: 'Tailwind' }, position: { x: -900, y: 819 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'left' },

{ id: 'css-architecture', data: { label: 'CSS Architecture' }, position: { x: -600, y: 900 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'left' },
{ id: 'bem', data: { label: 'BEM (CSS Architecture)' }, position: { x: -900, y: 900 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },

{ id: 'css-preprocessors', data: { label: 'CSS Preprocessors' }, position: { x: -302, y: 900 }, style: { ...parentNodeStyleProps, width: 220 } },
{ id: 'sass', data: { label: 'Sass' }, position: { x: -318, y: 985 }, style: { ...baseNodeStyleProps, width: 110 } },
{ id: 'postcss', data: { label: 'PostCSS ' }, position: { x: -197, y: 985 }, style: { ...baseNodeStyleProps, width: 110 } },

{ id: 'build-tools', data: { label: 'Build Tools' }, position: { x: 423, y: 1156 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'left' },

{ id: 'linters-and-formatters', data: { label: 'Linters & Formatters' }, position: { x: 160, y: 1130 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'top', targetPosition: 'right' },
{ id: 'prettier', data: { label: 'Prettier' }, position: { x: 152, y: 1060 }, style: { ...baseNodeStyleProps, width: 110 }, targetPosition: 'bottom' },
{ id: 'eslint', data: { label: 'ESLint' }, position: { x: 278, y: 1062 }, style: { ...baseNodeStyleProps, width: 110 }, targetPosition: 'bottom' },
{ id: 'module-bundlers', data: { label: 'Module Bundlers' }, position: { x: 161, y: 1194 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'left', targetPosition: 'right' },
{ id: 'vite', data: { label: 'Vite' }, position: { x: -155, y: 1080 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },
{ id: 'swc', data: { label: 'SWC ' }, position: { x: -165, y: 1138 }, style: { ...baseNodeStyleProps, width: 110 }, targetPosition: 'right' },
{ id: 'esbuild', data: { label: 'esbuild' }, position: { x: -52, y: 1138 }, style: { ...baseNodeStyleProps, width: 110 }, targetPosition: 'right' },
{ id: 'rollup', data: { label: 'Rollup' }, position: { x: -153, y: 1249 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },
{ id: 'webpack', data: { label: 'Webpack' }, position: { x: -153, y: 1194 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },
{ id: 'parcel', data: { label: 'Parcel' }, position: { x: -154, y: 1304 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },

{ id: 'testing', data: { label: 'Testing' }, position: { x: 368, y: 1513 }, style: { ...parentNodeStyleProps, width: 220 } },
{ id: 'jest', data: { label: 'Jest' }, position: { x: 37.22, y: 1484 }, style: { ...baseNodeStyleProps, width: 150 } },
{ id: 'vitest', data: { label: 'Vitest' }, position: { x: 195, y: 1484 }, style: { ...baseNodeStyleProps, width: 150 } },
{ id: 'playwright', data: { label: 'Playwright' }, position: { x: 370, y: 1565 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'cypress', data: { label: 'Cypress' }, position: { x: 370, y: 1621 }, style: { ...baseNodeStyleProps, width: 220 } },

{ id: 'authentication', data: { label: 'Authentication' }, position: { x: -96, y: 1608 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'left' },

{ id: 'web-security', data: { label: 'Web Security Basics' }, position: { x: -596, y: 1429 }, style: { ...parentNodeStyleProps, width: 220 }, targetPosition: 'right' },
{ id: 'cors', data: { label: 'CORS' }, position: { x: -601, y: 1227 }, style: { ...baseNodeStyleProps, width: 110 } },
{ id: 'https', data: { label: 'HTTPS' }, position: { x: -484, y: 1227 }, style: { ...baseNodeStyleProps, width: 110 } },
{ id: 'csp', data: { label: 'Content Security Policy' }, position: { x: -593, y: 1280 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'owasp', data: { label: 'OWASP Security Risks' }, position: { x: -595, y: 1354 }, style: { ...baseNodeStyleProps, width: 220 } },

{ id: 'web-components', data: { label: 'Web Components' }, position: { x: -590, y: 1640 }, style: { ...parentNodeStyleProps, width: 220 } },
{ id: 'shadow-dom', data: { label: 'Shadow DOM' }, position: { x: -590, y: 1812 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'custom-elements', data: { label: 'Custom Elements' }, position: { x: -590, y: 1763 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'html-templates', data: { label: 'HTML Templates' }, position: { x: -590, y: 1713 }, style: { ...baseNodeStyleProps, width: 220 } },

{ id: 'typescript', data: { label: 'TypeScript' }, position: { x: -333, y: 1700 }, style: { ...parentNodeStyleProps, width: 220 } },
{ id: 'type-checkers', data: { label: 'Type Checkers' }, position: { x: -335, y: 1631 }, style: { ...baseNodeStyleProps, width: 220 } },

{ id: 'ssr', data: { label: 'SSR' }, position: { x: -94, y: 1775 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'right' },
{ id: 'react-ssr', data: { label: 'React' }, position: { x: 158, y: 1726 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
{ id: 'vue-ssr', data: { label: 'Vue.js' }, position: { x: 158, y: 1895 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
{ id: 'angular-ssr', data: { label: 'Angular' }, position: { x: 158, y: 1779 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },
{ id: 'svelte-ssr', data: { label: 'Svelte' }, position: { x: 158, y: 1838 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'left' },

{ id: 'nextjs-react', data: { label: 'Next.js' }, position: { x: 409, y: 1686 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'nuxtjs', data: { label: 'Nuxt.js' }, position: { x: 409, y: 1895 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'astro-react', data: { label: 'Astro' }, position: { x: 409, y: 1736 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'react-router', data: { label: 'react-router' }, position: { x: 409, y: 1780 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'svelte-kit', data: { label: 'Svelte Kit' }, position: { x: 409, y: 1838 }, style: { ...baseNodeStyleProps, width: 220 } },

{ id: 'graphql', data: { label: 'GraphQL' }, position: { x: -316, y: 1975 }, style: { ...parentNodeStyleProps, width: 220 }, targetPosition: 'top' },
{ id: 'apollo', data: { label: 'Apollo' }, position: { x: -316, y: 1889 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'relay-modern', data: { label: 'Relay Modern' }, position: { x: -316, y: 1833 }, style: { ...baseNodeStyleProps, width: 220 } },

{ id: 'pwas', data: { label: 'PWA' }, position: { x: -312, y: 2228 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'right' },
{ id: 'performance', data: { label: 'Performance Best Practices' }, position: { x: -312, y: 2299 }, style: { ...baseNodeStyleProps, width: 220 } },

{ id: 'static-site-generators', data: { label: 'Static Site Generators' }, position: { x: 154, y: 2228 }, style: { ...parentNodeStyleProps, width: 220 }, targetPosition: 'left', sourcePosition: 'right' },
{ id: 'nextjs', data: { label: 'Next.js' }, position: { x: 144, y: 2048 }, style: { ...baseNodeStyleProps, width: 110 } },
{ id: 'gatsby', data: { label: 'Gatsby' }, position: { x: 565, y: 2004 }, style: { ...baseNodeStyleProps, width: 200 } },
{ id: 'astro', data: { label: 'Astro' }, position: { x: 259, y: 2048 }, style: { ...baseNodeStyleProps, width: 110 } },
{ id: 'vuepress', data: { label: 'VuePress' }, position: { x: 147, y: 2097 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'eleventy', data: { label: 'Eleventy' }, position: { x: 147, y: 2148 }, style: { ...baseNodeStyleProps, width: 220 } },

{ id: 'mobile-apps', data: { label: 'Mobile Apps' }, position: { x: 565, y: 2223 }, style: { ...parentNodeStyleProps, width: 200 }, targetPosition: 'left' },
{ id: 'react-native', data: { label: 'React Native' }, position: { x: 565, y: 2057 }, style: { ...baseNodeStyleProps, width: 200 } },
{ id: 'flutter-mobile', data: { label: 'Flutter' }, position: { x: 565, y: 2110 }, style: { ...baseNodeStyleProps, width: 200 } },
{ id: 'ionic', data: { label: 'Ionic' }, position: { x: 565, y: 2162 }, style: { ...baseNodeStyleProps, width: 200 } },


{ id: 'browser-api-group-box', type: 'group', data: { label: '🧠 Browser APIs' }, position: { x: -680, y: 1980 }, style: { width: 260, height: 620, backgroundColor: '#f0f7ff', border: '2px dashed #90caf9', borderRadius: 16, fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 10 } },

{ id: 'browser-api', data: { label: 'Browser API' }, position: { x: -663, y: 2523 }, style: { ...parentNodeStyleProps, width: 220 } },
{ id: 'storage', data: { label: 'Storage' }, position: { x: -663, y: 2245 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'web-sockets', data: { label: 'Fetch' }, position: { x: -663, y: 2194 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'server-sent-events', data: { label: 'Server-Sent Events' }, position: { x: -663, y: 2140 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'service-workers', data: { label: 'Service Workers' }, position: { x: -663, y: 2089 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'location', data: { label: 'Location' }, position: { x: -663, y: 2036 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'notifications', data: { label: 'Notifications' }, position: { x: -663, y: 2345 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'device orientation', data: { label: 'Device Orientation' }, position: { x: -663, y: 2396 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'payments', data: { label: 'Payments' }, position: { x: -663, y: 2450 }, style: { ...baseNodeStyleProps, width: 220 } },
{ id: 'credentails', data: { label: 'Credentails' }, position: { x: -663, y: 2293 }, style: { ...baseNodeStyleProps, width: 220 } },



{ id: 'desktop-apps', data: { label: 'Desktop Apps' }, position: { x: 158, y: 2476 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'left' },
{ id: 'electron', data: { label: 'Electron' }, position: { x: -128, y: 2418 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },
{ id: 'flutter', data: { label: 'Flutter' }, position: { x: -128, y: 2524 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },
{ id: 'tauri', data: { label: 'Tauri' }, position: { x: -128, y: 2471 }, style: { ...baseNodeStyleProps, width: 220 }, targetPosition: 'right' },




];