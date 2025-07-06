import React, { useCallback, useEffect, useState,useMemo} from 'react';
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { initialNodes, baseNodeStyleProps, parentNodeStyleProps } from './nodes';
import { initialEdges } from './edges';
import { nodeDescriptions } from './descriptions.jsx';
import FaqSection from './faq.jsx';

export default function Frontend() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewport, setViewport] = useState({ zoom: 0.65, x: 1350, y: 0 });
//hover
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
    (connection) =>
      setEdges((eds) =>
        addEdge({ ...connection, type: 'smoothstep' }, eds)
      ),
    [setEdges]
  );

  const onNodeClick = (_, node) => setSelectedNode(node);

  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-pink-50 p-4 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col space-y-6">

        {/* Banner */}
        <div className="bg-blue-100 p-3 text-sm text-blue-800 text-center rounded">
          Get the latest Frontend news from our sister site{' '}
          <a
            href="https://thenewstack.io"
            className="underline font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            TheNewStack.io
          </a>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-between items-center gap-3">
          <a href="/" className="text-sm text-blue-600 hover:underline">
            ← All Roadmaps
          </a>
          <div className="flex flex-wrap gap-2">
            <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded">Schedule Learning Time</button>
            <button className="bg-green-600 text-white px-3 py-1 text-sm rounded">Download</button>
            <button className="bg-gray-600 text-white px-3 py-1 text-sm rounded">Share</button>
          </div>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold">Frontend Developer</h1>
          <p className="text-lg text-gray-600">Step by step guide to becoming a modern frontend developer in 2025</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-2">
          <button className="px-4 py-2 bg-white border rounded shadow-sm">Roadmap</button>
          <button className="px-4 py-2 bg-white border rounded shadow-sm">Projects</button>
          <button className="px-4 py-2 bg-yellow-100 border rounded shadow-sm">
            AI Tutor <span className="text-red-600 font-bold ml-1">New</span>
          </button>
          <button className="px-4 py-2 bg-white border rounded shadow-sm">Suggest Changes</button>
        </div>

        {/* Progress */}
        <div className="flex justify-between items-center text-sm text-gray-700">
          <p>0% Done • 0 of 115 Done</p>
          <div className="space-x-2">
            <button className="text-blue-600 underline">Share Progress</button>
            <button className="text-blue-600 underline">Track Progress</button>
          </div>
        </div>

        {/* Intro Section */}
        <details className="bg-white border rounded shadow-sm text-sm leading-relaxed text-gray-700">
          <summary className="cursor-pointer px-4 py-2 bg-indigo-50 text-indigo-700 font-medium">
            What is Frontend Development?
          </summary>
          <div className="px-4 py-3 space-y-4">
            <p>
              A frontend developer is a professional who uses HTML, CSS, and JavaScript to design and build the visual and interactive elements of websites and applications that users engage with directly.
            </p>
            <h2 className="font-semibold text-base">What is the role of a Frontend Developer?</h2>
            <p>
              You'll be responsible for creating the user interface of a website to ensure it looks good and is easy to use, with great focus on design principles and user experience.
            </p>
            <h2 className="font-semibold text-base">Which languages are used?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>HTML</strong>: The structure of the webpage.</li>
              <li><strong>CSS</strong>: The styling and appearance.</li>
              <li><strong>JavaScript</strong>: The logic and interactivity.</li>
            </ul>
            <h2 className="font-semibold text-base">Skills Required</h2>
            <ul className="list-decimal list-inside space-y-1">
              <li>HTML, CSS & JavaScript</li>
              <li>Accessibility & Responsive Design</li>
              <li>Version Control (Git)</li>
              <li>RESTful APIs, Testing, Debugging</li>
              <li>Frameworks (React, Vue)</li>
              <li>Performance, SEO, TypeScript</li>
            </ul>
          </div>
        </details>

        {/* React Flow Graph */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1600px] min-h-[2000px]">
            <ReactFlow
              nodes={styledNodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              onNodeDragStop={(e, node) => {
                setNodes((nds) =>
                  nds.map((n) =>
                    n.id === node.id ? { ...n, position: node.position } : n
                  )
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
              className="
                [&_.react-flow__node]:touch-auto 
                [&_.react-flow__node]:overscroll-contain 
                [&_.react-flow__node]:cursor-default
              "
            >
              <Background color="#e0e0e0" gap={12} />
              <Controls />
            </ReactFlow>
          </div>
        </div>

        {/* Description Panel */}
        {selectedNode && (
          <div className="fixed sm:top-32 sm:right-4 sm:left-auto sm:translate-x-0 sm:w-96 inset-x-0 bottom-0 sm:inset-auto z-50 bg-white border sm:border-gray-300 sm:rounded-lg rounded-t-lg shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{selectedNode.data.label}</h2>
<div className="text-sm text-gray-700 leading-relaxed">
  {nodeDescriptions[selectedNode.id] || <p>No description available for this node.</p>}
</div>

              <button
                onClick={() => setSelectedNode(null)}
                className="mt-4 px-4 py-1 bg-gray-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* FAQ + Footer */}
        <div className="mt-16 sm:mt-20">
          <FaqSection />
        </div>
        <div className="h-10" />
      </div>
    </div>
  );
}
