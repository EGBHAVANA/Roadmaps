// src/components/FaqSection.jsx
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from "@heroicons/react/solid";

// npm install @heroicons/react@v1  ← Required for FAQ section icons

export const faqs = [
  {
    question: "What does a typical day look like for a DevOps engineer?",
    answer:
      "A typical day includes monitoring system health, reviewing CI/CD pipeline runs, managing infrastructure (e.g., via Terraform or Kubernetes), and responding to incident alerts. DevOps engineers also work closely with developers to streamline deployments, set up logging/monitoring, and enforce infrastructure-as-code practices. You'll often attend stand-ups, automate manual tasks, and improve system reliability, scalability, and performance.",
  },
  {
    question: "How important is automation in DevOps?",
    answer:
      "Automation is a core pillar of DevOps. It reduces human error, speeds up deployments, and ensures consistency across environments. From CI/CD pipelines to infrastructure provisioning with tools like Terraform, Ansible, or Pulumi — the goal is to automate everything that’s repetitive and error-prone. Automation also enables better testing, faster feedback loops, and smoother rollbacks.",
  },
  {
    question: "What tools should a DevOps engineer be familiar with?",
    answer:
      "DevOps involves a wide toolchain. Common tools include Git, Docker, Kubernetes, Jenkins/GitHub Actions/GitLab CI for CI/CD, Terraform or CloudFormation for IaC, Prometheus + Grafana for monitoring, and ELK or Loki for log management. Familiarity with AWS/GCP/Azure, Linux fundamentals, shell scripting, and version control is essential. Mastering tools isn’t enough — understanding how they work together is key.",
  },
  {
    question: "What is infrastructure as code (IaC), and why does it matter?",
    answer:
      "IaC means managing infrastructure through code instead of manual processes. Tools like Terraform, Pulumi, or CloudFormation let you define servers, databases, networks, etc., as declarative code. This improves repeatability, scalability, and version control. IaC allows teams to treat infrastructure changes like application code: testable, reviewable, and reversible.",
  },
  {
    question: "How does DevOps improve collaboration between teams?",
    answer:
      "DevOps breaks the silos between development, operations, and QA. By introducing shared responsibilities and automation, teams can work faster and more reliably. Developers can deploy their own code, operations can track infrastructure changes through version control, and QA can rely on automated testing. This results in shorter feedback loops, faster releases, and higher stability.",
  },
  {
    question: "What are CI/CD pipelines, and how do they help?",
    answer:
      "CI/CD stands for Continuous Integration and Continuous Deployment. CI ensures that every code change is automatically tested and validated. CD automates the deployment of that validated code to staging or production. Together, they reduce manual errors, speed up release cycles, and increase confidence in shipping new features.",
  },
  {
    question: "What’s the role of monitoring and observability in DevOps?",
    answer:
      "Monitoring tracks system health (CPU, memory, uptime), while observability provides deeper insights into how the system behaves (logs, metrics, traces). Tools like Prometheus, Grafana, ELK, and OpenTelemetry help identify bottlenecks, errors, and unexpected behavior. Without observability, troubleshooting becomes guesswork, especially in distributed or containerized systems.",
  },
  {
    question: "Is learning cloud platforms necessary for DevOps?",
    answer:
      "Yes, DevOps and cloud go hand in hand. Most production systems run on cloud platforms like AWS, GCP, or Azure. As a DevOps engineer, you’ll need to provision cloud resources, manage permissions, optimize costs, and ensure high availability. Understanding core cloud services (like EC2, S3, IAM, Lambda, VPC) is fundamental for modern DevOps roles.",
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
