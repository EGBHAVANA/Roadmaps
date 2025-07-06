
import React, { useCallback, useEffect, useState ,useMemo } from 'react';
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { initialNodes , baseNodeStyleProps, parentNodeStyleProps } from './nodes';
import { initialEdges } from './edges';
import { nodeDescriptions } from './descriptions.jsx';
import FaqSection from './faq.jsx';

export default function DevOps() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewport, setViewport] = useState({ zoom: 0.7, x: 200, y: 0 });

  //added this
  const styledNodes = nodes.map((node) => {
  // 🧱 Don't apply style updates to group boxes (they use positionAbsolute or dashed border)
  if (node.positionAbsolute || node.style?.border?.includes('dashed')) {
    return node;
  }

  const isParent = node.style?.backgroundColor === '#fde68a';
  const isSelected = selectedNode?.id === node.id;
  const existingWidth = node.style?.width;
  const styleBase = isParent ? parentNodeStyleProps : baseNodeStyleProps;

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
          Get the latest DevOps news from{' '}
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
            {/* <button onClick={() => {
              const blob = new Blob([JSON.stringify(nodes, null, 2)], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'updated-nodes.json';
              a.click();
            }} className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 shadow">💾 Save Nodes</button>
            <button onClick={() => {
              const blob = new Blob([JSON.stringify(edges, null, 2)], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'updated-edges.json';
              a.click();
            }} className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 shadow">💾 Save Edges</button> */}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">DevOps Engineer</h1>
          <p className="text-lg text-gray-600">Step by step guide to becoming a modern DevOps engineer in 2025</p>
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
    DevOps Roadmap: What is DevOps?
  </summary>
  <div className="px-4 py-3 space-y-4">
    <p>
      A DevOps engineer is a professional who focuses on unifying software development and IT operations. They aim to shorten the development lifecycle, deliver high-quality software continuously, and ensure system reliability. DevOps emphasizes automation, collaboration, monitoring, and rapid deployment practices.
    </p>

    <h2 className="font-semibold text-base">What does a DevOps Engineer do?</h2>
    <p>
      DevOps engineers are responsible for designing and maintaining the infrastructure that supports software delivery. They build and manage CI/CD pipelines, configure deployment environments, monitor application performance, ensure security and scalability, and automate routine processes. Tools commonly used include Docker, Kubernetes, Jenkins, Terraform, Prometheus, and Ansible.
    </p>

    <h2 className="font-semibold text-base">Key Skills for DevOps Engineers</h2>
    <ul className="list-decimal list-inside space-y-1">
      <li>Linux and Operating System fundamentals</li>
      <li>Version control with Git and platforms like GitHub or GitLab</li>
      <li>CI/CD tools and concepts (e.g., Jenkins, GitHub Actions, GitLab CI)</li>
      <li>Infrastructure as Code (IaC) tools such as Terraform, Ansible, or Pulumi</li>
      <li>Containerization and orchestration using Docker and Kubernetes</li>
      <li>Experience with cloud providers (AWS, GCP, Azure)</li>
      <li>Monitoring and logging (Prometheus, Grafana, ELK stack)</li>
      <li>Scripting skills (Bash, Python, or other relevant scripting languages)</li>
      <li>Basic networking and understanding of security best practices</li>
      <li>Incident response, troubleshooting, and maintaining system reliability</li>
    </ul>

    <p>
      Mastering these skills enables DevOps engineers to build scalable, reliable, and automated infrastructure that supports continuous software delivery and improves collaboration between teams.
    </p>
  </div>
</details>


        

        <div className="w-full flex justify-center">
          {/* <div className="w-full max-w-[1400px] min-h-[2900px]"> */}
          <div className="w-full max-w-[1400px] h-[85vh] sm:h-[2000px]">
            {/* <div className="w-full max-w-[1400px] min-h-[2000px]"> */}

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
