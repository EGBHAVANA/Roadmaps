export const initialEdges = [


  { id: 'e-devops-os', source: 'devops', target: 'os', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e-os-learn-language', source: 'os', target: 'learn-language', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e-vcs-vcs-hosting', source: 'vcs-hosting', target: 'vcs', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e-vcs-hosting-containers', source: 'vcs-hosting', target: 'containers', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e-containers-terminal', source: 'containers', target: 'terminal', type: 'smoothstep', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e-containers-networking', source: 'containers', target: 'networking', type: 'step', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e-networking-network-protocols', source: 'networking', target: 'network-protocols', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e-networking-email-protocols', source: 'networking', target: 'email-protocols', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e-networking-cloud', source: 'networking', target: 'cloud-providers', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  // { id: 'e-cloud-serverless', source: 'cloud-providers', target: 'serverless-box', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  // { id: 'e-cloud-serverless', source: 'cloud-providers', target: 'serverless', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'cloud-providers-aws-lambda', source: 'cloud-providers', target: 'aws-lambda',type: 'bezier', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'e-serverless-provisioning', source: 'serverless', target: 'provisioning', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e-config-ci-cd', source: 'configuration-management', target: 'ci-cd', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e-provisioning-config', source: 'provisioning', target: 'configuration-management', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'logs-management-infrastructure', source: 'logs-management', target: 'infra-monitoring', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'ci-cd-secret-management', source: 'ci-cd', target: 'secret-management', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'logs-management→container-orchestrator', source: 'logs-management', target: 'container-orchestrator', type: 'step', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'container-orchestrator→application-monitoring', source: 'container-orchestrator', target: 'application-monitoring', type: 'step', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'artifact-management→gitops', source: 'artifact-management', target: 'gitops', type: 'step', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'application-monitoring→artifact-management', source: 'application-monitoring', target: 'artifact-management', type: 'step', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'gitops→service-mesh', source: 'gitops', target: 'service-mesh', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'service-mesh→cloud-design-patterns', source: 'service-mesh', target: 'cloud-design-patterns', type: 'bezier', style: { stroke: '#6366f1', strokeWidth: 2 } },

  //parent-child edges
 
  { id: 'os→os-windows', source: 'os', target: 'windows', type: 'step', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'os→os-box', source: 'os', target: 'os-group-box', type: 'bezier', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'learn-language→lang-python', source: 'learn-language', target: 'lang-python',  style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'learn-language→lang-ruby', source: 'learn-language', target: 'lang-ruby', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'learn-language→lang-go', source: 'learn-language', target: 'lang-go', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'learn-language→lang-js', source: 'learn-language', target: 'lang-js', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'learn-language→lang-rust', source: 'learn-language', target: 'lang-rust', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'terminal→editors', source: 'terminal', target: 'editors', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'terminal→bash', source: 'terminal', target: 'bash', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'terminal→powershell', source: 'terminal', target: 'powershell', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'terminal→process-monitoring', source: 'terminal', target: 'process-monitoring', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'terminal→performance-monitoring', source: 'terminal', target: 'performance-monitoring', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'terminal→networking-tools', source: 'terminal', target: 'networking-tools', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'terminal→text-manipulation', source: 'terminal', target: 'text-manipulation', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'vcs→git', source: 'vcs', target: 'git', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'github→vcs-hosting', source: 'github', target: 'vcs-hosting', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'gitlab→vcs-hosting', source: 'gitlab', target: 'vcs-hosting', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'bitbucket→vcs-hosting', source: 'bitbucket', target: 'vcs-hosting', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'setup-x→x-box', source: 'setup-x', target: 'x-box', type: 'step', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },

  { id: 'gray-log→logs-management', source: 'gray-log', target: 'logs-management', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'configuration-management→ansible', source: 'configuration-management',type:'step', target: 'ansible', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'configuration-management→chef', source: 'configuration-management',type:'step', target: 'chef', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'configuration-management→puppet', source: 'configuration-management',type:'step', target: 'puppet', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'jenkins→ci-cd', source: 'jenkins', target: 'ci-cd', type:'step',style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'circle-ci→ci-cd', source: 'circle-ci', target: 'ci-cd',type:'step', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'drone→ci-cd', source: 'drone', target: 'ci-cd',type:'step', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'github-actions→ci-cd', source: 'github-actions',type:'step', target: 'ci-cd', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'provisioning-aws-cdk', source: 'provisioning', target: 'aws-cdk', type: 'smoothstep', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'secret-management-artifactory', source: 'secret-management', target: 'artifactory', type: 'bezier', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'infra-monitoring-promethus-i' , source: 'infra-monitoring', target: 'prometheus-i', type: 'bezier', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },

  { id: 'sealed-secrets→secret-management', source: 'sealed-secrets', target: 'secret-management', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'vault→secret-management', source: 'vault', target: 'secret-management', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'cloud-spec-tools→secret-management', source: 'cloud-spec-tools', target: 'secret-management', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'gitops-flux-cd', source: 'gitops', target: 'flux-cd', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
   
  { id: 'container-orchestrator-gks/eks/aks', source: 'container-orchestrator',type:'step', target: 'gks/eks/aks', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'application-monitoring-jaeger', source: 'application-monitoring', target: 'jaeger', type: 'step', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'artifact-management-istio', source: 'artifact-management', target: 'istio', type: 'step', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  
  { id: 'availability→cloud-design-patterns', source: 'availability', target: 'cloud-design-patterns', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'data-management→cloud-design-patterns', source: 'data-management', target: 'cloud-design-patterns', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'design-and-implementation→cloud-design-patterns', source: 'design-and-implementation', target: 'cloud-design-patterns', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } },
  { id: 'management-and-monitoring→cloud-design-patterns', source: 'management-and-monitoring', target: 'cloud-design-patterns', style: { stroke: '#888', strokeDasharray: '4 2', strokeWidth: 1.5 } }







 





  

  
];


  


