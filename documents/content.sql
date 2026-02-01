create table contents (
  id varchar(80) not null,
  lang varchar(10) not null,
  title varchar(255) not null,
  body varchar(9800),
  published_at timestamptz,
  tags character varying[],
  status char(1),
  created_by varchar(40),
  created_at timestamptz,
  updated_by varchar(40),
  updated_at timestamptz,
  version integer,
  primary key (id, lang)
);

insert into contents (id,lang,title,body,published_at,tags,status,version) values
	 ('milestones','en','Milestones','<div>
  <header><h1>Milestones</h1></header>
  <div class="main-body">
    <dl class="data-list row">
      <dt class="col s2 l1 right-align">1999</dt>
      <dd class="col s10 l11">FPT Software was founded in 1999 by 13 members of FPT Group, led by Nguyen Thanh Nam</dd>
      <dt class="col s2 l1 right-align">2005</dt>
      <dd class="col s10 l11">Opened the overseas branch in Japan.</dd>
      <dt class="col s2 l1 right-align">2007</dt>
      <dd class="col s10 l11">Opened our office in Singapore and exceeded US $10 million in profits</dd>
      <dt class="col s2 l1 right-align">2008</dt>
      <dd class="col s10 l11">Expanded global operations to the United States, France, Australia and Malaysia</dd>
      <dt class="col s2 l1 right-align">2012</dt>
      <dd class="col s10 l11">Opened the first office in Germany.</dd>
      <dt class="col s2 l1 right-align">2013</dt>
      <dd class="col s10 l11">FPT Software crossed the US $100 million in revenue by end of 2013</dd>
      <dt class="col s2 l1 right-align">2014</dt>
      <dd class="col s10 l11">Acquired RWE IT Slovakia - became the first Vietnamese IT company to conduct an overseas M&amp;A deal</dd>
      <dt class="col s2 l1 right-align">2016</dt>
      <dd class="col s10 l11">Exceeded US $200 million in revenue and 10,000 employees. FPT Korea was established</dd>
      <dt class="col s2 l1 right-align">2018</dt>
      <dd class="col s10 l11">
        FPT bought a majority stake in Intellinet, expanding footprint in the American market and elevating our digital transformation
        leadership
      </dd>
      <dt class="col s2 l1 right-align">2022</dt>
      <dd class="col s10 l11">Achieved over US $800mil in revenue (third consecutive year with a growth rate of over 25%)</dd>
      <dt class="col s2 l1 right-align">2023</dt>
      <dd class="col s10 l11">Achieved over US $1 billion in revenue</dd>
    </dl>
  </div>
</div>',null,'{}',null,1),
	 ('services','en','Services','<div>
  <header><h1>Services</h1></header>
  <div class="main-body">
    <h4 class="h4">FPT specializes in creating software solutions for various industries - spanning different levels and requirements.</h4>
    <ul class="row list">
      <li class="col s6 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/services/product-engineering-services/automative-services/auto-services-lp_banner-mobile.webp"
        />
        <h3>Software Development</h3>
        <p>
          Develop software on a wide range of platforms, from full stack (GO, Java, .NET, Java Script, PHP &amp; Python) to mobile
          application (Native and Cross-Platform)​
        </p>
      </li>
      <li class="col s6 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/services/product-engineering-services/vehicle-engineering-cad-cae-services/vehicle-engineering-lp_banner-1_mobile.png"
        />
        <h3>Software Testing</h3>
        <p>
          With our purpose-built teams, we offer 15+ years of testing knowledge and expertise. We can support your existing teams or work as
          your dedicated QA team.
        </p>
      </li>
      <li class="col s6 l3 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/logistics/750x1000-min.png" />
        <h3>Data Services</h3>
        <p>
          Data integrity is critical. We provide end-to-end support for data integrity and analytics, ensuring that data is clean, accurate,
          and prepared to flow seamlessly through your pipeline.
        </p>
      </li>
      <li class="col s6 l3 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/automotive/automotive-lp_banner-3_mobile.png" />
        <h3>AI &amp; Machine Learning</h3>
        <p>
          We help our clients leverage emerging technologies like artificial intelligence (AI) and machine learning (ML) to enhance their
          software products, from the data preparation process to the development of best-in-class ML algorithms. We guarantee the highest
          engineering quality and transparent communication along your entire AI / ML journey.
        </p>
      </li>
    </ul>
  </div>
</div>
',null,'{}',null,1),
	 ('leadership','en','Leadership','<div>
  <header><h1>Leadership</h1></header>
  <div class="main-body">
    <h2>Board Of Management</h2>
    <ul class="row list">
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/chu-thi-thanh-ha.webp"
        />
        <h3 class="center">Chu Thi Thanh Ha</h3>
        <p class="center">Chairwoman, FPT Software</p>
      </li>
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/pham-minh-tuan.webp"
        />
        <h3 class="center">Pham Minh Tuan</h3>
        <p class="center">Chief Executive Officer, FPT Software</p>
      </li>
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/nguyen-khai-hoan.webp"
        />
        <h3 class="center">Nguyen Khai Hoan</h3>
        <p class="center">Chief Operating Officer</p>
      </li>
      <li class="col s6 m4 l3 push-m4 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/dao-duy-cuong.webp"
        />
        <h3 class="center">Dao Duy Cuong</h3>
        <p class="center">Chief Technology Officer</p>
      </li>
    </ul>
    <h2>Global Management</h2>
    <ul class="row list">
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/do-van-khac.webp"
        />
        <h3 class="center">Do Van Khac</h3>
        <p class="center">Chief Executive Officer, FPT Japan</p>
      </li>
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/dang-tran-phuong.webp"
        />
        <h3 class="center">Dang Tran Phuong</h3>
        <p class="center">Chief Executive Officer, FPT Software America</p>
      </li>
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/mark-scrivens.webp"
        />
        <h3 class="center">Mark Scrivens</h3>
        <p class="center">Chief Executive Officer, FPT Software United Kingdom</p>
      </li>
      <li class="col s6 m4 l3 push-m4 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/christophe-schwanegel.webp"
        />
        <h3 class="center">Christophe Schwanengel</h3>
        <p class="center">Chief Executive Officer, FPT Software France</p>
      </li>
    </ul>
  </div>
</div>
',null,'{}',null,1),
	 ('companies','en','Companies','<div>
  <header>
    <h1>Companies</h1>
  </header>
  <div class="main-body">
    <h2>Vertical Industry</h2>
    <ul class="row list">
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/banner/media-desktop.webp"></img>
        <h3>FPT Media & Entertainment</h3>
        <h4>Take the lead in the race of customer-driven content</h4>
        <p>For more than 20 years, FPT Software has helped multiple communications, media, and entertainment companies accelerate their roadmaps, rapidly delivering solutions to the market.</p>
        <p>Providing consulting and technology services, leveraged by flexible staffing models, we support the entire media lifecycle and rapidly scale up at anytime and anywhere.</p>
      </li>
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/industries-healthcare/healthcare-lp_banner.png"></img>
        <h3>FPT Healthcare</h3>
        <h4>Transform the journey of care through the power of technology and human expertise</h4>
        <p>The healthcare industry is witnessing a dramatic transformation marked by changing customer expectations and increased regulations.</p>
        <p>As a long-time technology partner of leading healthcare providers, FPT Software stays on top of industry and technological demand, blending insights, innovations and expertise to offer tailored solutions that streamline operations and improve patient care experiences. Our expertise and experience are centered on delivering Software for Medical Devices, Hospital Information Systems, Digital Health Platforms, Health Insurance, Digital Transformation for Pharmaceuticals, Virtual Care, and Telehealth.</p>
      </li>
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/automotive/automotive-lp_banner-3.png"></img>
        <h3>FPT Automotive</h3>
        <h4>Moving into the fast lane of smart, software-defined mobility</h4>
        <p>With two decades of experience in the Automotive industry, FPT Software''s automotive technology subsidiary, FPT Automotive was launched in 2023 with a mission to drive the advancement of software-defined vehicles and shape the new mobility era.</p>
        <p>Our team of automotive experts is equipped and experienced to accompany car manufacturers and suppliers in advancing the mobility ecosystem, having enabled the world''s leading automakers, OEMs, Tier-1 suppliers, and semiconductor companies to innovate, optimize and maintain a competitive edge in the automotive industry. This support is crucial for navigating challenges such as industry volatility, disrupted supply chains, and rapidly evolving market demands.</p>
      </li>
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/logistics/2880x1000-min.png"></img>
        <h3>FPT Logistics</h3>
        <h4>Make substantial and bold moves toward resilience and profitability</h4>
        <p>Logistics is at a tipping point for transformation while contending with evolving customer expectations and volatile disruption. Now is the time for freight and logistics companies to forge new paths to deliver strong growth, integrating advanced technologies to revolutionize supply chain management and enhance efficiency and customer satisfaction.</p>
        <p>With a track record of success in digital innovation and AI application, FPT Software combines extensive industry insights and technological acumen to enable logistics partners to become more resilient, optimize operations, fuel better margins, and enhance customer experiences.</p>
      </li>
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/bfsi/banner-2.png"></img>
        <h3>FPT Banking, Financial Services & Insurance</h3>
        <h4>Defy the speed of change and realize the industry’s full potential with digitization</h4>
        <p>In the fast-changing digital age, banking and financial institutions, which can be famously conservative, are faced with the choice to adopt a fully digital approach and embrace continuous technological innovations to stay competitive, outpace change, and capitalize on emerging opportunities.</p>
        <p>FPT Software has accompanied world-leading financial institutions in their digital transformation journey with comprehensive, AI-enabled services and solutions to modernize, streamline processes, enhance security, and provide a seamless customer experience.</p>
      </li>
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/manufacturing/ldp_manufacturing_banner1-min.png"></img>
        <h3>FPT Manufacturing</h3>
        <h4>Bridging the gap between Production Strategy and Execution with digitization, analytics, and industry insights</h4>
        <p>In today''s volatile, uncertain, complex, and ambiguous (VUCA) business landscape, agility and resilience are no longer enough - companies must transition to an antifragile state in which values are extracted from obstacles.</p>
        <p>With over 20 years of manufacturing expertise, FPT Software helps clients establish supply chains that not only withstand uncertainty but also grow stronger through adversity. By infusing velocity, collaboration, and emerging technologies such as AI, digital twins, and predictive analytics, we empower our partners to anticipate disruptions, transform difficulties into opportunities, and thrive even in the most turbulent environments.</p>
      </li>
    </ul>
  </div>
</div>',null,'{}',null,1),
	 ('home','en','Home','<div class="view-container">
  <header>
    <h1>FPT Software</h1>
  </header>
  <div class="view-body">
    <p class="p">
      FPT Software Company Limited, also known simply as Fsoft is a global IT services provider headquartered in Hanoi, Vietnam, being the
      core subsidiary of the FPT Corporation. It is considered one of the biggest software services companies in Vietnam, with US$1.87
      billion in revenue (FY2022) and more than 48,000 core employees.
    </p>
    <section>
      <h2>Why us?</h2>
      <ul class="row list">
        <li class="col s12 l6 xl3 card">
          <section>
            <h3>Talent Hub</h3>
            <p>
              Our globally seasoned talent pool of cross-industry expertise, spanning sectors like healthcare, finance, retail, AI/AR, and
              more. Our dedicated and experienced team members serve as catalysts for your success.
            </p>
          </section>
        </li>
        <li class="col s12 l6 xl3 card">
          <section>
            <h3>High Standard Delivery</h3>
            <p>
              Agile methodologies like Scrum and MVP development accelerate delivery, ensuring fast turnaround times. Team setup requires
              minimal time (3-5 days).
            </p>
          </section>
        </li>
        <li class="col s12 l6 xl3 card">
          <section>
            <h3>Effective Cost</h3>
            <p>
              We prioritize crafting solutions that align with expectations, ensuring prompt delivery and maximizing client satisfaction.
            </p>
          </section>
        </li>
        <li class="col s12 l6 xl3 card">
          <section>
            <h3>Lifetime Partnership</h3>
            <p>
              We firmly believe in the power of long-term collaboration, as evidenced by the many clients who have been with us since day
              one. Establishing lasting partnerships is our top priority with every client, as they are the foundation of mutual success.
            </p>
          </section>
        </li>
      </ul>
    </section>
    <section>
      <h2>Vision, Mission &amp; Core Value</h2>
      <ul class="row list">
        <li class="col s12 m4 card">
          <section>
            <h3>Our Vision</h3>
            <p>
              To become a globally recognized leader in software development, renowned for our cutting-edge solutions, exceptional client
              service, and commitment to fostering a thriving tech community.
            </p>
          </section>
        </li>
        <li class="col s12 m4 card">
          <section>
            <h3>Our Mission</h3>
            <p>
              Delivering cutting-edge technology solutions that empower businesses to thrive in a digital world, through exceptional service
              and a commitment to excellence.
            </p>
          </section>
        </li>
        <li class="col s12 m4 card">
          <section>
            <h3>Core Value</h3>
            <p>
              We prioritize innovation and passion, upholding integrity and quality in every project. Our people-centric approach ensures
              that we focus on the needs and success of our clients and team members, fostering a collaborative and supportive environment.
            </p>
          </section>
        </li>
      </ul>
    </section>
    <section>
      <h2>Services</h2>
      <ul class="row list">
        <li class="col s6 l3 img-card">
          <img
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/services/product-engineering-services/automative-services/auto-services-lp_banner-mobile.webp"
          />
          <h3>Software Development</h3>
          <p>
            Develop software on a wide range of platforms, from full stack (GO, Java, .NET, Java Script, PHP &amp; Python) to mobile
            application (Native and Cross-Platform)​
          </p>
        </li>
        <li class="col s6 l3 img-card">
          <img
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/services/product-engineering-services/vehicle-engineering-cad-cae-services/vehicle-engineering-lp_banner-1_mobile.png"
          />
          <h3>Software Testing</h3>
          <p>
            With our purpose-built teams, we offer 15+ years of testing knowledge and expertise. We can support your existing teams or work
            as your dedicated QA team.
          </p>
        </li>
        <li class="col s6 l3 img-card">
          <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/logistics/750x1000-min.png" />
          <h3>Data Services</h3>
          <p>
            Data integrity is critical. We provide end-to-end support for data integrity and analytics, ensuring that data is clean,
            accurate, and prepared to flow seamlessly through your pipeline.
          </p>
        </li>
        <li class="col s6 l3 img-card">
          <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/automotive/automotive-lp_banner-3_mobile.png" />
          <h3>AI &amp; Machine Learning</h3>
          <p>
            We help our clients leverage emerging technologies like artificial intelligence (AI) and machine learning (ML) to enhance their
            software products, from the data preparation process to the development of best-in-class ML algorithms. We guarantee the highest
            engineering quality and transparent communication along your entire AI / ML journey.
          </p>
        </li>
      </ul>
    </section>
    <h2>Leadership</h2>
    <section class="section">
      <h2>Board Of Management</h2>
      <ul class="row list">
        <li class="col s6 m4 l3 img-card">
          <img
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/chu-thi-thanh-ha.webp"
          />
          <h3 class="center">Chu Thi Thanh Ha</h3>
          <p class="center">Chairwoman, FPT Software</p>
        </li>
        <li class="col s6 m4 l3 img-card">
          <img
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/pham-minh-tuan.webp"
          />
          <h3 class="center">Pham Minh Tuan</h3>
          <p class="center">Chief Executive Officer, FPT Software</p>
        </li>
        <li class="col s6 m4 l3 img-card">
          <img
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/nguyen-khai-hoan.webp"
          />
          <h3 class="center">Nguyen Khai Hoan</h3>
          <p class="center">Chief Operating Officer</p>
        </li>
        <li class="col s6 m4 l3 push-m4 img-card">
          <img
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/dao-duy-cuong.webp"
          />
          <h3 class="center">Dao Duy Cuong</h3>
          <p class="center">Chief Technology Officer</p>
        </li>
      </ul>
      <h2>Global Management</h2>
      <ul class="row list">
        <li class="col s6 m4 l3 img-card">
          <img
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/do-van-khac.webp"
          />
          <h3 class="center">Do Van Khac</h3>
          <p class="center">Chief Executive Officer, FPT Japan</p>
        </li>
        <li class="col s6 m4 l3 img-card">
          <img
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/dang-tran-phuong.webp"
          />
          <h3 class="center">Dang Tran Phuong</h3>
          <p class="center">Chief Executive Officer, FPT Software America</p>
        </li>
        <li class="col s6 m4 l3 img-card">
          <img
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/mark-scrivens.webp"
          />
          <h3 class="center">Mark Scrivens</h3>
          <p class="center">Chief Executive Officer, FPT Software United Kingdom</p>
        </li>
        <li class="col s6 m4 l3 push-m4 img-card">
          <img
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/christophe-schwanegel.webp"
          />
          <h3 class="center">Christophe Schwanengel</h3>
          <p class="center">Chief Executive Officer, FPT Software France</p>
        </li>
      </ul>
    </section>
  </div>
</div>
',null,'{}',null,1),
	 ('leadership','vi','Leadership','<div>
  <header><h1>Khả năng lãnh đạo</h1></header>
  <div class="main-body">
    <h2>Ban lãnh đạo</h2>
    <ul class="row list">
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/chu-thi-thanh-ha.webp"
        />
        <h3 class="center">Chu Thi Thanh Ha</h3>
        <p class="center">Chủ tịch, FPT Software</p>
      </li>
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/pham-minh-tuan.webp"
        />
        <h3 class="center">Pham Minh Tuan</h3>
        <p class="center">Tổng giám đốc điều hành, FPT Software</p>
      </li>
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/nguyen-khai-hoan.webp"
        />
        <h3 class="center">Nguyen Khai Hoan</h3>
        <p class="center">Giám đốc vận hành</p>
      </li>
      <li class="col s6 m4 l3 push-m4 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/dao-duy-cuong.webp"
        />
        <h3 class="center">Dao Duy Cuong</h3>
        <p class="center">Giám đốc công nghệ</p>
      </li>
    </ul>
    <h2>Ban lãnh đạo các khu vực</h2>
    <ul class="row list">
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/do-van-khac.webp"
        />
        <h3 class="center">Do Van Khac</h3>
        <p class="center">Giám đốc điều hành, FPT Nhật Bản</p>
      </li>
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/dang-tran-phuong.webp"
        />
        <h3 class="center">Dang Tran Phuong</h3>
        <p class="center">Giám đốc điều hành, FPT Mỹ</p>
      </li>
      <li class="col s6 m4 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/mark-scrivens.webp"
        />
        <h3 class="center">Mark Scrivens</h3>
        <p class="center">Giám đốc điều hành, FPT Vương quốc Anh</p>
      </li>
      <li class="col s6 m4 l3 push-m4 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/board-of-management/board-of-management/christophe-schwanegel.webp"
        />
        <h3 class="center">Christophe Schwanengel</h3>
        <p class="center">Giám đốc điều hành, FPT Giám đốc điều hành</p>
      </li>
    </ul>
  </div>
</div>
',null,'{}',null,1),
	 ('services','vi','Services','<div>
  <header><h1>Dịch vụ</h1></header>
  <div class="main-body">
    <h4 class="h4">
      FPT chuyên tạo ra các giải pháp phần mềm cho nhiều ngành công nghiệp khác nhau - trải dài ở nhiều cấp độ và yêu cầu khác nhau.
    </h4>
    <ul class="row list">
      <li class="col s6 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/services/product-engineering-services/automative-services/auto-services-lp_banner-mobile.webp"
        />
        <h3>Phát triển phần mềm</h3>
        <p>
          Phát triển phần mềm trên nhiều nền tảng khác nhau, từ mạng (GO, Java, .NET, Java Script, PHP & Python) đến ứng dụng di động
          (Android/iOS gốc và đa nền tảng)​
        </p>
      </li>
      <li class="col s6 l3 img-card">
        <img
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/services/product-engineering-services/vehicle-engineering-cad-cae-services/vehicle-engineering-lp_banner-1_mobile.png"
        />
        <h3>Kiểm thử phần mềm</h3>
        <p>
          Với đội ngũ được xây dựng với chuyên môn hóa cao, chúng tôi cung cấp hơn 15 năm kiến ​​thức và chuyên môn về thử nghiệm. Chúng tôi
          có thể hỗ trợ các dự án hiện tại của bạn hoặc làm việc như đội chuyên kiểm thử phần mềm rieeng biệt.
        </p>
      </li>
      <li class="col s6 l3 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/logistics/750x1000-min.png" />
        <h3>Dịch vụ dữ liệu</h3>
        <p>
          Tính toàn vẹn của dữ liệu rất quan trọng. Chúng tôi cung cấp hỗ trợ toàn diện cho tính toàn vẹn và phân tích dữ liệu, đảm bảo dữ
          liệu sạch, chính xác và sẵn sàng để truyền tải liền mạch một cách toàn diện.
        </p>
      </li>
      <li class="col s6 l3 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/automotive/automotive-lp_banner-3_mobile.png" />
        <h3>Trí tuệ nhân tạo và máy học</h3>
        <p>
          Chúng tôi giúp khách hàng tận dụng các công nghệ mới nổi như trí tuệ nhân tạo (AI) và máy học (ML) để nâng cao chất lượng sản phẩm
          phần mềm của họ, từ quy trình chuẩn bị dữ liệu đến phát triển các thuật toán máy học tốt nhất. Chúng tôi đảm bảo chất lượng kỹ
          thuật cao nhất và giao tiếp minh bạch trong suốt hành trình máy học của bạn.
        </p>
      </li>
    </ul>
  </div>
</div>',null,'{}',null,1),
	 ('milestones','vi','Milestones','<div>
  <header><h1>Các cột mốc quan trọng</h1></header>
  <div class="main-body">
    <dl class="data-list row">
      <dt class="col s2 l1 right-align">1999</dt>
      <dd class="col s10 l11">FPT Software được thành lập năm 1999 bởi 13 thành viên của Tập đoàn FPT, đứng đầu là Nguyễn Thành Nam</dd>
      <dt class="col s2 l1 right-align">2005</dt>
      <dd class="col s10 l11">Mở chi nhánh ở nước ngoài đầu tiên tại Nhật Bản.</dd>
      <dt class="col s2 l1 right-align">2007</dt>
      <dd class="col s10 l11">Mở văn phòng tại Singapore và đạt lợi nhuận hơn 10 triệu đô la Mỹ</dd>
      <dt class="col s2 l1 right-align">2008</dt>
      <dd class="col s10 l11">Mở rộng hoạt động sang toàn cầu sang các nước Hoa Kỳ, Pháp, Úc và Malaysia</dd>
      <dt class="col s2 l1 right-align">2012</dt>
      <dd class="col s10 l11">Mở văn phòng đầu tiên tại Đức.</dd>
      <dt class="col s2 l1 right-align">2013</dt>
      <dd class="col s10 l11">FPT Software vượt mốc doanh thu 100 triệu đô la Mỹ vào cuối năm 2013</dd>
      <dt class="col s2 l1 right-align">2014</dt>
      <dd class="col s10 l11">
        Mua lại RWE IT Slovakia - trở thành công ty CNTT Việt Nam đầu tiên thực hiện giao dịch mua bán sáp nhập ở nước ngoài
      </dd>
      <dt class="col s2 l1 right-align">2016</dt>
      <dd class="col s10 l11">Vượt mốc doanh thu 200 triệu đô la Mỹ và 10.000 nhân viên. Thành lập FPT Hàn Quốc.</dd>
      <dt class="col s2 l1 right-align">2018</dt>
      <dd class="col s10 l11">
        FPT đã mua phần lớn cổ phần của Intellinet, mở rộng dấu ấn tại thị trường Mỹ và nâng cao vị thế dẫn đầu về chuyển đổi số
      </dd>
      <dt class="col s2 l1 right-align">2022</dt>
      <dd class="col s10 l11">Đạt doanh thu trên 800 triệu đô la Mỹ (năm thứ ba liên tiếp với tốc độ tăng trưởng trên 25%)</dd>
      <dt class="col s2 l1 right-align">2023</dt>
      <dd class="col s10 l11">Đạt được doanh thu hơn 1 tỷ đô la Mỹ</dd>
    </dl>
  </div>
</div>
',null,'{}',null,1),
	 ('companies','vi','Companies','<div>
  <header>
    <h1>Các công ty thành viên</h1>
  </header>
  <div class="main-body">
    <h2>Theo ngành công nghiệp</h2>
    <ul class="row list">
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/banner/media-desktop.webp"></img>
        <h3>FPT Truyền thông & Giải trí</h3>
        <h4>Dẫn đầu trong cuộc đua về nội dung hướng đến khách hàng</h4>
        <p>Trong hơn 20 năm qua, FPT Software đã giúp nhiều công ty truyền thông, phương tiện truyền thông và giải trí đẩy nhanh lộ trình phát triển, nhanh chóng cung cấp các giải pháp cho thị trường.</p>
        <p>Cung cấp các dịch vụ tư vấn và công nghệ, kết hợp với mô hình nhân sự linh hoạt, chúng tôi hỗ trợ toàn bộ vòng đời truyền thông và nhanh chóng mở rộng quy mô mọi lúc, mọi nơi.</p>
      </li>
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/industries-healthcare/healthcare-lp_banner.png"></img>
        <h3>FPT chăm sóc sức khỏe</h3>
        <h4>Chuyển đổi hành trình chăm sóc thông qua sức mạnh của công nghệ và chuyên môn của con người</h4>
        <p>Ngành chăm sóc sức khỏe đang chứng kiến ​​sự chuyển đổi mạnh mẽ do kỳ vọng của khách hàng thay đổi và các quy định ngày càng chặt chẽ hơn.</p>
        <p>Là đối tác công nghệ lâu năm của các nhà cung cấp dịch vụ chăm sóc sức khỏe hàng đầu, FPT Software luôn đi đầu trong nhu cầu của ngành và công nghệ, kết hợp hiểu biết sâu sắc, đổi mới và chuyên môn để cung cấp các giải pháp phù hợp giúp hợp lý hóa hoạt động và cải thiện trải nghiệm chăm sóc bệnh nhân. Chuyên môn và kinh nghiệm của chúng tôi tập trung vào việc cung cấp Phần mềm cho Thiết bị y tế, Hệ thống thông tin bệnh viện, Nền tảng y tế số, Bảo hiểm y tế, Chuyển đổi số cho Dược phẩm, Chăm sóc ảo và Y tế từ xa.</p>
      </li>
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/automotive/automotive-lp_banner-3.png"></img>
        <h3>FPT xe hơi</h3>
        <h4>Chuyển sang làn đường nhanh của tính di động thông minh được xác định bằng phần mềm</h4>
        <p>Với hai thập kỷ kinh nghiệm trong ngành ô tô, công ty con về công nghệ ô tô của FPT Software, FPT Automotive được thành lập vào năm 2023 với sứ mệnh thúc đẩy sự phát triển của các phương tiện được điều khiển bằng phần mềm và định hình kỷ nguyên di động mới.</p>
        <p>Đội ngũ chuyên gia ô tô của chúng tôi được trang bị và có kinh nghiệm để đồng hành cùng các nhà sản xuất và nhà cung cấp ô tô trong việc thúc đẩy hệ sinh thái di động, giúp các nhà sản xuất ô tô, OEM, nhà cung cấp Tier-1 và các công ty bán dẫn hàng đầu thế giới đổi mới, tối ưu hóa và duy trì lợi thế cạnh tranh trong ngành ô tô. Sự hỗ trợ này rất quan trọng để vượt qua những thách thức như sự biến động của ngành, chuỗi cung ứng bị gián đoạn và nhu cầu thị trường thay đổi nhanh chóng.</p>
      </li>
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/logistics/2880x1000-min.png"></img>
        <h3>FPT hậu cần</h3>
        <h4>Thực hiện những bước đi mạnh mẽ và táo bạo hướng tới khả năng phục hồi và lợi nhuận</h4>
        <p>Ngành hậu cần đang ở thời điểm chuyển đổi quan trọng trong khi phải đối mặt với kỳ vọng ngày càng thay đổi của khách hàng và sự gián đoạn bất ổn. Bây giờ là lúc các công ty vận tải và hậu cần mở ra những con đường mới để mang lại sự tăng trưởng mạnh mẽ, tích hợp các công nghệ tiên tiến để cách mạng hóa quản lý chuỗi cung ứng và nâng cao hiệu quả cũng như sự hài lòng của khách hàng.</p>
        <p>Với thành tích thành công trong đổi mới kỹ thuật số và ứng dụng trí tuệ nhân tạo, FPT kết hợp hiểu biết sâu rộng về ngành và sự nhạy bén về công nghệ để giúp các đối tác hậu cần trở nên kiên cường hơn, tối ưu hóa hoạt động, thúc đẩy biên lợi nhuận tốt hơn và nâng cao trải nghiệm của khách hàng.</p>
      </li>
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/bfsi/banner-2.png"></img>
        <h3>Ngân hàng, Dịch vụ tài chính và Bảo hiểm FPT</h3>
        <h4>Thách thức tốc độ thay đổi và nhận ra tiềm năng đầy đủ của ngành với số hóa</h4>
        <p>Trong thời đại kỹ thuật số thay đổi nhanh chóng, các tổ chức ngân hàng và tài chính, vốn nổi tiếng bảo thủ, đang phải đối mặt với sự lựa chọn áp dụng phương pháp tiếp cận hoàn toàn kỹ thuật số và nắm bắt các cải tiến công nghệ liên tục để duy trì khả năng cạnh tranh, vượt qua sự thay đổi và tận dụng các cơ hội mới nổi.</p>
        <p>FPT Software đã đồng hành cùng các tổ chức tài chính hàng đầu thế giới trong hành trình chuyển đổi số với các dịch vụ và giải pháp toàn diện ứng dụng AI nhằm hiện đại hóa, hợp lý hóa quy trình, tăng cường bảo mật và mang đến trải nghiệm liền mạch cho khách hàng.</p>
      </li>
      <li class="col s12 l6 img-card">
        <img src="https://fptsoftware.com/-/media/project/fpt-software/fso/industries/manufacturing/ldp_manufacturing_banner1-min.png"></img>
        <h3>FPT sản xuất</h3>
        <h4>Thu hẹp khoảng cách giữa Chiến lược sản xuất và Thực hiện bằng số hóa, phân tích và hiểu biết sâu sắc về ngành</h4>
        <p>Trong bối cảnh kinh doanh bất ổn, không chắc chắn, phức tạp và mơ hồ (VUCA) hiện nay, sự linh hoạt và khả năng phục hồi không còn đủ nữa - các công ty phải chuyển sang trạng thái chống mong manh, trong đó giá trị được chiết xuất từ ​​những trở ngại.</p>
        <p>Với hơn 20 năm kinh nghiệm trong lĩnh vực sản xuất, FPT Software giúp khách hàng thiết lập chuỗi cung ứng không chỉ chịu được sự không chắc chắn mà còn phát triển mạnh mẽ hơn trong nghịch cảnh. Bằng cách truyền tải tốc độ, sự hợp tác và các công nghệ mới nổi như AI, bản sao kỹ thuật số và phân tích dự đoán, chúng tôi trao quyền cho các đối tác của mình để dự đoán sự gián đoạn, biến khó khăn thành cơ hội và phát triển mạnh mẽ ngay cả trong những môi trường hỗn loạn nhất.</p>
      </li>
    </ul>
  </div>
</div>',null,'{}',null,1);
