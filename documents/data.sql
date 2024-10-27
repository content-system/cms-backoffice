create table companies (
	id varchar(40) primary key,
	name varchar(300),
	description varchar(2000),
	slogan varchar(300),
	image_url varchar(500),
	cover_url varchar(500),
	sequence integer
);

insert into companies (id,name,description,slogan,image_url,cover_url,sequence) values
	 ('fpt-automotive','FPT Automotive','With two decades of experience in the Automotive industry, FPT Software''s automotive technology subsidiary, FPT Automotive was launched in 2023 with a mission to drive the advancement of software-defined vehicles and shape the new mobility era.

Our team of automotive experts is equipped and experienced to accompany car manufacturers and suppliers in advancing the mobility ecosystem, having enabled the world''s leading automakers, OEMs, Tier-1 suppliers, and semiconductor companies to innovate, optimize and maintain a competitive edge in the automotive industry. This support is crucial for navigating challenges such as industry volatility, disrupted supply chains, and rapidly evolving market demands.','Moving into the fast lane of smart, software-defined mobility.','https://fptsoftware.com/-/media/project/fpt-software/fso/industries/automotive/automotive-lp_banner-3_mobile.png','https://fptsoftware.com/-/media/project/fpt-software/fso/industries/automotive/automotive-lp_banner-3.png',1);


create table if not exists users (
  id varchar(40) not null,
  username varchar(120),
  email varchar(120),
  phone varchar(45),
  date_of_birth date,
  primary key (id)
);

insert into users (id, username, email, phone, date_of_birth) values ('ironman', 'tony.stark', 'tony.stark@gmail.com', '0987654321', '1963-03-25');
insert into users (id, username, email, phone, date_of_birth) values ('spiderman', 'peter.parker', 'peter.parker@gmail.com', '0987654321', '1962-08-25');
insert into users (id, username, email, phone, date_of_birth) values ('wolverine', 'james.howlett', 'james.howlett@gmail.com', '0987654321', '1974-11-16');
