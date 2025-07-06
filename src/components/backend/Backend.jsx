
import React, { useCallback, useEffect, useState,useMemo } from 'react';
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { initialNodes , baseNodeStyleProps, parentNodeStyleProps  } from './nodes.jsx';
import { initialEdges } from './edges';
import { nodeDescriptions } from './descriptions.jsx';
import FaqSection from './faq.jsx';

export default function Backend() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showIntro, setShowIntro] = useState(false);
  const [viewport, setViewport] = useState({ zoom: 0.7, x: 200, y: 0 });


  //added this 
 const styledNodes = useMemo(() => {
  return nodes.map((node) => {
    const isTransparent = node.style?.backgroundColor === 'transparent';
    const isDashed = node.style?.border?.includes('dashed');
    if (node.positionAbsolute || isDashed || isTransparent) return node;

    const isParent = node.style?.backgroundColor === '#fde68a';
    const isSelected = selectedNode?.id === node.id;
    const existingWidth = node.style?.width;
    const styleBase = isParent ? parentNodeStyleProps : baseNodeStyleProps;

    const style = {
      ...styleBase,
      ...(existingWidth && { width: existingWidth }),
      backgroundColor: isSelected
        ? isParent
          ? '#facc15'
          : '#60a5fa'
        : styleBase.backgroundColor,
      transition: 'all 0.2s ease-in-out',
    };

    const className = isParent
      ? 'hover:scale-[1.02] transition-transform duration-150'
      : 'hover:scale-[1.02] hover:bg-blue-100 transition-all duration-150';

    return { ...node, style, className };
  });
}, [nodes, selectedNode]);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setViewport({ zoom: 0.45, x: 300, y: 0 });
    }
  }, []);

 

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge({ ...connection, type: 'smoothstep' }, eds)),
    [setEdges]
  );

  const onNodeClick = (_, node) => setSelectedNode(node);

  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-pink-50 p-4 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col space-y-6">
        <div className="bg-blue-100 p-3 text-sm text-blue-800 text-center rounded">
          Get the latest Backend news from our sister site{' '}
          <a href="https://thenewstack.io" className="underline font-semibold" target="_blank" rel="noreferrer">
            TheNewStack.io
          </a>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3">
          <a href="/" className="text-sm text-blue-600 hover:underline">← All Roadmaps</a>
          <div className="space-x-2 flex flex-wrap">
            <button className="bg-blue-600 text-white px-4 py-1 rounded">Schedule Learning Time</button>
            <button className="bg-green-600 text-white px-4 py-1 rounded">Download</button>
            <button className="bg-gray-600 text-white px-4 py-1 rounded">Share</button>
           
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">Backend Developer</h1>
          <p className="text-lg text-gray-600">Step by step guide to becoming a modern backend developer in 2025</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          <button className="px-4 py-2 bg-white border rounded shadow-sm">Roadmap</button>
          <button className="px-4 py-2 bg-white border rounded shadow-sm">Projects</button>
          <button className="px-4 py-2 bg-yellow-100 border rounded shadow-sm">AI Tutor <span className="text-red-600 font-bold ml-1">New</span></button>
          <button className="px-4 py-2 bg-white border rounded shadow-sm">Suggest Changes</button>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-700">
          <p>0% Done • 0 of 115 Done</p>
          <div className="space-x-2">
            <button className="text-blue-600 underline">Share Progress</button>
            <button className="text-blue-600 underline">Track Progress</button>
          </div>
        </div>
<details className="bg-white border rounded shadow-sm text-sm leading-relaxed text-gray-700">
  <summary className="cursor-pointer px-4 py-2 bg-indigo-50 text-indigo-700 font-medium">
    Backend Developer Roadmap: What is Backend Development?
  </summary>
  <div className="px-4 py-3 space-y-4">
    <p>
      A backend developer is a professional who focuses on the server-side of web applications. They are responsible for handling the application logic, managing the database and server, and ensuring seamless communication between the frontend and backend. Backend developers typically work with languages like Python, Ruby, Java, PHP, or Node.js to build the core infrastructure that powers the user-facing part of an application.
    </p>

    <h2 className="font-semibold text-base">What is the role of a Backend Developer?</h2>
    <p>
      The primary role of a backend developer is to build and maintain the application logic, databases, APIs, and servers that form the backend of a web application. They collaborate with frontend developers, designers, and project managers to ensure the application is functional, scalable, and delivers a smooth experience to users.
    </p>

    <h2 className="font-semibold text-base">Which languages are used for Backend Development?</h2>
    <p>
      Backend developers typically work with a smaller set of languages compared to frontend developers. Common backend languages include:
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>Python</strong>: A versatile language used for web development, automation, and scripting. Popular frameworks: Django, Flask.</li>
      <li><strong>Ruby</strong>: Known for its clean syntax and rapid development. Popular with the Ruby on Rails framework.</li>
      <li><strong>Java</strong>: A robust, object-oriented language used in enterprise-grade applications and large-scale systems.</li>
      <li><strong>PHP</strong>: Widely used in web development, especially with content management systems like WordPress.</li>
      <li><strong>Node.js (JavaScript)</strong>: Allows using JavaScript on the server side, often used in modern full-stack applications.</li>
      <li><strong>Go</strong>: A statically typed language known for performance and concurrency, often used in high-performance systems.</li>
    </ul>

    <h2 className="font-semibold text-base">What skills are required for a Backend Developer?</h2>
    <p>
      Key backend developer skills include understanding server-side programming, database design, and API development. These are fundamental for building reliable and maintainable systems.
    </p>
    <p>The full list of important backend skills includes:</p>
    <ul className="list-decimal list-inside space-y-1">
      <li>Server-side languages: Proficiency in Python, Java, Node.js, PHP, or similar.</li>
      <li>Database management: Understanding of SQL and NoSQL databases (e.g., MySQL, PostgreSQL, MongoDB).</li>
      <li>API design and integration: Working with RESTful and GraphQL APIs.</li>
      <li>Authentication and authorization: Implementing secure login systems using OAuth, JWT, etc.</li>
      <li>Version control: Familiarity with Git and platforms like GitHub or GitLab.</li>
      <li>Security best practices: Preventing common attacks like SQL injection, XSS, CSRF.</li>
      <li>Performance optimization: Writing efficient queries, caching strategies, and code profiling.</li>
      <li>Testing and debugging: Unit testing, integration testing, and debugging tools.</li>
      <li>DevOps basics: Understanding CI/CD, deployment, and containerization with tools like Docker.</li>
      <li>Scalability and architecture: Building systems that can scale and understanding design patterns.</li>
      <li>Message queues and event-driven systems: Basics of tools like RabbitMQ or Kafka.</li>
    </ul>

    <p>
      Mastering these skills will prepare you for backend developer roles and help you build solid, scalable, and maintainable backend systems.
    </p>
  </div>
</details>


        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1400px] min-h-[2900px]">
            <ReactFlow
              nodes={styledNodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              onNodeDragStop={(e, node) => {
                setNodes((nds) =>
                  nds.map((n) => (n.id === node.id ? { ...n, position: node.position } : n))
                );
              }}
              defaultViewport={viewport}
              style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
              panOnScroll={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              panOnDrag={false}
              minZoom={0.2}
              maxZoom={2}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              translateExtent={[[-1000, -1000], [3000, 4000]]}
              fitView
              className="[&_.react-flow__node]:touch-auto [&_.react-flow__node]:overscroll-contain [&_.react-flow__node]:cursor-default"
            >
              <Background color="#e0e0e0" gap={12} />
              <Controls />
            </ReactFlow>
          </div>
        </div>

        {selectedNode && (
          <div className="fixed sm:top-32 sm:right-4 sm:left-auto sm:translate-x-0 sm:w-96 inset-x-0 bottom-0 sm:inset-auto z-50 bg-white border sm:border-gray-300 sm:rounded-lg rounded-t-lg shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{selectedNode.data.label}</h2>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {nodeDescriptions[selectedNode.id] || 'No description available for this node.'}
              </p>
              <button
                onClick={() => setSelectedNode(null)}
                className="mt-4 px-4 py-1 bg-gray-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className="mt-16 sm:mt-20">
          <FaqSection />
        </div>

        <div className="h-10" />
      </div>
    </div>
  );
}
