

export  const initialEdges = [

  { id: 'e1-2', source: 'html', target: 'css', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e1-3', source: 'html', target: 'internet', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e2-3', source: 'html', target: 'css', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e3-4', source: 'css', target: 'js', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e4-5', source: 'js', target: 'vcs', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e5-6', source: 'vcs', target: 'vcs-hosting', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e6-7', source: 'vcs-hosting', target: 'package-managers', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e7-8', source: 'package-managers', target: 'pick-a-framework', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e8-9', source: 'pick-a-framework', target: 'writing-css', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e9-10', source: 'writing-css', target: 'css-architecture', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e10-11', source: 'css-architecture', target: 'css-preprocessors', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e11-12', source: 'css-preprocessors', target: 'build-tools', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e12-13', source: 'build-tools', target: 'testing', style: { stroke: '#6366f1', strokeWidth: 2 } ,type:'smoothstep'},
  { id: 'e13-14', source: 'testing', target: 'authentication', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e14-15', source: 'authentication', target: 'web-security', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e15-16', source: 'web-security', target: 'web-components', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e16-17', source: 'web-components', target: 'type-checkers', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e17-18', source: 'type-checkers', target: 'ssr', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'step' },
  { id: 'e18-19', source: 'ssr', target: 'graphql', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e19-20', source: 'graphql', target: 'pwas', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e20-21', source: 'pwas', target: 'static-site-generators', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e21-22', source: 'static-site-generators', target: 'mobile-apps', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e22-23', source: 'mobile-apps', target: 'desktop-apps', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e-internet-how', source: 'internet', target: 'how-internet-works', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-internet-http', source: 'internet', target: 'http', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-internet-domain', source: 'internet', target: 'domain-name', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-internet-hosting', source: 'internet', target: 'hosting', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-internet-dns', source: 'internet', target: 'dns', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-internet-browsers', source: 'internet', target: 'browsers', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-css-basics', source: 'css', target: 'learn-basics', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-css-layouts', source: 'css', target: 'layouts', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-css-responsive', source: 'css', target: 'responsive', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-js-basics', source: 'js', target: 'learn-js-basics', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-js-dom', source: 'js', target: 'dom', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-js-fetch', source: 'js', target: 'fetch', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-package-npm', source: 'package-managers', target: 'npm', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-package-yarn', source: 'package-managers', target: 'yarn', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-package-pnpm', source: 'package-managers', target: 'pnpm', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-framework-react', source: 'pick-a-framework', target: 'react', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-framework-vue', source: 'pick-a-framework', target: 'vue', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-framework-angular', source: 'pick-a-framework', target: 'angular', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-framework-svelte', source: 'pick-a-framework', target: 'svelte', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-framework-solid', source: 'pick-a-framework', target: 'solid', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-framework-qwik', source: 'pick-a-framework', target: 'qwik', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-desktop-electron', source: 'desktop-apps', target: 'electron', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-desktop-tauri', source: 'desktop-apps', target: 'tauri', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-desktop-flutter', source: 'desktop-apps', target: 'flutter', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-ssr-react', source: 'ssr', target: 'react-ssr', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-ssr-angular', source: 'ssr', target: 'angular-ssr', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-ssr-svelte', source: 'ssr', target: 'svelte-ssr', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-ssr-vue', source: 'ssr', target: 'vue-ssr', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-seo-html', source: 'seo-basics', target: 'html', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-bitbucket-vcs', source: 'bitbucket', target: 'vcs-hosting', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-tailwind-css', source: 'tailwind', target: 'writing-css', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-css-arch-bem', source: 'css-architecture', target: 'bem', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-csspre-sass', source: 'css-preprocessors', target: 'sass', style: { stroke: '#888',strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-csspre-postcss', source: 'css-preprocessors', target: 'postcss', style: { stroke: '#888',strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-bundlers-vite', source: 'module-bundlers', target: 'vite', style: { stroke: '#888',strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-bundlers-swc', source: 'module-bundlers', target: 'swc', style: { stroke: '#888', strokeDasharray: '4 2',strokeWidth: 2 } },
  { id: 'e-bundlers-esbuild', source: 'module-bundlers', target: 'esbuild', style: { stroke: '#888',strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-bundlers-rollup', source: 'module-bundlers', target: 'rollup', style: { stroke: '#888',strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-bundlers-webpack', source: 'module-bundlers', target: 'webpack', style: { stroke: '#888',strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-bundlers-parcel', source: 'module-bundlers', target: 'parcel', style: { stroke: '#888',strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-linters-prettier', source: 'linters-and-formatters', target: 'prettier', style: { stroke: '#888',strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-linters-eslint', source: 'linters-and-formatters', target: 'eslint', style: { stroke: '#888',strokeDasharray: '4 2' ,strokeWidth: 2 } },
  { id: 'e-build-linters', source: 'build-tools', target: 'linters-and-formatters', style: { stroke: '#888',strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-build-bundlers', source: 'build-tools', target: 'module-bundlers', style: { stroke: '#888',strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-webcomponents-templates', source: 'web-components', target: 'html-templates', style: { stroke: '#888', strokeDasharray: '4 2',strokeWidth: 2 } },
  { id: 'e-apollo-graphql', source: 'apollo', target: 'graphql', style: { stroke: '#888',strokeDasharray: '4 2', strokeWidth: 2 } },
  { id: 'e-ionic-mobile', source: 'ionic', target: 'mobile-apps', style: { stroke: '#888', strokeDasharray: '4 2',strokeWidth: 2 } },
  { id: 'e-static-eleventy', source: 'eleventy', target: 'static-site-generators', style: { stroke: '#888', strokeDasharray: '4 2',strokeWidth: 2 } }
];

