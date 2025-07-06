export const nodeDescriptions = {
devops: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>DevOps is a culture and set of practices that brings together software development and IT operations. It aims to shorten the development lifecycle and deliver high-quality software continuously.</p>
    <p>DevOps emphasizes collaboration, automation, and monitoring at every stage of software development, from integration and testing to delivery and deployment.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
    
      <li><a href="https://www.redhat.com/en/topics/devops" className="text-blue-600 underline" target="_blank">What is DevOps? – Red Hat</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">DevOps Tutorial – Udemy</a></li>
    </ul>
  </div>
),
'learn-language': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>While DevOps isn’t all about coding, knowing a programming language helps automate tasks, write infrastructure code, develop CI/CD pipelines, and create monitoring tools.</p>
    <p>You don't need to master every language — pick one that works best for scripting and automation in your environment.</p>
    <h4 className="font-semibold mt-3">💡 Suggested Languages</h4>
    <ul className="list-disc list-inside">
      <li>Python – scripting, automation, DevOps tools</li>
      <li>Go – infrastructure tooling, performance</li>
      <li>JavaScript/Node.js – automation and CLI tools</li>
      <li>Ruby – infrastructure scripts (used in tools like Chef)</li>
      <li>Rust – modern, low-level tooling (optional)</li>
    </ul>
  </div>
),
os: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>As a DevOps engineer, you must be comfortable with various operating systems — especially Unix/Linux — because most infrastructure runs on them.</p>
    <p>You'll need to understand how to manage processes, permissions, networking, and file systems in a CLI environment.</p>
    <h4 className="font-semibold mt-3">🧠 Learn These Concepts</h4>
    <ul className="list-disc list-inside">
      <li>File system hierarchy, permissions, users</li>
      <li>Package managers (APT, YUM)</li>
      <li>Systemd/services, journaling logs</li>
      <li>Monitoring processes, network configuration</li>
    </ul>
  </div>
),
terminal: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>DevOps professionals work heavily in terminal environments. Knowing how to live and breathe in the terminal is essential for writing scripts, managing servers, and debugging infrastructure.</p>
    <p>Learn common terminal tools, shortcuts, keybindings, and how to efficiently move around files, search logs, and manipulate text.</p>
    <h4 className="font-semibold mt-3">🔧 Practice These</h4>
    <ul className="list-disc list-inside">
      <li>Navigation commands (cd, ls, pwd, find)</li>
      <li>File operations (cp, mv, rm, cat, less)</li>
      <li>Text manipulation (grep, awk, sed)</li>
      <li>Process management (ps, top, kill)</li>
    </ul>
  </div>
),
'lang-python': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Python is one of the most popular languages for DevOps engineers due to its simplicity and rich ecosystem. It’s widely used for scripting, automation, CI/CD, infrastructure provisioning, and even configuration management.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://learnxinyminutes.com/docs/python/" className="text-blue-600 underline" target="_blank">Learn Python in Y Minutes</a></li>
      <li><a href="https://realpython.com/" className="text-blue-600 underline" target="_blank">Real Python Tutorials</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Course</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Complete Python Bootcamp – Udemy</a></li>
    </ul>
  </div>
),
'lang-ruby': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Ruby is a dynamic scripting language often used in DevOps tooling. Chef, a popular configuration management tool, is built with Ruby. Knowing Ruby can help you write infrastructure scripts or extend DevOps platforms.</p>
    <h4 className="font-semibold mt-3">📚 Free Resource</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.ruby-lang.org/en/documentation/quickstart/" className="text-blue-600 underline" target="_blank">Ruby Quickstart</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Course</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Ruby on Rails Course – Udemy</a></li>
    </ul>
  </div>
),
'lang-go': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Go (Golang) is a powerful, statically-typed language that’s ideal for building DevOps tooling and microservices. Tools like Docker, Kubernetes, and Terraform are written in Go.</p>
    <p>It’s known for performance, concurrency support, and clean syntax.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://gobyexample.com/" className="text-blue-600 underline" target="_blank">Go by Example</a></li>
      <li><a href="https://go.dev/learn/" className="text-blue-600 underline" target="_blank">Official Go Learn Page</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Course</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Learn How to Code – Udemy (Go)</a></li>
    </ul>
  </div>
),
'lang-js': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>JavaScript, and its backend runtime Node.js, are useful for scripting, CLI tools, and building automation dashboards or APIs. Though not a traditional DevOps language, it's still relevant for frontend/backends of internal tools.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://javascript.info/" className="text-blue-600 underline" target="_blank">The Modern JavaScript Tutorial</a></li>
      <li><a href="https://nodejs.dev/en/learn/" className="text-blue-600 underline" target="_blank">Node.js Learning Path</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Course</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">The Complete Node.js Developer Course – Udemy</a></li>
    </ul>
  </div>
),
'lang-rust': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Rust is a systems programming language focused on safety, performance, and concurrency. While not essential for DevOps, it's gaining popularity for building infrastructure tools and high-performance CLIs.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://doc.rust-lang.org/book/" className="text-blue-600 underline" target="_blank">The Rust Programming Language (official book)</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Course</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Rust Programming – Udemy</a></li>
    </ul>
  </div>
),
windows: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>While Linux dominates in DevOps, Windows is still used in some environments, especially with .NET or enterprise applications. It's important to understand PowerShell, Windows Services, and Server administration.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://learn.microsoft.com/en-us/windows-server/" className="text-blue-600 underline" target="_blank">Windows Server Docs</a></li>
      <li><a href="https://www.geeksforgeeks.org/backend-development/" className="text-blue-600 underline" target="_blank">Windows OS Overview – GeeksforGeeks</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Windows Server 2019 – Udemy</a></li>
      <li><a href="https://www.pluralsight.com" className="text-blue-600 underline" target="_blank">Windows Server Fundamentals – Pluralsight</a></li>
    </ul>
  </div>
),
linux: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Linux is the backbone of most DevOps environments. You’ll use it daily to manage servers, containers, networking, and services. Mastering Linux is fundamental to a DevOps career.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://linuxjourney.com/" className="text-blue-600 underline" target="_blank">Linux Journey</a></li>
      <li><a href="https://ubuntu.com/tutorials" className="text-blue-600 underline" target="_blank">Ubuntu Tutorials</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Linux for Beginners – Udemy</a></li>
      <li><a href="https://www.acloudguru.com" className="text-blue-600 underline" target="_blank">Linux Academy (now A Cloud Guru)</a></li>
    </ul>
  </div>
),
ubuntu: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Ubuntu is a beginner-friendly and widely used Linux distribution in cloud environments. Learning how to manage Ubuntu helps you deploy and troubleshoot systems with Debian-based package management.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://ubuntu.com/tutorials" className="text-blue-600 underline" target="_blank">Official Ubuntu Tutorials</a></li>
      <li><a href="https://itsfoss.com" className="text-blue-600 underline" target="_blank">Ubuntu Tutorials – It's FOSS</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Ubuntu Linux – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Ubuntu Training – LinkedIn Learning</a></li>
    </ul>
  </div>
),
rhel: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Red Hat Enterprise Linux (RHEL) and its derivatives (like CentOS, AlmaLinux, Rocky Linux) are used widely in enterprise production environments. Knowing how to use YUM/DNF, manage SELinux, and systemd is key.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/" className="text-blue-600 underline" target="_blank">RHEL Official Docs</a></li>
      <li><a href="https://www.tecmint.com" className="text-blue-600 underline" target="_blank">Tecmint – RHEL Tutorials</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">RHCSA Prep – Udemy</a></li>
      <li><a href="https://www.pluralsight.com" className="text-blue-600 underline" target="_blank">RHEL 7 Admin – Pluralsight</a></li>
    </ul>
  </div>
),
suse: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>SUSE Linux is an enterprise-focused distribution widely used in data centers. It provides tools for container orchestration, high-availability clustering, and advanced system administration.</p>
    <p>Learning SUSE helps in understanding enterprise-grade Linux management and integration with SAP or similar platforms.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://documentation.suse.com/" className="text-blue-600 underline" target="_blank">SUSE Official Documentation</a></li>
      <li><a href="https://www.tecmint.com" className="text-blue-600 underline" target="_blank">SUSE Tutorials – Tecmint</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://training.suse.com" className="text-blue-600 underline" target="_blank">SUSE Linux Enterprise Server – SUSE Training</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">SUSE Linux Admin – Udemy</a></li>
    </ul>
  </div>
),
unix: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Unix is the foundational operating system behind many modern OS variants including Linux and BSD. Understanding basic Unix concepts like file systems, permissions, and process control is essential for DevOps.</p>
    <p>Although rarely used directly today, Unix principles heavily influence system design and CLI tools.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.geeksforgeeks.org/backend-development/" className="text-blue-600 underline" target="_blank">Introduction to Unix – GeeksforGeeks</a></li>
      <li><a href="https://www.tutorialspoint.com/unix/" className="text-blue-600 underline" target="_blank">Unix Tutorial – TutorialsPoint</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Unix Command Line – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Unix for Mac/Linux – LinkedIn Learning</a></li>
    </ul>
  </div>
),
freebsd: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>FreeBSD is a robust, open-source Unix-like operating system known for performance and security. It’s used in firewalls, storage, and performance-critical systems like Netflix’s CDN infrastructure.</p>
    <p>FreeBSD has a different ecosystem from Linux but shares many Unix principles.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.freebsd.org/en/books/handbook/" className="text-blue-600 underline" target="_blank">FreeBSD Handbook (official)</a></li>
      <li><a href="https://freebsdfoundation.org/freebsd-project/resources/" className="text-blue-600 underline" target="_blank">FreeBSD Resources – Foundation</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Unix Command Line – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Unix – LinkedIn Learning</a></li>
    </ul>
  </div>
),
openbsd: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>OpenBSD is a security-focused Unix-like OS known for code correctness and cryptographic tools. It’s used in firewalls, VPNs, and secure systems. Great for learning secure system design.</p>
    <p>While niche, it provides deep insights into system security and kernel-level configurations.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.openbsd.org/faq/" className="text-blue-600 underline" target="_blank">OpenBSD FAQ</a></li>
      <li><a href="https://man.openbsd.org/" className="text-blue-600 underline" target="_blank">OpenBSD Man Pages</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Unix Shell Scripting – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Unix for Mac/Linux – LinkedIn Learning</a></li>
    </ul>
  </div>
),
netbsd: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>NetBSD is a portable, lightweight Unix-like OS designed to run on many hardware platforms. While less common in DevOps, it’s ideal for embedded systems and niche network appliances.</p>
    <p>It’s great for learning OS internals and exploring portable systems development.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://wiki.netbsd.org/tutorials/" className="text-blue-600 underline" target="_blank">NetBSD Tutorials</a></li>
      <li><a href="https://man.netbsd.org/" className="text-blue-600 underline" target="_blank">NetBSD Man Pages</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Linux/Unix Command Line – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Unix – LinkedIn Learning</a></li>
    </ul>
  </div>
),
bash: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Bash (Bourne Again SHell) is the most widely used Unix shell and command language. In DevOps, Bash scripting is vital for automation, configuration, and running deployment tasks on servers or CI/CD pipelines.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://ryanstutorials.net/bash-scripting-tutorial/" className="text-blue-600 underline" target="_blank">Bash Scripting Tutorial – Ryan’s Tutorials</a></li>
      <li><a href="https://linuxconfig.org" className="text-blue-600 underline" target="_blank">Bash for Beginners – LinuxConfig</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Bash Scripting – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Bash – LinkedIn Learning</a></li>
    </ul>
  </div>
),
editors: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Terminal-based editors like Vim, Nano, and Emacs are essential for editing config files, scripts, and logs on remote servers. Every DevOps engineer should know at least one of these tools to work efficiently over SSH or CLI environments.</p>
    <p>Vim is powerful but has a steep learning curve. Nano is simpler and beginner-friendly. Emacs offers deep customization but is less common in DevOps workflows.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://vim.rtorr.com/" className="text-blue-600 underline" target="_blank">Vim Cheat Sheet</a></li>
      <li><a href="https://wiki.archlinux.org/title/Text_editors" className="text-blue-600 underline" target="_blank">Arch Wiki – Text Editors</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Paid Courses</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Vim – The Ultimate Guide – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Vim – LinkedIn Learning</a></li>
    </ul>
  </div>
),
powershell: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>PowerShell is a cross-platform automation and configuration tool. It’s essential for managing Windows environments, scripting tasks, and automating cloud provisioning (especially with Azure).</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://learn.microsoft.com/en-us/powershell/scripting/overview" className="text-blue-600 underline" target="_blank">PowerShell Docs – Microsoft</a></li>
      <li><a href="https://www.youtube.com/watch?v=iyPj8-zT9b4" className="text-blue-600 underline" target="_blank">PowerShell Full Course – YouTube (Telusko)</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning PowerShell – LinkedIn Learning</a></li>
      <li><a href="https://www.pluralsight.com" className="text-blue-600 underline" target="_blank">PowerShell: Getting Started – Pluralsight</a></li>
    </ul>
  </div>
),
'process-monitoring': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Process monitoring tools help track resource usage and performance at the process level. Tools like `top`, `htop`, `ps`, and `pidstat` are commonly used in Linux.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://linuxize.com" className="text-blue-600 underline" target="_blank">ps Command – Linuxize</a></li>
      <li><a href="https://www.youtube.com/watch?v=xnI5xvBCcRA" className="text-blue-600 underline" target="_blank">htop & top Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Linux Performance Monitoring – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Linux Monitoring – A Cloud Guru</a></li>
    </ul>
  </div>
),
'performance-monitoring': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Performance monitoring ensures system reliability, helps identify bottlenecks, and tracks CPU, memory, disk I/O, and network usage. Tools include `vmstat`, `iostat`, `netstat`, and `dstat`.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.tecmint.com/command-line-tools-to-monitor-linux-performance/" className="text-blue-600 underline" target="_blank">Top CLI Tools – Tecmint</a></li>
      <li><a href="https://www.youtube.com/watch?v=ivbj_qfczlc" className="text-blue-600 underline" target="_blank">Linux Performance Monitoring – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Linux Optimization – LinkedIn</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Linux Monitoring – Udemy</a></li>
    </ul>
  </div>
),
'networking-tools': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Networking tools are critical for diagnostics, troubleshooting, and monitoring. Common tools include `ping`, `traceroute`, `netstat`, `ss`, `nmap`, and `tcpdump`.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.geeksforgeeks.org/backend-development/" className="text-blue-600 underline" target="_blank">Network Commands – GeeksforGeeks</a></li>
      <li><a href="https://www.youtube.com/watch?v=nN6YzCzDGGI" className="text-blue-600 underline" target="_blank">Networking Tools – YouTube (NetworkChuck)</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Networking Basics – LinkedIn Learning</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Networking Fundamentals – Udemy</a></li>
    </ul>
  </div>
),
'text-manipulation': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Text manipulation is crucial for DevOps tasks like parsing logs, modifying config files, and processing output. Learn tools like `awk`, `sed`, `cut`, `grep`, and `tr`.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.gnu.org/software/sed/manual/sed.html" className="text-blue-600 underline" target="_blank">GNU sed Manual</a></li>
      <li><a href="https://www.youtube.com/watch?v=8vWX86TdxZ4" className="text-blue-600 underline" target="_blank">awk/sed/grep Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Shell + sed/awk – LinkedIn</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Linux CLI Mastery – Udemy</a></li>
    </ul>
  </div>
),
git: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Git is a distributed version control system that helps you track changes in code, collaborate with others, and manage project history. It’s the foundation of modern software workflows.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://git-scm.com/doc" className="text-blue-600 underline" target="_blank">Official Git Documentation</a></li>
      <li><a href="https://www.youtube.com/watch?v=USjZcfj8yxE" className="text-blue-600 underline" target="_blank">Git & GitHub Crash Course – YouTube (Traversy Media)</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Git Essential Training – LinkedIn Learning</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Git Complete – Udemy</a></li>
    </ul>
  </div>
),
vcs: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Version Control Systems (VCS) let you track changes, collaborate on codebases, and revert to earlier states. Git is the most widely used VCS, but others include SVN, Mercurial, and Perforce.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.geeksforgeeks.org/backend-development/" className="text-blue-600 underline" target="_blank">VCS Overview – GeeksforGeeks</a></li>
      <li><a href="https://www.youtube.com/watch?v=Y9XZQO1n_7c" className="text-blue-600 underline" target="_blank">Version Control Crash Course – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Git & GitHub for Devs – LinkedIn</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Version Control with Git – Udemy</a></li>
    </ul>
  </div>
),
github: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>GitHub is a popular platform for hosting Git repositories, collaborating on open-source, managing pull requests, and automating workflows using Actions. It’s essential for modern DevOps and CI/CD pipelines.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.github.com/en/get-started" className="text-blue-600 underline" target="_blank">GitHub Docs – Getting Started</a></li>
      <li><a href="https://www.youtube.com/watch?v=RGOj5yH7evk" className="text-blue-600 underline" target="_blank">GitHub Tutorial – YouTube (freeCodeCamp)</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">GitHub Actions – LinkedIn Learning</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">GitHub Actions CI/CD – Udemy</a></li>
    </ul>
  </div>
),
gitlab: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>GitLab is a Git-based DevOps platform with built-in CI/CD, issue tracking, and container registry support. It’s widely used in self-hosted and enterprise DevOps workflows.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.gitlab.com/ee/" className="text-blue-600 underline" target="_blank">GitLab Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=GJXXYfjlAeY" className="text-blue-600 underline" target="_blank">GitLab Full Course – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">GitLab Essentials – LinkedIn Learning</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">GitLab CI/CD – Udemy</a></li>
    </ul>
  </div>
),
bitbucket: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Bitbucket is Atlassian’s Git-based source control platform, often integrated with Jira and Trello. It’s used for private repositories and supports pipelines for CI/CD.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://bitbucket.org/product/guides" className="text-blue-600 underline" target="_blank">Bitbucket Docs – Atlassian</a></li>
      <li><a href="https://www.youtube.com/watch?v=ruj0YjEOD4o" className="text-blue-600 underline" target="_blank">Bitbucket Tutorial – YouTube (TechTFQ)</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">DevOps with Bitbucket – LinkedIn</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Bitbucket Pipelines – Udemy</a></li>
    </ul>
  </div>
),
'vcs-hosting': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>VCS hosting platforms like GitHub, GitLab, and Bitbucket provide cloud-based Git repository management with collaboration tools, issue tracking, CI/CD, and access control.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.atlassian.com/git/tutorials/what-is-version-control" className="text-blue-600 underline" target="_blank">What is Version Control – Atlassian</a></li>
      <li><a href="https://www.youtube.com/watch?v=RGOj5yH7evk" className="text-blue-600 underline" target="_blank">GitHub & Git Intro – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Git & GitHub Crash Course – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">DevOps with GitHub Actions – LinkedIn</a></li>
    </ul>
  </div>
),
docker: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Docker is a containerization platform that packages applications with their dependencies into isolated units, ensuring consistency across development and production environments.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.docker.com/get-started/" className="text-blue-600 underline" target="_blank">Official Docker Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=Gjnup-PuquQ" className="text-blue-600 underline" target="_blank">Docker Crash Course – YouTube (TechWorld with Nana)</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Docker Mastery – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">DevOps: Containers – LinkedIn Learning</a></li>
    </ul>
  </div>
),
lxc: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>LXC (Linux Containers) is a lightweight virtualization method to run multiple Linux systems (containers) on a single host using the same kernel. It’s a more system-level alternative to Docker.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://linuxcontainers.org/lxc/introduction/" className="text-blue-600 underline" target="_blank">Intro to LXC – Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=k4g8LXGJvAY" className="text-blue-600 underline" target="_blank">LXC Overview – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Linux Containers – LinkedIn Learning</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Linux Containers Deep Dive – Udemy</a></li>
    </ul>
  </div>
),
containers: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Containers are lightweight, portable environments that run applications in isolation from the host OS. They're foundational in modern DevOps for deploying scalable and reproducible workloads.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.redhat.com/en/topics/containers" className="text-blue-600 underline" target="_blank">What Are Containers – Red Hat</a></li>
      <li><a href="https://www.youtube.com/watch?v=EnJ7qX9fkcU" className="text-blue-600 underline" target="_blank">Containers Explained – YouTube (TechWorld with Nana)</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Containerization Essentials – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">DevOps: Containers – LinkedIn</a></li>
    </ul>
  </div>
),
'setup-x': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>This section focuses on learning how to set up and configure tools and environments like web servers (Nginx, Apache), hosting services, and development stacks for real-world DevOps tasks.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.digitalocean.com/community/" className="text-blue-600 underline" target="_blank">DigitalOcean Tutorials</a></li>
      <li><a href="https://www.youtube.com/@NetworkChuck" className="text-blue-600 underline" target="_blank">NetworkChuck – YouTube Setup Guides</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">DevOps Project Setup – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">DevOps Tools Setup – LinkedIn Learning</a></li>
    </ul>
  </div>
),
nginx: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Nginx is a high-performance web server, reverse proxy, and load balancer used widely in modern web stacks for handling traffic efficiently and securely.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://nginx.org/en/docs/" className="text-blue-600 underline" target="_blank">Nginx Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=ZxAw_rkDVVQ" className="text-blue-600 underline" target="_blank">Nginx Beginner Guide – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Nginx Fundamentals – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Nginx Essentials – LinkedIn Learning</a></li>
    </ul>
  </div>
),
caddy: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Caddy is a modern web server known for automatic HTTPS, ease of configuration, and fast performance. It's often used as an alternative to Nginx for smaller or simpler deployments.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://caddyserver.com/docs/" className="text-blue-600 underline" target="_blank">Official Caddy Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=8ywMgu0CXnA" className="text-blue-600 underline" target="_blank">Caddy Setup Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Caddy Web Server – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Web Servers in DevOps – LinkedIn</a></li>
    </ul>
  </div>
),
tomcat: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Apache Tomcat is a Java-based application server that runs Java Servlets and JSPs. It’s widely used for deploying Java web applications in production environments.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://tomcat.apache.org/tomcat-10.0-doc/" className="text-blue-600 underline" target="_blank">Tomcat Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=9H6TnRBpWmg" className="text-blue-600 underline" target="_blank">Tomcat Installation & Setup – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Tomcat for Beginners – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Java Web Servers – LinkedIn</a></li>
    </ul>
  </div>
),
apache: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Apache HTTP Server is one of the oldest and most widely used open-source web servers. It supports dynamic modules, .htaccess, SSL, and virtual hosts.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://httpd.apache.org/docs/" className="text-blue-600 underline" target="_blank">Apache HTTPD Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=z1MgFzQZ5T8" className="text-blue-600 underline" target="_blank">Apache Setup Guide – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Apache Server Tutorial – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Web Servers – LinkedIn</a></li>
    </ul>
  </div>
),
iis: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Internet Information Services (IIS) is Microsoft’s web server for hosting .NET apps on Windows. It supports modules, SSL, HTTP/2, and tight integration with Windows Server features.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://learn.microsoft.com/en-us/iis/" className="text-blue-600 underline" target="_blank">IIS Docs – Microsoft</a></li>
      <li><a href="https://www.youtube.com/watch?v=E67j3A3Odwg" className="text-blue-600 underline" target="_blank">IIS Web Server Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">IIS Admin Fundamentals – LinkedIn</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">IIS Web Server – Udemy</a></li>
    </ul>
  </div>
),
networking: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Understanding networking fundamentals like IP, TCP/UDP, DNS, HTTP/S, and firewalls is key for system administration, DevOps, and infrastructure troubleshooting.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.cloudflare.com" className="text-blue-600 underline" target="_blank">Cloudflare – Networking Basics</a></li>
      <li><a href="https://www.youtube.com/watch?v=qiQR5rTSshw" className="text-blue-600 underline" target="_blank">Networking Basics – YouTube (freeCodeCamp)</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">CompTIA Network+ – Udemy</a></li>
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Networking Foundations – LinkedIn</a></li>
    </ul>
  </div>
),
'cloud-providers': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Cloud providers offer scalable infrastructure, compute, storage, and networking services. Learn core concepts like IaaS, PaaS, VPC, and deployments across popular platforms.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.youtube.com/watch?v=mxT233EdY5c" className="text-blue-600 underline" target="_blank">Cloud Computing Full Course – Simplilearn</a></li>
      <li><a href="https://learn.microsoft.com/en-us/training/modules/intro-to-azure-fundamentals/" className="text-blue-600 underline" target="_blank">Azure Fundamentals – Microsoft Learn</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Cloud Career Path – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Intro to Cloud – A Cloud Guru</a></li>
    </ul>
  </div>
),
aws: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>AWS (Amazon Web Services) is the leading cloud provider, offering services like EC2, S3, Lambda, RDS, and more for building and scaling apps.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://aws.amazon.com/training/" className="text-blue-600 underline" target="_blank">AWS Training & Certification</a></li>
      <li><a href="https://www.youtube.com/watch?v=ubCNZRNjhyo" className="text-blue-600 underline" target="_blank">AWS Full Course – YouTube</a></li>
    </ul>
  </div>
),

azure: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Azure is Microsoft's cloud platform with services like Azure VMs, App Services, Azure AD, and Cosmos DB.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://learn.microsoft.com/en-us/training/azure/" className="text-blue-600 underline" target="_blank">Microsoft Learn – Azure</a></li>
      <li><a href="https://www.youtube.com/watch?v=IZGNcSuwBZs" className="text-blue-600 underline" target="_blank">Azure for Beginners – YouTube</a></li>
    </ul>
  </div>
),

'google-cloud': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Google Cloud Platform (GCP) provides services like Compute Engine, Cloud Run, Firebase, BigQuery, and Kubernetes Engine (GKE).</p>
    <ul className="list-disc list-inside">
      <li><a href="https://cloud.google.com/training" className="text-blue-600 underline" target="_blank">Google Cloud Training</a></li>
      <li><a href="https://www.youtube.com/watch?v=LOeioOKUKI8" className="text-blue-600 underline" target="_blank">GCP Beginner Guide – YouTube</a></li>
    </ul>
  </div>
),

'digital-ocean': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>DigitalOcean offers developer-friendly cloud servers (droplets), managed databases, and simple deployments — ideal for startups and small teams.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.digitalocean.com/" className="text-blue-600 underline" target="_blank">DigitalOcean Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=PEM4LJ1hZgc" className="text-blue-600 underline" target="_blank">How to Use DigitalOcean – YouTube</a></li>
    </ul>
  </div>
),

'alibaba-cloud': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Alibaba Cloud is a top Asian cloud provider, offering ECS, RDS, OSS, and global infrastructure for enterprises and developers.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://www.alibabacloud.com/help" className="text-blue-600 underline" target="_blank">Alibaba Cloud Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=AB80bnpbTNo" className="text-blue-600 underline" target="_blank">Alibaba Cloud Tutorial – YouTube</a></li>
    </ul>
  </div>
),

hetzner: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Hetzner is a German cloud/VPS provider known for affordable dedicated servers and robust performance for self-hosted setups.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.hetzner.com/cloud/" className="text-blue-600 underline" target="_blank">Hetzner Cloud Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=dKIY_f1by6I" className="text-blue-600 underline" target="_blank">Hetzner Setup Guide – YouTube</a></li>
    </ul>
  </div>
),

'contabo': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Contabo offers budget-friendly VPS and cloud hosting with large RAM and storage — great for hobbyists, students, and self-hosted tools.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://contabo.com/en/" className="text-blue-600 underline" target="_blank">Contabo Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=MOlgGye5UZc" className="text-blue-600 underline" target="_blank">Contabo VPS Setup – YouTube</a></li>
    </ul>
  </div>
),

heroku: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Heroku is a platform-as-a-service (PaaS) that simplifies app deployment with Git-based workflows. Ideal for small projects and fast prototyping.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://devcenter.heroku.com/start" className="text-blue-600 underline" target="_blank">Heroku Developer Center</a></li>
      <li><a href="https://www.youtube.com/watch?v=71wSzpLyW9k" className="text-blue-600 underline" target="_blank">Deploy Apps to Heroku – YouTube</a></li>
    </ul>
  </div>
),
'ftp-sftp': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>FTP and SFTP are protocols used to transfer files between a client and server. SFTP is secure and encrypted over SSH.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://www.ssh.com/academy" className="text-blue-600 underline" target="_blank">SFTP Explained – SSH.com</a></li>
      <li><a href="https://www.youtube.com/watch?v=ue6gPFT1dE8" className="text-blue-600 underline" target="_blank">SFTP Basics – YouTube</a></li>
    </ul>
  </div>
),

dns: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>DNS (Domain Name System) maps human-readable domain names to IP addresses. It's critical for website access, CDN routing, and load balancing.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://www.cloudflare.com" className="text-blue-600 underline" target="_blank">What is DNS – Cloudflare</a></li>
      <li><a href="https://www.youtube.com/watch?v=72snZctFFtA" className="text-blue-600 underline" target="_blank">DNS Explained – YouTube</a></li>
    </ul>
  </div>
),

http: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>HTTP is the foundational protocol for data transfer on the web. It powers APIs, websites, and client-server communication.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP" className="text-blue-600 underline" target="_blank">HTTP – MDN Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=iYM2zFP3Zn0" className="text-blue-600 underline" target="_blank">How HTTP Works – YouTube</a></li>
    </ul>
  </div>
),

https: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>HTTPS is the secure version of HTTP, using SSL/TLS to encrypt communication between browser and server for privacy and integrity.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" className="text-blue-600 underline" target="_blank">HTTPS Overview – MDN</a></li>
      <li><a href="https://www.youtube.com/watch?v=hExRDVZHhig" className="text-blue-600 underline" target="_blank">HTTPS Explained – YouTube</a></li>
    </ul>
  </div>
),

'ssl-tls': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>SSL and TLS are cryptographic protocols that secure communication over networks, primarily used in HTTPS, email, and VPNs.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://www.cloudflare.com" className="text-blue-600 underline" target="_blank">SSL/TLS – Cloudflare Learning</a></li>
      <li><a href="https://www.youtube.com/watch?v=SJJmoDZ3il8" className="text-blue-600 underline" target="_blank">SSL/TLS Explained – YouTube</a></li>
    </ul>
  </div>
),

ssh: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>SSH (Secure Shell) is a secure protocol to connect to remote servers. It’s widely used in DevOps for CLI access, automation, and deployment.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://www.ssh.com/academy" className="text-blue-600 underline" target="_blank">SSH Guide – SSH.com</a></li>
      <li><a href="https://www.youtube.com/watch?v=hQWRp-FdTpc" className="text-blue-600 underline" target="_blank">SSH Basics – YouTube</a></li>
    </ul>
  </div>
),

'osi-model': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>The OSI Model is a conceptual framework that standardizes the functions of networking into 7 distinct layers (Physical to Application).</p>
    <ul className="list-disc list-inside">
      <li><a href="https://www.cloudflare.com" className="text-blue-600 underline" target="_blank">OSI Model – Cloudflare</a></li>
      <li><a href="https://www.youtube.com/watch?v=vv4y_uOneC0" className="text-blue-600 underline" target="_blank">OSI Layers Explained – YouTube</a></li>
    </ul>
  </div>
),
'email-protocols': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Email protocols manage sending, receiving, and authenticating messages. This section covers the systems that underpin reliable and secure email delivery.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.cloudflare.com" className="text-blue-600 underline" target="_blank">SMTP Overview – Cloudflare</a></li>
      <li><a href="https://www.youtube.com/watch?v=WHwtZEDwE44" className="text-blue-600 underline" target="_blank">Email Protocols Explained – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Email for IT Professionals – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Email Delivery in Cloud – A Cloud Guru</a></li>
    </ul>
  </div>
),
'white-grey-listing': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>White/Grey listing helps fight spam—by only accepting mail from known trusted sources (whitelisting) or temporarily refusing new senders (greylisting).</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://postfix.org/postconf.5.html#smtpd_recipient_restrictions" className="text-blue-600 underline" target="_blank">Greylisting in Postfix Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=b39KfyQC4lM" className="text-blue-600 underline" target="_blank">Greylisting Explained – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Mail Server Essentials – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Email Delivery in Cloud – ACG</a></li>
    </ul>
  </div>
),
smtp: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>SMTP (Simple Mail Transfer Protocol) is used for sending emails between servers. It's the workhorse protocol for outgoing mail.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.cloudflare.com" className="text-blue-600 underline" target="_blank">SMTP Guide – Cloudflare</a></li>
      <li><a href="https://www.youtube.com/watch?v=6W0uN4AeUlw" className="text-blue-600 underline" target="_blank">SMTP Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Email for IT Professionals – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Email Delivery – ACG</a></li>
    </ul>
  </div>
),
dmarc: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>DMARC is a DNS-based protocol that lets domain owners specify how recipients should handle unauthenticated mail, reducing spoofing.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://dmarc.org/overview/" className="text-blue-600 underline" target="_blank">DMARC.org Overview</a></li>
      <li><a href="https://www.youtube.com/watch?v=hO3izH0bQHE" className="text-blue-600 underline" target="_blank">DMARC Explained – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">DMARC Essentials – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Email Delivery – ACG</a></li>
    </ul>
  </div>
),
imap: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>IMAP (Internet Message Access Protocol) allows clients to manage emails directly on the server—supporting folders, flags, and multi-device syncing.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.cloudflare.com" className="text-blue-600 underline" target="_blank">IMAP Guide – Cloudflare</a></li>
      <li><a href="https://www.youtube.com/watch?v=eZhtkabGxkA" className="text-blue-600 underline" target="_blank">IMAP Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Email for IT Professionals – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Email Delivery – ACG</a></li>
    </ul>
  </div>
),
spf: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>SPF (Sender Policy Framework) is a DNS record that lists authorized mail servers for a domain—helping prevent forged senders.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.cloudflare.com" className="text-blue-600 underline" target="_blank">SPF Guide – Cloudflare</a></li>
      <li><a href="https://www.youtube.com/watch?v=2tIRAD1PG_4" className="text-blue-600 underline" target="_blank">SPF Explained – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Email Auth Techniques – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Email Delivery – ACG</a></li>
    </ul>
  </div>
),
pop3s: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>POP3S (POP3 over SSL/TLS) is a secure protocol for downloading emails to a single device. It’s simple but less feature-rich than IMAP.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.cloudflare.com" className="text-blue-600 underline" target="_blank">POP3 vs IMAP – Cloudflare</a></li>
      <li><a href="https://www.youtube.com/watch?v=_xj0kn8ZTDA" className="text-blue-600 underline" target="_blank">POP3 Explained – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Email for IT Professionals – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Email Delivery – ACG</a></li>
    </ul>
  </div>
),
'domain-keys': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>DomainKeys identify messages digitally to prevent tampering. The DKIM standard signs outbound mail, verifying integrity to recipient servers.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.cloudflare.com" className="text-blue-600 underline" target="_blank">DKIM Overview – Cloudflare</a></li>
      <li><a href="https://www.youtube.com/watch?v=UYUeXvZfrtQ" className="text-blue-600 underline" target="_blank">DKIM Explained – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Email Auth Techniques – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Email Delivery – ACG</a></li>
    </ul>
  </div>
),
serverless: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Serverless platforms let you run code without managing servers—focus only on functions triggered by events like HTTP, schedules, or pub/sub.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.serverless.com/framework/docs/" className="text-blue-600 underline" target="_blank">Serverless Framework Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=eOBq__hX4Tw" className="text-blue-600 underline" target="_blank">Serverless Overview – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Serverless Architecture – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Serverless Fundamentals – ACG</a></li>
    </ul>
  </div>
),
'aws-lambda': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>AWS Lambda runs code in response to events without provisioning servers. Great for microservices, cron jobs, and low-traffic apps.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://aws.amazon.com/documentation/" className="text-blue-600 underline" target="_blank">AWS Lambda Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=eOBq__hX4Tw" className="text-blue-600 underline" target="_blank">AWS Lambda Tutorial – YouTube</a></li>
    </ul>
  </div>
),
 
'azure-functions': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Azure Functions let you run serverless code in the Azure environment—great for event-driven workflows and integrations.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://learn.microsoft.com/en-us/azure/azure-functions/" className="text-blue-600 underline" target="_blank">Azure Functions Guide</a></li>
      <li><a href="https://www.youtube.com/watch?v=2m3Wsr0WlkU" className="text-blue-600 underline" target="_blank">Azure Functions Tutorial – YouTube</a></li>
    </ul>
  </div>
),

'cloudfare': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Cloudflare Workers let you run serverless JS on the edge—very low latency, ideal for APIs, image processing, and routing.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://developers.cloudflare.com/workers/" className="text-blue-600 underline" target="_blank">Cloudflare Workers Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=3fNsETmzeK0" className="text-blue-600 underline" target="_blank">Cloudflare Workers Tutorial – YouTube</a></li>
    </ul>
  </div>
),

'google-cloud-functions': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Google Cloud Functions run code in response to events on GCP—they auto-scale and integrate with Firebase and Pub/Sub.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://cloud.google.com/functions/docs" className="text-blue-600 underline" target="_blank">GCP Functions Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=Y429HBXYmUc" className="text-blue-600 underline" target="_blank">Google Cloud Functions – YouTube</a></li>
    </ul>
  </div>
),

vercel: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Vercel is a serverless platform optimized for front‑end frameworks like Next.js—it handles build & global deployment automatically.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://vercel.com/docs" className="text-blue-600 underline" target="_blank">Vercel Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=1zKR65Oqh7Q" className="text-blue-600 underline" target="_blank">Vercel Deployment Guide – YouTube</a></li>
    </ul>
  </div>
),

netlify: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Netlify provides serverless hosting for static sites and functions—great for JAMstack deployments with build automation and deployment pipelines.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.netlify.com/" className="text-blue-600 underline" target="_blank">Netlify Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=71E4NeF-Rfk" className="text-blue-600 underline" target="_blank">Netlify Deployment Tutorial – YouTube</a></li>
    </ul>
  </div>
),
'cloud-formation': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>AWS CloudFormation lets you define and provision AWS resources using declarative templates. It’s ideal for repeatable infrastructure deployments.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://aws.amazon.com/documentation/" className="text-blue-600 underline" target="_blank">AWS CloudFormation Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=1cm0Z-K2 t4c" className="text-blue-600 underline" target="_blank">CloudFormation Crash Course – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">CloudFormation Essentials – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">CloudFormation – A Cloud Guru</a></li>
    </ul>
  </div>
),
pulumi: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Pulumi enables infrastructure-as-code using real programming languages (TypeScript, Python, Go, C#). It's multi-cloud and code-centric.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.pulumi.com/docs/get-started/" className="text-blue-600 underline" target="_blank">Pulumi Get Started Guide</a></li>
      <li><a href="https://www.youtube.com/watch?v=K2St7Fl0OGU" className="text-blue-600 underline" target="_blank">Pulumi Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Pulumi Infrastructure as Code – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Pulumi Fundamentals – A Cloud Guru</a></li>
    </ul>
  </div>
),
terraform: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Terraform by HashiCorp is a widely used IaC tool supporting multiple cloud platforms and services with a declarative syntax.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.hashicorp.com/terraform/tutorials" className="text-blue-600 underline" target="_blank">Terraform Tutorials – HashiCorp</a></li>
      <li><a href="https://www.youtube.com/watch?v=7xngnjfIlK4" className="text-blue-600 underline" target="_blank">Terraform Full Course – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Terraform Essential Training – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Terraform Getting Started – ACG</a></li>
    </ul>
  </div>
),
'logs-management': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Logs management and observability let you collect, analyze, and archive logs across systems. Tools include hosted and self-managed stacks.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.youtube.com/watch?v=5sG_jF8qhys" className="text-blue-600 underline" target="_blank">Logs Management Overview – YouTube</a></li>
      <li><a href="https://www.elastic.co" className="text-blue-600 underline" target="_blank">What is Logging? – Elastic</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Logging & Monitoring – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Monitoring & Observability – ACG</a></li>
    </ul>
  </div>
),
papertal: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Papertrail is a hosted log aggregation service that offers real-time search and alerts via a simple, cloud-based interface.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://help.papertrailapp.com/kb/" className="text-blue-600 underline" target="_blank">Papertrail Help Center</a></li>
      <li><a href="https://www.youtube.com/watch?v=O93rIutpKZ8" className="text-blue-600 underline" target="_blank">Papertrail Demo – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Papertrail on LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Hosted Log Services – ACG</a></li>
    </ul>
  </div>
),

splunk: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Splunk is a powerful platform for searching, analyzing, and visualizing machine-generated data and logs at scale.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.splunk.com" className="text-blue-600 underline" target="_blank">Splunk Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=6gMgbBp3s9Y" className="text-blue-600 underline" target="_blank">Splunk Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Splunk Essential Training – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Splunk Fundamentals – ACG</a></li>
    </ul>
  </div>
),

loki: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Loki is Grafana Labs' log aggregation system that indexes by metadata, which makes it efficient and easy to integrate with Prometheus.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://grafana.com" className="text-blue-600 underline" target="_blank">Loki Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=WVQqSB1BwdM" className="text-blue-600 underline" target="_blank">Loki Setup Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Observability w/ Loki – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Open‑Source Log Management – ACG</a></li>
    </ul>
  </div>
),

'elastic-stack': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>The Elastic Stack (Elasticsearch, Logstash, Kibana) offers a full logging and search solution with powerful analytics and visualizations.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.elastic.co" className="text-blue-600 underline" target="_blank">Elastic Stack Overview</a></li>
      <li><a href="https://www.youtube.com/watch?v=QIAcGjmiwPs" className="text-blue-600 underline" target="_blank">Elastic Stack Setup – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Elastic Stack Training – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Log Management – ACG</a></li>
    </ul>
  </div>
),

'gray-log': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Graylog is an open-source log management tool that provides centralized collection, parsing, and alerting of logs.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.graylog.org/" className="text-blue-600 underline" target="_blank">Graylog Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=TdqY4opdUVA" className="text-blue-600 underline" target="_blank">Graylog Installation – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Graylog – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Log Management – ACG</a></li>
    </ul>
  </div>
),
ansible: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Ansible is an agentless automation tool using SSH and YAML to manage infrastructure configuration and deployment.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.ansible.com/ansible/latest/index.html" className="text-blue-600 underline" target="_blank">Ansible Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=wgQ3rH8WMTw" className="text-blue-600 underline" target="_blank">Ansible Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Ansible – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Ansible Fundamentals – ACG</a></li>
    </ul>
  </div>
),

chef: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Chef is a Ruby-based configuration management tool that uses cookbooks and recipes to define infrastructure as code.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.chef.io/" className="text-blue-600 underline" target="_blank">Chef Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=eeayQF-0YJw" className="text-blue-600 underline" target="_blank">Chef Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Chef – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Chef Fundamentals – ACG</a></li>
    </ul>
  </div>
),

puppet: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Puppet allows declarative configuration of servers using a master-agent model, with code written in Puppet DSL.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://puppet.com/docs/puppet/latest/puppet_index.html" className="text-blue-600 underline" target="_blank">Puppet Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=D7F4aNe0s30" className="text-blue-600 underline" target="_blank">Puppet Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Puppet – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Puppet Fundamentals – ACG</a></li>
    </ul>
  </div>
),
'configuration-management': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Configuration management ensures servers and environments are defined and consistent via code. Tools like Ansible, Puppet, Chef, and SaltStack automate setup and changes.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.ansible.com/ansible/latest/index.html" className="text-blue-600 underline" target="_blank">Ansible Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=D7F4aNe0s30" className="text-blue-600 underline" target="_blank">Puppet Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Ansible – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Puppet Fundamentals – ACG</a></li>
    </ul>
  </div>
),
provisioning: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Provisioning automates the setup of infrastructure (servers, storage, networks) using code. Includes tools like CloudFormation, CDK, Pulumi, and Terraform.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.hashicorp.com/terraform/tutorials" className="text-blue-600 underline" target="_blank">Terraform Tutorials – HashiCorp</a></li>
      <li><a href="https://www.youtube.com/watch?v=K2St7Fl0OGU" className="text-blue-600 underline" target="_blank">Pulumi Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">CloudFormation – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Terraform – ACG</a></li>
    </ul>
  </div>
),
'ci-cd': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>CI/CD automates building, testing, and deploying code. Popular tools include Jenkins, GitLab CI, GitHub Actions, TeamCity, Travis CI, CircleCI, and Drone.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.youtube.com/watch?v=1s8Vfx-ExiM" className="text-blue-600 underline" target="_blank">CI/CD Overview – YouTube (TechWorld with Nana)</a></li>
      <li><a href="https://www.redhat.com/en/topics/devops/what-is-ci-cd" className="text-blue-600 underline" target="_blank">CI/CD Explained – Red Hat</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Jenkins X – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Modern CI/CD – ACG</a></li>
    </ul>
  </div>
),
'team-city': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>TeamCity is a JetBrains CI server offering extensive customization, build pipelines, and integration with other DevOps tools.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://www.jetbrains.com/help/teamcity/" className="text-blue-600 underline" target="_blank">TeamCity Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=SUtZOz-vGt8" className="text-blue-600 underline" target="_blank">TeamCity Tutorial – YouTube</a></li>
    </ul>
  </div>
),

'jenkins': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Jenkins is an open-source automation server used to build and deploy software using pipelines defined in code.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://www.jenkins.io/doc/" className="text-blue-600 underline" target="_blank">Jenkins Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=FX322RVNGj4" className="text-blue-600 underline" target="_blank">Jenkins Tutorial – YouTube</a></li>
    </ul>
  </div>
),

'travis-ci': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Travis CI is a hosted CI service for GitHub projects with simple YAML-based configuration for automated builds and tests.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.travis-ci.com/" className="text-blue-600 underline" target="_blank">Travis CI Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=ylkoBQzE_pI" className="text-blue-600 underline" target="_blank">Travis CI Intro – YouTube</a></li>
    </ul>
  </div>
),

'circle-ci': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>CircleCI is a cloud-based CI/CD platform that supports container-based builds and easy integration with GitHub and Bitbucket.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://circleci.com/docs/" className="text-blue-600 underline" target="_blank">CircleCI Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=7N6lZjc9GX0" className="text-blue-600 underline" target="_blank">CircleCI Tutorial – YouTube</a></li>
    </ul>
  </div>
),

'gitlab-ci': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>GitLab CI/CD is built into GitLab, offering pipelines, auto-deploy, and full integration with Git repository management.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.gitlab.com/ee/ci/" className="text-blue-600 underline" target="_blank">GitLab CI Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=GJXXYfjlAeY" className="text-blue-600 underline" target="_blank">GitLab CI Course – YouTube</a></li>
    </ul>
  </div>
),

'drone': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Drone is a container-native CI/CD platform that uses YAML pipelines and supports distributed build execution.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.drone.io/" className="text-blue-600 underline" target="_blank">Drone Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=EY3ROBqDyBc" className="text-blue-600 underline" target="_blank">Drone CI Tutorial – YouTube</a></li>
    </ul>
  </div>
),

'github-actions': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>GitHub Actions allows you to run workflows directly in GitHub, using YAML to automate build, test, and deploy events.</p>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.github.com/en/actions" className="text-blue-600 underline" target="_blank">GitHub Actions Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=RGOj5yH7evk" className="text-blue-600 underline" target="_blank">GitHub Actions Tutorial – YouTube</a></li>
    </ul>
  </div>
),
'infra-monitoring': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Infrastructure monitoring tracks your servers, containers, and services to keep systems healthy and performant.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://prometheus.io/docs/introduction/overview/" className="text-blue-600 underline" target="_blank">Prometheus Overview</a></li>
      <li><a href="https://www.youtube.com/watch?v=h4Sl21AKiDg" className="text-blue-600 underline" target="_blank">What is Infrastructure Monitoring? – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Infrastructure Monitoring – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Monitoring & Observability – ACG</a></li>
    </ul>
  </div>
),

'prometheus-i': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Prometheus is an open-source metrics and alerting system, ideal for time-series data collection from infrastructure and services.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://prometheus.io/docs/prometheus/latest/getting_started/" className="text-blue-600 underline" target="_blank">Prometheus Getting Started</a></li>
      <li><a href="https://www.youtube.com/watch?v=7YcW25PHnAA" className="text-blue-600 underline" target="_blank">Prometheus Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Prometheus Fundamentals – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Prometheus Advanced – ACG</a></li>
    </ul>
  </div>
),

'grafana-i': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Grafana displays metrics via dashboards and visualizations; it's often paired with Prometheus or other data sources.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://grafana.com" className="text-blue-600 underline" target="_blank">Grafana Getting Started</a></li>
      <li><a href="https://www.youtube.com/watch?v=ZQdwZuMJ2xY" className="text-blue-600 underline" target="_blank">Grafana Dashboard Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Grafana Essential Training – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Grafana 101 – ACG</a></li>
    </ul>
  </div>
),

'zabbix-i': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Zabbix is an open-source monitoring tool for metrics, network, and alerts across servers and devices.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.zabbix.com/documentation/current/manual" className="text-blue-600 underline" target="_blank">Zabbix Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=0Wphtw0il5A" className="text-blue-600 underline" target="_blank">Zabbix Beginner Guide – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Zabbix – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Zabbix Fundamentals – ACG</a></li>
    </ul>
  </div>
),

'datadog-i': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Datadog is a SaaS monitoring platform supporting metrics, logs, and traces from infrastructure, apps, and services.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.datadoghq.com/getting_started/" className="text-blue-600 underline" target="_blank">Datadog Getting Started</a></li>
      <li><a href="https://www.youtube.com/watch?v=gwLhB3zP7QM" className="text-blue-600 underline" target="_blank">Datadog Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Datadog – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Monitoring & Observability – ACG</a></li>
    </ul>
  </div>
),
'secret-management': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Secret Management tools secure access credentials, certificates, and keys across services and environments.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://vaultproject.io/docs" className="text-blue-600 underline" target="_blank">HashiCorp Vault Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=6YXRUCX01c0" className="text-blue-600 underline" target="_blank">Secret Management – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Vault – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Vault Fundamentals – ACG</a></li>
    </ul>
  </div>
),

'sealed-secrets': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Sealed Secrets (from Bitnami) encrypts secrets for Kubernetes using public-key cryptography—safe to store in Git.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://github.com/bitnami-labs/sealed-secrets" className="text-blue-600 underline" target="_blank">Sealed Secrets GitHub</a></li>
      <li><a href="https://www.youtube.com/watch?v=RnK7XzRSl50" className="text-blue-600 underline" target="_blank">Sealed Secrets Demo – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Kubernetes Secrets – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">K8s Security – ACG</a></li>
    </ul>
  </div>
),

vault: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>HashiCorp Vault centralizes secret storage, encryption, and access control with dynamic secrets and audit logs.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.hashicorp.com/vault" className="text-blue-600 underline" target="_blank">Vault Workshop – HashiCorp Learn</a></li>
      <li><a href="https://www.youtube.com/watch?v=sSBXTLd7Fuk" className="text-blue-600 underline" target="_blank">Vault Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Vault – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Vault Fundamentals – ACG</a></li>
    </ul>
  </div>
),

sop: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>SOPs (Standard Operating Procedures) define documented processes for incident response, deployments, and maintenance.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.atlassian.com" className="text-blue-600 underline" target="_blank">SOP Guide – Atlassian</a></li>
      <li><a href="https://www.youtube.com/watch?v=3WQ3z70viOA" className="text-blue-600 underline" target="_blank">Creating SOPs – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Incidents & SOPs – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">On‑Call & Ops – ACG</a></li>
    </ul>
  </div>
),

'cloud-spec-tools': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Cloud Specification Tools help benchmark workloads and enforce best practices for cost, performance, and compliance.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.youtube.com/watch?v=l8IYtDrfgOg" className="text-blue-600 underline" target="_blank">Cloud Best Practices – YouTube</a></li>
      <li><a href="https://aws.amazon.com/documentation/" className="text-blue-600 underline" target="_blank">AWS Well-Architected – AWS Docs</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Cloud Practitioner Prep – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">AWS Architecture – ACG</a></li>
    </ul>
  </div>
),

artifactory: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>JFrog Artifactory is a universal artifact repository for binaries, Docker images, and packages with fine-grained access control.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.jfrog.com/confluence/display/JFROG/Documentation" className="text-blue-600 underline" target="_blank">Artifactory Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=YgdOiGADnIY" className="text-blue-600 underline" target="_blank">Artifactory Demo – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Artifactory – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Package Repos – ACG</a></li>
    </ul>
  </div>
),

nexus: (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Sonatype Nexus is another popular artifact repository supporting Maven, npm, Docker, and more, with security scanning features.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://help.sonatype.com/repomanager3" className="text-blue-600 underline" target="_blank">Nexus Repo Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=8-XgBMIJXyM" className="text-blue-600 underline" target="_blank">Nexus Getting Started – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Nexus – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Private Registries – ACG</a></li>
    </ul>
  </div>
),

'cloud-smith': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Cloudsmith is a secure cloud-native artifact repository with support for many package formats and fine-grained access control.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://cloudsmith.io/" className="text-blue-600 underline" target="_blank">Cloudsmith Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=IYajfM1AMESPACE" className="text-blue-600 underline" target="_blank">Cloudsmith Intro – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Cloudsmith – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Package Repos – ACG</a></li>
    </ul>
  </div>
),
'gitops': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>GitOps uses Git as the source of truth for declarative infrastructure and app deployment, enabling automated and auditable delivery.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.weave.works" className="text-blue-600 underline" target="_blank">GitOps Explained – Weaveworks</a></li>
      <li><a href="https://www.youtube.com/watch?v=0baKbGQwb2A" className="text-blue-600 underline" target="_blank">GitOps Intro – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Getting Started with GitOps – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">AWS GitOps – ACG</a></li>
    </ul>
  </div>
),
'argo-cd': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Argo CD is a Kubernetes-native GitOps continuous delivery tool for pulling application configs from Git and deploying to clusters.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://argo-cd.readthedocs.io/" className="text-blue-600 underline" target="_blank">Argo CD Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=3hB7J5dG11Y" className="text-blue-600 underline" target="_blank">Argo CD Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learn Argo CD – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Argo CD Deep Dive – ACG</a></li>
    </ul>
  </div>
),
'flux-cd': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Flux CD is a CNCF project automating Kubernetes deployments via GitOps principles, using Git as the single source of truth.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://fluxcd.io/docs/" className="text-blue-600 underline" target="_blank">Flux CD Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=ssHxf8tdTO8" className="text-blue-600 underline" target="_blank">Flux CD Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Flux CD – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">GitOps with Flux – ACG</a></li>
    </ul>
  </div>
),
'artifact-management': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Artifact management stores compiled binaries, images, packages, and Helm charts with versioning, security, and distribution control.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://jfrog.com" className="text-blue-600 underline" target="_blank">Artifact Management Overview – JFrog</a></li>
      <li><a href="https://www.youtube.com/watch?v=YgdOiGADnIY" className="text-blue-600 underline" target="_blank">Artifact Management Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Artifactory – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Private Registries – ACG</a></li>
    </ul>
  </div>
),
'istio': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Istio is a service mesh that offers traffic management, resiliency, observability, and security across microservices in Kubernetes.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://istio.io/latest/docs/" className="text-blue-600 underline" target="_blank">Istio Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=5QunvUu6Y4I" className="text-blue-600 underline" target="_blank">Istio Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Istio – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Service Mesh Intro – ACG</a></li>
    </ul>
  </div>
),
'consul': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Consul by HashiCorp handles service discovery, configuration, and service mesh features for dynamic infrastructure and microservices.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.consul.io/docs" className="text-blue-600 underline" target="_blank">Consul Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=FM3jRPVZUZ4" className="text-blue-600 underline" target="_blank">Consul Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Consul – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Service Mesh w/ Consul – ACG</a></li>
    </ul>
  </div>
),
'linkerd': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Linkerd is a lightweight, ultra-fast CNCF service mesh designed for simplicity, security, and performance in cloud-native environments.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://linkerd.io/2/getting-started/" className="text-blue-600 underline" target="_blank">Linkerd Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=R9uQbLHCyZU" className="text-blue-600 underline" target="_blank">Linkerd Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Linkerd – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Service Mesh Intro – ACG</a></li>
    </ul>
  </div>
),
'envoy': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Envoy is a high-performance proxy used as the data plane in many service mesh architectures for load balancing and observability.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.envoyproxy.io/docs/envoy/latest/" className="text-blue-600 underline" target="_blank">Envoy Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=ufymZ1k0tk4" className="text-blue-600 underline" target="_blank">Envoy Proxy Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Envoy – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Service Mesh w/ Envoy – ACG</a></li>
    </ul>
  </div>
),
'application-monitoring': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Application monitoring gathers telemetry like metrics, logs & traces to understand app performance and health in production.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.youtube.com/watch?v=KXTsUL7ce1Y" className="text-blue-600 underline" target="_blank">App Monitoring Basics – YouTube</a></li>
      <li><a href="https://grafana.com" className="text-blue-600 underline" target="_blank">What Is APM? – Grafana Labs</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning APM Tools – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Monitoring & Observability – ACG</a></li>
    </ul>
  </div>
),
'jaeger': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Jaeger is an open-source distributed tracing system for monitoring and troubleshooting microservices-based architectures.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.jaegertracing.io/docs/latest/" className="text-blue-600 underline" target="_blank">Jaeger Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=4aYXCkGbQOc" className="text-blue-600 underline" target="_blank">Jaeger Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Jaeger – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Tracing with Jaeger – ACG</a></li>
    </ul>
  </div>
),
'new-relic': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>New Relic is a SaaS-based observability platform offering APM, infrastructure monitoring, logs, and error tracking.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://newrelic.com" className="text-blue-600 underline" target="_blank">New Relic APM Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=2RHh1-ygpnc" className="text-blue-600 underline" target="_blank">New Relic Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">New Relic Essentials – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">New Relic 101 – ACG</a></li>
    </ul>
  </div>
),
'data-dog': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Datadog (typo-corrected) — platform to monitor infrastructure, APM, logs, and metrics across cloud environments.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.datadoghq.com/getting_started/" className="text-blue-600 underline" target="_blank">Datadog Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=gwLhB3zP7QM" className="text-blue-600 underline" target="_blank">Datadog Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Datadog – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Monitoring & Observability – ACG</a></li>
    </ul>
  </div>
),
'prometheus': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Prometheus is the core metrics engine for modern monitoring solutions; pulls time-series data and triggers alerts.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://prometheus.io/docs/prometheus/latest/getting_started/" className="text-blue-600 underline" target="_blank">Prometheus Getting Started</a></li>
      <li><a href="https://www.youtube.com/watch?v=7YcW25PHnAA" className="text-blue-600 underline" target="_blank">Prometheus Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Prometheus Fundamentals – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Prometheus Advanced – ACG</a></li>
    </ul>
  </div>
),
'grafana': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Grafana is the visualization layer for metrics and traces. It integrates with Prometheus, Jaeger, and other backends.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://grafana.com" className="text-blue-600 underline" target="_blank">Grafana Getting Started</a></li>
      <li><a href="https://www.youtube.com/watch?v=ZQdwZuMJ2xY" className="text-blue-600 underline" target="_blank">Grafana Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Grafana Essential Training – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Grafana 101 – ACG</a></li>
    </ul>
  </div>
),
'container-orchestrator': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Container orchestrators automate deployment, scaling, and networking of containerized applications across clusters.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/" className="text-blue-600 underline" target="_blank">What is Kubernetes? – Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=ZS3bQDwTtn8" className="text-blue-600 underline" target="_blank">Container Orchestration Explained – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning Kubernetes – LinkedIn Learning</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Kubernetes Deep Dive – ACG</a></li>
    </ul>
  </div>
),
'gks/eks/aks': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Managed Kubernetes services: GKE (GCP), EKS (AWS), AKS (Azure) provide fully managed cluster control planes.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://cloud.google.com" className="text-blue-600 underline" target="_blank">GKE Overview – Google Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=7bA0gTroJjw" className="text-blue-600 underline" target="_blank">Managed Kubernetes Comparison – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Learning AWS EKS – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">AWS EKS Getting Started – ACG</a></li>
    </ul>
  </div>
),
'aws-ecs': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>AWS ECS is a container orchestration service that supports Docker and integrates with AWS services like IAM, ALB, and CloudWatch.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://aws.amazon.com/documentation/" className="text-blue-600 underline" target="_blank">ECS Developer Guide</a></li>
      <li><a href="https://www.youtube.com/watch?v=5WIyXGqU5Ck" className="text-blue-600 underline" target="_blank">AWS ECS Tutorial – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">AWS ECS Essential Training – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">AWS ECS Foundations – ACG</a></li>
    </ul>
  </div>
),
'docker-swamp': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Docker Swarm (Docker “Swamp”) is Docker’s native clustering tool for container deployment and scaling with simple YAML configs.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://docs.docker.com/engine/swarm/" className="text-blue-600 underline" target="_blank">Docker Swarm Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=SLauY6PpjW4" className="text-blue-600 underline" target="_blank">Docker Swarm Crash Course – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Docker Swarm & Orchestration – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Docker Swarm Fundamentals – ACG</a></li>
    </ul>
  </div>
),
'kubernetes': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Kubernetes is the leading open-source platform for automating deployment, scaling, and management of containerized apps.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://kubernetes.io/docs/home/" className="text-blue-600 underline" target="_blank">Kubernetes Official Docs</a></li>
      <li><a href="https://www.youtube.com/watch?v=PH-2FfFD2PU" className="text-blue-600 underline" target="_blank">Kubernetes Full Course – YouTube</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Kubernetes Concepts – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">Kubernetes Glossary – ACG</a></li>
    </ul>
  </div>
),
'availability': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Availability refers to the ability of a system or component to be operational and accessible when required.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://en.wikipedia.org)" className="text-blue-600 underline" target="_blank">Availability (Wikipedia)</a></li>
      <li><a href="https://thenewstack.io" className="text-blue-600 underline" target="_blank">Availability vs Reliability – The New Stack</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">SRE Intro – LinkedIn</a></li>
      <li><a href="https://acloudguru.com" className="text-blue-600 underline" target="_blank">SRE Foundations – ACG</a></li>
    </ul>
  </div>
),
'data-management': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Data management includes practices for collecting, storing, organizing, and maintaining data securely and efficiently.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.talend.com/resources/what-is-data-management/" className="text-blue-600 underline" target="_blank">What is Data Management? – Talend</a></li>
      <li><a href="https://www.geeksforgeeks.org/backend-development/" className="text-blue-600 underline" target="_blank">Data Management Basics – GeeksforGeeks</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Data Governance & Quality – LinkedIn</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Data Management Fundamentals – Udemy</a></li>
    </ul>
  </div>
),
'design-and-implementation': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>This phase involves planning the architecture and building scalable, secure systems based on infrastructure needs.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://developer.ibm.com/articles/cl-design-implementation/" className="text-blue-600 underline" target="_blank">Design and Implementation Principles – IBM</a></li>
      <li><a href="https://martinfowler.com" className="text-blue-600 underline" target="_blank">Design Dead – Martin Fowler</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Software Architecture – LinkedIn</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Software Design – Udemy</a></li>
    </ul>
  </div>
),
'management-and-monitoring': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>This involves tools and practices for managing infrastructure and monitoring system health, logs, and metrics.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://opensource.com" className="text-blue-600 underline" target="_blank">Top Linux Monitoring Tools</a></li>
      <li><a href="https://prometheus.io/docs/introduction/overview/" className="text-blue-600 underline" target="_blank">Monitoring with Prometheus</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Infrastructure Monitoring – LinkedIn</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Infrastructure Monitoring – Udemy</a></li>
    </ul>
  </div>
),
'cloud-design-patterns': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>Cloud Design Patterns are reusable solutions for common challenges in cloud-based application architecture, such as scalability, resiliency, and availability.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/" className="text-blue-600 underline" target="_blank">Microsoft Cloud Design Patterns</a></li>
      <li><a href="https://12factor.net/" className="text-blue-600 underline" target="_blank">The Twelve-Factor App – 12factor.net</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Cloud Design Patterns – LinkedIn</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Cloud Design Patterns – Udemy</a></li>
    </ul>
  </div>
),
'service-mesh': (
  <div className="space-y-3 text-sm leading-relaxed">
    <p>A service mesh is an infrastructure layer that manages communication between microservices through features like traffic management, load balancing, and security.</p>
    <h4 className="font-semibold mt-3">📚 Free Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.redhat.com/en/topics/microservices/what-is-a-service-mesh" className="text-blue-600 underline" target="_blank">What is a Service Mesh? – Red Hat</a></li>
      <li><a href="https://www.nginx.com/blog/what-is-a-service-mesh/" className="text-blue-600 underline" target="_blank">What is a Service Mesh? – NGINX</a></li>
    </ul>
    <h4 className="font-semibold mt-3">🎓 Premium Resources</h4>
    <ul className="list-disc list-inside">
      <li><a href="https://www.linkedin.com/learning" className="text-blue-600 underline" target="_blank">Service Mesh for Developers – LinkedIn</a></li>
      <li><a href="https://www.udemy.com" className="text-blue-600 underline" target="_blank">Service Mesh with Istio – Udemy</a></li>
    </ul>
  </div>
),


};
