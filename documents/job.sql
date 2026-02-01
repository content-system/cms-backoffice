create table jobs (
  id varchar(40) primary key,
  slug varchar(255),
  title varchar(300),
  description text,
  original_link varchar(300),
  published_at timestamptz,
  expired_at timestamptz,
  company varchar(40),
  position varchar(100),
  quantity integer default 1,
  location varchar(1000),
  applicant_count integer default 1,
  skills character varying[],
  min_salary bigint,
  max_salary bigint,
  created_by varchar(40),
  created_at timestamptz,
  updated_by varchar(40),
  updated_at timestamptz
);

insert into jobs (id,slug,title,description,original_link,published_at,expired_at,company,position,quantity,location,applicant_count,skills,min_salary,max_salary,created_by,created_at,updated_by,updated_at) values
	 ('GhuqiuKbTS','senior-software-engineer-technology-remote-triple-a-GhuqiuKbTS','Senior Software Engineer - Technology - Remote - Triple A','<h3>About Triple-A</h3>
<p>
  Triple-A is a global payment institution licensed in the United States, Europe, and Singapore, enabling businesses worldwide to pay and get paid in
  both local and digital currencies.
</p>
<p>
  We empower businesses to reach over 560M digital currency owners, boost revenue, and optimise costs through stablecoin and cryptocurrency payments,
  while eliminating volatility, custody, and compliance risks. Our commitment is to build a more efficient, inclusive global payment ecosystem by
  bridging the gap between local and digital currencies.
</p>
<p>
  Registered with the United States Financial Crimes Enforcement Network (FinCEN), licensed by the Monetary Authority of Singapore (MAS), and Banque
  de France’s ACPR in Europe, Triple-A is trusted by over 20,000 businesses worldwide to make global crypto payments simple, secure, and
  cost-effective. For more information, visit www.triple-a.io.
</p>
<h4>Join the team</h4>
<p>
  We are a dynamic and passionate team building towards a more efficient global payment ecosystem. We actively bridge the gaps in cross-border
  payments, between traditional & digital currencies, and Web2 and Web3.
</p>
<p>
  Guided by our CEO, Eric Barbier, who brings 18 years of experience and a proven track record in building and scaling payment companies worldwide,
  Triple-A is growing our team. If you’re bold, tenacious, and creative, we believe you’d be a perfect match for us!
</p>
<h4>You Will…</h4>
<p>
  As a Senior Software Engineer, you will contribute to the development of our innovative payment solutions, working closely with a team dedicated to
  advancing our technology and service offerings.
</p>
<p>
  We are looking for a skilled individual with experience in Golang, event streaming (ideally with NATS), and Kubernetes. Familiarity with software
  architecture principles, particularly in resilience and idempotency, is highly valued. While not required, experience with Temporal.io and SvelteKit
  would be advantageous.
</p>
<p>
  This role offers the opportunity to work on scalable, secure, and efficient systems supporting both fiat and cryptocurrency transactions. If you are
  passionate about technology and excited about making a significant impact in the payment industry, we encourage you to apply.
</p>
<h4>Key Responsibilities:</h4>
<ul>
  <li>
    Contribute to the architecture and implementation of scalable software solutions using Golang, ensuring high performance and security for both
    fiat and cryptocurrency transactions.
  </li>
  <li>
    Participate in the development of real-time, distributed systems with NATS, contributing to our ability to process millions of transactions
    quickly and reliably.
  </li>
  <li>
    Assist in managing and orchestrating containerized applications with Kubernetes, supporting optimal deployment, scaling, and management across our
    cloud infrastructure.
  </li>
  <li>Engage in best practice development in software architecture, with a focus on system resilience and idempotency.</li>
  <li>
    Collaborate with the development team and cross-functional teams to support the definition, design, and delivery of new features, following
    industry standards and regulations for fiat and cryptocurrency transactions.
  </li>
  <li>Contribute to a culture of innovation and continuous improvement within the team.</li>
</ul>
<h4>Qualifications:</h4>
<ul>
  <li>Proven experience (minimum 5 years) as a software developer, with a strong skill set in Golang, NATS, and Kubernetes.</li>
  <li>
    A good understanding of software architecture, especially in creating systems for high availability, scalability, and security in payment
    processing.
  </li>
  <li>Interest in the payment industry, particularly in the processing of both fiat and cryptocurrency.</li>
  <li>Strong analytical and problem-solving skills, with a capacity for developing innovative and efficient solutions.</li>
  <li>Bachelor’s degree in Computer Science, Engineering, or a related field is preferred.</li>
</ul>
<h4>Why Join Us?</h4>
<ul>
  <li>Opportunity to contribute to a dynamic team in the vibrant tech hub of Singapore.</li>
  <li>Creative work environment that values diversity, inclusion, and professional growth.</li>
  <li>Competitive compensation, comprehensive benefits, and opportunities for advancement.</li>
</ul>
<h4>How to Apply</h4>
<p>
  Passionate about technology and innovation in the financial sector? Ready to lead in a challenging yet rewarding environment? Send your resume to
  hr@triple-a.io.
</p>
<p>
  Join us in revolutionizing the payment industry, one transaction at a time. Be at the forefront of embracing both fiat and cryptocurrency to make a
  global impact.
</p>','https://www.triple-a.io/careers?utm_medium=website&utm_source=Golangprojects&ref=Golangprojects&source=Golangprojects','2025-01-08 14:34:44+07',null,'Triple A','Senior Software Engineer',5,'Remote',1,'{GO,NATS,Kubernetes}',null,null,null,null,null,null),
	 ('EEAysUeYIK','product-manager-singapore-triple-a-EEAysUeYIK','Product Manager - Singapore - Triple A','<h3>About Triple-A</h3>
<p>
  Triple-A is a global payment institution licensed in the United States, Europe, and Singapore, enabling businesses worldwide to pay and get paid in
  both local and digital currencies.
</p>
<p>
  We empower businesses to reach over 560M digital currency owners, boost revenue, and optimise costs through stablecoin and cryptocurrency payments,
  while eliminating volatility, custody, and compliance risks. Our commitment is to build a more efficient, inclusive global payment ecosystem by
  bridging the gap between local and digital currencies.
</p>
<p>
  Registered with the United States Financial Crimes Enforcement Network (FinCEN), licensed by the Monetary Authority of Singapore (MAS), and Banque
  de France’s ACPR in Europe, Triple-A is trusted by over 20,000 businesses worldwide to make global crypto payments simple, secure, and
  cost-effective. For more information, visit www.triple-a.io.
</p>
<h4>Join the team</h4>
<p>
  We are a dynamic and passionate team building towards a more efficient global payment ecosystem. We actively bridge the gaps in cross-border
  payments, between traditional & digital currencies, and Web2 and Web3.
</p>
<p>
  Guided by our CEO, Eric Barbier, who brings 18 years of experience and a proven track record in building and scaling payment companies worldwide,
  Triple-A is growing our team. If you’re bold, tenacious, and creative, we believe you’d be a perfect match for us!
</p>
<h4>About the Role:</h4>
<p>
  Working closely with the sales team, you’ll translate cutting-edge features into sales-winning messaging that resonates with our target audience.
  With a solid understanding of the engineering side of things, you’ll bridge the gap between what’s technically feasible and what sparks customer
  interest.
</p>
<h4>Job Description:</h4>
<ul>
  <li>
    Lead product roadmap for one or more payment products, designing PRDs (Product Requirement Documents) and driving product roadmaps. Effectively
    prioritizing business and product opportunities from a wide range of inputs whilst ensuring alignment with all stakeholders.
  </li>
  <li>
    Advocate for quality engineering solutions and architectural design. Strike a healthy balance between system scalability and solution
    customizations.
  </li>
  <li>
    Maintain and improve existing features whilst experimenting and launching new features, applying agile and scrum methodologies to plan and grow
    the product through quick iterations.
  </li>
  <li>Perform intensive market research to understand market gaps and differentiate product offerings.</li>
  <li>
    Drive performance excellence of your product through rigorous data analysis, from measuring impact and testing hypotheses to conceptualizing and
    executing features based on data insights.
  </li>
</ul>
<h4>Requirements:</h4>
<ul>
  <li>
    3-5 years of experience in product management, preferably with prior experience in payment services, fintech, e-commerce, or crypto space.
    Candidates with no product management experience will be considered if they have a systems/technical background.
  </li>
  <li>Experience working in a startup or fast-growing company is a plus.</li>
  <li>Care deeply about user experience and are passionate about problem-solving. Interest in the fast-growing crypto industry.</li>
  <li>Bachelor’s in systems engineering, information technology, business, finance, or related fields, or equivalent practical experience.</li>
  <li>
    Strong communication skills in both persuasion and presentation. Well-versed in English (spoken and written) to facilitate discussions and
    collaborations.
  </li>
  <li>Understanding of blockchain technology, crypto payment systems, and traditional payment methods.</li>
  <li>A passion for driving sales and a hunger to see our crypto payment gateway become the go-to solution.</li>
</ul>
<h4>Bonus points for:</h4>
<ul>
  <li>Experience working in a fast-paced startup environment.</li>
</ul>
<h4>What We Offer:</h4>
<ul>
  <li>The chance to be part of a team shaping the future of crypto payments.</li>
  <li>A dynamic and results-oriented environment where your work directly impacts sales.</li>
  <li>Competitive salary and benefits package, with the potential for substantial rewards tied to sales success.</li>
</ul>
<h4>Ready to join us?</h4>
<p>
  We are looking for a passionate and driven individual with a unique blend of sales enablement expertise and product marketing knowledge. If you’re
  excited about crypto and have the skills to empower our sales team with the knowledge to win, we encourage you to apply!
</p>','https://www.triple-a.io/careers?utm_medium=website&utm_source=Golangprojects&ref=Golangprojects&source=Golangprojects','2025-01-08 14:34:44+07',null,'Triple A','Product Manager',1,'Singapore',1,'{Payment,Cryptocurrency,Blockchain,Fintech,E-commerce}',null,null,null,null,null,null),
	 ('QlbWj12rx5','senior-software-engineer-network-remote-netbird-QlbWj12rx5','Senior Software Engineer (Network) - Remote - NetBird','<h3>Who we are</h3>
<h5>A team from Germany with the vision to make advanced network security accessible for everyone</h5>
<p>
  We are a software company developing an open-source zero-trust network security platform that is both easy to use and affordable for teams of all
  sizes and budgets. Our mission is grounded in a simple yet powerful belief: secure private networking is a fundamental right of every modern company
</p>
<p>
  Since our launch on GitHub in 2021, we have gained trust among thousands of companies seeking secure and seamless solutions for connecting remote
  employees and infrastructure. By replacing traditional centralized VPNs, NetBird has become a trusted choice for modern network security, connecting
  today hundreds of thousands of users and machines worldwide. Our open-source, community-driven approach has been a key driver of our success. We
  listen to our users, and their input helps us make network security better for everyone.
</p>
<p>Want to see what we''re working on? Check out our GitHub repo at netbird or Networking Knowledge Hub - NetBird</p>
<h4>✏️ What you will do</h4>
<p>
  As a Senior Software Engineer (Network), you’ll join a talented team of engineers working on an open-core platform that redefines how companies
  build secure, high-performance networks. Your role will involve leading the development of high-performance networking code that works across
  various platforms like Windows, macOS, and Linux. Specifically, you will:
</p>
<ul>
  <li>Design, develop, and maintain a codebase with best practices, ensuring high performance and reliability.</li>
  <li>Take ownership of technical decisions and ensure they align with organizational goals.</li>
  <li>Collaborate with peers by reviewing code, participating in design discussions, and brainstorming new projects.</li>
  <li>Advocate for product improvements and contribute to the team''s continuous development.</li>
  <li>Support open-source users by addressing GitHub issues and providing technical assistance.</li>
  <li>Occasionally participate in technical calls with customers to understand and address their needs.</li>
</ul>
<p>
  If you''ve read this and thought, "That sounds like me!" — there''s no need to keep reading; we should definitely have a conversation. However, if
  you''re unsure about the kind of experience we''re looking for, the following details should provide some clarity.
</p>
<h3>🔎 What we are looking for</h3>
<p>We’re searching for someone with the following experience and skills:</p>
<h4>Must-Haves</h4>
<ul>
  <li>5+ years of professional software engineering experience.</li>
  <li>Expertise in the architecture and design of distributed systems.</li>
  <li>Strong knowledge of networking concepts, including protocols, routing, and tunneling.</li>
  <li>Proven experience in network performance monitoring and optimization.</li>
  <li>Deep understanding of multi-threading and asynchronous programming.</li>
  <li>Familiarity with unit and integration testing principles.</li>
  <li>A positive and collaborative attitude towards both customers and teammates.</li>
  <li>Proficiency in English with excellent communication skills.</li>
</ul>
<h4>Nice-to-Haves</h4>
<ul>
  <li>Hands-on experience with VPN technologies.</li>
  <li>2+ years of experience developing in Go.</li>
  <li>Experience with REST and gRPC APIs.</li>
  <li>Passion for automation and scripting to streamline repetitive tasks.</li>
  <li>Background in releasing and maintaining applications used by millions of devices.</li>
  <li>Experience in cloud environments.</li>
  <li>Contributions to open-source projects.</li>
</ul>
<h3>😌 What’s in for you</h3>
<p>We know that happy and supported team members build the best products. That’s why we offer:</p>
<ul>
  <li>
    <strong>Comprehensive compensation package</strong>: Receive a competitive base salary and equity incentives.
  </li>
  <li>
    <strong>Hybrid work environment</strong>: Enjoy the flexibility of working both from our centrally located Berlin office and remotely.
  </li>
  <li>
    <strong>Diverse and collaborative team</strong>: Join a team that values fast, clean shipping and works together to achieve great results.
  </li>
  <li>
    <strong>High level of independence</strong>: Focus on outcomes, not the appearance of work. This is not a strict 9-to-6 role.
  </li>
  <li>
    <strong>Growth opportunities</strong>: Be part of a rapidly growing company at the forefront of the Zero Trust security revolution.
  </li>
  <li>
    <strong>Additional benefits</strong>: Take advantage of perks like employee discounts and health programs (e.g., Urban Sports Club).
  </li>
</ul>
<h3>🏃🏽 How to Apply</h3>
<p>
  If this position sounds exciting to you, we’d love to hear from you! Please fill out our
  https://www.notion.so/1466122c188d80dcb3c7cba09e0d41fb?pvs=21 . If you have any questions, feel free to reach out to hr@netbird.io
</p>
<p>
  At NetBird, we value diversity and strive to provide all applicants with equal opportunities during our selection process—regardless of gender,
  sexual identity, nationality, ethnicity, religion or belief, disability, or age. Please include only the information and documents relevant to
  evaluating your application (e.g., resume and relevant certificates or references). A photo is not required and can be omitted.
</p>','https://careers.netbird.io/Senior-Software-Engineer-Network-1446122c188d813797c7c85884d0a246','2025-01-08 15:34:44+07',null,'NetBird','Senior Software Engineer (Network)',2,'Remote',1,'{Network,VPN,GO}',null,null,null,null,null,null),
	 ('yUxaI3hjWA','frontend-software-engineer-remote-netbird-yUxaI3hjWA','Frontend Software Engineer - Remote - NetBird','<h3>Who we are</h3>
<h5>A team from Germany with the vision to make advanced network security accessible for everyone</h5>
<p>
  We are a software company developing an open-source zero-trust network security platform that is both easy to use and affordable for teams of all
  sizes and budgets. Our mission is grounded in a simple yet powerful belief: secure private networking is a fundamental right of every modern company
</p>
<p>
  Since our launch on GitHub in 2021, we have gained trust among thousands of companies seeking secure and seamless solutions for connecting remote
  employees and infrastructure. By replacing traditional centralized VPNs, NetBird has become a trusted choice for modern network security, connecting
  today hundreds of thousands of users and machines worldwide. Our open-source, community-driven approach has been a key driver of our success. We
  listen to our users, and their input helps us make network security better for everyone.
</p>
<p>Want to see what we''re working on? Check out our GitHub repo at netbird or Networking Knowledge Hub - NetBird</p>
<h4>✏️ What you will do</h4>
<p>
  As a Software Engineer (Frontend), you will play a key role in evolving NetBird’s product by designing and developing intuitive and responsive user
  interfaces. Your work will directly impact the usability, accessibility, and overall user experience of our platform, making it accessible to a
  broader audience. Specifically, you will:
</p>
<ul>
  <li>Lead frontend development efforts, creating user-friendly web interfaces that align with our product vision and user needs.</li>
  <li>Take a holistic approach to the product lifecycle, from concept and coding to deployment, monitoring, and refinement.</li>
  <li>Collaborate with backend engineers, designers, and product managers to implement features and enhancements.</li>
  <li>Ensure the performance, quality, and responsiveness of applications across various devices and browsers.</li>
  <li>Stay updated with the latest industry trends and technologies to bring innovative solutions to the platform.</li>
</ul>
<p>
  If you''ve read this and thought, "That sounds like me!" — there''s no need to keep reading; we should definitely have a conversation. However, if
  you''re unsure about the kind of experience we''re looking for, the following details should provide some clarity.
</p>
<h3>🔎 What we are looking for</h3>
<p>We’re searching for someone with the following experience and skills:</p>
<h4>Must-Haves</h4>
<ul>
  <li>5+ years of professional software engineering experience, with a focus on frontend development.</li>
  <li>Strong proficiency in JavaScript, HTML5, CSS3, and modern frontend frameworks such as React and Next.js.</li>
  <li>Understanding of UI/UX design principles and the ability to translate user needs into functional interfaces.</li>
  <li>Experience with unit and integration testing of frontend components.</li>
  <li>Excellent collaborative skills, the ability to work independently, and adaptability in a fast-paced startup environment.</li>
  <li>Proficiency in English with excellent communication skills.</li>
</ul>
<h4>Nice-to-Haves</h4>
<ul>
  <li>Familiarity with build tools and version control systems like Webpack, Babel, and Git.</li>
  <li>Experience in optimizing applications for speed and scalability.</li>
  <li>Knowledge of web accessibility standards and best practices.</li>
  <li>Contributions to open-source projects.</li>
  <li>Experience working in cloud environments.</li>
</ul>
<h3>😌 What’s in for you</h3>
<p>We know that happy and supported team members build the best products. That’s why we offer:</p>
<ul>
  <li>
    <strong>Comprehensive compensation package</strong>: Receive a competitive base salary and equity incentives.
  </li>
  <li>
    <strong>Hybrid work environment</strong>: Enjoy the flexibility of working both from our centrally located Berlin office and remotely.
  </li>
  <li>
    <strong>Diverse and collaborative team</strong>: Join a team that values fast, clean shipping and works together to achieve great results.
  </li>
  <li>
    <strong>High level of independence</strong>: Focus on outcomes, not the appearance of work. This is not a strict 9-to-6 role.
  </li>
  <li>
    <strong>Growth opportunities</strong>: Be part of a rapidly growing company at the forefront of the Zero Trust security revolution.
  </li>
  <li>
    <strong>Additional benefits</strong>: Take advantage of perks like employee discounts and health programs (e.g., Urban Sports Club).
  </li>
</ul>
<h3>🏃🏽 How to Apply</h3>
<p>
  If this position sounds exciting to you, we’d love to hear from you! Please fill out our
  https://www.notion.so/1466122c188d80dcb3c7cba09e0d41fb?pvs=21 . If you have any questions, feel free to reach out to hr@netbird.io
</p>
<p>
  At NetBird, we value diversity and strive to provide all applicants with equal opportunities during our selection process—regardless of gender,
  sexual identity, nationality, ethnicity, religion or belief, disability, or age. Please include only the information and documents relevant to
  evaluating your application (e.g., resume and relevant certificates or references). A photo is not required and can be omitted.
</p>','https://careers.netbird.io/Software-Engineer-Frontend-1456122c188d801eb74fde96307b0afb','2025-01-08 15:34:44+07',null,'NetBird','Frontend Software Engineer',1,'Remote',1,'{JavaScript,HTML5,CSS3,React,Nextjs}',null,null,null,null,null,null),
	 ('STFyPb0ycn','go-lead-software-engineer-remote-triple-a-60k-150k-usd-STFyPb0ycn','GO - Lead Software Engineer - Remote - Triple A - 60k - 150k USD','<h3>About Triple-A</h3>
<p>
  Triple-A is a global payment institution licensed in the United States, Europe, and Singapore, enabling businesses worldwide to pay and get paid in
  both local and digital currencies.
</p>
<p>
  We empower businesses to reach over 560M digital currency owners, boost revenue, and optimise costs through stablecoin and cryptocurrency payments,
  while eliminating volatility, custody, and compliance risks. Our commitment is to build a more efficient, inclusive global payment ecosystem by
  bridging the gap between local and digital currencies.
</p>
<p>
  Registered with the United States Financial Crimes Enforcement Network (FinCEN), licensed by the Monetary Authority of Singapore (MAS), and Banque
  de France’s ACPR in Europe, Triple-A is trusted by over 20,000 businesses worldwide to make global crypto payments simple, secure, and
  cost-effective. For more information, visit www.triple-a.io.
</p>
<h4>Join the team</h4>
<p>
  We are a dynamic and passionate team building towards a more efficient global payment ecosystem. We actively bridge the gaps in cross-border
  payments, between traditional & digital currencies, and Web2 and Web3.
</p>
<p>
  Guided by our CEO, Eric Barbier, who brings 18 years of experience and a proven track record in building and scaling payment companies worldwide,
  Triple-A is growing our team. If you’re bold, tenacious, and creative, we believe you’d be a perfect match for us!
</p>
<h4>About the Role:</h4>
<p>
  We are looking for an experienced Engineering Manager to lead a team of approximately 10 software engineers working with Go and TypeScript. You will
  play a critical role in people management, organizational leadership, and empowering your team to deliver high-quality software solutions.
</p>
<h4>Responsibilities:</h4>
<ul>
  <li>Lead, mentor, and develop a team of software engineers.</li>
  <li>Foster a collaborative team environment.</li>
  <li>Drive project planning, execution, and technical decision-making.</li>
  <li>Collaborate cross-functionally to align engineering efforts with business objectives.</li>
  <li>Oversee the development lifecycle, ensuring best practices in code quality and agile methodologies.</li>
  <li>Identify and resolve obstacles to maintain project momentum.</li>
  <li>Support career development and provide regular performance feedback.</li>
</ul>
<h4>Qualifications</h4>
<ul>
  <li>Proven experience in managing engineering teams.</li>
  <li>Strong technical background with some proficiency in Go and TypeScript.</li>
  <li>Good architectural knowledge with a solid understanding of resiliency and scalability.</li>
  <li>Excellent leadership, communication, and organizational skills.</li>
  <li>Experience with agile development practices.</li>
  <li>Ability to collaborate effectively with cross-functional teams.</li>
</ul>
<h4>Preferred Qualifications</h4>
<ul>
  <li>Bachelor’s or Master’s degree in Computer Science, Engineering, or a related field.</li>
  <li>Experience in large tech companies or high-growth startups.</li>
  <li>Familiarity with cloud platforms.</li>
  <li>Passion for fostering innovation and engineering excellence.</li>
  <li>Experience in the Web3 landscape.</li>
</ul>
<h4>How to Apply</h4>
<p>
  Passionate about technology and innovation in the financial sector? Ready to lead in a challenging yet rewarding environment? Send your resume to
  hr@triple-a.io.
</p>
<p>
  Join us in revolutionizing the payment industry, one transaction at a time. Be at the forefront of embracing both fiat and cryptocurrency to make a
  global impact.
</p>','https://www.golangprojects.com/golang-go-job-gva-Remote-Lead-Software-Engineer-Singapore-Triple-a-remotework.html','2025-01-08 14:34:44+07',null,'Triple A','Lead Software Engineer',1,'Remote',1,'{GO,Typescript,Javascript,Web3,Microservices,Management}',60000,150000,null,null,null,null),
	 ('wXh0XxJfM2','backend-engineer-remote-flourish-75k-to-120k-wXh0XxJfM2','Backend Engineer - Remote - Flourish - 75K to 120K','<h3>About Flourish</h3>
<p>
  Flourish Software is a leading cannabis supply chain and retail software company. We are working to empower the cannabis industry through better
  technology.
</p>
<h4>What’s the opportunity?</h4>
<p>
  As a Backend Engineer at Flourish Software, you''ll play a pivotal role in developing mission-critical backend services that streamline compliance
  and operational processes for leading cannabis, CBD, and hemp businesses across North America. This position is for an engineer specializing in Go.
  You’ll work directly on third-party integrations with systems like Metrc and BioTrack, helping our clients stay compliant in a highly regulated
  market. This is an opportunity to solve complex, real-world challenges, collaborate with a talented team, and shape the future of a growing platform
  in a fast-paced, innovative industry.
</p>
<h4>What do we value?</h4>
<ul>
  <li>Honesty, integrity, and self-driven motivation</li>
  <li>Clean, readable code and well-thought-out solutions</li>
  <li>Thorough planning prior to execution</li>
  <li>Teamwork and communication</li>
  <li>Happiness and satisfaction in your work</li>
</ul>
<h4>Key Responsibilities:</h4>
<ul>
  <li>
    Build, maintain, and scale backend services using Go, ensuring the seamless integration of our platform with third-party compliance systems like
    Metrc and BioTrack.
  </li>
  <li>
    Develop and maintain APIs to integrate real-time data from compliance systems into our platform, allowing clients to meet industry regulations and
    manage their supply chain efficiently.
  </li>
  <li>Design and optimize database schemas using SQL to manage application data.</li>
  <li>Troubleshoot and debug issues across the platform, ensuring reliable and performant services for our users.</li>
  <li>Collaborate with cross-functional teams to solve complex problems related to the cannabis supply chain and compliance requirements.</li>
  <li>Document processes and workflows to ensure smooth knowledge sharing within the engineering team and beyond.</li>
  <li>Track work using JIRA.</li>
</ul>
<h4>Skill Requirements</h4>
<ul>
  <li>3+ years professional software engineering experience.</li>
  <li>3+ years of experience with Go or demonstrable equivalent project(s).</li>
  <li>Strong experience with SQL and relational database management (MySQL, PostgreSQL).</li>
  <li>Experience building and integrating APIs, ideally with third-party systems.</li>
  <li>Availability to work in US time zones.</li>
  <li>Excellent written and verbal communication skills in English.</li>
</ul>
<h4>Nice to Have</h4>
<ul>
  <li>Familiarity with front-end frameworks like AngularJS/Angular.</li>
  <li>Experience with testing cloud-based applications hosted on AWS.</li>
  <li>Familiarity with scripting, docker, CI/CD pipelines, and Atlassian tooling.</li>
  <li>Familiarity with Agile methodologies.</li>
</ul>
<h4>Benefits</h4>
<ul>
  <li>
    US Based Full Time Employees:
    <ul>
      <li>Health, dental, and vision insurance</li>
      <li>100% covered accidental death, disability, and life insurance</li>
      <li>SIMPLE IRA (401K equivalent) matching</li>
    </ul>
  </li>
  <li>Emphasis on work-life balance</li>
  <li>Remote-first company (even pre-pandemic)</li>
  <li>Uncapped PTO (with approval)</li>
  <li>Opportunity to work on foundational software of a growing and fast-paced, innovative industry</li>
</ul>
<h4>Salary Range</h4>
<ul>
  <li>US Based Candidates: $75,000 - $120,000 per year, depending on experience.</li>
  <li>
    Candidates outside the US: Compensation will be adjusted according to local market rates, with a typical range of $40,000 to $75,000 USD,
    depending on experience and region.
  </li>
</ul>','https://www.flourishsoftware.com/careers/backend-engineer-go-remote','2025-01-08 15:34:44+07',null,'Flourish','GO Backend Engineer',3,'Remote',1,'{GO,AWS,SQL,Microservices}',75000,120000,null,null,null,null),
	 ('woECZq5kyh','business-development-director-business-development-singapore-woECZq5kyh','Business Development Director - Business Development - Singapore - Triple A','<h3>About Triple-A</h3>
<p>
  Triple-A is a global payment institution licensed in the United States, Europe, and Singapore, enabling businesses worldwide to pay and get paid in
  both local and digital currencies.
</p>
<p>
  We empower businesses to reach over 560M digital currency owners, boost revenue, and optimise costs through stablecoin and cryptocurrency payments,
  while eliminating volatility, custody, and compliance risks. Our commitment is to build a more efficient, inclusive global payment ecosystem by
  bridging the gap between local and digital currencies.
</p>
<p>
  Registered with the United States Financial Crimes Enforcement Network (FinCEN), licensed by the Monetary Authority of Singapore (MAS), and Banque
  de France’s ACPR in Europe, Triple-A is trusted by over 20,000 businesses worldwide to make global crypto payments simple, secure, and
  cost-effective. For more information, visit www.triple-a.io.
</p>
<h4>Join the team</h4>
<p>
  We are a dynamic and passionate team building towards a more efficient global payment ecosystem. We actively bridge the gaps in cross-border
  payments, between traditional & digital currencies, and Web2 and Web3.
</p>
<p>
  Guided by our CEO, Eric Barbier, who brings 18 years of experience and a proven track record in building and scaling payment companies worldwide,
  Triple-A is growing our team. If you’re bold, tenacious, and creative, we believe you’d be a perfect match for us!
</p>
<h4>You Will…</h4>
<ul>
  <li>
    Secure and Develop Business Opportunities:
    <ul>
      <li>Identify, qualify, and secure business opportunities.</li>
      <li>
        Develop a customised sales strategy that aligns with Triple-A’s licensing regulations and client needs, ensuring a deep understanding of fund
        flows and requirements.
      </li>
    </ul>
  </li>
  <li>
    Engage Clients and Manage Relationships:
    <ul>
      <li>Build and maintain strong relationships with both current and potential clients.</li>
      <li>Utilise HubSpot (CRM tool) to manage your client database effectively.</li>
      <li>Respond promptly to inquiries, follow-up calls, and requests for proposals (RFPs).</li>
    </ul>
  </li>
  <li>
    Grow Accounts and Increase Revenues:
    <ul>
      <li>Work closely with the sales and leadership teams to grow accounts and achieve sales targets.</li>
      <li>Make outbound calls to potential clients, close sales efficiently, and assist clients through the closing process.</li>
    </ul>
  </li>
  <li>
    Present and Communicate:
    <ul>
      <li>Create compelling pitch decks for presentations at client meetings, industry exhibits, trade shows, and conferences.</li>
    </ul>
  </li>
  <li>
    Drive Performance Excellence:
    <ul>
      <li>Meet or exceed quotas for various client engagement activities and annual sales goals.</li>
      <li>Collaborate with management on setting sales goals, planning, and forecasting.</li>
    </ul>
  </li>
  <li>
    Shape our Commercial Strategy
    <ul>
      <li>
        Contribute to the commercial strategy by sharing market insights, competitive analysis, and customer feedback on must-have features with the
        rest of the team.
      </li>
      <li>Provide market feedback to inform commercial strategy and product development.</li>
    </ul>
  </li>
</ul>
<h4>Key Responsibilities:</h4>
<ul>
  <li>
    Contribute to the architecture and implementation of scalable software solutions using Golang, ensuring high performance and security for both
    fiat and cryptocurrency transactions.
  </li>
  <li>
    Participate in the development of real-time, distributed systems with NATS, contributing to our ability to process millions of transactions
    quickly and reliably.
  </li>
  <li>
    Assist in managing and orchestrating containerized applications with Kubernetes, supporting optimal deployment, scaling, and management across our
    cloud infrastructure.
  </li>
  <li>Engage in best practice development in software architecture, with a focus on system resilience and idempotency.</li>
  <li>
    Collaborate with the development team and cross-functional teams to support the definition, design, and delivery of new features, following
    industry standards and regulations for fiat and cryptocurrency transactions.
  </li>
  <li>Contribute to a culture of innovation and continuous improvement within the team.</li>
</ul>
<h4>You must have…</h4>
<ul>
  <li>Working experience in payments (with PSPs, payment orchestrator, E-Money Issuers, etc).</li>
  <li>Experience in lead generation and prospects management.</li>
  <li>Worked in an international company, across different cultures and time zones.</li>
  <li>A strong command of the English language, both in speaking and writing.</li>
  <li>Persuasive skills and goal-oriented attitude.</li>
  <li>An energetic, outgoing, and friendly personality!</li>
  <li>The ability to communicate with top executives confidently.</li>
  <li>The ability to create presentations with Powerpoint and Google Slides professionally.</li>
  <li>Excellent analytical and time-management skills.</li>
  <li>A proven track record of sales success.</li>
  <li>The ability to work autonomously or collaboratively with a team when needed.</li>
</ul>
<h4>Exceptional candidates will have...</h4>
<ul>
  <li>Experience with digital currency or blockchain-related projects.</li>
  <li>Fluency in an additional languages (Mandarin is much appreciated!).</li>
  <li>A keen personal interest in Web3 and digital currencies.</li>
</ul>
<h4>Why you’ll love working here…</h4>
<ul>
  <li>A vibrant culture of collaboration across different functions, cultures and experiences.</li>
  <li>
    Opportunities to attend exciting industry events, keeping you at the forefront of trends, technologies and best practices in FinTech and Web3.
  </li>
  <li>Expand your personal network by connecting with industry leaders.</li>
  <li>Global company-wide retreats and idea-sharing sessions.</li>
  <li>Performance-driven incentives.</li>
</ul>
<h4>How to Apply</h4>
<p>
  If you would like to grow professionally within the FinTech and Web3 space, please send your application to hr@triple-a.io. We look forward to
  hearing from you!
</p>','https://www.triple-a.io/careers?utm_medium=website&utm_source=Golangprojects&ref=Golangprojects&source=Golangprojects','2025-01-08 14:34:44+07',null,'Triple A','Business Development Director',1,'Singapore',1,'{Payment,Cryptocurrency,Blockchain}',null,null,null,null,null,null);
