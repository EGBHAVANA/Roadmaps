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
  { id: "backend", data: { label: "Backend" }, position: { x: 720, y: 0 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },

  { id: "internet", data: { label: "Internet" }, position: { x: 720, y: 100 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "right" },
  { id: "internet-1", data: { label: "How does the internet work?" }, position: { x: 1080, y: 100 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "internet-2", data: { label: "What is HTTP?" }, position: { x: 1080, y: 150 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "internet-3", data: { label: "What is Domain Name?" }, position: { x: 1080, y: 200 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "internet-4", data: { label: "What is hosting?" }, position: { x: 1080, y: 250 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "internet-5", data: { label: "DNS and how it works?" }, position: { x: 1080, y: 300 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "internet-6", data: { label: "Browsers and how they work?" }, position: { x: 1080, y: 350 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },

  { id: "pick-language", data: { label: "Pick a Language" }, position: { x: 460, y: 200 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "js", data: { label: "JavaScript" }, position: { x: -60, y: 100 }, style: { width: 170, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "python", data: { label: "Python" }, position: { x: -60, y: 150 }, style: { width: 170, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "java", data: { label: "Java" }, position: { x: -60, y: 200 }, style: { width: 170, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "php", data: { label: "PHP" }, position: { x: -60, y: 250 }, style: { width: 170, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "go", data: { label: "Go" }, position: { x: 120, y: 100 }, style: { width: 170, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "ruby", data: { label: "Ruby" }, position: { x: 120, y: 150 }, style: { width: 170, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "csharp", data: { label: "C#" }, position: { x: 120, y: 200 }, style: { width: 170, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "rust", data: { label: "Rust" }, position: { x: 120, y: 250 }, style: { width: 170, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "version-control", data: { label: "Version Control Systems" }, position: { x: 400, y: 400 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "git", data: { label: "Git" }, position: { x: 400, y: 350 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },


  { id: "gitlab", data: { label: "GitLab" }, position: { x: 100, y: 400 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "bitbucket", data: { label: "Bitbucket" }, position: { x: 100, y: 450 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "repo-hosting", data: { label: "Repo Hosting Services" }, position: { x: 100, y: 500 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },

  { id: "relational-db", data: { label: "Relational Databases" }, position: { x: 620, y: 700 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "right" },
  { id: "mysql", data: { label: "MySQL" }, position: { x: 1000, y: 600 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: 'left', targetPosition: "top" },
  { id: "mariadb", data: { label: "MariaDB" }, position: { x: 1000, y: 650 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "postgresql", data: { label: "PostgreSQL" }, position: { x: 1000, y: 700 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "mssql", data: { label: "MS SQL" }, position: { x: 1000, y: 750 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "oracle", data: { label: "Oracle" }, position: { x: 1000, y: 800 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "sqlite", data: { label: "SQLite" }, position: { x: 1000, y: 850 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },

  { id: "caching", data: { label: "Caching" }, position: { x: 200, y: 600 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "bottom" },
  { id: "redis", data: { label: "Redis" }, position: { x: -180, y: 600 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "memcached", data: { label: "Memcached" }, position: { x: -180, y: 650 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "left" },
  { id: 'server-side', data: { label: 'Server-Side' }, position: { x: -180, y: 700 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: 'right', targetPosition: 'top' },
  { id: 'CDN', data: { label: ' CDN' }, position: { x: -180, y: 750 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: 'right', targetPosition: 'top' },
  { id: 'client-side', data: { label: 'Client-Side' }, position: { x: -180, y: 800 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: 'right', targetPosition: 'top' },

  { id: "learn-apis", data: { label: "Learn about APIs" }, position: { x: 80, y: 950 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "rest", data: { label: "REST" }, position: { x: 80, y: 1050 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "graphql", data: { label: "GraphQL" }, position: { x: 80, y: 1100 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "grpc", data: { label: "gRPC" }, position: { x: 80, y: 1150 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "soap", data: { label: "SOAP" }, position: { x: 80, y: 1200 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "json-api", data: { label: "JSON API" }, position: { x: 80, y: 1250 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "openapi", data: { label: "OpenAPI Spec" }, position: { x: 80, y: 1300 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  
  { id: "auth-group", data: { label: "🛡 Authentication" }, position: { x: 1010, y: 940 }, style: { width: 280, height: 430, border: "2px dashed #999", borderRadius: 12, background: "#f9fafb", padding: 10 }, type: "group" },

  { id: "authentication", data: { label: "Authentication" }, position: { x: 1040, y: 960 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "left" },
  { id: "jwt", data: { label: "JWT" }, position: { x: 1040, y: 1050 }, style: { width: 100, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "oauth", data: { label: "OAuth" }, position: { x: 1160, y: 1050 }, style: { width: 100, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "basic-auth", data: { label: "Basic Authentication" }, position: { x: 1040, y: 1100 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "token-auth", data: { label: "Token Authentication" }, position: { x: 1040, y: 1150 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "cookie-auth", data: { label: "Cookie-based Auth" }, position: { x: 1040, y: 1200 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "openid", data: { label: "OpenID" }, position: { x: 1040, y: 1250 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "saml", data: { label: "SAML" }, position: { x: 1040, y: 1300 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },

  { id: "testing", data: { label: "Testing" }, position: { x: 400, y: 1500 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "right" },
  { id: "unit-testing", data: { label: "Unit Testing" }, position: { x: 780, y: 1500 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "integration-testing", data: { label: "Integration Testing" }, position: { x: 780, y: 1550 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "functional-testing", data: { label: "Functional Testing" }, position: { x: 780, y: 1600 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },

  { id: "web-security", data: { label: "Web Security" }, position: { x: 130, y: 1500 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "left" },
  { id: "bcrypt", data: { label: "bcrypt" }, position: { x: -180, y: 1400 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "scrypt", data: { label: "scrypt" }, position: { x:-180, y: 1450 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "sha", data: { label: "SHA" }, position: { x: -180, y: 1500 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "md5", data: { label: "MD5" }, position: { x: -180, y: 1550 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },

  { id: 'ci/cd', data: { label: 'CI/CD' }, position: { x: 400, y: 1600 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
 
  { id: "database-internals", data: { label: "Database Internals" }, position: { x: 400, y: 1900 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "right" },
  { id: "acid", data: { label: "ACID" }, position: { x: 800, y: 1850 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "transactions", data: { label: "Transactions" }, position: { x: 800, y: 1900 }, style: { width: 110, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "migrations", data: { label: "Migrations" }, position: { x: 920, y: 1900 }, style: { width: 110, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "n+1", data: { label: "N+1 Problem" }, position: { x: 800, y: 1950 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "profiling", data: { label: "Profiling & Performance" }, position: { x: 800, y: 2000 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "normalization", data: { label: "Normalization" }, position: { x: 800, y: 2050 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "scaling-databases", data: { label: "Scaling Databases" }, position: { x: 100, y: 1900 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "left" },
  { id: "indexes", data: { label: "Database Indexes" }, position: { x: -200, y: 1850 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "replication", data: { label: "Data Replication" }, position: { x: -200, y: 1900 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "sharding", data: { label: "Sharding Strategies" }, position: { x: -200, y: 1950 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "cap", data: { label: "CAP Theorem" }, position: { x: -200, y: 2000 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },

  { id: "software-architecture", data: { label: "Software Design & Architecture" }, position: { x: 400, y: 2200 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },

  { id: "design-and-development", data: { label: "Design & Development Principles" }, position: { x: 400, y: 2250 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "left" },
  { id: "gof", data: { label: "GOF Design Patterns" }, position: { x: 100, y: 2200 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "ddd", data: { label: "Domain Driven Design" }, position: { x: 100, y: 2250 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "tdd", data: { label: "Test Driven Development" }, position: { x: 100, y: 2300 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "cqrs", data: { label: "CQRS" }, position: { x: 100, y: 2350 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
  { id: "event-sourcing", data: { label: "Event Sourcing" }, position: { x: 100, y: 2400 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },

  { id: "architecture-patterns", data: { label: "Architectural Patterns" }, position: { x: 700, y: 2200 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "right" },
  { id: "monolith", data: { label: "Monolithic Apps" }, position: { x: 1000, y: 2150 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "microservices", data: { label: "Microservices" }, position: { x: 1000, y: 2200 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "soa", data: { label: "SOA" }, position: { x: 1000, y: 2250 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "serverless", data: { label: "Serverless" }, position: { x: 1000, y: 2300 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "service-mesh", data: { label: "Service Mesh" }, position: { x: 1000, y: 2350 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  { id: "twelve-factor", data: { label: "Twelve Factor Apps" }, position: { x: 1000, y: 2400 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "left", targetPosition: "top" },
  
 { id: "docker", data: { label: "Docker " }, position: { x: 600, y: 2550 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
 { id: "lxc", data: { label: "LXC" }, position: { x: 600, y: 2600 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
 { id: "container-vs-vm", data: { label: "Containerization vs Virtualization" }, position: { x: 550, y: 2700 }, style: { width: 300, ...parentNodeStyleProps }, sourcePosition: "bottom", targetPosition: "left" },
 { id: "kubernetes", data: { label: "Kubernetes" }, position: { x: 300, y: 2700 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },

 {id: 'web-servers', data: { label: 'Web Servers' }, position: { x: 400, y: 2900 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'left' },
 { id: "nginx", data: { label: "Nginx" }, position: { x: 100, y: 2850 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
 { id: "apache", data: { label: "Apache" }, position: { x: 100, y: 2900 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
 { id: "iis", data: { label: " MS IIS" }, position: { x: 100, y: 2950 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "right", targetPosition: "top" },
 { id: 'caddy', data: { label: 'Caddy' }, position: { x: 100, y: 3000 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: 'right', targetPosition: 'top' },
  
  { id: "search-group", data: { label: "🔎 Search Engines" }, position: { x: 680, y: 2880 }, style: { width: 260, height: 180, border: "2px dashed #999", borderRadius: 12, background: "#f9fafb", padding: 10 }, type: "group" },
  { id: 'search-engines', data: { label: 'Search Engines' }, position: { x: 700, y: 2900 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: "elasticsearch", data: { label: "Elasticsearch" }, position: { x: 700, y: 2950 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "solr", data: { label: "Solr" }, position: { x: 700, y: 3000 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },

  
  { id: "message-group", data: { label: "🔎 Message Brokers" }, position: { x: 1080, y: 2880 }, style: { width: 260, height: 180, border: "2px dashed #999", borderRadius: 12, background: "#f9fafb", padding: 10 }, type: "group" },
  { id: 'message-brokers', data: { label: 'Message Brokers' }, position: { x: 1100, y: 2900 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: "rabbitmq", data: { label: " Rabbit MQ" }, position: { x: 1100, y: 2950 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
  { id: "Kafka", data: { label: "Kafka" }, position: { x: 1100, y: 3000 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },

  { id: 'real-time-data' , data: { label: 'Real-time Data' }, position: { x: 600, y: 3200 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'right' },
  { id: 'server-sent-events', data: { label: 'Server-Sent Events' }, position: { x: 900, y: 3200 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: 'left', targetPosition: 'top' },
  { id: 'websockets', data: { label: 'WebSockets' }, position: { x: 900, y: 3250 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: 'left', targetPosition: 'top' },
  { id: 'long-polling', data: { label: 'Long Polling' }, position: { x: 900, y: 3300 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: 'left', targetPosition: 'top' },
  { id: 'event-streaming', data: { label: 'Event Streaming' }, position: { x: 900, y: 3350 }, style: { width: 220, ...baseNodeStyleProps }, sourcePosition: 'left', targetPosition: 'top' },

  {id: 'graphql', data: { label: 'GraphQL' }, position: { x: 600, y: 3300 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },

  { id: 'nosql-databases', data: { label: 'NoSQL Databases' }, position: { x: 400, y: 3550 }, style: { width: 220, ...parentNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },

  { id: "nosql-group-1", data: { label: "NoSQL: DocDBs" }, position: { x: 50, y: 3410 }, style: { width: 130, height: 120, border: "2px dashed #999", borderRadius: 12, background: "#f9fafb", padding: 10 }, type: "group" },
  { id: "mongodb", data: { label: "MongoDB" }, position: { x: 70, y: 3430 }, style: { width: 100,...baseNodeStyleProps } },
  { id: "couchdb", data: { label: "CouchDB" }, position: { x: 70, y: 3480 }, style: { width:100,...baseNodeStyleProps } },

 

  { id: "nosql-group-2", data: { label: "Key-Value Stores" }, position: { x: 190, y: 3410 }, style: { width: 130, height: 120, border: "2px dashed #999", borderRadius: 12, background: "#f9fafb", padding: 10 }, type: "group" },
  
  { id: "dynamodb", data: { label: "DynamoDB" }, position: { x: 200, y: 3430 }, style: { width: 100,...baseNodeStyleProps } },
  { id: "redis-group", data: { label: "Redis" }, position: { x: 200, y: 3480 }, style: { width: 100,...baseNodeStyleProps } },



  { id: "nosql-group-3", data: { label: "Realtime DBs" }, position: { x: 50, y: 3560 }, style: { width: 130, height: 120, border: "2px dashed #999", borderRadius: 12, background: "#f9fafb", padding: 10 }, type: "group" },
  { id: "firebase", data: { label: "Firebase" }, position: { x: 70, y: 3580 }, style: { width: 100,...baseNodeStyleProps } },
  { id: "rethinkdb", data: { label: "RethinkDB" }, position: { x: 70, y: 3630 }, style: { width: 100,...baseNodeStyleProps } },

  { id: "nosql-group-4", data: { label: "Time Series DBs" }, position: { x: 50, y: 3700 }, style: { width: 130, height: 120, border: "2px dashed #999", borderRadius: 12, background: "#f9fafb", padding: 10 }, type: "group" },
  { id: "influxdb", data: { label: "Influx DB" }, position: { x: 70, y: 3720 }, style: { width: 100,...baseNodeStyleProps } },
  { id: "timescale", data: { label: "TimeScale" }, position: { x: 70, y: 3770 }, style: { width: 100,...baseNodeStyleProps } },

  { id: "nosql-group-5a", data: { label: "Column DBs" }, position: { x: 190, y: 3700 }, style: { width: 140, height: 120, border: "2px dashed #999", borderRadius: 12, background: "#f9fafb", padding: 10 }, type: "group" },
  { id: "cassandra", data: { label: "Cassandra" }, position: { x: 200, y: 3720 }, style: {width: 100, ...baseNodeStyleProps } },
  { id: "base", data: { label: "Base" }, position: { x: 200, y: 3770 }, style: { width: 100,...baseNodeStyleProps } },
 
  { id: "nosql-group-5b", data: { label: "Graph DBs" }, position: { x: 340, y: 3700 }, style: { width: 190, height: 120, border: "2px dashed #999", borderRadius: 12, background: "#f9fafb", padding: 10 }, type: "group" },

  { id: "neo4j", data: { label: "Neo4j" }, position: { x: 350, y: 3720 }, style: { width: 150,...baseNodeStyleProps } },
  { id: "aws-neptune", data: { label: "AWS Neptune" }, position: { x: 350, y: 3770 }, style: { width: 150,...baseNodeStyleProps } },

  { id: 'basic-infrastructure', data: { label: 'Basic Infrastructure Knowledge' }, position: { x: 100, y: 3900 }, style: { width: 300, ...parentNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id:'building-for-scale', data: { label: 'Building for Scale' }, position: { x: 500, y: 3900 }, style: { width: 300, ...parentNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: 'Migration-Strategies', data: { label: 'Mitigation Strategies' }, position: { x: 900, y: 3900 }, style: { width: 300, ...baseNodeStyleProps }, sourcePosition: 'left', targetPosition: 'top' },
  { id:'types-of-scaling', data: { label: 'Types of Scaling' }, position: { x: 900, y: 3950 }, style: { width: 300, ...baseNodeStyleProps }, sourcePosition: 'left', targetPosition: 'top' },

  // { id: "mitigation-group", data: { label: "" }, position: { x: 880, y: 3480 }, style: { width: 340, height: 270, border: "2px dashed #999", borderRadius: 12, background: "#f9fafb", padding: 10 }, type: "group" },
  // { id:'graceful-degradation', data: { label: 'Graceful Degradation' }, position: { x: 900, y: 3500 }, style: { width: 300, ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
  // { id: 'throttling', data: { label: 'Throttling' }, position: { x: 900, y: 3550 }, style: { width: 300, ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
  // { id:'back-pressure', data: { label: 'Back Pressure' }, position: { x: 900, y: 3600 }, style: { width: 300, ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
  // { id: 'load-shifting', data: { label: 'Load Shifting' }, position: { x: 900, y: 3650 }, style: { width: 300, ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
  // { id: 'circuit-breakers', data: { label: 'Circuit Breakers' }, position: { x: 900, y: 3700 }, style: { width: 300, ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },

  { id: "mitigation-group", data: { label: "" }, position: { x: 880, y: 3480 }, style: { width: 340, height: 400, border: "2px dashed #999", borderRadius: 12, background: "#f9fafb", padding: 10 }, type: "group" },
{ id: "graceful-degradation", data: { label: "Graceful Degradation" }, position: { x: 20, y: 20 }, parentNode: "mitigation-group", extent: "parent", style: { width: 300, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
{ id: "throttling", data: { label: "Throttling" }, position: { x: 20, y: 70 }, parentNode: "mitigation-group", extent: "parent", style: { width: 300, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
{ id: "back-pressure", data: { label: "Back Pressure" }, position: { x: 20, y: 120 }, parentNode: "mitigation-group", extent: "parent", style: { width: 300, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
{ id: "load-shifting", data: { label: "Load Shifting" }, position: { x: 20, y: 170 }, parentNode: "mitigation-group", extent: "parent", style: { width: 300, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
{ id: "circuit-breakers", data: { label: "Circuit Breakers" }, position: { x: 20, y: 220 }, parentNode: "mitigation-group", extent: "parent", style: { width: 300, ...baseNodeStyleProps }, sourcePosition: "bottom", targetPosition: "top" },
{ id: "mitigation-title", data: { label: "🛡️ Mitigation Strategies" }, position: { x: 60, y: 320 }, parentNode: "mitigation-group", extent: "parent", style: { width: 220, fontWeight: "bold", fontSize: 14, textAlign: "center", background: "transparent", border: "none", boxShadow: "none" }, draggable: false },


  { id : 'instrumentation', data: { label: 'Instrumentation' }, position: { x: 500, y: 4100 }, style: { width: 300, ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id : 'monitoring', data: { label: 'Monitoring' }, position: { x: 500, y: 4150 }, style: { width: 300, ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id : 'telmetry', data: { label: 'Telemetry' }, position: { x: 500, y: 4200 }, style: { width: 300, ...baseNodeStyleProps }, sourcePosition: 'bottom', targetPosition: 'top' },
  
  
];


