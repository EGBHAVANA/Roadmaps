

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
  { id: 'devops', data: { label: 'DevOps' }, position: { x: 500, y: 30 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'bottom' },
  { id: 'learn-language', data: { label: 'Learn a Programming Language' }, position: { x: 680, y: 180 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'right' },
  { id: 'lang-python', data: { label: 'Python' }, position: { x: 980, y: 100 }, style: { ...baseNodeStyleProps, width: 200 }, targetPosition: 'left', sourcePosition: 'right' },
  { id: 'lang-ruby', data: { label: 'Ruby' }, position: { x: 980, y: 150 }, style: { ...baseNodeStyleProps, width: 200 }, targetPosition: 'left', sourcePosition: 'left' },
  { id: 'lang-go', data: { label: 'Go' }, position: { x: 980, y: 200 }, style: { ...baseNodeStyleProps, width: 200 }, targetPosition: 'left', sourcePosition: 'right' },
  { id: 'lang-js', data: { label: 'JavaScript / Node.js' }, position: { x: 980, y: 250 }, style: { ...baseNodeStyleProps, width: 200 }, targetPosition: 'left', targetPosition: 'left' },
  { id: 'lang-rust', data: { label: 'Rust' }, position: { x: 980, y: 300 }, style: { ...baseNodeStyleProps, width: 200 }, targetPosition: 'left', sourcePosition: 'right' },
  { id: 'os', data: { label: 'Operating Systems' }, position: { x: 280, y: 180 }, style: { ...parentNodeStyleProps, width: 240 }, sourcePosition: 'right', targetPosition: 'top' },
  { id: 'windows', data: { label: 'Windows' }, position: { x: 80, y: 180 }, style: { ...baseNodeStyleProps, width: 180 }, targetPosition: 'right' },
  { id: 'os-group-box', data: { label: '🐧 Unix / Linux' }, position: { x: 180, y: 280 }, style: { width: 340, height: 260, backgroundColor: '#f0f7ff', border: '2px dashed #90caf9', borderRadius: 16, zIndex: 0, fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 10 }, draggable: false, selectable: false, positionAbsolute: true },
  { id: 'linux', data: { label: 'Linux' }, position: { x: 200, y: 320 }, style: { ...baseNodeStyleProps, width: 140 }, targetPosition: 'top', sourcePosition: 'bottom', positionAbsolute: true },
  { id: 'ubuntu', data: { label: 'Ubuntu / Debian' }, position: { x: 200, y: 370 }, style: { ...baseNodeStyleProps, width: 140 }, targetPosition: 'top', positionAbsolute: true },
  { id: 'rhel', data: { label: 'RHEL / Derivatives' }, position: { x: 200, y: 420 }, style: { ...baseNodeStyleProps, width: 140 }, targetPosition: 'top', positionAbsolute: true },
  { id: 'suse', data: { label: 'SUSE Linux' }, position: { x: 200, y: 470 }, style: { ...baseNodeStyleProps, width: 140 }, targetPosition: 'top', positionAbsolute: true },
  { id: 'unix', data: { label: 'Unix' }, position: { x: 360, y: 320 }, style: { ...baseNodeStyleProps, width: 140 }, targetPosition: 'top', sourcePosition: 'bottom', positionAbsolute: true },
  { id: 'freebsd', data: { label: 'FreeBSD' }, position: { x: 360, y: 370 }, style: { ...baseNodeStyleProps, width: 140 }, targetPosition: 'top', positionAbsolute: true },
  { id: 'openbsd', data: { label: 'OpenBSD' }, position: { x: 360, y: 420 }, style: { ...baseNodeStyleProps, width: 140 }, targetPosition: 'top', positionAbsolute: true },
  { id: 'netbsd', data: { label: 'NetBSD' }, position: { x: 360, y: 470 }, style: { ...baseNodeStyleProps, width: 140 }, targetPosition: 'top', positionAbsolute: true },
  {id: 'terminal', data: { label: 'Learn to live in Terminal' }, position: { x: 854, y: 461 }, style: { ...parentNodeStyleProps, width: 240 }, sourcePosition: 'right', targetPosition: 'left' },
  { id: 'editors', data: { label: 'Vim/Nano/Emacs' }, position: { x: 590, y: 461 }, style: { ...baseNodeStyleProps, width: 180 }, sourcePosition: 'right', targetPosition: 'left' },
  { id: 'bash', data: { label: 'Bash Scripting' }, position: { x: 790, y: 400 }, style: { ...baseNodeStyleProps, width: 160 }, sourcePosition: 'bottom', targetPosition: 'bottom' },
  { id: 'powershell', data: { label: 'Power Shell' }, position: { x: 992, y: 400 }, style: { ...baseNodeStyleProps, width: 160 }, sourcePosition: 'bottom', targetPosition: 'bottom' },
  { id: 'process-monitoring', data: { label: 'Process Monitoring' }, position: { x: 1270, y: 370 }, style: { ...baseNodeStyleProps, width: 180 }, targetPosition: 'left' },
  { id: 'performance-monitoring', data: { label: 'Performance Monitoring' }, position: { x: 1270, y: 420 }, style: { ...baseNodeStyleProps, width: 180 }, targetPosition: 'left' },
  
  
  { id: 'networking-tools', data: { label: 'Networking Tools' }, position: { x: 1270, y: 472 }, style: { ...baseNodeStyleProps, width: 180 }, targetPosition: 'left' },
  { id: 'text-manipulation', data: { label: 'Text Manipulation' }, position: { x: 1270, y: 523 }, style: { ...baseNodeStyleProps, width: 180 }, targetPosition: 'left' },
  { id: 'git', data: { label: 'Git' }, position: { x: 100, y: 570 }, style: { ...baseNodeStyleProps, width: 140 }, sourcePosition: 'right',targetPosition: 'right' },
  { id: 'vcs', data: { label: 'Version Control Systems' }, position: { x: 300, y: 570 }, style: { ...parentNodeStyleProps, width: 200 }, targetPosition: 'bottom', sourcePosition: 'left' },

  { id: 'github', data: { label: 'GitHub' }, position: { x: 100, y: 630 }, style: { ...baseNodeStyleProps, width: 140 }, sourcePosition: 'right' },
  { id: 'gitlab', data: { label: 'GitLab' }, position: { x: 100, y: 680 }, style: { ...baseNodeStyleProps, width: 140 }, sourcePosition: 'right' },
  { id: 'bitbucket', data: { label: 'Bitbucket' }, position: { x: 100, y: 730 }, style: { ...baseNodeStyleProps, width: 140 }, sourcePosition: 'right' },

  { id: 'vcs-hosting', data: { label: 'VCS Hosting' }, position: { x: 300, y: 700 }, style: { ...parentNodeStyleProps, width: 180 }, targetPosition: 'left', sourcePosition: 'right' },
  { id: 'docker', data: { label: 'Docker' }, position: { x: 600, y: 670 }, style: { ...baseNodeStyleProps, width: 140 } },
  { id: 'lxc', data: { label: 'LXC' }, position: { x: 600, y: 720 }, style: { ...baseNodeStyleProps, width: 140 } },
  { id: 'containers', data: { label: 'Containers' }, position: { x: 600, y: 770 }, style: { ...parentNodeStyleProps, width: 140 }, targetPosition: 'left' },
  { id: 'setup-x', data: { label: 'What is and how to setup X ?' }, position: { x: 1100, y: 630 }, style: { ...parentNodeStyleProps, width: 220 }, targetPosition: 'top' },
  { id: 'x-box', data: { label: 'Web Browsers' }, position: { x: 1090, y: 700 }, style: { width: 250, height: 190, backgroundColor: '	#f0f7ff', border: '2px dashed #90caf9', borderRadius: 16, zIndex: 0, fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 10 }, draggable: false, selectable: false, positionAbsolute: true },
  { id: 'nginx', data: { label: 'Nginx' }, position: { x: 1100, y: 730 }, style: { ...baseNodeStyleProps, width: 110 }, positionAbsolute: true },
  { id: 'caddy', data: { label: 'Caddy' }, position: { x: 1210, y: 730 }, style: { ...baseNodeStyleProps, width: 110 }, positionAbsolute: true },
  { id: 'tomcat', data: { label: 'Tomcat' }, position: { x: 1100, y: 780 }, style: { ...baseNodeStyleProps, width: 110 }, positionAbsolute: true },
  { id: 'apache', data: { label: 'Apache' }, position: { x: 1210, y: 780 }, style: { ...baseNodeStyleProps, width: 110 }, positionAbsolute: true },
  { id: 'iis', data: { label: 'IIS' }, position: { x: 1100, y: 830 }, style: { ...baseNodeStyleProps, width: 220 }, positionAbsolute: true },
  { id: 'networking', data: { label: 'Networking & Protocols' }, position: { x: 500, y: 950 }, style: { ...parentNodeStyleProps, width: 220},sourcePosition:'bottom',targetPosition:'right'  },
  
  { id: 'cloud-group-box', data: { label: 'Cloud' }, position: { x: 480, y: 1070 }, style: { width: 260, height: 390, backgroundColor: '	#f0f7ff', border: '2px dashed #90caf9', borderRadius: 12,padding: 10 }, type: 'group', draggable: false, selectable: false, positionAbsolute: true },
  { id: 'cloud-providers', data: { label: 'Cloud Providers' }, position: { x: 500, y: 1100 }, style: { ...parentNodeStyleProps, width: 220 } },
  { id: 'aws', data: { label: 'AWS' }, position: { x: 500, y: 1150 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: 'azure', data: { label: 'Azure' }, position: { x: 610, y: 1150 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: 'google-cloud', data: { label: 'Google Cloud' }, position: { x: 500, y: 1200 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: 'digital-ocean', data: { label: 'Digital Ocean' }, position: { x: 500, y: 1250 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: 'alibaba-cloud', data: { label: 'Alibaba Cloud' }, position: { x: 500, y: 1300 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: 'hetzner', data: { label: 'Hetzner' }, position: { x: 500, y: 1350 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: 'contabo', data: { label: 'Contabo' }, position: { x: 610, y: 1350 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'bottom', targetPosition: 'top' } ,
  { id: 'heroku', data: { label: 'Heroku' }, position: { x: 500, y: 1400 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top' } ,

{ id: 'network-protocols', data: { label: '🌐 Network Protocols' }, position: { x: 80, y: 800 }, style: { width: 350, height: 250, backgroundColor: '	#f0f7ff', border: '2px dashed #90caf9', borderRadius: 12, padding: 10 }, type: 'group', draggable: false, selectable: false, positionAbsolute: true },
{ id: 'ftp-sftp', data: { label: 'FTP / SFTP' }, position: { x: 100, y: 830 }, style: {width:150, ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
{ id: 'dns', data: { label: 'DNS' }, position: { x: 260, y: 830 }, style: { width:150, ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
{ id: 'http', data: { label: 'HTTP' }, position: { x: 100, y: 880 }, style: { ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
{ id: 'https', data: { label: 'HTTPS' }, position: { x: 260, y: 880 }, style: { ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
{ id: 'ssl-tls', data: { label: 'SSL / TLS' }, position: { x: 100, y: 930 }, style: { ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
{ id: 'ssh', data: { label: 'SSH' }, position: { x: 260, y: 930 }, style: { ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
{ id: 'osi-model', data: { label: 'OSI Model' }, position: { x: 100, y: 980 }, style: { ...baseNodeStyleProps, width: 300 }, sourcePosition: 'bottom', targetPosition: 'top' },


{ id: 'email-protocols', data: { label: '📧 Email Protocols' }, position: { x: 80, y: 1050 }, style: { width: 350, height: 300, backgroundColor: '#f0f7ff', border: '2px dashed #90caf9', borderRadius: 16, zIndex: 0, fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 10 }, draggable: false, selectable: false, positionAbsolute: true },

{ id: 'white-grey-listing', data: { label: 'White / Grey Listing' }, position: { x: 100, y: 1100 }, style: {width:300, ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'smtp', data: { label: 'SMTP' }, position: { x: 100, y: 1150 }, style: { ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'dmarc', data: { label: 'DMARC' }, position: { x: 260, y: 1150 }, style: { ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'imap', data: { label: 'IMAP' }, position: { x: 100, y: 1200 }, style: { ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'spf', data: { label: 'SPF' }, position: { x: 260, y: 1200 }, style: { ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' ,positionAbsolute: true},
{ id: 'pop3s', data: { label: 'POP3S' }, position: { x: 100, y: 1250 }, style: { width:300,...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' ,positionAbsolute: true},
{ id: 'domain-keys', data: { label: 'Domain Keys' }, position: { x: 100, y: 1300 }, style: { width:300,...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true},

{ id: 'serverless-box', data: { label: 'Serverless-Box' }, position: { x: 980, y: 1040 }, style: { width: 340, height: 400, border: '2px dashed #90caf9', borderRadius: 12, background: '#f0f7ff', padding: 10 }, type: 'group', draggable: false, selectable: false, positionAbsolute: true },
{ id: 'serverless', data: { label: 'Serverless' }, position: { x: 1000, y: 1070 }, style: { width:300,...parentNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true},
{ id: 'aws-lambda', data: { label: 'AWS Lambda' }, position: { x: 1040, y: 1130 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'azure-functions', data: { label: 'Azure Functions' }, position: { x: 1040, y: 1180 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'cloudfare' ,data: { label: 'Cloudflare ' }, position: { x: 1040, y: 1230 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'google-cloud-functions', data: { label: 'Google Cloud Functions' }, position: { x: 1040, y: 1280 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'vercel', data: { label: 'Vercel' }, position: { x: 1040, y: 1330 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'netlify', data: { label: 'Netlify' }, position: { x: 1040, y: 1380 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },

{ id: 'cloud-formation', data: { label: 'CloudFormation' }, position: { x: 1040, y: 1180 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'pulumi', data: { label: 'Pulumi' }, position: { x: 1040, y: 1230 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'terraform', data: { label: 'Terraform' }, position: { x: 1040, y: 1280 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },

{ id: 'papertal' , data: { label: 'PaperTAL' }, position: { x: 100, y: 1430 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'splunk' , data: { label: 'Splunk' }, position: { x: 100, y: 1480 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'loki' , data: { label: 'Loki' }, position: { x: 100, y: 1530 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id:'elastic-stack', data: { label: 'Elastic Stack' }, position: { x: 100, y: 1580 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'gray-log' , data: { label: 'Graylog' }, position: { x: 100, y: 1630 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'logs-management' ,data: { label: 'Logs Management' }, position: { x: 100, y: 1750 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },

{ id: 'ansible', data: { label: 'Ansible' }, position: { x: 400, y: 1480 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'right',positionAbsolute: true },
{ id: 'chef', data: { label: 'Chef' }, position: { x: 400, y: 1530 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'right',positionAbsolute: true },
{ id: 'puppet', data: { label: 'Puppet' }, position: { x: 400, y: 1580 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'right',positionAbsolute: true },

{ id: 'configuration-management', data: { label: 'Configuration Management' }, position: { x: 700, y: 1530 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'right',positionAbsolute: true },

{ id: 'provisioning' , data: { label: 'Provisioning' }, position: { x: 1000, y: 1530 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'left', targetPosition: 'top',positionAbsolute: true },
{ id: 'aws-cdk', data: { label: 'AWS CDK' }, position: { x: 1000, y: 1650}, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'cloudformation', data: { label: 'CloudFormation' }, position: { x: 1000, y: 1700 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'pulumi', data: { label: 'Pulumi' }, position: { x: 1000, y: 1750 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'terraform', data: { label: 'Terraform' }, position: { x: 1000, y: 1800 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },

{ id: 'team-city' , data: { label: 'Team City' }, position: { x: 400, y: 1700 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'jenkins', data: { label: 'Jenkins' }, position: { x: 520, y: 1700 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },
{ id: 'travis-ci', data: { label: 'Travis CI' }, position: { x: 400, y: 1750 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },
{ id: 'circle-ci', data: { label: 'Circle CI' }, position: { x: 520, y: 1750 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },
{ id: 'gitlab-ci', data: { label: 'GitLab CI' }, position: { x: 400, y: 1800 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },
{ id: 'drone', data: { label: 'Drone' }, position: { x: 520, y: 1800 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },
{ id: 'github-actions', data: { label: 'GitHub Actions' }, position: { x: 400, y: 1850 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },

{ id: 'ci-cd', data: { label: 'CI/CD Tools' }, position: { x: 700, y: 1770 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },

{ id: 'infra-monitoring', data: { label: 'Infrastructure Monitoring' }, position: { x: 400, y: 2000 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'prometheus-i', data: { label: 'Prometheus' }, position: { x: 400, y: 2100 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'grafana-i', data: { label: 'Grafana' }, position: { x: 400, y: 2150 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'zabbix-i', data: { label: 'Zabbix' }, position: { x: 400, y: 2200 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'datadog-i', data: { label: 'Datadog' }, position: { x: 510, y: 2200 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },


{ id: 'secret-management', data: { label: 'Secret Management' }, position: { x: 700, y: 2000 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'sealed-secrets', data: { label: 'Sealed Secrets' }, position: { x: 1000, y: 1950 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'left', targetPosition: 'top',positionAbsolute: true },
{ id: 'vault', data: { label: 'Vault' }, position: { x: 1000, y: 2000 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'left', targetPosition: 'top',positionAbsolute: true },
{ id: 'sop', data: { label: 'SOPs' }, position: { x: 1110, y: 2000 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'left', targetPosition: 'top',positionAbsolute: true },
{ id: 'cloud-spec-tools',data: {label: 'Cloud Spec Tools' }, position: { x: 1000, y: 2050 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'left', targetPosition: 'top',positionAbsolute: true },
{ id: 'artifactory', data: { label: 'Artifactory' }, position: { x: 700, y: 2100 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'nexus', data: { label: 'Nexus' }, position: { x: 700, y: 2150 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'cloud-smith', data: { label: 'Cloud Smith' }, position: { x: 700, y: 2200 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },

{ id: 'argo-cd', data: { label: 'Argo CD' }, position: { x: 1000, y: 2150 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'flux-cd', data: { label: 'Flux CD' }, position: { x: 1000, y: 2200 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'gitops', data: { label: 'GitOps' }, position: { x: 1000, y: 2350 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'left',positionAbsolute: true },

{ id: 'artifact-management', data: { label: 'Artifact Management' }, position: { x: 700, y: 2350 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'left',positionAbsolute: true },
{ id: 'istio' , data: { label: 'Istio' }, position: { x: 750, y: 2450 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'consul', data: { label: 'Consul' }, position: { x: 750, y: 2500 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'linkerd', data: { label: 'Linkerd' }, position: { x: 750, y: 2550 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id:'envoy', data: { label: 'Envoy' }, position: { x: 750, y: 2600 }, style: { ...baseNodeStyleProps, width: 110 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },


{ id: 'application-monitoring', data: { label: 'Application Monitoring' }, position: { x: 400, y: 2350 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'left',positionAbsolute: true },
{ id: 'jaeger' ,data: { label: 'Jaeger' }, position: { x: 420, y: 2450 }, style: { ...baseNodeStyleProps, width: 200 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id:'new-relic', data: { label: 'New Relic' }, position: { x: 420, y: 2500 }, style: { ...baseNodeStyleProps, width: 200 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'data-dog', data: { label: 'Datadog' }, position: { x: 420, y: 2550 }, style: { ...baseNodeStyleProps, width: 200 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'prometheus', data: { label: 'Prometheus' }, position: { x: 420, y: 2600 }, style: { ...baseNodeStyleProps, width: 200 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'grafana', data: { label: 'Grafana' }, position: { x: 420, y: 2650 }, style: { ...baseNodeStyleProps, width: 200 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },


{ id: 'container-orchestrator', data: { label: 'Container Orchestrator' }, position: { x: 100, y: 2350 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },
{ id: 'gks/eks/aks', data: { label: 'GKS/EKS/AKS' }, position: { x: 120, y: 2450 }, style: { ...baseNodeStyleProps, width: 200 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'aws-ecs', data: { label: 'AWS ECS' }, position: { x: 120, y: 2500 }, style: { ...baseNodeStyleProps, width: 200 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'docker-swamp', data: { label: 'Docker Swamp' }, position: { x: 120, y: 2550 }, style: { ...baseNodeStyleProps, width: 200 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },
{ id: 'kubernetes', data: { label: 'Kubernetes' }, position: { x: 120, y: 2600 }, style: { ...baseNodeStyleProps, width: 200 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },

{id: 'availability', data: { label: 'Availability' }, position: { x: 100, y: 2700 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },
{ id: 'data-management', data: { label: 'Data Management' }, position: { x: 100, y: 2750 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },
{ id: 'design-and-implementation', data: { label: 'Design and Implementation' }, position: { x: 100, y: 2800 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },
{ id: 'management-and-monitoring', data: { label: 'Management and Monitoring' }, position: { x: 100, y: 2850 }, style: { ...baseNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },
{ id: 'cloud-design-patterns', data: { label: 'Cloud Design Patterns' }, position: { x: 500, y: 2770 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'right', targetPosition: 'top',positionAbsolute: true },

{ id: 'service-mesh', data: { label: 'Service Mesh' }, position: { x: 1000, y: 2500 }, style: { ...parentNodeStyleProps, width: 220 }, sourcePosition: 'bottom', targetPosition: 'top',positionAbsolute: true },



];
