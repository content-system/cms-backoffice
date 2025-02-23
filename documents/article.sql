
create table articles (
  id varchar(80) primary key,
  title varchar(255) not null,
  description varchar(1200) not null,
  content varchar(9500),
  published_at timestamptz,
  tags character varying[],
  thumbnail varchar(400),
  high_thumbnail varchar(400),
  status char(1),
  created_by varchar(40),
  created_at timestamptz,
  updated_by varchar(40),
  updated_at timestamptz
);

insert into articles (id,title,description,content,published_at,tags,thumbnail,high_thumbnail,status) values
	 ('20240722001','FPT to Bolster Growth among Francophone Community, Emphasizing Workforce Development','FPT Corporation recently hosted the FPT Francophone Day, a dynamic networking and culture exchange platform for the French-speaking community in Vietnam. The event also marked the inauguration of FPT Francophone Association, highlighting the IT firm’s commitment to fostering its French-proficient professionals and nurturing opportunities for business and culture exchange.','<p>
  Global technology corporation FPT recently hosted the FPT Francophone Day, a dynamic networking and culture exchange platform for the
  French-speaking community in Vietnam. At the event, FPT introduced the FPT Francophone Association, a move to foster its French-proficient
  professionals and nurture opportunities for business and culture exchange.
</p>
<p>
  The event was attended by the French Ambassador to Vietnam, H.E. Olivier Brochet, and representatives from the Embassy of Haiti in Vietnam, Business
  France, Campus France, French Institute in Vietnam (IFV), Vietnam - France Friendship and Cooperation Association (AACVF). Also in attendance were
  over 300 attendees from the Francophone community in Vietnam, French organizations and businesses, French Alumni Vietnam Association (UAVF), and
  French major students from universities in Hanoi.
</p>
<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/global/common/fptsoftware_building_d/francophone-day-2024_2.webp"></img>
  <figcaption>
    FPT Francophone Association was inaugurated in the presence of the French Ambassador to Vietnam and executive representatives of FPT (L to R: FPT
    Software SEVP Nguyen Khai Hoan, FPT Healthcare Director Hoang Ngoc Thach, French Ambassador to Vietnam H.E. Olivier Brochet, FPT Vice Chairman of
    the BOD Bui Quang Ngoc, Vietnam - France Friendship and Cooperation Association Vice President Nguyen Thiep, and FPT France COO Nguyen Viet Duc)
  </figcaption>
</figure>
<p>
  According to Dr. Bui Quang Ngoc, FPT Vice Chairman of the Board of Directors, the establishment of FPT Francophone Day and FPT Francophone
  Association will serve as a platform to connect the French-speaking community within and outside the corporation, building a network of highly
  proficient professionals. He also emphasized FPT’s commitment to bridging French and Vietnamese economies and cultures, driven by technologies,
  innovation, and people development.
</p>
<p>
  “The French market has been integral to our business expansion in Europe. With the surge in demand for digital solutions in France and
  French-speaking territories, FPT Software aims to fivefold our onsite workforce and expand our presence to all major cities here. Our next milestone
  for this market will be one of the Top 50 IT companies in France,” said Mdm. Chu Thi Thanh Ha, FPT Software Chairwoman.
</p>
<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/global/common/fptsoftware_building_d/francophone-day-2024_4.webp"></img>
</figure>
<p>
  FPT Francophone Day also featured a panel discussion titled "From France to FPT: Journey & Experience." With the participation of FPT leaders and
  tech experts, the panel has sparked engaging conversations and provided attendees with valuable perspectives on the evolving landscape of business
  and technology in both France and Vietnam. It also emphasized the importance of cultural adaptability and the role of technology in bridging
  cultural gaps and fostering collaboration.
</p>
<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/global/common/fptsoftware_building_d/francophone-day-2024_3.webp"></img>
  <figcaption>Panel discussion "From France to FPT: Journey & Experience"</figcaption>
</figure>
<p>
  Entered France in 2008, FPT now has over 100 local experts working in major French cities and 600 offshore professionals in Vietnam dedicated to
  serving clients across industries, focusing on AI, Big Data, BI, SAP, DevSecOps, Cloud, and AUTOSAR services. Its robust competencies are recognized
  through strategic partnerships with French giants like Airbus, Geopost, Quadient, Canal+, Sagemcom, OPMobility, Valeo, and more.
</p>
<p>
  As part of the company''s global expansion, FPT has been actively involved in M&A deals to amplify its offshore delivery capabilities and local
  footprint, notably the recent acquisition of an 80% stake in the French IT consulting firm AOSIS. Last year, its French subsidiary also entered
  France''s Top 100 ICT Companies.
</p>','2024-07-22 17:06:23.844+07','{}','https://fptsoftware.com/-/media/project/fpt-software/global/common/fptsoftware_building_d/francophone-day-2024_1.webp','https://fptsoftware.com/-/media/project/fpt-software/global/common/fptsoftware_building_d/francophone-day-2024_1.webp','A'),
	 ('20240826001','FPT Opens New Office in Shanghai, China','FPT China recently celebrated the opening of a new office in Shanghai, in response to the growing customer base and increasing demand for digital services and solutions. The tech firm is set to transform the Shanghai office into a leading hub for talent and technology with accelerated AI integration across its services to deliver unmatched innovation to customers worldwide.','<p>
  SHANGHAI, China—Global technology corporation FPT recently celebrated its new office in Shanghai, the largest economic center of China. The new
  office will serve as a pivotal hub for innovation and human resources, in response to the growing customer base and increasing demand for digital
  services and solutions.
</p>
<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/global/fpt_shanghai.webp"></img>
</figure>
<p>
  Located in one of Shanghai’s most dynamic business districts, this new office allows FPT to further solidify its delivery and consulting capacities
  for global clients across industries in the Chinese market. The area is also home to several industry giants in the fields of aerospace, automotive,
  health tech, and artificial intelligence, boasting a well-developed transport infrastructure and supportive business policies for multinational
  enterprises.
</p>
<p>
  Generating approximately 10% of China''s GDP, Shanghai hosts a thriving workforce of approximately 500,000 IT engineers, fueled by its advancing tech
  ecosystem and a steady influx of skilled graduates. By tapping into this high-quality and extensive talent pool, FPT aims to grow its Shanghai hub
  workforce to 300 employees, contributing to its broader goal of 3,000 employees across China within the next five years.
</p>
<p>
  According to Pham Thanh Tuan, Chief Executive Officer of FPT China, the new office will position FPT for greater growth and success, especially by
  accelerating the recruitment of high-quality technology engineers in high-growth areas like project management and strategic consulting. The company
  is set to transform the Shanghai office into a leading hub for talent and technology. Together with its network across China and the country''s top
  universities, FPT will further accelerate AI integration in all solutions and service to deliver unmatched innovation to customers.
</p>
<p>
  Since entering China in 2017, FPT has established a solid foothold with offices and delivery centers in strategic locations, including Shanghai,
  Nanning, Suzhou, and Dalian. The IT firm is currently a strategic partner with leading Chinese firms in the automotive and semiconductor industries
  and actively collaborates with universities to develop a strong local talent pool.
</p>
<p>FPT’s new office is located at Zhonggeng Global Creative Center, Lane 166, Minhong Road, Minhang District, Shanghai 201102, China.</p>','2024-08-26 16:49:52.453+07','{}','https://fptsoftware.com/-/media/project/fpt-software/global/fpt_shanghai.webp','https://fptsoftware.com/-/media/project/fpt-software/global/fpt_shanghai.webp','A'),
	 ('20240819001','FPT Software and Meerana Technologies Partner to Drive Digital Transformation in UAE','This partnership aims to expand FPT Software’s footprint in the region and address the market needs across various sectors, including Utilities, BFSI, Logistics, Transportation, and more.','<p>
  Global IT services provider FPT Software recently announced a strategic partnership with Meerana Technologies, an emerging provider of smart IT
  solutions. This collaboration not only strengthens FPT Software’s presence in the United Arab Emirates but also aligns with FPT Software’s vision of
  accelerating digital transformation for its clients worldwide.
</p>
<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/fme-1.png"></img>
  <figcaption>
    The MoU Signing Ceremony was attended by His Excellency Mohammad Ali Rashed Lootah, President and CEO of Dubai Chambers, His Excellency Nguyen
    Thanh Diep, Ambassador of the Socialist Republic of Vietnam to the UAE, Rimah Ghaddar, FPT Middle East CEO and Matar Almehairi, Meerana
    Technologies CEO.
  </figcaption>
</figure>
<p>
  The two firms will collaborate to harness FPT Software’s expertise in Artificial Intelligence, Semiconductors, and other advanced technologies,
  integrating them into Meerana Technologies’s existing products and solutions. By combining Meerana Technologies'' strong presence in UAE with FPT
  Software’s diverse service offerings, this partnership aims to expand FPT Software’s footprint in the region and address the market needs across
  various sectors, including Utilities, BFSI, Logistics, Transportation, and more.
</p>
<p>
  Additionally, as part of this agreement, Meerana Technologies will leverage FPT Software’s global presence and extensive training initiatives, such
  as FPT Global Internship Program, AI Residency Program, and other international exchange programs, to develop local Emirati IT talents. This
  collaboration enables Emiratis to acquire digital skills through FPT Software’s specialized training programs, aligning with the United Arab
  Emirates’s “Dubai Universal Blueprint for Artificial Intelligence” goal.
</p>
<p>
  “The strategic MoU between FPT Software and Meerana Technologies delivers exceptional value to the dynamic UAE market. By harnessing the power of
  Artificial Intelligence, Cloud, Hyper-Automation, Automation, IoT, and Low-code technologies, we are at the forefront of digital transformation,
  creating innovative solutions and use cases tailored to the evolving needs of the UAE clients.” Rimah Ghaddar, Chief Executive Officer of FPT Middle
  East, a subsidiary of FPT Software, pledged.
</p>
<p>
  ‘‘One of the key benefits of the agreement is that it allows the UAE locals access to more than 3000 high-level AI expert talents, including some of
  the best engineers, employed by FPT Software. This furnishes us with a unique opportunity to reap the benefits of AI whilst building a diverse
  network of experts and specialists in the field of artificial intelligence, raising the profile of Dubai as a pioneering regional and international
  hub for advanced technologies and innovation and a knowledge-based economy.”, said Matar Almehairi, Meerana Technologies Chief Executive Officer.
</p>','2024-08-19 16:54:56.268+07','{}','https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/fme-1.png','https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/fme-1.png','A'),
	 ('20240717001','FPT Software Adopts Green Tuesday Initiative to Accelerate Sustainable Movement','FPT Software officially became a partner of the Green Tuesday Initiative, aiming to cut down food-related footprint on the organizational scale. As the first Vietnamese enterprise to join the program, this move further highlights the IT firm''s steadfast progress and commitment to green transformation and sustainable development.','<p>
  Global technology company FPT Software recently announced its participation in the Green Tuesday Initiative to reduce food-related footprint on the
  organizational scale. As the first Vietnamese enterprise to join this program, this move further highlights the IT firm''s steadfast progress and
  commitment to green transformation and sustainable development.
</p>
<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/green-tuesday-initiative.webp"></img>
  <figcaption>
    Nguyen Khai Hoan, FPT Software Senior Executive Vice President (R), Richa Mehta, Director of Programs, Asia-Pacific at Green Tuesday Initiative
    (L), and delegates of both sides at the Memorandum of Understanding Signing Ceremony in Hanoi, Vietnam.
  </figcaption>
</figure>
<p>
  As part of the initiative, FPT Software targets to cut down on serving meat production in its campus cafeterias across Vietnam with more
  climate-friendly and plant-based alternatives once a week. To realize this goal, the Green Tuesday program will support participating organizations
  with training on low carbon footprint and climate-friendly diet, as well as auditing and conducting bi-yearly impact reports. Additionally, both
  sides will collaborate to raise awareness for FPT Software''s employees through a series of onsite promotional activities.
</p>
<p>
  “Sustainability is now taking the center stage of the global concern and of our customers. As we foster green and sustainable development to create
  long-lasting values for our employees, clients, and the community, FPT Software always strives to become a forerunner in the sustainable movement,
  bolstered by cutting-edge technologies and innovations. The implementation of ‘Green Tuesday’ is another step to help us achieve this goal,” said
  Nguyen Khai Hoan, FPT Software Senior Executive Vice President.
</p>
<p>
  Adopting this initiative marks another important milestone of FPT Software toward green transition. The company has actively participated in global
  sustainable initiatives, such as the United Nations Global Compact Initiative, Eco Vadis Assessment, and Vietnam Low Emission Energy Program II
  (V-LEEP II), to deliver green technology solutions to its customers. FPT Software is also the first tech firm in Vietnam to conduct a fully
  three-scope management carbon accounting project, aiming to reduce greenhouse gas emissions and become carbon neutral. These movements strongly
  align with FPT Corporation’s recent Environmental Policy and ESG commitment to achieving Net Zero emissions by 2040.
</p>
<p>
  The Green Tuesday Initiative is a campaign by Vegan Outreach that offers consultation to help corporations and educational institutions tackle
  climate change by providing more plant-based food at their dining premises. Launched in 2018, the campaign has helped prevent over 3.3 million lbs
  of animal products from being served at more than 50 institutions in India. Starting in 2023, the Green Tuesday Initiative extended its operation to
  Vietnam, one of the world’s top five most vulnerable countries to climate change.
</p>','2024-07-17 17:08:14.069+07','{}','https://fptsoftware.com/-/media/project/fpt-software/fso/green-tuesday-initiative.webp','https://fptsoftware.com/-/media/project/fpt-software/fso/green-tuesday-initiative.webp','A'),
	 ('20240930001','FPT Software Wins Job Creation Award at ESGBusiness Awards 2024','This recognition highlights FPT Software''s commitment to nurturing top talent and fostering diverse and inclusive workplaces across the global IT industry.','<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/1.webp"></img>
</figure>
<p>
  HANOI, Vietnam - FPT Software recently received the Job Creation Award - Vietnam at the ESGBusiness Awards 2024, marking its debut win in this
  award. This accolade underscores the company’s steadfast commitment to nurturing top talent across the global IT industry while promoting diverse
  and inclusive workplaces.
</p>
<p>
  FPT Software currently boasts a global workforce of over 30,000 employees spanning 30 countries, with an annual growth rate of 25% and an
  industry-low attrition rate of 12%. Last year, the company recorded 12,000 new hires. This steady employment growth significantly supports its
  parent company, FPT Corporation''s goal of employing one million IT professionals by 2035.
</p>
<p>
  The firm has also proactively established pathways for Vietnamese employees to gain international experience, with over 3,000 individuals currently
  working in its overseas branches. Meanwhile, FPT Software has also made significant efforts to attract foreign talent, currently employing more than
  3,500 foreign staff from 75 nationalities. Across its global operations, local employees account for an average of 13% of the workforce, notably 85%
  in Europe, 64% in the Americas, and 30% in Japan, FPT Software’s largest overseas market.
</p>
<p>
  As FPT Software expands its global footprint and enhances its technical capabilities and customer network, it remains committed to creating
  high-quality jobs and opportunities for employees to engage in complex projects for leading businesses worldwide, particularly in high-demand
  sectors such as automotive, cloud, AI, and semiconductors.
</p>
<p>
  The recognition in the ESG Business Awards 2024 is also attributed to FPT Software’s diversity and inclusion. The firm fosters gender equality
  across international operations, with women making up 39.6% of its workforce and 33% of managerial roles.
</p>
<p>
  FPT Software’s commitment to workforce development is also reflected by its promotion of continuous learning and extensive growth opportunities for
  all employees. On average, its employees complete 31.7 hours of professional training annually, benefiting from partnerships with leading platforms
  such as Mila, Udacity, Coursera, Udemy, British Council, and so on.
</p>
<p>
  Most recently, the company announced a 125 billion VND investment to provide training and career development opportunities to over 3,000
  Japanese-speaking ICT professionals. This initiative, launched in collaboration with 15 universities in its first phase and planned for nationwide
  implementation, underscores FPT Software''s dedication to workforce development, fostering a future-ready workforce while creating employment
  opportunities that align with the demands of the evolving IT landscape.
</p>
<p>
  Nguyen Tuan Minh, Chief Human Resources Officer of FPT Software, said: “As FPT Software expands globally, cultivating a highly skilled workforce and
  creating more employment opportunities are crucial to meeting the diverse needs of our clients across various industries. Our top priorities include
  investing in education, training, and fostering a dynamic workplace environment. FPT Software is dedicated to building a future-ready IT talent
  pool, contributing to the advancement of this sector not only in Vietnam but also globally.”
</p>
<p>
  The ESGBusiness Awards 2024 honours Asian businesses that demonstrate outstanding commitment and achievement in environmental, social, and
  governance (ESG) practices. This year, the programme received applicants from over 100 leading companies in Asia. The panel of judges comprises
  leaders and experts from top consulting firms, including KPMG, PwC, Ernst & Young, and Boston Consulting Group.
</p>
<p>
  Prior to this, FPT Software was recognized with numerous accolades, including Great Place to Work® Certifications across Asia Pacific, Japan, the
  United States, Vietnam, Germany, and the Philippines. Most recently, the company was awarded the BRONZE STEVIE® for Employer of the Year at the 2024
  Stevie® Awards for Great Employers.
</p>
<h3>About FPT Software</h3>
<p>
  FPT Software, a subsidiary of FPT Corporation, is a global technology and IT services provider headquartered in Vietnam, with $1 billion in revenue
  (2023) and over 30,000 employees in 30 countries.
</p>
<p>
  The company champions complex business opportunities and challenges with its world-class services in Advanced Analytics, AI, Digital Platforms,
  Cloud, Hyperautomation, IoT, Low-code, and so on. It has partnered with over 1,100 clients worldwide, nearly 100 of which are Fortune Global 500
  companies in Aviation, Automotive, Banking, Financial Services and Insurance, Healthcare, Logistics, Manufacturing, Utilities, and more. For more
  information, please visit https://fptsoftware.com
</p>','2024-09-30 16:45:00.266+07',NULL,'https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/1.png','https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/1.png','A'),
	 ('20240917001','FPT Expands Global Workforce to 80,000 amid Its 36th Anniversary','FPT Corporation recently announced a significant milestone, passing 80,000 employees across 30 countries. The milestone coincides with the company’s 36th anniversary and underscores its remarkable growth and global expansion.','<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/global/80000.png"></img>
</figure>
<p>
  FPT Corporation recently announced a significant milestone, passing 80,000 employees across 30 countries. The milestone coincides with the company’s
  36th anniversary and underscores its remarkable growth and global expansion.
</p>
<p>
  FPT Corporation’s global workforce boasts an average age of 28 and represents 78 nationalities. Among them, over 6,300 experts are stationed
  internationally, beyond the headquarters in Vietnam, to serve the company’s diverse global client base.
</p>
<p>
  Mr. Nguyen Van Khoa, CEO of FPT Corporation, stated, “FPT always places people at the center of all activities and strategic development. We are
  proud of our diverse workforce, which includes individuals of various nationalities and ethnic backgrounds. The uniqueness of each FPT employee is
  not only respected but also serves as an inspiration that drives our continuous innovation and growth.”
</p>
<p>
  “We place a strong emphasis on investing in our people through specialized training programs, competitive benefits, and ample opportunities for
  career advancement. These values have enabled FPT to attract and retain top talent, fostering a strong and cohesive team dedicated to achieving new
  heights. At FPT, we strive to build a culture of happiness and success together with our employees,” he added.
</p>
<p>
  The milestone of 80,000 employees aligns with FPT’s ambitious goal of expanding its workforce to one million by 2035. This growth is set to
  accelerate the company’s global digital transformation efforts, leveraging extensive knowledge and insights across diverse industries and regions.
</p>
<p>
  After the first eight months of 2024, FPT achieved revenue of VND 39,664 billion and pre-tax profit of VND 7,077 billion, representing increases of
  20.8% and nearly 20% compared to the same period last year.
</p>
<p>
  FPT’s core sectors include Technology, Telecommunications, and Education. Particularly in the technology sector, FPT strategically focuses on global
  trends such as AI, semiconductors, automotive software, digital transformation, and green transformation. Additionally, the Corporation boasts a
  "Made by FPT" ecosystem with over 200 products, services, and solutions, providing a vast platform for technology enthusiasts to showcase their
  talents and expertise.
</p>','2024-09-17 16:46:34.763+07','{}','https://fptsoftware.com/-/media/project/fpt-software/global/80000.png','https://fptsoftware.com/-/media/project/fpt-software/global/80000.png','A'),
	 ('20240823001','Feature Interview: Low-Code Development Platform Adoption and How FPT Software Is Leading the Charge in South Korea','This in-depth interview discusses the rapid adoption of low-code platforms globally, with a focus on key markets such as South Korea.','<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/global/common/fptsoftware_building_d/455863996_3699023507019198_7345037110881035098_n.webp"></img>
</figure>
<p>
  In today’s complex and competitive business environment, many organizations are adopting low-code as a viable alternative to traditional software
  development. Gartner predicts that by 2026, the global low-code development platform market is projected to reach an impressive USD 44.5 billion.
  This exponential growth is fueled by the rising need for digital transformation across industries and the ongoing shortage of skilled developers.
</p>
<p>
  In this exclusive interview with ETNews, Phung Viet Ha, Managing Director of FPT Software Low-code Group, provides a comprehensive outlook on the
  global low-code development platform market, the key trends propelling its growth, and how FPT Software has leveraged this to help enterprises
  streamline their software development processes, accelerate time-to-market, and foster innovation.
</p>
<h4>
  Low-code platform adoption has gained unprecedented momentum in the last few years. Could you elaborate on the current market segmentation and the
  key trends shaping the low-code development platform market?
</h4>
<p>
  The low-code platform market is segmented across various industries, each leveraging the technology to meet specific needs. In the BFSI sector,
  low-code platforms are adopted extensively for rapid application development and process automation. Healthcare organizations use these platforms
  for patient management systems, telemedicine applications, and other essential functions. The retail and e-commerce sectors are utilizing low-code
  for customer engagement apps, inventory management, and supply chain solutions. Meanwhile, the manufacturing industry employs low-code to streamline
  operations and integrate IoT solutions.
</p>
<p>
  There are five key trends that indicate a dynamic and rapidly evolving market, with low-code platforms poised to drive significant innovation and
  efficiency across various industries.
</p>
<p>
  Firstly, Low-code platforms are increasingly incorporating AI and machine learning capabilities to automate routine tasks, provide predictive
  analytics, and enhance decision-making. The second trend is the rise of citizen development, empowering non-technical users to create applications
  without needing deep technical expertise. Thirdly, Hybrid development models are also becoming more prevalent, allowing for collaboration between IT
  and business teams and combining low-code development with traditional coding to balance speed and customization. The fourth trend is ecosystem
  expansion with low-code vendors expanding their marketplaces for templates, components, and third-party integrations, and forming strategic
  partnerships with other technology providers to enhance platform capabilities. Finally, there is a strong focus on performance and scalability
  improvements, optimizing platforms for large-scale deployments and leveraging cloud-native technologies to ensure scalability, reliability, and
  performance.
</p>
<p>
  With over 10 years of experience in low-code development, FPT Software has observed a significant surge in demand for low-code solutions from our
  clients, particularly in key markets such as Japan, South Korea, Malaysia, Singapore, and Europe. Our revenue from low-code projects and services
  has grown substantially, increasing by 80% compared to 2023, reflecting this rising demand. This growth is not only indicative of the broader market
  trend but also showcases our capability to deliver effective low-code solutions that meet our clients'' evolving needs.
</p>
<h4>
  As a trusted IT services provider, could you share FPT Software’s experiences and capabilities in the global low-code market, and how the company
  has strategically established its presence in key markets?
</h4>
<p>
  FPT Software has developed significant expertise in low-code development through our comprehensive low-code/no-code platform, FezyFlow. We also
  partner with leading low-code providers such as Microsoft PowerPlatform, OutSystems, Mendix, Salesforce, ServiceNow, and Pega to offer a range of
  solutions tailored to customer needs. With more than 2,000 employees dedicated to low-code projects, we have successfully implemented numerous
  projects across key global markets, including North America, Europe, Asia Pacific, Japan, and South Korea.
</p>
<p>
  In North America, FPT Software has established a strong presence, working with several Fortune 500 companies on projects that streamline operations,
  enhance customer engagement, and develop innovative solutions across various sectors. In Europe, we have notable projects in digital transformation,
  enterprise application development, and customer-facing solutions, supported by partnerships with firms like Mendix and OutSystems. In the
  Asia-Pacific region, we leverage our proximity and regional expertise to cater to diverse markets, with successful case studies in enterprise
  application development, business process automation, and digital solutions for government agencies. In Japan, we have more than 3,500 employees
  working closely with customers, supported by over 13 branches. Our projects focus on digital transformation, automation solutions, and strategic
  partnerships with major tech companies to integrate low-code solutions and leverage their strengths.
</p>
<p>
  Specifically for the South Korean market, we have been providing low-code services to various clients, focusing on implementation projects with
  local solutions. Recently, we have witnessed even more increasing demands and adoption of global low-code solutions by Korean companies, especially
  those in BFSI and manufacturing. Our revenue from low-code services in South Korea only has grown significantly since 2023. Notable projects include
  working with a Top SI company in Korea on platforms like Websquare, Nexacro, Mendix, Salesforce, and ServiceNow, and collaborating with a Top 10
  Korean company on their Outsystem innovation projects.
</p>
<h4>
  As FPT Software continues to expand its presence in South Korea, can you share your insights on the current state of the low-code market in the
  region?
</h4>
<p>
  The South Korean low-code market has been experiencing robust growth, with projections indicating a compound annual growth rate in the double digits
  over the next few years. The market is valued in the hundreds of millions of USD, with expectations for significant expansion as adoption broadens
  across various sectors.
</p>
<p>
  Here we see both large corporations and SMEs making significant strides in adopting low-code development. Large corporations like Hyundai, LG, and
  SK Group are using low-code platforms to streamline operations, improve customer engagement, and develop internal tools. Startups and SMEs in South
  Korea are leveraging low-code platforms to quickly bring new products to market and manage business processes with limited resources.
</p>
<p>
  However, one of the main challenges is ensuring security and compliance. Low-code applications must comply with South Korea’s stringent data
  protection regulations, such as the Personal Information Protection Act (PIPA). Another challenge is integrating low-code applications with legacy
  systems and existing IT infrastructure. There is also a skill gap, with a shortage of professionals skilled in managing and developing low-code
  solutions, which can hinder adoption and effective use.
</p>
<h4>
  As a trusted IT services provider in the low-code development market with strong footprints in South Korea, what unique offerings can FPT Software
  bring to clients in this region?
</h4>
<p>
  FPT Software has extensive experience in implementing low-code projects for major companies in South Korea. We have developed a deep understanding
  of the challenges and needs that Korean businesses face when adopting low-code technologies, which enables us to offer a comprehensive suite of
  low-code solutions tailored to the specific needs of South Korean businesses. Our expertise in digital transformation, rapid application
  development, integration services, AI and automation, local support and training, partnerships and collaborations, innovation and scalability, and
  compliance and security ensures that businesses can effectively leverage low-code technologies to drive growth and efficiency. With our deep
  understanding of the local market and strong global experience, FPT Software is well-positioned to support South Korean businesses in their low-code
  journey.
</p>','2024-08-23 16:51:46.338+07','{}','https://fptsoftware.com/-/media/project/fpt-software/global/common/fptsoftware_building_d/455863996_3699023507019198_7345037110881035098_n.webp','https://fptsoftware.com/-/media/project/fpt-software/global/common/fptsoftware_building_d/455863996_3699023507019198_7345037110881035098_n.webp','A'),
	 ('20240709001','FPT Software and VinCSS Join Hands to Accelerate Cybersecurity in Automotive Industry','FPT Software and VinCSS recently signed a Memorandum of Understanding (MoU) targeting the automotive sector. The partnership enables both companies to enhance their solutions by leveraging each other’s resources, expertise, and network.','<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/post_fso-x-vincss.png"></img>
</figure>
<p>
  FPT Software and VinCSS recently signed a Memorandum of Understanding (MoU) targeting the automotive sector. The collaboration will benefit Original
  Equipment Manufacturers (OEMs) and Tier 1 suppliers by providing access to a broader range of solutions and services that comply with global
  industry standards.
</p>
<p>
  The partnership enables both companies to enhance their solutions by leveraging each other’s resources, expertise, and network. As part of the MoU,
  FPT Software will integrate VinCSS’s solutions into its existing products and services to enrich the cybersecurity capabilities. This integration
  will enable FPT Software to access more demanding markets such as the US and Europe, where VinCSS’s certified solutions are essential for compliance
  with high safety standards.
</p>
<p>
  VinCSS will also provide the cybersecurity training materials and resources to empower FPT Software to effectively engage with customers. This
  collaboration will allow VinCSS to access FPT Software’s global client network and open new business opportunities.
</p>
<p>
  Building upon the shared vision to harness technologies to boost safety and enhance customer experience for end users, FPT Software and VinCSS are
  committed to co-developing integrated solutions, fostering comprehensive training initiatives, and proactively pursuing new business opportunities.
</p>
<p>
  “With Software’s decade-long experience, scalable workforce, global presence, and VinCSS’s cutting-edge cybersecurity solutions, we are confident
  that this partnership will pave the way for us to deliver exceptional values to our global clients and shape the future of connected mobility,” said
  FPT Automotive CEO Kinh Nguyen.
</p>
<p>
  Tin Nguyen, Director of Automotive Cybersecurity at VinCSS, stated: "While VinCSS has achieved significant success in launching automotive
  cybersecurity services within the region, our partnership with FPT Software enables us to expand our global reach and tap into new markets. Their
  extensive network allows us to deliver greater value in the secure development of automotive systems across multiple new markets that are still in
  search of top-tier service providers like VinCSS.”
</p>
<p>
  As a part of FPT Software and its parent company, FPT Corporation’s focus on the automotive industry, FPT Automotive, was launched last December.
  The automotive technology subsidiary boasts a global team of 4,000 software engineers and experts, serving notable clients such as Hyundai, Honda,
  Volvo, and Vietnam''s electric vehicle manufacturer VinFast. Earlier this year, the company inaugurated a new office in Pune, India, as part of its
  strategy to become a billion-dollar, world-class provider of automotive services and products by 2030.
</p>','2024-07-09 17:11:14.232+07','{}','https://fptsoftware.com/-/media/project/fpt-software/fso/post_fso-x-vincss.png','https://fptsoftware.com/-/media/project/fpt-software/fso/post_fso-x-vincss.png','A'),
	 ('20240708001','FPT Japan Joins Leading IT Companies in Forming the Vietnamese Association of Digital Transformation in Japan','The Vietnamese Association of Digital Transformation in Japan (VADX Japan) was officially launched in Tokyo, Japan, with FPT Japan serving as the Association''s Chair Company and Do Van Khac, Senior Executive Vice President of FPT Software and CEO of FPT Japan, serving as the company’s representative. This initiative represents FPT Japan’s ongoing commitment to enhancing cooperation and development in digital technology between Vietnam and Japan.','<p>
  The Vietnam Association of Digital Transformation in Japan (VADX Japan) was officially launched in Tokyo, Japan, with FPT Japan serving as the
  Association''s Chair Company and Do Van Khac, Senior Executive Vice President of FPT Software and CEO of FPT Japan, serving as the company’s
  representative. The Association''s Co-Chair Companies and General Secretary include representatives from RikkeiSoft Japan, VTI, and Mirabo. This
  initiative represents FPT Japan’s ongoing commitment to enhancing cooperation and development in digital technology between Vietnam and Japan. VADX
  Japan sets the goal of generating revenue of 150 billion Yen (1 billion USD) by 2025 and 1 trillion Yen (7 billion USD) by 2033 for Vietnamese IT
  companies in Japan.
</p>
<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/newsroom/newsroom/news080724.webp"></img>
</figure>
<p>
  The Association''s launch event was attended by Ambassador-Designate of the Socialist Republic of Viet Nam to Japan H.E. Pham Quang Hieu,
  Minister-Counselor Nguyen Duc Minh, representatives from Viet Nam’s Ministry of Science and Technology, Ministry of Planning and Investment,
  Ministry of Industry and Trade, and Ministry of Education and Training, Chairman of the Founding Council of the Vietnam Software and IT Services
  Association (VINASA) and Chairman of FPT Corporation Truong Gia Binh, and esteemed leaders of Vietnamese associations here.
</p>
<p>
  The Association will host a series of activities to promote innovation, technology transfer, research and development, and the application of
  advanced digital technologies for its members. These are designed to help VADX Japan members enhance their international competitiveness, attract
  investment, and forge partnerships with Japanese enterprises, government agencies, and organizations.
</p>
<p>
  Regarding human resource development, VADX Japan aims to develop a workforce consisting of tens of thousands of high-quality engineers in Japan and
  hundreds of thousands of engineers proficient in Japanese in Vietnam. This initiative is expected to mitigate Japan''s workforce shortage, which the
  Japan Ministry of Economy, Trade and Industry (METI) projects will reach 789,000 individuals by 2030. Given Japan''s proactive efforts to achieve the
  Society 5.0 model, priorities will be placed on recruiting skilled engineers in cloud computing, big data, AI, blockchain, and VR/XR.
</p>
<p>
  "Over two decades ago, Vietnamese IT enterprises came together to establish VINASA to bring Vietnamese intelligence to the world. We have succeeded,
  and Vietnam has become an emerging technology destination. Now, member companies of VADX Japan are facing more complex challenges. The world is
  talking about AI, Semiconductors, Automotive Technology, Digital Transformation, and Green Transformation, and technology will be pivotal in shaping
  the future of many nations. In this context, VADX Japan''s role is essential in boosting competitiveness and establishing distinctive global
  positions for both Vietnam and Japan," said Dr. Truong Gia Binh at the event.
</p>
<p>
  "I firmly believe that VADX Japan will play a crucial role in helping Vietnamese IT enterprises to establish robust partnerships with Japanese
  organizations, associations, and businesses. As the Chair Company of VADX, FPT Japan is also dedicated to providing the best living and working
  opportunities for Vietnamese IT engineers in Japan," Do Van Khac, Senior Executive Vice President of FPT Software and CEO of FPT Japan, pledged.
</p>
<p>
  After nearly two decades in Japan, FPT Japan is now one of the country’s largest foreign-invested tech firms in terms of human resources, with 3,500
  employees working in 18 local offices and innovation hubs and nearly 15,000 employees working from overseas. FPT Japan has been providing services
  and solutions to over 450 clients worldwide, supporting their digital transformation through strategic consulting services and advanced technology
  solutions such as AI, machine learning, and cloud computing. The IT firm is recognized for excellent employee benefits and workplace happiness,
  including Best Workplaces in Asia, Best Places To Work in Japan, and Best Places To Work for Women in Japan. Recently, FPT Japan has also
  collaborated with the Japan Business Federation (Keidanren) to promote the development of the Vietnamese IT business community in Japan.
</p>','2024-07-08 17:14:08.978+07','{}','https://fptsoftware.com/-/media/project/fpt-software/fso/newsroom/newsroom/news080724.webp','https://fptsoftware.com/-/media/project/fpt-software/fso/newsroom/newsroom/news080724.webp','A'),
	 ('20240701001','FPT Software Wins 2nd Runner-Up at SAP Hack2Build Contest','FPT Software Wins 2nd Runner-Up at SAP Hack2Build Contest','<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/448926222_763543399021830_4527054500824727171_n.webp"></img>
</figure>
<p>
  FPT Software has achieved the 2nd Runner Up at the SAP Hack2Build contest with its AI-enabled and innovative B2B retail solution, mySalesPro.
  Notably, FPT Software was the only Vietnam-headquartered company competing alongside top global firms such as EY, Deloitte, IBM, and PWC.
</p>
<p>
  Hack2Build, known as "Beyond a Hackathon", is an initiative that combines the creativity and speed of prototyping by partners over just seven days.
  The Hack2Build event titled "Build Clean Core Extensions with SAP Business AI for RISE with SAP" saw the participation of 18 teams from nine
  countries, all presenting their groundbreaking solutions. Participants were assessed based on five main criteria: SAP technology, Architecture &
  Design, Business, Presentation, Inspiration & Innovation.
</p>
<p>
  FPT Software’s mySalesPro is a mobile assistant solution designed for B2B sales teams, offering quick access to product and service information,
  promotion details, and multimedia showcases. It simplifies the creation of sales rebates and contracts and provides customer management capabilities
  on both computer tablets and mobile phones.
</p>
<p>
  Especially, mySalesPro enables AI-driven generation of sales rebate programs and FAQs. The application leverages the SAP Business Technology
  Platform (SAP BTP) integrated with SAP S/4HANA Private Cloud Edition and the SAP Cloud Application Programming Model (CAP) on SAP HANA Cloud. The
  frontend architecture is based on SAP Fiori, utilizing SAP Mobile Services for the mobile app, which is built using the cross-platform SAP MDK SDK.
</p>
<p>
  Celebrating the win, Ngo Minh Tri, SAP Program Lead and Managing Director of Enterprise Business Services Division at FPT Software, said, “This
  accomplishment reinforces our position as a leader in leveraging SAP technologies to create impactful business solutions. By utilizing SAP S/4HANA
  Cloud services, SAP Business Technology Platform (BTP) and SAP Business AI, we provide our global clients with an intelligent, sustainable
  enterprise core that offers modular connectivity across all lines of business.”
</p>
<p>
  With nearly 1,100 certifications and a dedicated team of SAP consultants supporting six languages, FPT Software leverages the latest SAP solutions,
  including SAP BTP, RISE with SAP, and GROW, to deliver unparalleled value to its global clients.
</p>','2024-07-01 17:21:19.512+07','{}','https://fptsoftware.com/-/media/project/fpt-software/fso/448926222_763543399021830_4527054500824727171_n.webp','https://fptsoftware.com/-/media/project/fpt-software/fso/448926222_763543399021830_4527054500824727171_n.webp','A');
insert into articles (id,title,description,content,published_at,tags,thumbnail,high_thumbnail,status) VALUES
	 ('20240704001','FPT Software Welcomes First Batch of Global Interns to Vietnam for the Global Internship Program 2024','Returning for the second edition, the program has seen a fourfold increase in international student participation compared to last year, with students representing a wider variety of countries','<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/global/common/fptsoftware_building_d/fpt-global-internship-frame-(8).webp"></img>
</figure>
<p>
  On July 1, 2024, FPT Software welcomed the first cohort of international students to its Global Internship program, designed to provide students
  with opportunities to accelerate their technology careers through professional experiences at a leading global IT company. Returning for the second
  edition, the program has seen a fourfold increase in international student participation compared to last year, with students representing a wider
  variety of countries.
</p>
<p>
  On their first day, international students from France, South Korea, Singapore, Indonesia, and Thailand participated in various activities. They
  explored FPT Software’s state-of-the-art campuses in Hanoi, taking part in several initiatives which aimed to enhance employee well-being, such as
  ‘Happy Break’. These activities were designed to prepare them for their upcoming work and cultural experiences. They will soon be joining several
  projects that address business challenges for clients across various industries.
</p>
<p>
  Jeongbin Lee, an intern from South Korea shared, "I am impressed by the futuristic design of FPT HOLA Park and how modern and green the campuses
  are. These factors truly inspire employees to work, and I am proud to be a part of it." Meanwhile, Fabien Pineau from France expressed his
  excitement to leverage his technical skills while discovering the beauty of Vietnam''s nature and culture.
</p>
<p>
  Nguyen Tuan Minh, FPT Software’s Chief Human Resources Officer, enthusiastically welcomed the new international interns, expressing high
  expectations for another successful edition of the Global Internship program. With the company’s ambitious goal of fueling a global pipeline of 1
  million digital transformation agents by 2035, he hopes that the diverse experiences offered by the program will help international interns gain
  confidence in their career paths, enhance their technological knowledge, develop an appreciation for the people and culture of Vietnam and they will
  become FPT Software''s enthusiastic ambassadors across different markets where it operates by the end of this internship.
</p>
<p>
  Global interns will participate in training sessions at FPT Software Academy where they will be equipped with the necessary skills and knowledge,
  providing a comprehensive view of learning and development opportunities at FPT Software. During the next eight-week internship, participating
  interns will also gain direct mentorship and enhance industry networks with FPT Software’s technical experts, especially in the fields of AI, Cloud,
  Data, and Cyber Security.
</p>
<p>For more information about FPT Software’s Global Internship Program, visit FPT Software Global Internship.</p>','2024-07-04 17:19:23.269+07','{}','https://fptsoftware.com/-/media/project/fpt-software/global/common/fptsoftware_building_d/fpt-global-internship-frame-(8).webp','https://fptsoftware.com/-/media/project/fpt-software/global/common/fptsoftware_building_d/fpt-global-internship-frame-(8).webp','A'),
	 ('20240605001','Vietnam Tech Revolution Story to Be Featured on Discovery Channel, With FPT in the Spotlight','FPT Corporation (FPT) collaborates with Warner Bros. Discovery in an upcoming documentary titled “Silicon Delta - The Story of Vietnam’s Tech Revolution.” The documentary highlights Vietnam as a leading digital economy of Southeast Asia, with FPT at the forefront of the country’s transformation into a global destination for business and innovation','<p>
  FPT Corporation (FPT) collaborates with Warner Bros. Discovery in an upcoming documentary titled “Silicon Delta - The Story of Vietnam’s Tech
  Revolution.” The documentary highlights Vietnam as a leading digital economy of Southeast Asia, with FPT at the forefront of the country’s
  transformation into a global destination for business and innovation.
</p>
<p>
  The film features senior leaders from FPT and its subsidiary, including FPT Chairman Truong Gia Binh, FPT Software Chairwoman Chu Thi Thanh Ha, FPT
  Software CEO Pham Minh Tuan, FPT Software SEVP Nguyen Khai Hoan, and FPT Software Chief AI Officer Phong Nguyen; as well as other experts. They
  reflect on the stories of FPT’s establishment in the late 1980s with the goal of surviving poverty and the ambitious dream of bringing Vietnamese
  intelligence to the global stage. “From the sixties to the eighties, there’s constant hunger. I just need some company to help us survive. That’s
  why FPT was founded”, said FPT Chairman Truong Gia Binh.
</p>
<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/newsroom/news---press-release/dsc00136.webp"></img>
  <figcaption>Dr. Truong Gia Binh, FPT Corporation Chairman</figcaption>
</figure>
<p>
  The 30-minute documentary also provides an in-depth look into the corporation’s development journey, which runs parallel to the nation’s transition
  from a war-torn country into a prime destination for tech innovation. One of the highlights is FPT''s pivotal decision of "Go global or die", which
  FPT leaders emphasize as the only way for the corporation to survive and a game-changer for the fate of the nation, demonstrating the daring spirit
  rooted in the DNA of each FPT member. “We have one sentence in Vietnam - Stay hungry, just do it - So that’s what we did”, said FPT Software
  Chairwoman Chu Thi Thanh Ha.
</p>
<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/newsroom/news---press-release/dsc00233.webp"></img>
  <figcaption>Ms. Chu Thi Thanh Ha, FPT Software Chairwoman</figcaption>
</figure>
<p>
  Today, FPT remains committed to its mission of accompanying Vietnam into a future defined by five key areas: Artificial Intelligence, Automotive,
  Semiconductor, Digital Transformation, and Green Transformation. As the pioneer in the country’s technology landscape, FPT also upholds the
  commitment to the education of future generations with initiatives like Hope School, which provides support and education to children orphaned by
  Covid-19.
</p>
<p>The documentary will premiere on Discovery Channel in the Asia Pacific, Japan, Germany, and other regions later this September.</p>','2024-06-05 17:23:07.571+07','{}','https://fptsoftware.com/-/media/project/fpt-software/fso/newsroom/news---press-release/dsc00136.webp','https://fptsoftware.com/-/media/project/fpt-software/fso/newsroom/news---press-release/dsc00136.webp','A'),
	 ('20240912001','FPT Software Earns First Hong Kong Business Technology Excellence Award for its Agent Digital Platform in Insurtech','Global leading IT company FPT Software has earned recognition at the Hong Kong Business Technology Excellence Awards in the Software - Insurtech category. This marks the first time the company has received this prestigious award, reinforcing its status as a trusted service provider in the insurance sector.','<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/675a1663.webp"></img>
  <figcaption>
    David Kou (L) - FPT Greater Bay Indochina’s (a subsidiary of FPT Software) Director of Delivery and Solution at the Award Ceremony
  </figcaption>
</figure>
<p>
  Global leading IT company FPT Software has earned recognition at the Hong Kong Business Technology Excellence Awards in the Software - Insurtech
  category for its groundbreaking Agent Digital Platform (ADP). This marks the first time the company has received this prestigious award, reinforcing
  its status as a trusted service provider in the insurance sector.
</p>
<p>
  Organized by Hong Kong Business Magazine, the Hong Kong Business Technology Excellence Awards celebrate exceptional companies that have made
  significant strides in technological innovation. The program highlights excellence and innovation within Hong Kong''s dynamic tech landscape.
</p>
<p>
  FPT Software’s award-winning Agent Digital Platform (ADP) is an innovative solution designed to support a multinational insurance company
  headquartered in Hong Kong and operating in several markets across APAC to transform its business operations and enhance customer experience. The
  platform is developed to elevate agent productivity and client satisfaction through artificial intelligence embedded features, including digital
  onboarding, seamless remote training, automated reporting and centralized lead management.
</p>
<p>
  FPT Software’s solution enables the client to minimise manual effort, mitigate risks, enhance operational efficiency, and reduce processing times.
  Implementing ADP has led to remarkable outcomes, with over two million leads generated, 100% remote digital sales, and a 10% increase in agent
  productivity.
</p>
<p>
  Truong Hoang Phuc, FPT Software’s Director of Finance Services Solutions Group said: "This achievement reflects our commitment to innovation and
  excellence in the insurance sector. We are poised to expand our footprint in Hong Kong and bring our advanced insurtech solutions to more clients in
  the region. Our goal is to empower our partners with cutting-edge technology that boosts efficiency, enhances customer experiences, and transforms
  the future of insurance.”
</p>
<p>
  With over 15 years of experience, FPT Software has been a trusted partner for leading global insurance providers, offering end-to-end, scalable, and
  customizable solutions, including customer self-service applications, payment processing services, automated underwriting, and lapse prediction.
  Earlier this year, FPT Software’s innovative insurance solution, Confidon, earned a Gold Stevie® at the 2024 Asia-Pacific Stevie® Awards for
  Innovation.
</p>','2024-09-12 16:48:10.238+07','{}','https://fptsoftware.com/-/media/project/fpt-software/fso/675a1663.webp','https://fptsoftware.com/-/media/project/fpt-software/fso/675a1663.webp','A'),
	 ('20240530001','FPT Issues First-Ever Environmental Policy, Strengthening Sustainable Commitment','This policy provides a detailed plan for implementing specific steps to reduce greenhouse gas (GHG) emissions, aiming at becoming Vietnam''s pioneering company to achieve Net Zero emissions by 2040.','<figure>
  <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/newsroom/news---press-release/fpt-issues-first-ever-environmental-policy.webp"></img>
</figure>
<p>
  Accompanying the Vietnamese Government''s commitment, FPT Corporation has officially issued its first-ever Environmental Policy. This policy provides
  a detailed plan for implementing specific steps to reduce greenhouse gas (GHG) emissions, aiming at becoming Vietnam''s pioneering company to achieve
  Net Zero emissions by 2040.
</p>
<p>
  The newly issued Environmental Policy emphasizes several vital actions: reducing energy consumption, minimizing hazardous chemicals, limiting and
  treating waste, promoting recycling activities, raising environmental awareness, encouraging sustainable consumption, and controlling and reducing
  greenhouse gas emissions.
</p>
<p>
  The corporation has outlined the roadmap with various measures to minimize environmental impact, including monitoring 100% of energy usage data and
  replacing 100% of office waste bags with recyclable materials by 2024; increasing the proportion of electricity from renewable sources to 2.5% and
  adopting 100% LED lighting by 2026; reducing total GHG emissions by 15.8% by 2030.
</p>
<p>
  FPT also ensures that all employees undergo yearly training in environmental protection. This involves actively and proactively conserving
  electricity and water and gradually reducing them, ultimately eliminating plastic use in daily activities like plastic bags and single-use plastic
  products.
</p>
<p>
  Earlier this year, FPT also collaborated with USAID to promote clean energy deployment, aiming to reduce greenhouse gas emissions and become carbon
  neutral. In 2023, FPT employees actively participated in environmental protection efforts, which included sorting all waste at its source, correctly
  managing hazardous waste, increasing paperless operations by 59.5% compared to 2022, and recycling 17.7 tons of waste.
</p>
<p>
  With sustainability at the heart of its operation, the Environmental Policy reflects FPT''s consistent strategy of aligning company growth with
  social responsibility, while also delivering a greater impact for its customers, accompanying them in their green transformation journey.
</p>','2024-05-30 17:25:05.967+07','{}','https://fptsoftware.com/-/media/project/fpt-software/fso/newsroom/news---press-release/fpt-issues-first-ever-environmental-policy.webp','https://fptsoftware.com/-/media/project/fpt-software/fso/newsroom/news---press-release/fpt-issues-first-ever-environmental-policy.webp','A');
