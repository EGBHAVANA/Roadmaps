import React from 'react';
export const nodeDescriptions = {
  html: (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>HTML</strong> is the structure of every web page. It organizes content using elements like <code>{`<h1>`}</code>, <code>{`<p>`}</code>, and <code>{`<a>`}</code>.</p>
    <p>🧠 Think of it as the skeleton of the web.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.w3schools.com/html/" className="text-blue-600 underline" target="_blank" rel="noreferrer">W3Schools – Learn HTML</a></li>
      <li><a href="https://web.dev/learn/html/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Google web.dev – HTML</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – HTML Docs</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://scrimba.com/learn-html-and-css-c0p" className="text-purple-700 underline" target="_blank" rel="noreferrer">Scrimba – Frontend Developer Path</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – HTML & CSS Crash Course</a></li>
    </ul>
  </div>
),
'learn-the-basics': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Start by learning how HTML is structured with tags like <code>{`<div>`}</code>, <code>{`<h1>`}</code>, and <code>{`<a>`}</code>. Understand nesting, hierarchy, and element attributes.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – HTML Overview</a></li>
      <li><a href="https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5" className="text-blue-600 underline" target="_blank" rel="noreferrer">freeCodeCamp – HTML Basics</a></li>
      <li><a href="https://www.codecademy.com/learn/learn-html" className="text-blue-600 underline" target="_blank" rel="noreferrer">Codecademy – Learn HTML</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://scrimba.com/learn-responsive-web-design-c3p" className="text-purple-700 underline" target="_blank" rel="noreferrer">Scrimba – HTML & CSS for Beginners</a></li>
      <li><a href="https://scrimba.com/learn/frontend" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Web Dev Bootcamp</a></li>
    </ul>
  </div>
),
'semantic-html': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Semantic HTML uses meaningful tags like <code>{`<header>`}</code>, <code>{`<article>`}</code>, and <code>{`<footer>`}</code> to convey structure and purpose, improving accessibility and SEO.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – Semantics in HTML</a></li>
      <li><a href="scrimba.com/the-frontend-developer-career-path-c0j/~0xid" className="text-blue-600 underline" target="_blank" rel="noreferrer">web.dev – Semantic Elements</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – Semantic HTML</a></li>
    </ul>
  </div>
),
'forms-validations': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Forms collect user input using tags like <code>{`<form>`}</code>, <code>{`<input>`}</code>, <code>{`<label>`}</code>. Use attributes like <code>required</code>, <code>pattern</code>, and <code>type</code> for validation.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Forms" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – Forms and Validation</a></li>
      <li><a href="https://www.w3schools.com/html/html_forms.asp" className="text-blue-600 underline" target="_blank" rel="noreferrer">W3Schools – HTML Forms</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://scrimba.com/learn-html-and-css-c0p" className="text-purple-700 underline" target="_blank" rel="noreferrer">Scrimba – HTML & CSS Course</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – HTML Forms Crash Course</a></li>
    </ul>
  </div>
),
'seo-basics': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>SEO improves your site’s visibility in search engines. Use meta tags, semantic HTML, fast load times, proper headings, alt text, and clean URLs.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/SEO" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – SEO Overview</a></li>
      <li><a href="https://ahrefs.com/blog/seo-basics/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Ahrefs – SEO Basics Guide</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-performance/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – SEO Course</a></li>
      <li><a href="https://ahrefs.com/academy/seo-training-course" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Complete SEO Training</a></li>
    </ul>
  </div>
),
'internet': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>The Internet is a global system of connected networks using TCP/IP to share data, enabling websites, apps, email, streaming, and much more.</p>
    <p>🧠 It powers everything from browsers to cloud apps and APIs.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – How the Internet Works</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v2/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – History of the Web</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Internet Fundamentals</a></li>
    </ul>
  </div>
),
'how-internet-works': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>The Internet works by sending data in packets across interconnected networks using protocols like TCP/IP, DNS, and HTTP/S.</p>
    <p>Understand the flow: Browser → DNS → Server → Response.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.youtube.com/watch?v=Dxcc6ycZ73M" className="text-blue-600 underline" target="_blank" rel="noreferrer">How the Internet Works – YouTube</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – Internet Overview</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – Networking for Web Devs</a></li>
    </ul>
  </div>
),
'http': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>HTTP</strong> (Hypertext Transfer Protocol) is the foundation of web communication — it defines how browsers and servers talk.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – HTTP Overview</a></li>
      <li><a href="https://developer.mozilla.org/docs/Web/HTTP/Overview" className="text-blue-600 underline" target="_blank" rel="noreferrer">Cloudflare – What is HTTP?</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – Networking</a></li>
    </ul>
  </div>
),
'domain-name': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>A <strong>domain name</strong> is the human-readable address of a website (like <code>example.com</code>), mapped to an IP via DNS.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – What is a Domain Name?</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Cloudflare – Domain Names Explained</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – DNS & Domain Concepts</a></li>
    </ul>
  </div>
),
'hosting': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Hosting</strong> is where your site’s files live. A server delivers them to users via the web — e.g., Vercel, Netlify, or shared hosts.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – How to Host a Website</a></li>
      <li><a href="https://www.hostinger.com/tutorials/what-is-web-hosting" className="text-blue-600 underline" target="_blank" rel="noreferrer">Hostinger – Hosting Explained</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Hosting & WordPress</a></li>
    </ul>
  </div>
),
'dns': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>DNS</strong> (Domain Name System) converts human-readable domains (like google.com) into IP addresses that servers understand.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Cloudflare – What is DNS?</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – How DNS Works</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – DNS and BIND</a></li>
    </ul>
  </div>
),
'browsers': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Browsers render web pages. They parse HTML, CSS, and JS to create the visual UI. Key parts: DOM, rendering engine, JS engine.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – How Browsers Work</a></li>
      <li><a href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/" className="text-blue-600 underline" target="_blank" rel="noreferrer">HTML5 Rocks – How Browsers Work</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – How the Internet Works</a></li>
    </ul>
  </div>
),
'css': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>CSS</strong> (Cascading Style Sheets) adds style to web pages — layout, colors, fonts, spacing, responsiveness, and more.</p>
    
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – CSS Docs</a></li>
      <li><a href="https://web.dev/learn/css/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Google Web.dev – Learn CSS</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/css-foundations/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – CSS Fundamentals</a></li>
      <li><a href="https://scrimba.com/learn-html-and-css-c0p" className="text-purple-700 underline" target="_blank" rel="noreferrer">Scrimba – Learn CSS</a></li>
    </ul>
  </div>
),
'learn-basics': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Learn the core syntax: selectors, properties, values, cascading rules, and how to style elements directly and via classes.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.w3schools.com/css/" className="text-blue-600 underline" target="_blank" rel="noreferrer">W3Schools – CSS Basics</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – First Steps with CSS</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – CSS Complete Guide</a></li>
    </ul>
  </div>
),
'layouts': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Master layout systems like Flexbox, Grid, and Positioning. These define how elements align, size, and flow on the page.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" className="text-blue-600 underline" target="_blank" rel="noreferrer">CSS-Tricks – Flexbox Guide</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – CSS Grid</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/advanced-css-layouts/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – Grid + Flexbox</a></li>
    </ul>
  </div>
),
'responsive': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Responsive design makes your layout adapt to different screen sizes using media queries, fluid units, and mobile-first design.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://web.dev/responsive-web-design-basics/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Web.dev – Responsive Basics</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – Responsive Design</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://scrimba.com/learn-responsive-web-design-c3p" className="text-purple-700 underline" target="_blank" rel="noreferrer">Scrimba – Responsive Web Design</a></li>
    </ul>
  </div>
),
'js': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>JavaScript</strong> brings interactivity to the web — handling logic, manipulating the DOM, fetching data, and much more.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – JavaScript Docs</a></li>
      <li><a href="https://javascript.info/" className="text-blue-600 underline" target="_blank" rel="noreferrer">JavaScript.info</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://scrimba.com/learn/javascript" className="text-purple-700 underline" target="_blank" rel="noreferrer">Scrimba – JavaScript Course</a></li>
      <li><a href="https://frontendmasters.com/courses/javascript-basics/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – JS Basics</a></li>
    </ul>
  </div>
),
'learn-js-basics': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Learn syntax: variables, data types, functions, conditionals, loops, and how JS runs in the browser and interacts with the page.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – First Steps with JS</a></li>
      <li><a href="https://www.youtube.com/watch?v=W6NZfCO5SIk" className="text-blue-600 underline" target="_blank" rel="noreferrer">JS Crash Course – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Complete JS Course</a></li>
    </ul>
  </div>
),
'dom': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>DOM</strong> (Document Object Model) is a tree-like structure of HTML that JS uses to read and manipulate page content.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – DOM Overview</a></li>
      <li><a href="https://javascript.info/dom-nodes" className="text-blue-600 underline" target="_blank" rel="noreferrer">JS Info – DOM Nodes</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – DOM & Events</a></li>
    </ul>
  </div>
),
'fetch': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>The <strong>Fetch API</strong> allows JS to send and receive data from servers asynchronously (AJAX). Learn promises, XHR, and APIs.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN – Fetch API</a></li>
      <li><a href="https://javascript.info/fetch" className="text-blue-600 underline" target="_blank" rel="noreferrer">JavaScript.info – Fetch</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/advanced-javascript/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – Intermediate JS</a></li>
    </ul>
  </div>
),
'vcs': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Version Control Systems</strong> track code changes, enable collaboration, and support reverting to earlier states.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.atlassian.com/git/tutorials/what-is-version-control" className="text-blue-600 underline" target="_blank" rel="noreferrer">Atlassian – What is VCS?</a></li>
      <li><a href="https://www.geeksforgeeks.org/version-control-systems/" className="text-blue-600 underline" target="_blank" rel="noreferrer">GFG – Version Control Systems</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Git Complete</a></li>
    </ul>
  </div>
),
'git': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Git</strong> is a distributed version control system to track, branch, and merge code changes locally and remotely.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://git-scm.com/doc" className="text-blue-600 underline" target="_blank" rel="noreferrer">Git Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=8JJ101D3knE" className="text-blue-600 underline" target="_blank" rel="noreferrer">Git for Beginners – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Scrimba – Git & GitHub</a></li>
    </ul>
  </div>
),
'vcs-hosting': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Version control hosting platforms like GitHub, GitLab, and Bitbucket help teams collaborate, manage pull requests, CI/CD, and more.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.git-scm.com/" className="text-blue-600 underline" target="_blank" rel="noreferrer">GFG – Git Hosting Services</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">LinkedIn – GitHub Training</a></li>
    </ul>
  </div>
),
'github': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>GitHub</strong> is the most popular Git-based code hosting platform for open-source and private repositories.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.github.com/en" className="text-blue-600 underline" target="_blank" rel="noreferrer">GitHub Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=RGOj5yH7evk" className="text-blue-600 underline" target="_blank" rel="noreferrer">GitHub Crash Course – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – GitHub Bootcamp</a></li>
      <li><a href="https://www.pluralsight.com/courses/github-getting-started" className="text-purple-700 underline" target="_blank" rel="noreferrer">Pluralsight – Getting Started with GitHub</a></li>
    </ul>
  </div>
),

'gitlab': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>GitLab</strong> is a DevOps platform with Git hosting, CI/CD pipelines, container registry, and more built-in.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.gitlab.com/" className="text-blue-600 underline" target="_blank" rel="noreferrer">GitLab Docs</a></li>
      <li><a href="https://docs.gitlab.com/ee/topics/gitlab_flow.html" className="text-blue-600 underline" target="_blank" rel="noreferrer">GitLab Flow Explained</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – GitLab CI Pipelines</a></li>
      <li><a href="https://www.pluralsight.com/courses/gitlab-fundamentals" className="text-purple-700 underline" target="_blank" rel="noreferrer">Pluralsight – GitLab Fundamentals</a></li>
    </ul>
  </div>
),

'bitbucket': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Bitbucket</strong> by Atlassian supports Git and Mercurial repos with built-in CI/CD and Jira integration.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://bitbucket.org/product/guides" className="text-blue-600 underline" target="_blank" rel="noreferrer">Bitbucket Guides</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – DevOps with Bitbucket</a></li>
      <li><a href="https://www.linkedin.com/learning/learning-bitbucket" className="text-purple-700 underline" target="_blank" rel="noreferrer">LinkedIn Learning – Bitbucket</a></li>
    </ul>
  </div>
),

'package-managers': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Package Managers</strong> automate installing, updating, and managing third-party libraries and tools in your project.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.npmjs.com/about-npm/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Intro to npm – Node.js Docs</a></li>
      <li><a href="https://docs.npmjs.com/" className="text-blue-600 underline" target="_blank" rel="noreferrer">GFG – JS Package Managers</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://egghead.io/courses/npm-the-basics-8b0f" className="text-purple-700 underline" target="_blank" rel="noreferrer">Egghead – npm Basics</a></li>
    </ul>
  </div>
),
'npm': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>npm</strong> (Node Package Manager) is the default package manager for Node.js, with the largest JavaScript package registry.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.npmjs.com/" className="text-blue-600 underline" target="_blank" rel="noreferrer">npm Official Docs</a></li>
      <li><a href="https://docs.npmjs.com/cli/v9/commands/npm" className="text-blue-600 underline" target="_blank" rel="noreferrer">FreeCodeCamp npm Guide</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – npm Complete Guide</a></li>
      <li><a href="https://nodejs.dev/en/learn/" className="text-purple-700 underline" target="_blank" rel="noreferrer">LinkedIn – Node.js Tooling with npm</a></li>
    </ul>
  </div>
),

'yarn': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Yarn</strong> is an alternative package manager to npm. It focuses on speed, stability, and deterministic installs using lockfiles.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://classic.yarnpkg.com/en/docs/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Yarn Classic Docs</a></li>
      <li><a href="https://yarnpkg.com/getting-started/usage" className="text-blue-600 underline" target="_blank" rel="noreferrer">Yarn 2+ Quickstart</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Yarn Package Manager Crash Course</a></li>
    </ul>
  </div>
),

'pnpm': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>pnpm</strong> is a performant package manager that uses hard links and a content-addressable store for faster, smaller installs.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://pnpm.io/" className="text-blue-600 underline" target="_blank" rel="noreferrer">pnpm Official Site</a></li>
      <li><a href="https://www.youtube.com/watch?v=3U2OId1hl5k" className="text-blue-600 underline" target="_blank" rel="noreferrer">Intro to pnpm – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – JS Build Tools (includes pnpm)</a></li>
    </ul>
  </div>
),
'pick-a-framework': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Pick a Framework</strong> to build UI components more efficiently. Frameworks help organize logic, manage state, and optimize rendering.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-blue-600 underline" target="_blank" rel="noreferrer">GFG – JS Frameworks Overview</a></li>
      <li><a href="https://www.youtube.com/watch?v=cuHDQhDhvPE" className="text-blue-600 underline" target="_blank" rel="noreferrer">Frameworks Comparison – Fireship</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – Choosing Frameworks</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – JavaScript Frameworks Overview</a></li>
    </ul>
  </div>
),

'react': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>React</strong> is a component-based UI library developed by Meta. It uses a virtual DOM and declarative syntax.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://react.dev/learn" className="text-blue-600 underline" target="_blank" rel="noreferrer">React Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=bMknfKXIFA8" className="text-blue-600 underline" target="_blank" rel="noreferrer">React Full Course – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://scrimba.com/learn/learnreact" className="text-purple-700 underline" target="_blank" rel="noreferrer">Scrimba – Learn React</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – React Complete Guide</a></li>
    </ul>
  </div>
),

'vue': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Vue.js</strong> is a progressive framework with an intuitive template syntax and reactivity model, perfect for gradual adoption.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://vuejs.org/guide/introduction.html" className="text-blue-600 underline" target="_blank" rel="noreferrer">Vue Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=YrxBCBibVo0" className="text-blue-600 underline" target="_blank" rel="noreferrer">Vue Full Course – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Vue JS Complete Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/vue/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – Vue 3 Fundamentals</a></li>
    </ul>
  </div>
),
'angular': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Angular</strong> is a full-fledged framework by Google using TypeScript. It supports complex SPAs, routing, and dependency injection.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://angular.dev/overview" className="text-blue-600 underline" target="_blank" rel="noreferrer">Angular Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=2OHbjep_WjQ" className="text-blue-600 underline" target="_blank" rel="noreferrer">Angular Full Course – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Angular Complete Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – Angular Fundamentals</a></li>
    </ul>
  </div>
),

'svelte': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Svelte</strong> is a compiler-based framework that moves work from runtime to compile time for highly optimized output.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://svelte.dev/tutorial" className="text-blue-600 underline" target="_blank" rel="noreferrer">Svelte Official Tutorial</a></li>
      <li><a href="https://www.youtube.com/watch?v=ujbE0mzX-CU" className="text-blue-600 underline" target="_blank" rel="noreferrer">Svelte Course – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/svelte/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – Svelte</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Svelte JS Complete Guide</a></li>
    </ul>
  </div>
),

'solid': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>SolidJS</strong> is a reactive UI library with fine-grained reactivity and no virtual DOM, built for performance and DX.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.solidjs.com/docs" className="text-blue-600 underline" target="_blank" rel="noreferrer">SolidJS Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=LyLa7dU5tp8" className="text-blue-600 underline" target="_blank" rel="noreferrer">Intro to SolidJS – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – SolidJS Complete Guide</a></li>
    </ul>
  </div>
),

'qwik': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Qwik</strong> is a new framework optimized for instant-loading apps via resumability and fine-grained lazy loading.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://qwik.dev/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Qwik Official Site</a></li>
      <li><a href="https://www.youtube.com/watch?v=ZddX5c5TL0o" className="text-blue-600 underline" target="_blank" rel="noreferrer">What is Qwik – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Qwik Complete Guide</a></li>
    </ul>
  </div>
),

'writing-css': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Writing CSS</strong> involves styling your HTML elements with selectors, properties, and responsive rules.</p>

    <ul className="list-disc list-inside mt-2">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="text-blue-600 underline" target="_blank" rel="noreferrer">MDN CSS Docs</a></li>
      <li><a href="https://web.dev/learn/css/" className="text-blue-600 underline" target="_blank" rel="noreferrer">web.dev CSS Guide</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – CSS Complete Guide</a></li>
    </ul>
  </div>
),

'tailwind': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Tailwind</strong> is a utility-first CSS framework that lets you style directly in your HTML using class names.</p>

    <ul className="list-disc list-inside mt-2">
      <li><a href="https://tailwindcss.com/docs/utility-first" className="text-blue-600 underline" target="_blank" rel="noreferrer">Tailwind Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=dFgzHOX84xQ" className="text-blue-600 underline" target="_blank" rel="noreferrer">Tailwind Crash Course – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Tailwind From Scratch</a></li>
      <li><a href="https://tailwindmasterkit.com/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Tailwind Master Kit</a></li>
    </ul>
  </div>
),
'css-architecture': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>CSS Architecture</strong> refers to strategies that help organize CSS for scalability, reusability, and maintenance.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside mt-1">
      <li><a href="https://css-tricks.com/bem-101/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Maintainable CSS – Smashing Magazine</a></li>
      <li><a href="https://css-tricks.com/snippets/" className="text-blue-600 underline" target="_blank" rel="noreferrer">CSS Efficiency Tips – CSS Tricks</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – CSS Architecture</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – CSS Architecture & Sass</a></li>
    </ul>
  </div>
),

'bem': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>BEM</strong> (Block-Element-Modifier) is a naming convention that improves readability and structure in CSS codebases.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside mt-1">
      <li><a href="https://getbem.com/introduction/" className="text-blue-600 underline" target="_blank" rel="noreferrer">getbem.com</a></li>
      <li><a href="https://css-tricks.com/bem-101/" className="text-blue-600 underline" target="_blank" rel="noreferrer">BEM 101 – CSS Tricks</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Udemy – Advanced CSS and Sass (incl. BEM)</a></li>
      <li><a href="https://frontendmasters.com/courses/css-grids-flexbox/" className="text-purple-700 underline" target="_blank" rel="noreferrer">Frontend Masters – CSS Grid & Flexbox</a></li>
    </ul>
  </div>
),

'css-preprocessors': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>CSS preprocessors extend CSS with variables, mixins, functions, and logic, improving code reuse and maintainability.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://sass-lang.com/guide" target="_blank" rel="noreferrer" className="text-blue-600 underline">Sass Official Guide</a></li>
      <li><a href="https://www.youtube.com/watch?v=_a5j7KoflTs" target="_blank" rel="noreferrer" className="text-blue-600 underline">CSS Preprocessors Crash Course</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/advanced-css-layouts/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – CSS Grid & Flexbox</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Sass for Beginners</a></li>
    </ul>
  </div>
),
'sass': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Sass is the most widely used CSS preprocessor, adding powerful features like nesting, variables, and mixins to plain CSS.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://sass-lang.com/guide" target="_blank" rel="noreferrer" className="text-blue-600 underline">Sass Official Guide</a></li>
      <li><a href="https://www.youtube.com/watch?v=_a5j7KoflTs" target="_blank" rel="noreferrer" className="text-blue-600 underline">Sass Crash Course – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Sass from Scratch</a></li>
      <li><a href="https://frontendmasters.com/courses/advanced-css-layouts/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Advanced CSS</a></li>
    </ul>
  </div>
),
'postcss': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>PostCSS is a tool for transforming CSS with JavaScript plugins. It powers tools like Tailwind and Autoprefixer.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://postcss.org/" target="_blank" rel="noreferrer" className="text-blue-600 underline">PostCSS Official Docs</a></li>
      <li><a href="https://web.dev/learn/css/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Smashing Magazine – PostCSS Use Cases</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://egghead.io/lessons/css-introduction-to-postcss" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – Intro to PostCSS</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – PostCSS for Beginners</a></li>
    </ul>
  </div>
),
'build-tools': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Build tools help optimize, compile, and bundle your project before deployment. They streamline modern web development workflows.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Build Tools Overview</a></li>
      <li><a href="https://www.digitalocean.com/community/tutorials" target="_blank" rel="noreferrer" className="text-blue-600 underline">DigitalOcean – Frontend Tooling Series</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Web Tooling & Automation</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Frontend Dev Guide</a></li>
    </ul>
  </div>
),
'linters-and-formatters': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Linters and formatters help enforce code style and avoid bugs by analyzing and formatting your source code automatically.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://eslint.org/docs/latest/" target="_blank" rel="noreferrer" className="text-blue-600 underline">ESLint Docs</a></li>
      <li><a href="https://prettier.io/docs/en/index.html" target="_blank" rel="noreferrer" className="text-blue-600 underline">Prettier Docs</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://egghead.io/courses/write-better-javascript-with-eslint" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – ESLint for JS</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Write Clean JavaScript</a></li>
    </ul>
  </div>
),
'prettier': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Prettier is an opinionated code formatter that enforces consistent style for HTML, CSS, JavaScript, and more.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://prettier.io/docs/en/index.html" target="_blank" rel="noreferrer" className="text-blue-600 underline">Prettier Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=hkfBvpEfWdA" target="_blank" rel="noreferrer" className="text-blue-600 underline">How to use Prettier – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Clean Code Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/debugging-javascript/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Debugging & Formatting</a></li>
    </ul>
  </div>
),
'eslint': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>ESLint analyzes JavaScript code to catch bugs, enforce code standards, and improve consistency across projects.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://eslint.org/docs/latest/user-guide/getting-started" target="_blank" rel="noreferrer" className="text-blue-600 underline">Getting Started with ESLint</a></li>
      <li><a href="https://www.youtube.com/watch?v=w5j4kzqfrvM" target="_blank" rel="noreferrer" className="text-blue-600 underline">ESLint Setup – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://egghead.io/courses/write-better-javascript-with-eslint" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – Write Better JS with ESLint</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Modern JavaScript + ESLint</a></li>
    </ul>
  </div>
),
'module-bundlers': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Module bundlers take your JavaScript and its dependencies and bundle them into optimized files for the browser.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – What is a Module Bundler?</a></li>
      <li><a href="https://www.youtube.com/watch?v=Id5EN-VCx1o" target="_blank" rel="noreferrer" className="text-blue-600 underline">Module Bundlers Explained – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – JS Module Systems</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Webpack 5 Guide</a></li>
    </ul>
  </div>
),
'vite': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Vite is a modern, lightning-fast build tool that supports hot module replacement and native ES modules out of the box.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Vite Official Guide</a></li>
      <li><a href="https://www.youtube.com/watch?v=GdA-VkaU5aE" target="_blank" rel="noreferrer" className="text-blue-600 underline">Getting Started with Vite – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Vite Course</a></li>
      <li><a href="https://egghead.io/lessons/vite-get-started-with-vite" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – Get Started with Vite</a></li>
    </ul>
  </div>
),
'webpack': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Webpack is a powerful bundler for JavaScript and assets, enabling tree shaking, lazy loading, and powerful plugin systems.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://webpack.js.org/guides/getting-started/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Webpack Official Docs</a></li>
      <li><a href="https://webpack.js.org/guides/" target="_blank" rel="noreferrer" className="text-blue-600 underline">FreeCodeCamp – Webpack for Beginners</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Master Webpack 5</a></li>
      <li><a href="https://frontendmasters.com/courses/webpack-fundamentals/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Webpack Fundamentals</a></li>
    </ul>
  </div>
),
'rollup': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Rollup is a fast JavaScript bundler optimized for libraries, using ES modules and tree shaking for minimal output.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://rollupjs.org/guide/en/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Rollup.js Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=8lGpZkjnkt4" target="_blank" rel="noreferrer" className="text-blue-600 underline">Rollup Crash Course – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://egghead.io/lessons/javascript-introduction-to-rollup" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – Intro to Rollup</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Build a JS Library (Rollup)</a></li>
    </ul>
  </div>
),
'parcel': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Parcel is a zero-config bundler known for its fast builds, hot module replacement, and easy setup for modern web apps.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://parceljs.org/getting-started/webapp/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Parcel Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=OK5LdZZ6BuI" target="_blank" rel="noreferrer" className="text-blue-600 underline">Parcel.js Crash Course – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://egghead.io/lessons/javascript-develop-web-apps-with-parcel" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – Develop with Parcel</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Parcel Bundler Course</a></li>
    </ul>
  </div>
),
'esbuild': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>esbuild is an extremely fast JavaScript bundler and minifier written in Go. It's ideal for both dev and production builds.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://esbuild.github.io/" target="_blank" rel="noreferrer" className="text-blue-600 underline">esbuild Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=KCrXgy8qtjM" target="_blank" rel="noreferrer" className="text-blue-600 underline">esbuild for Beginners – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://egghead.io/q/javascript?q=esbuild" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – esbuild Tutorials</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Fast Web Apps with esbuild</a></li>
    </ul>
  </div>
),
'swc': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>SWC (Speedy Web Compiler) is a fast TypeScript/JavaScript compiler written in Rust, often used as a Babel/Webpack alternative.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://swc.rs/docs/getting-started" target="_blank" rel="noreferrer" className="text-blue-600 underline">SWC Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=UEy-EOjFNiI" target="_blank" rel="noreferrer" className="text-blue-600 underline">What is SWC? – YouTube</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-sm text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Speed Up React with SWC</a></li>
      <li><a href="https://egghead.io/q/swc" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – SWC Videos</a></li>
    </ul>
  </div>
),
'testing': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Testing ensures your code works as expected. Learn about unit, integration, and end-to-end tests.</p>

    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Testing" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Intro to Testing</a></li>
      <li><a href="https://testing-library.com/docs/intro/intro/intro/intro/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Testing Library Docs</a></li>
    </ul>

    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-600">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Modern JavaScript Testing</a></li>
      <li><a href="https://testingjavascript.com/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – JS Testing Fundamentals</a></li>
    </ul>
  </div>
),
'jest': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Jest is a powerful testing framework by Meta. Great for unit testing JS and React apps.</p>
    <ul className="list-disc list-inside mt-2">
        <h4 className="font-semibold mt-3">📚 Free Resources</h4>
      <li><a href="https://jestjs.io/docs/getting-started" target="_blank" rel="noreferrer" className="text-blue-600 underline">Jest Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=FgnxcUQ5vho" target="_blank" rel="noreferrer" className="text-blue-600 underline">Jest Tutorial – YouTube</a></li>
      
    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – React Testing with Jest</a></li>
      <li><a href="https://egghead.io/courses/test-javascript-with-jest" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – Jest for JS</a></li>
    </ul>
  </div>
),
'vitest': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Vitest is a blazing fast Vite-native test framework, similar to Jest but optimized for modern tooling.</p>
    <ul className="list-disc list-inside mt-2">
      
    <h4 className="font-semibold mt-3"> Free Resources</h4>
      <li><a href="https://vitest.dev/guide/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Vitest Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=X3rTLeFW5BM" target="_blank" rel="noreferrer" className="text-blue-600 underline">Vitest Crash Course – YT</a></li>
      
    <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Vitest</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Vitest Testing</a></li>
    </ul>
  </div>
),
'playwright': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Playwright enables reliable end-to-end testing across modern browsers. Built by Microsoft, it supports automation for Chromium, Firefox, and WebKit.</p>
    <ul className="list-disc list-inside mt-2">
      
    <h4 className="font-semibold mt-3"> Free Resources</h4>
      <li><a href="https://playwright.dev/docs/intro" target="_blank" rel="noreferrer" className="text-blue-600 underline">Playwright Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=WS7gnH6M5wM" target="_blank" rel="noreferrer" className="text-blue-600 underline">Intro to Playwright – YT</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – E2E with Playwright</a></li>
      <li><a href="https://playwright.dev/docs/intro" target="_blank" rel="noreferrer" className="text-purple-700 underline">TAU – Playwright Course</a></li>
    </ul>
  </div>
),
'cypress': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Cypress is a modern E2E testing tool built for the web. It offers a fast, developer-friendly experience with rich debugging tools.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3"> Free Resources</h4>
      <li><a href="https://docs.cypress.io/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Cypress Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=5XQOK0v_YRE" target="_blank" rel="noreferrer" className="text-blue-600 underline">Cypress Tutorial – YT</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Cypress Testing</a></li>
      <li><a href="https://egghead.io/courses/end-to-end-testing-with-cypress" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – Cypress E2E</a></li>
    </ul>
  </div>
),
'authentication': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Authentication is the process of verifying a user's identity. Learn about sessions, tokens (JWT), OAuth, and best practices.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3">Free Resources</h4>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Security" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Auth Overview</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2" target="_blank" rel="noreferrer" className="text-blue-600 underline">DO – OAuth2 Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – OAuth2 Course</a></li>
      <li><a href="https://auth0.com/learn/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Auth0 Learning Center</a></li>
    </ul>
  </div>
),
'cors': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>CORS (Cross-Origin Resource Sharing) is a security feature in browsers that blocks cross-origin requests unless allowed by the server.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3">Free Resources</h4>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – CORS Guide</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="noreferrer" className="text-blue-600 underline">freeCodeCamp – CORS Explained</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – CORS In-Depth</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – HTTP & CORS</a></li>
    </ul>
  </div>
),
'https': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>HTTPS encrypts data transferred between the browser and server using SSL/TLS. It ensures privacy, integrity, and authentication.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3">Free Resources</h4>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_strict_transport_security" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – HTTPS Overview</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" target="_blank" rel="noreferrer" className="text-blue-600 underline">Cloudflare – What is HTTPS?</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Web Security Essentials</a></li>
      <li><a href="https://frontendmasters.com/courses/web-security/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Web Security</a></li>
    </ul>
  </div>
),
'csp': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Content Security Policy (CSP) helps prevent XSS attacks by restricting sources of content (scripts, images, etc.) your app can load.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3">Free Resources</h4>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – CSP Guide</a></li>
      <li><a href="https://content-security-policy.com/" target="_blank" rel="noreferrer" className="text-blue-600 underline">CSP Reference Site</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Secure Web App</a></li>
      <li><a href="https://frontendmasters.com/courses/web-security/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Web Security</a></li>
    </ul>
  </div>
),
'owasp': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>OWASP highlights the top web security risks (like XSS, CSRF, Injection) developers should avoid. Critical for secure development.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3"> Free Resources</h4>
      <li><a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noreferrer" className="text-blue-600 underline">OWASP Top 10</a></li>
      <li><a href="https://cheatsheetseries.owasp.org/" target="_blank" rel="noreferrer" className="text-blue-600 underline">OWASP Cheat Sheets</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – OWASP Top 10</a></li>
      <li><a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Pluralsight – OWASP Security</a></li>
    </ul>
  </div>
),
'web-components': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Web Components let you build encapsulated, reusable UI elements using native browser APIs.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3"> Free Resources</h4>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Web Components</a></li>
      <li><a href="https://web.dev/web-components/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Google Web.dev – Web Components</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-components/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Web Components</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Web Components</a></li>
    </ul>
  </div>
),
'html-templates': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>The <code>{`<template>`}</code> element holds HTML that isn't rendered immediately—ideal for reusable content blocks.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3">Free Resources</h4>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – &lt;template&gt; Tag</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template" target="_blank" rel="noreferrer" className="text-blue-600 underline">FreeCodeCamp – Templates</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Web Components</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noreferrer" className="text-purple-700 underline">Pluralsight – Getting Started</a></li>
    </ul>
  </div>
),
'custom-elements': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Custom Elements let you define new HTML tags with custom behavior, backed by JavaScript classes.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3">Free Resources</h4>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Custom Elements</a></li>
      <li><a href="https://web.dev/custom-elements-v1/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Web.dev – Custom Elements</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-components/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Web Components</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Web Components</a></li>
    </ul>
  </div>
),
'shadow-dom': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Shadow DOM enables style and DOM encapsulation for custom elements, isolating logic and layout.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3">Free Resources</h4>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Shadow DOM</a></li>
      <li><a href="https://web.dev/shadowdom-v1/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Web.dev – Shadow DOM</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-components/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Web Components</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Web Components</a></li>
    </ul>
  </div>
),
'typescript': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>TypeScript adds static types to JavaScript, helping catch errors during development and improve tooling.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3">Free Resources</h4>
      <li><a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Official Docs – TypeScript</a></li>
      <li><a href="https://www.freecodecamp.org/news/learn-typescript-beginners-guide/" target="_blank" rel="noreferrer" className="text-blue-600 underline">FreeCodeCamp – TypeScript Guide</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Understanding TypeScript</a></li>
      <li><a href="https://frontendmasters.com/courses/typescript/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – TypeScript</a></li>
    </ul>
  </div>
),
'type-checkers': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>Type checkers analyze your code to detect type errors. TypeScript is the most popular, but others exist too.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3"> Free Resources</h4>
      <li><a href="https://www.typescriptlang.org/play" target="_blank" rel="noreferrer" className="text-blue-600 underline">TypeScript Playground</a></li>
      <li><a href="https://typia.io/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Typia – Runtime Type Checking</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Advanced TypeScript</a></li>
      <li><a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Pluralsight – TypeScript Intro</a></li>
    </ul>
  </div>
),
'ssr': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>SSR improves performance and SEO by rendering HTML on the server before it reaches the client.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3">💎 Free Resources</h4>
      <li><a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" className="text-blue-600 underline">Next.js Docs (React SSR)</a></li>
      <li><a href="https://vuejs.org/guide/scaling-up/ssr.html" target="_blank" rel="noreferrer" className="text-blue-600 underline">Vue SSR Guide</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://nextjs.org/learn/foundations/how-nextjs-works" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – SSR</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Next.js to Deployment</a></li>
    </ul>
  </div>
),
'react-ssr': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p>React can be rendered on the server using frameworks like Next.js or manually with <code>ReactDOMServer</code>.</p>
    <ul className="list-disc list-inside mt-2">
       <h4 className="font-semibold mt-3">💎 Free Resources</h4>
      <li><a href="https://reactjs.org/docs/react-dom-server.html" target="_blank" rel="noreferrer" className="text-blue-600 underline">ReactDOMServer Docs</a></li>
      <li><a href="https://nextjs.org/learn" target="_blank" rel="noreferrer" className="text-blue-600 underline">Next.js Learn</a></li>
       <h4 className="font-semibold mt-3">💎 Premium Resources</h4>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Next.js Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/next-js/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Next.js</a></li>
    </ul>
  </div>
),
'vue-ssr': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Vue</strong> supports SSR using <strong>Nuxt.js</strong> or <strong>Vue Server Renderer</strong> for custom setups. This allows your app to render on the server before sending it to the browser, improving performance and SEO.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://nuxt.com/docs/getting-started/introduction" target="_blank" rel="noreferrer" className="text-blue-600 underline">Nuxt.js Docs</a></li>
      <li><a href="https://vuejs.org/guide/scaling-up/ssr.html" target="_blank" rel="noreferrer" className="text-blue-600 underline">Vue SSR Guide</a></li>
      <li><a href="https://github.com/vuejs/vue-next/tree/master/packages/server-renderer" target="_blank" rel="noreferrer" className="text-blue-600 underline">Vue Server Renderer on GitHub</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Nuxt.js Course</a></li>
      <li><a href="https://frontendmasters.com/courses/vue-3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Vue 3</a></li>
    </ul>
  </div>
),

'svelte-ssr': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Svelte</strong> supports SSR through <strong>SvelteKit</strong>, enabling lightning-fast apps with server rendering, routing, and API support out of the box.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://kit.svelte.dev/docs/introduction" target="_blank" rel="noreferrer" className="text-blue-600 underline">SvelteKit Docs</a></li>
      <li><a href="https://kit.svelte.dev/docs/introduction" target="_blank" rel="noreferrer" className="text-blue-600 underline">Intro to SvelteKit</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – SvelteKit Course</a></li>
      <li><a href="https://frontendmasters.com/courses/svelte/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Svelte</a></li>
    </ul>
  </div>
),

'angular-ssr': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Angular Universal</strong> provides SSR support for Angular apps, improving SEO and initial load time by pre-rendering pages on the server.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://angular.io/guide/universal" target="_blank" rel="noreferrer" className="text-blue-600 underline">Angular Universal Docs</a></li>
      <li><a href="https://angular.io/start" target="_blank" rel="noreferrer" className="text-blue-600 underline">Angular Getting Started</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Angular Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Angular</a></li>
    </ul>
  </div>
),

'nextjs-react': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Next.js</strong> is a React framework for building full-stack web apps with built-in SSR, static site generation, API routes, and routing.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://nextjs.org/learn" target="_blank" rel="noreferrer" className="text-blue-600 underline">Next.js Learn Portal</a></li>
      <li><a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" className="text-blue-600 underline">Next.js Docs</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Complete Next.js Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/next-js/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Next.js</a></li>
    </ul>
  </div>
),

'astro-react': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Astro</strong> is a content-first web framework that supports multiple frontend frameworks and static site generation with island architecture.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.astro.build" target="_blank" rel="noreferrer" className="text-blue-600 underline">Astro Docs</a></li>
      <li><a href="https://docs.astro.build/en/getting-started/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Astro Learn</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Astro Crash Course</a></li>
      <li><a href="https://frontendmasters.com/courses/astro/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Astro</a></li>
    </ul>
  </div>
),

'react-router': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>React Router</strong> provides dynamic client-side routing for React applications. It is essential for building SPAs with nested views and URLs.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://reactrouter.com/en/main/start/tutorial" target="_blank" rel="noreferrer" className="text-blue-600 underline">React Router Tutorial</a></li>
      <li><a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer" className="text-blue-600 underline">React Router Docs</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – React Router</a></li>
      <li><a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – React Router</a></li>
    </ul>
  </div>
),
'nuxtjs': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Nuxt.js</strong> is a Vue-based framework for SSR, static site generation, and building full-featured apps with routing and data fetching built-in.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://nuxt.com/docs/getting-started/introduction" target="_blank" rel="noreferrer" className="text-blue-600 underline">Nuxt Docs</a></li>
      <li><a href="https://nuxt.com/docs/guide" target="_blank" rel="noreferrer" className="text-blue-600 underline">Nuxt Learn Guide</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Nuxt Course</a></li>
      <li><a href="https://frontendmasters.com/courses/nuxt/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Nuxt</a></li>
    </ul>
  </div>
),

'svelte-kit': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>SvelteKit</strong> is the official Svelte framework for building full-stack apps with SSR, file-based routing, and fast loading out of the box.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://kit.svelte.dev/docs" target="_blank" rel="noreferrer" className="text-blue-600 underline">SvelteKit Docs</a></li>
      <li><a href="https://learn.svelte.dev/tutorial" target="_blank" rel="noreferrer" className="text-blue-600 underline">Svelte Learn</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – SvelteKit</a></li>
      <li><a href="https://frontendmasters.com/courses/svelte/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Svelte</a></li>
    </ul>
  </div>
),

'graphql': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>GraphQL</strong> is a query language for APIs that allows clients to request exactly what they need. It powers flexible and efficient data fetching.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://graphql.org/learn/" target="_blank" rel="noreferrer" className="text-blue-600 underline">GraphQL.org – Learn</a></li>
      <li><a href="https://www.howtographql.com/" target="_blank" rel="noreferrer" className="text-blue-600 underline">How to GraphQL – Free Course</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – GraphQL with React</a></li>
      <li><a href="https://frontendmasters.com/courses/graphql/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – GraphQL</a></li>
    </ul>
  </div>
),

'apollo': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Apollo Client</strong> is a popular GraphQL client for managing queries, caching, and UI state in frontend applications.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.apollographql.com/docs/react/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Apollo Client Docs</a></li>
      <li><a href="https://www.apollographql.com/docs/react/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Apollo Intro – FreeCodeCamp</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Apollo & GraphQL</a></li>
      <li><a href="https://egghead.io/courses/apollo-client-state-management" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – Apollo Client</a></li>
    </ul>
  </div>
),

'relay-modern': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Relay Modern</strong> is a GraphQL client by Meta designed for building high-performance, data-driven React apps with static typing and advanced caching.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://relay.dev/docs/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Relay Docs</a></li>
      <li><a href="https://github.com/facebook/relay" target="_blank" rel="noreferrer" className="text-blue-600 underline">Relay GitHub Repo</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Relay via GraphQL</a></li>
      <li><a href="https://frontendmasters.com/courses/advanced-graphql/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Advanced GraphQL</a></li>
    </ul>
  </div>
),
'pwas': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Progressive Web Apps (PWAs)</strong> are web applications that offer a native app-like experience with offline support, push notifications, and installability.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noreferrer" className="text-blue-600 underline">web.dev – PWAs</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – PWAs</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – PWA Complete Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/progressive-web-apps/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – PWAs</a></li>
    </ul>
  </div>
),

'performance': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Performance optimization</strong> improves load times, responsiveness, and overall UX by applying techniques like lazy loading, caching, and code splitting.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://web.dev/fast/" target="_blank" rel="noreferrer" className="text-blue-600 underline">web.dev – Performance Guide</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Performance" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Web Performance</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Web Performance</a></li>
      <li><a href="https://frontendmasters.com/courses/web-performance/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Web Performance</a></li>
    </ul>
  </div>
),

'static-site-generators': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Static Site Generators (SSGs)</strong> pre-build pages at compile time, resulting in faster load times and better SEO. Popular options include Gatsby, Astro, and Eleventy.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://jamstack.org/generators/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Jamstack – Generator List</a></li>
      <li><a href="https://jamstack.org/generators/" target="_blank" rel="noreferrer" className="text-blue-600 underline">SSGs with React – Article</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://jamstack.org/generators/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – SSGs</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Gatsby SSG</a></li>
    </ul>
  </div>
),

'mobile-apps': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Mobile Apps</strong> can be built using web technologies via frameworks like React Native, Flutter, and Ionic to target both iOS and Android platforms.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://reactnative.dev/docs/environment-setup" target="_blank" rel="noreferrer" className="text-blue-600 underline">React Native Setup</a></li>
      <li><a href="https://ionicframework.com/docs" target="_blank" rel="noreferrer" className="text-blue-600 underline">Ionic Framework Docs</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – React Native Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/react-native/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – React Native</a></li>
    </ul>
  </div>
),

'react-native': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>React Native</strong> lets you build native mobile apps for iOS and Android using React. It's highly performant and has a large ecosystem.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://reactnative.dev/docs/environment-setup" target="_blank" rel="noreferrer" className="text-blue-600 underline">Official Docs – React Native</a></li>
      <li><a href="https://reactnative.dev/showcase" target="_blank" rel="noreferrer" className="text-blue-600 underline">React Native Showcase</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Complete RN + Redux</a></li>
      <li><a href="https://frontendmasters.com/courses/react-native/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – React Native</a></li>
    </ul>
  </div>
),
'flutter-mobile': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Flutter</strong> is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase using Dart.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://flutter.dev/docs" target="_blank" rel="noreferrer" className="text-blue-600 underline">Flutter Docs</a></li>
      <li><a href="https://dart.dev/guides" target="_blank" rel="noreferrer" className="text-blue-600 underline">Dart Language Guide</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Flutter Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/flutter/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Flutter</a></li>
    </ul>
  </div>
),

'ionic': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Ionic</strong> enables developers to build cross-platform mobile applications using web technologies like HTML, CSS, and JavaScript.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://ionicframework.com/docs" target="_blank" rel="noreferrer" className="text-blue-600 underline">Ionic Docs</a></li>
      <li><a href="https://ionicframework.com/start" target="_blank" rel="noreferrer" className="text-blue-600 underline">Ionic Getting Started</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Ionic Guide</a></li>
      <li><a href="https://reactnative.dev/docs/environment-setup" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Cross Platform Apps</a></li>
    </ul>
  </div>
),

'gatsby': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Gatsby</strong> is a React-based static site generator that leverages GraphQL to build fast, scalable, and SEO-friendly websites.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.gatsbyjs.com/docs/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Gatsby Docs</a></li>
      <li><a href="https://www.gatsbyjs.com/docs/" target="_blank" rel="noreferrer" className="text-blue-600 underline">FreeCodeCamp – Gatsby Guide</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Gatsby Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/gatsby/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Gatsby</a></li>
    </ul>
  </div>
),

'vuepress': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>VuePress</strong> is a static site generator powered by Vue, commonly used for documentation with Markdown and Vue component support.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://vuepress.vuejs.org/" target="_blank" rel="noreferrer" className="text-blue-600 underline">VuePress Docs</a></li>
      <li><a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Intro Article – VuePress</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – VuePress Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/vue/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Vue (incl. VuePress)</a></li>
    </ul>
  </div>
),

'eleventy': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Eleventy (11ty)</strong> is a simple, flexible static site generator that supports many template languages and works well for content-rich sites.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.11ty.dev/docs/" target="_blank" rel="noreferrer" className="text-blue-600 underline">11ty Docs</a></li>
      <li><a href="https://www.11ty.dev/docs/" target="_blank" rel="noreferrer" className="text-blue-600 underline">FreeCodeCamp – Blog with 11ty</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Eleventy Course</a></li>
      <li><a href="https://egghead.io/courses/introduction-to-11ty-static-site-generator" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – 11ty</a></li>
    </ul>
  </div>
),
'docusaurus': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Docusaurus</strong> is a documentation-focused static site generator created by Meta. It uses Markdown and React for fast, customizable docs.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docusaurus.io/docs" target="_blank" rel="noreferrer" className="text-blue-600 underline">Docusaurus Docs</a></li>
      <li><a href="https://github.com/facebook/docusaurus" target="_blank" rel="noreferrer" className="text-blue-600 underline">Docusaurus GitHub</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Docusaurus</a></li>
      <li><a href="https://egghead.io/courses/documenting-projects-with-docusaurus" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – Docusaurus</a></li>
    </ul>
  </div>
),

'browser-apis': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Browser APIs</strong> enable direct access to device features, storage, sensors, and more through JavaScript in the browser.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Web APIs Index</a></li>
      <li><a href="https://web.dev/learn/pwa/#apis" target="_blank" rel="noreferrer" className="text-blue-600 underline">web.dev – Browser APIs for PWAs</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Browser API Course</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – JS Projects Using APIs</a></li>
    </ul>
  </div>
),

'storage': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Storage APIs</strong> help persist data in the browser using options like <code>localStorage</code>, <code>sessionStorage</code>, and <code>IndexedDB</code>.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Web Storage API</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Storage" target="_blank" rel="noreferrer" className="text-blue-600 underline">web.dev – Storage Basics</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/progressive-web-apps/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Offline Web Apps</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Modern JS (Storage Intro)</a></li>
    </ul>
  </div>
),

'web-sockets': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>WebSockets</strong> enable persistent, bidirectional communication between the browser and server for real-time applications.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – WebSockets API</a></li>
      <li><a href="https://ably.com/concepts/websockets" target="_blank" rel="noreferrer" className="text-blue-600 underline">Ably – WebSocket Overview</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/realtime/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Real-Time Web</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Real-Time Node.js Apps</a></li>
    </ul>
  </div>
),

'server-sent-events': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Server-Sent Events (SSE)</strong> allow servers to push updates to the browser over HTTP without client polling.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Server-Sent Events</a></li>
      <li><a href="https://html.spec.whatwg.org/multipage/server-sent-events.html" target="_blank" rel="noreferrer" className="text-blue-600 underline">WHATWG Spec – SSE</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Real-Time Apps (SSE/WebSockets)</a></li>
      <li><a href="https://frontendmasters.com/courses/realtime/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Real-Time Web</a></li>
    </ul>
  </div>
),
'service-workers': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Service Workers</strong> allow your web apps to work offline, cache assets, and handle background tasks like sync or push notifications.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Service Workers</a></li>
      <li><a href="https://web.dev/learn/pwa/service-workers/" target="_blank" rel="noreferrer" className="text-blue-600 underline">web.dev – Learn Service Workers</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/progressive-web-apps/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – PWA</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – PWA: Complete Guide</a></li>
    </ul>
  </div>
),

'location': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Geolocation API</strong> provides access to the user's location for maps, tracking, and personalized features.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Geolocation API</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API" target="_blank" rel="noreferrer" className="text-blue-600 underline">GFG – Geolocation API</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Google Maps API Guide</a></li>
      <li><a href="https://frontendmasters.com/courses/advanced-javascript/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Intermediate JS</a></li>
    </ul>
  </div>
),

'notifications': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Notifications API</strong> lets you send browser notifications for alerts, reminders, or updates even when users aren't active on your page.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Notifications API</a></li>
      <li><a href="https://web.dev/push-notifications-overview/" target="_blank" rel="noreferrer" className="text-blue-600 underline">web.dev – Push Notifications</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – PWA + Notifications</a></li>
      <li><a href="https://frontendmasters.com/courses/service-workers/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Service Workers</a></li>
    </ul>
  </div>
),

'device-orientation': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Device Orientation API</strong> gives access to device sensors like compass, acceleration, and gyroscope—important for games, AR, and motion interfaces.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Device Orientation</a></li>
      <li><a href="https://web.dev/device-orientation/" target="_blank" rel="noreferrer" className="text-blue-600 underline">web.dev – Device Sensors</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – HTML5 APIs</a></li>
      <li><a href="https://frontendmasters.com/courses/web-performance/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Web Performance</a></li>
    </ul>
  </div>
),

'payments': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Payment Request API</strong> allows secure, streamlined payments directly within supported browsers and devices—simplifying checkout flow.</p>
    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Payment Request API</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API" target="_blank" rel="noreferrer" className="text-blue-600 underline">web.dev – Payments Overview</a></li>
    </ul>
    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Stripe Integration</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Stripe Checkout</a></li>
    </ul>
  </div>
),
'credentials': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Credential Management API</strong> helps manage saved credentials for autofill login and secure authentication flows.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Credential_Management_API" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Credential Management API</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Credential_Management_API" target="_blank" rel="noreferrer" className="text-blue-600 underline">web.dev – Credential Management</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Authentication</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – WebAuthn & Passkeys</a></li>
    </ul>
  </div>
),

'desktop-apps': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Desktop Apps</strong> can be built using Electron, Tauri, or other frameworks that combine native windowing with HTML/CSS/JS.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Web Docs</a></li>
      <li><a href="https://www.electronjs.org/docs/latest" target="_blank" rel="noreferrer" className="text-blue-600 underline">SmashingMag – Desktop App Guide</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Electron from Scratch</a></li>
      <li><a href="https://frontendmasters.com/courses/electron-v2/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Electron</a></li>
    </ul>
  </div>
),

'electron': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Electron</strong> is a framework that uses Chromium and Node.js to create cross-platform desktop applications.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.electronjs.org/docs/latest/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Electron Docs</a></li>
      <li><a href="https://www.electronjs.org/docs/latest" target="_blank" rel="noreferrer" className="text-blue-600 underline">MDN – Electron Guide</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/electron-v2/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Electron v2</a></li>
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Build Desktop Apps</a></li>
    </ul>
  </div>
),

'flutter': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Flutter</strong> is Google’s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://flutter.dev/docs" target="_blank" rel="noreferrer" className="text-blue-600 underline">Flutter Docs</a></li>
      <li><a href="https://flutter.dev/docs" target="_blank" rel="noreferrer" className="text-blue-600 underline">GFG – Flutter Intro</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Flutter Bootcamp</a></li>
      <li><a href="https://frontendmasters.com/courses/flutter/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Frontend Masters – Flutter</a></li>
    </ul>
  </div>
),

'tauri': (
  <div className="space-y-2 text-sm leading-relaxed">
    <p><strong>Tauri</strong> is a modern framework for building smaller, secure desktop apps using Rust and a web frontend like React, Vue, or Svelte.</p>

    <h4 className="font-semibold mt-2">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://tauri.app/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Tauri Official Site</a></li>
      <li><a href="https://tauri.app/v1/guides/" target="_blank" rel="noreferrer" className="text-blue-600 underline">Tauri Guides</a></li>
    </ul>

    <h4 className="font-semibold mt-2">💎 Premium Resources</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li><a href="https://frontendmasters.com/courses/web-development-v3/" target="_blank" rel="noreferrer" className="text-purple-700 underline">Udemy – Tauri + React</a></li>
      <li><a href="https://egghead.io/courses/create-cross-platform-desktop-apps-with-tauri" target="_blank" rel="noreferrer" className="text-purple-700 underline">Egghead – Tauri Course</a></li>
    </ul>
  </div>
),



};
