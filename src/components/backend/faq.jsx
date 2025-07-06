// src/components/FaqSection.jsx
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from "@heroicons/react/solid";


//npm install @heroicons/react@v1 ---installthis for faq section



export const faqs = [
{
  question: "What does a typical day look like for a backend developer?",
  answer:
    "A typical day often starts with a stand-up meeting to align with the team. Backend developers spend mornings reviewing tasks or feature requests from tools like Jira or GitHub, planning database models, or writing business logic. You might work on implementing REST or GraphQL APIs, handling authentication, optimizing queries, or designing scalable systems. Afternoons could involve writing tests, debugging API errors, reviewing pull requests, or collaborating with frontend developers and DevOps teams. In smaller setups, backend devs may also handle server infrastructure or CI/CD pipelines.",
},
{
  question: "How important is security in backend development?",
  answer:
    "Security is absolutely critical in backend development. You're often handling sensitive data like user credentials, payment info, or business logic. This means protecting against SQL injection, XSS, CSRF, authentication bypass, rate limiting abuse, and more. You also need to securely manage secrets, validate inputs, hash passwords (e.g., using bcrypt), and use HTTPS. Security flaws in the backend can lead to data breaches, legal issues, and major business impact — so security best practices must be baked into every layer of your code.",
},
{
  question: "Is knowing databases deeply still important with ORM tools?",
  answer:
    "Definitely. ORMs like Prisma, Sequelize, or TypeORM make interacting with databases easier, but they don't eliminate the need to understand what's happening under the hood. You should know how SQL works, how indexes affect performance, how to structure normalized schemas, and how joins or transactions behave. Deep DB knowledge helps you optimize queries, avoid N+1 problems, and debug complex data flows. Relying solely on ORMs without understanding the underlying database can lead to inefficient or even dangerous code.",
},
{
  question: "What is the role of performance optimization in backend?",
  answer:
    "Backend performance has a huge impact on system reliability and user experience. Optimizing response times, database queries, memory usage, and caching (e.g., Redis) are part of your daily work. You may also profile slow endpoints, reduce cold starts in serverless, handle concurrency, or scale APIs under load. Tools like Postman, Apache Bench, or APMs like New Relic can help identify bottlenecks. A sluggish backend can make even the fastest frontend feel broken — so performance is core to backend responsibility.",
},
{
  question: "How important is testing in backend development, and what should I focus on?",
  answer:
    "Testing is essential for maintaining stable, predictable backend systems. You should write unit tests for services and utilities, integration tests for API routes and DB operations, and end-to-end tests for key flows. Testing helps you prevent regressions, validate business logic, and deploy with confidence. Tools like Jest, Mocha, Supertest, or Postman collections are common in backend workflows. Focus on testing input validation, error handling, edge cases, and security-sensitive operations. A well-tested backend leads to more reliable APIs and faster debugging.",
},
{
  question: "Can a backend developer work independently or as a freelancer?",
  answer:
    "Yes, many backend developers freelance or work independently. If you're confident in building APIs, working with databases, deploying servers (e.g., with Docker, Heroku, or AWS), and managing full-stack flows, you can work solo. Freelance backend work often involves building admin panels, setting up authentication, integrating third-party services, and building REST or GraphQL APIs. You’ll also need to manage hosting, deployments, and performance — so it's a full responsibility role. Communication, estimation, and documentation skills are just as important as your coding ability.",
},
{
  question: "How do modern backend frameworks differ, and which should I learn first?",
  answer:
    "Popular backend frameworks like Express.js, FastAPI, Spring Boot, Django, and NestJS differ in language, performance, structure, and ecosystem. Express is minimalist and great for JavaScript/Node.js beginners. FastAPI is Pythonic, modern, and fast with built-in validation. Django offers batteries-included features for rapid development. Spring Boot (Java) is powerful but more complex and enterprise-focused. NestJS offers structure on top of Express. If you already know JavaScript, Express or NestJS are great starting points. Choose based on your language comfort and project goals.",
},
{
  question: "What does 'backend architecture' mean, and why does it matter?",
  answer:
    "Backend architecture refers to how your server-side systems are structured — from code organization to database design to deployment strategy. It includes decisions like layered architecture, microservices vs monoliths, how services talk to each other, how data flows, and how scalability is handled. Good architecture improves maintainability, testability, and team collaboration. It also reduces bugs and bottlenecks over time. Without solid backend architecture, even working APIs can become impossible to extend, debug, or secure as your app grows.",
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
