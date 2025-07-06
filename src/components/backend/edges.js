export const initialEdges = [
  { id: "e-backend-internet", source: "backend", target: "internet", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-internet-pick-language", source: "internet", target: "pick-language", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-pick-language-version-control", source: "pick-language", target: "version-control", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-version-control-repo-hosting", source: "version-control", target: "repo-hosting", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-repo-hosting-relational-db", source: "repo-hosting", target: "relational-db", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-relational-db-caching", source: "relational-db", target: "caching", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-caching-learn-apis", source: "caching", target: "learn-apis", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-learn-apis-authentication", source: "learn-apis", target: "authentication", type: "bezier", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-authentication-testing", source: "authentication", target: "testing", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-testing-web-security", source: "testing", target: "web-security", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-web-security-ci-cd", source: "web-security", target: "ci/cd", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-ci-cd-database-internals", source: "ci/cd", target: "database-internals", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-database-internals-scaling", source: "database-internals", target: "scaling-databases", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-scaling-software-architecture", source: "scaling-databases", target: "software-architecture", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-software-design-and-dev", source: "software-architecture", target: "design-and-development", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-software-architecture-patterns", source: "software-architecture", target: "architecture-patterns", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-architecture-docker", source: "software-architecture", target: "docker", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-docker-container-vs-vm", source: "docker", target: "container-vs-vm", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-container-vs-vm-web-servers", source: "container-vs-vm", target: "web-servers", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-web-servers-search-engines", source: "web-servers", target: "search-engines", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-search-engines-message-brokers", source: "search-engines", target: "message-brokers", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-message-brokers-realtime", source: "message-brokers", target: "real-time-data", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-realtime-nosql", source: "real-time-data", target: "nosql-databases", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-nosql-basic-infra", source: "nosql-databases", target: "basic-infrastructure", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-basic-infra-scale", source: "basic-infrastructure", target: "building-for-scale", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-scale-instrumentation", source: "building-for-scale", target: "instrumentation", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-instrumentation-monitoring", source: "instrumentation", target: "monitoring", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },
  { id: "e-monitoring-telemetry", source: "monitoring", target: "telmetry", type: "step", style: { stroke: "#6366f1", strokeWidth: 2 } },

  // Internet section
  { id: "e-internet-internet-1", source: "internet-1", target: "internet", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-internet-internet-2", source: "internet-2", target: "internet", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-internet-internet-3", source: "internet-3", target: "internet", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-internet-internet-4", source: "internet-4", target: "internet", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-internet-internet-5", source: "internet-5", target: "internet", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-internet-internet-6", source: "internet-6", target: "internet", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },

  // Pick a Language section

  { id: "e-rust-pick", source: "rust", target: "pick-language", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },

  // Version Control
  { id: "e-git-version", source: "git", target: "version-control", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },

  // Repo Hosting
  { id: "e-gitlab-repo", source: "gitlab", target: "repo-hosting", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-bitbucket-repo", source: "bitbucket", target: "repo-hosting", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },

  // Relational DBs
  { id: "e-mysql-rel", source: "mysql", target: "relational-db", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-mariadb-rel", source: "mariadb", target: "relational-db", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-postgres-rel", source: "postgresql", target: "relational-db", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-mssql-rel", source: "mssql", target: "relational-db", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-oracle-rel", source: "oracle", target: "relational-db", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-sqlite-rel", source: "sqlite", target: "relational-db", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },


  { id: "e-memcached-cache", source: "memcached", target: "caching", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-server-cache", source: "server-side", target: "caching", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-cdn-cache", source: "CDN", target: "caching", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-client-cache", source: "client-side", target: "caching", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },

  // Learn APIs
  { id: "e-rest-api", source: "rest", target: "learn-apis", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-grpc-api", source: "grpc", target: "learn-apis", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-soap-api", source: "soap", target: "learn-apis", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-json-api-api", source: "json-api", target: "learn-apis", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-openapi-api", source: "openapi", target: "learn-apis", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },

  // // // Authentication
  // // { id: "e-jwt-auth", source: "jwt", target: "authentication", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  // // { id: "e-oauth-auth", source: "oauth", target: "authentication", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  // { id: "e-basic-auth-auth", source: "basic-auth", target: "authentication", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  // { id: "e-token-auth-auth", source: "token-auth", target: "authentication", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  // { id: "e-cookie-auth-auth", source: "cookie-auth", target: "authentication", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  // { id: "e-openid-auth", source: "openid", target: "authentication", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  // { id: "e-saml-auth", source: "saml", target: "authentication", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },

  // Testing
  { id: "e-unit-test", source: "unit-testing", target: "testing", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-integration-test", source: "integration-testing", target: "testing", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-functional-test", source: "functional-testing", target: "testing", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },

  // Web Security
  { id: "e-bcrypt-security", source: "bcrypt", target: "web-security", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-scrypt-security", source: "scrypt", target: "web-security", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-sha-security", source: "sha", target: "web-security", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-md5-security", source: "md5", target: "web-security", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },

  // Database Internals
  { id: "e-acid-internals", source: "acid", target: "database-internals", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-transactions-internals", source: "transactions", target: "database-internals", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-migrations-internals", source: "migrations", target: "database-internals", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-n+1-internals", source: "n+1", target: "database-internals", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-profiling-internals", source: "profiling", target: "database-internals", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-normalization-internals", source: "normalization", target: "database-internals", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },

  // Scaling Databases
  { id: "e-indexes-scaling", source: "indexes", target: "scaling-databases", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-replication-scaling", source: "replication", target: "scaling-databases", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-sharding-scaling", source: "sharding", target: "scaling-databases", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  { id: "e-cap-scaling", source: "cap", target: "scaling-databases", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2" } },
  
  
  { id: "design-and-development-to-software-architecture", source: "design-and-development", target: "software-architecture", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "architecture-patterns-to-software-architecture", source: "architecture-patterns", target: "software-architecture", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "gof-to-design-and-development", source: "gof", target: "design-and-development", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "ddd-to-design-and-development", source: "ddd", target: "design-and-development", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "tdd-to-design-and-development", source: "tdd", target: "design-and-development", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "cqrs-to-design-and-development", source: "cqrs", target: "design-and-development", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "event-sourcing-to-design-and-development", source: "event-sourcing", target: "design-and-development", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "monolith-to-architecture-patterns", source: "monolith", target: "architecture-patterns", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "microservices-to-architecture-patterns", source: "microservices", target: "architecture-patterns", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "soa-to-architecture-patterns", source: "soa", target: "architecture-patterns", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "serverless-to-architecture-patterns", source: "serverless", target: "architecture-patterns", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "service-mesh-to-architecture-patterns", source: "service-mesh", target: "architecture-patterns", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "twelve-factor-to-architecture-patterns", source: "twelve-factor", target: "architecture-patterns", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },

  { id: "lxc-to-docker", source: "lxc", target: "docker", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "container-vs-vm-to-docker", source: "container-vs-vm", target: "docker", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "kubernetes-to-container-vs-vm", source: "kubernetes", target: "container-vs-vm", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },

  { id: "nginx-to-web-servers", source: "nginx", target: "web-servers", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "apache-to-web-servers", source: "apache", target: "web-servers", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "iis-to-web-servers", source: "iis", target: "web-servers", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "caddy-to-web-servers", source: "caddy", target: "web-servers", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },

  { id: "elasticsearch-to-search-engines", source: "elasticsearch", target: "search-engines", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "solr-to-search-engines", source: "solr", target: "search-engines", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "lucene-to-search-engines", source: "lucene", target: "search-engines", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },

  { id: "rabbitmq-to-message-brokers", source: "rabbitmq", target: "message-brokers", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "Kafka-to-message-brokers", source: "Kafka", target: "message-brokers", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },

  { id: "server-sent-events-to-real-time-data", source: "server-sent-events", target: "real-time-data", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "websockets-to-real-time-data", source: "websockets", target: "real-time-data", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "long-polling-to-real-time-data", source: "long-polling", target: "real-time-data", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "event-streaming-to-real-time-data", source: "event-streaming", target: "real-time-data", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },





  { id: "instrumentation-to-building-for-scale", source: "instrumentation", target: "building-for-scale", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "monitoring-to-building-for-scale", source: "monitoring", target: "building-for-scale", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "telmetry-to-building-for-scale", source: "telmetry", target: "building-for-scale", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "migration-strategies-to-building-for-scale", source: "Migration-Strategies", target: "building-for-scale", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },
  { id: "types-of-scaling-to-building-for-scale", source: "types-of-scaling", target: "building-for-scale", type: "bezier", style: { stroke: "#888", strokeDasharray: "4 2", strokeWidth: 1.5 } },



];

