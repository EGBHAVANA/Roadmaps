// src/components/FaqSection.jsx
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from "@heroicons/react/solid";


//npm install @heroicons/react@v1 ---install this for faq section install v1 version



export const faqs = [
{
  question: "What does a typical day look like for a frontend developer?",
  answer:
    "A typical day varies depending on company size and project stage, but most frontend developers start with a stand-up meeting to sync with the team. You might spend your morning reviewing design tickets in tools like Jira or Trello, converting Figma designs into responsive UI using React, Tailwind, or plain CSS. The afternoon might involve writing unit tests, debugging browser issues, or integrating APIs from the backend. You’ll often review or receive code feedback via pull requests, and collaborate with product managers or designers to clarify features or edge cases. In smaller teams, you may also participate in UI/UX decisions directly.",
},
{
  question: "How important is accessibility (a11y) in frontend development?",
  answer:
    "Accessibility is extremely important. You're not just building interfaces for users who can see, hear, and use a mouse — you're building for everyone. This includes users with vision impairments, color blindness, motor limitations, or those using screen readers. Simple steps like using semantic HTML, proper alt text, keyboard navigation, ARIA attributes, and contrast-safe color schemes make your apps usable for a wider audience. In many regions, accessibility is not just good practice but a legal requirement (e.g., WCAG compliance, ADA). Ignoring it can limit reach, harm user experience, and even lead to lawsuits.",
},
{
  question: "Is knowing CSS deeply still important in the age of utility-first frameworks like Tailwind?",
  answer:
    "Absolutely. Frameworks like Tailwind make styling efficient, but they don’t eliminate the need to understand how CSS works under the hood. Deep knowledge of concepts like specificity, stacking context, layout techniques (flexbox, grid, box model), and animations is essential. Without that, you’ll hit walls when trying to customize styles, troubleshoot layout bugs, or collaborate with teams using different CSS architectures. Utility frameworks are tools — not substitutes — for understanding how your UI is built and rendered.",
},
{
  question: "What is the role of performance optimization in frontend?",
  answer:
    "Performance is a crucial part of frontend development. A slow website leads to poor user experience, higher bounce rates, and lower conversions. As a frontend developer, you're responsible for optimizing render paths, reducing unused code, deferring heavy scripts, using responsive image formats, and lazy-loading content. You’ll also want to use tools like Lighthouse, Web Vitals, or Chrome DevTools to analyze bottlenecks. Even things like unnecessary re-renders in React or bloated third-party scripts can make or break your performance scores.",
},
{
  question: "How important is testing in frontend development, and what should I focus on?",
  answer:
    "Testing helps prevent bugs, increases confidence in your codebase, and ensures that updates don't break existing features. Frontend testing includes unit tests (e.g., testing components in isolation), integration tests (e.g., checking interaction between components or with APIs), and end-to-end tests (e.g., simulating real user behavior in tools like Cypress or Playwright). Aim to cover key flows like form submission, navigation, UI rendering, and error handling. Also, consider accessibility and responsiveness as part of your test plans. Testing can seem tedious at first, but it's critical for production-ready apps.",
},
{
  question: "Can a frontend developer work independently or as a freelancer?",
  answer:
    "Yes, many frontend developers successfully freelance or work independently, especially with the rise of remote work. If you're confident in converting designs to code, optimizing for performance, managing state, and deploying your own work (e.g., via Vercel or Netlify), you can take on freelance gigs. You’ll often need to wear multiple hats — talking to clients, estimating timelines, setting up projects from scratch, and sometimes handling basic backend tasks. Freelancing gives you flexibility and creative freedom, but it also demands strong communication, time management, and the ability to deliver production-ready work on your own.",
},
{
  question: "How do modern frontend frameworks differ, and which should I learn first?",
  answer:
    "Modern frameworks like React, Vue, Angular, and Svelte all offer component-based UI development, but they differ in philosophy, syntax, and tooling. React offers great flexibility and ecosystem depth, making it the most in-demand and beginner-friendly. Vue has a more opinionated structure with easier learning curve. Angular is enterprise-focused with built-in tooling but steeper to learn. Svelte is innovative and compact but newer in adoption. For job readiness and community support, React is a safe first choice. But understanding core concepts like reactivity, component lifecycle, and state management will help you adapt to any framework quickly.",
},
{
  question: "What does 'frontend architecture' mean, and why does it matter?",
  answer:
    "Frontend architecture refers to how your codebase is structured and scaled over time — from folder layout to component reuse, state management, and communication between layers. A well-architected frontend helps teams collaborate better, reduces technical debt, and makes it easier to onboard new developers. It involves choosing patterns like atomic design, deciding on state management strategies (e.g., local state, Redux, Zustand), defining conventions, and planning scalability (e.g., feature folders, lazy loading). Without good architecture, even a beautiful UI becomes hard to maintain and evolve.",
}


];

export default function FaqSection() {
  return (
    <div className="w-full max-w-2xl p-4 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <span>{faq.question}</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-indigo-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-3 text-sm text-gray-700">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
