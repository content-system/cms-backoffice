create table code_masters (
  master varchar(100) not null,
  code varchar(100) not null,
  name varchar(100),
  sequence int8,
  status char(1),
  primary key (master, code)
);
create table modules (
  module_id varchar(40) primary key,
  module_name varchar(255) not null,
  status char(1) not null,
  path varchar(255),
  resource_key varchar(255),
  icon varchar(255),
  sequence int not null,
  actions int4 null,
  parent varchar(40),
  created_by varchar(40),
  created_at timestamptz,
  updated_by varchar(40),
  updated_at timestamptz
);

create table users (
  user_id varchar(40) primary key,
  username varchar(255) not null,
  email varchar(255) not null,
  display_name varchar(255),
  status char(1) not null,
  gender char(1),
  phone varchar(20),
  title varchar(10),
  position varchar(40),
  image_url varchar(500),
  language varchar(5),
  dateformat varchar(12),
  max_password_age integer,
  created_by varchar(40),
  created_at timestamptz,
  updated_by varchar(40),
  updated_at timestamptz
);
create table passwords (
  user_id varchar(40) primary key,
  password varchar(255),
  success_time timestamptz,
  fail_time timestamptz,
  fail_count integer,
  locked_until_time timestamptz,
  changed_time timestamptz,
  history character varying[]
);
create table passcodes (
  id varchar(40) primary key,
  code varchar(500) not null,
  expired_at timestamptz not null
);
create table roles (
  role_id varchar(40) primary key,
  role_name varchar(255) not null,
  status char(1) not null,
  remark varchar(255),
  created_by varchar(40),
  created_at timestamptz,
  updated_by varchar(40),
  updated_at timestamptz
);
create table user_roles (
  user_id varchar(40) not null,
  role_id varchar(40) not null,
  primary key (user_id, role_id)
);
create table role_modules (
  role_id varchar(40) not null,
  module_id varchar(40) not null,
  permissions int not null,
  primary key (role_id, module_id)
);

create table audit_logs (
  id varchar(255) primary key,
  resource varchar(255),
  user_id varchar(255),
  ip varchar(255),
  action varchar(255),
  time timestamptz,
  status varchar(255),
  remark varchar(255)
);

create table histories (
  history_id varchar(40) primary key,
  entity varchar(40) not null,
  id varchar(40) not null,
  author varchar(40) not null,
  time timestamptz not null,
  action char(1),
  data jsonb
);

create table notifications (
  id varchar(40) primary key,
  sender varchar(40) not null,
  receiver varchar(40) not null,
  message varchar(1000) not null,
  url varchar(200),
  time timestamptz not null,
  status char(1)
);
create table contents (
  id varchar(80) not null,
  lang varchar(10) not null,
  title varchar(255) not null,
  body text,
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
create table draft_articles (
  id varchar(80) primary key,
  slug varchar(255) unique,
  title varchar(255) not null,
  description varchar(1200) not null,
  content varchar(9500),
  published_at timestamptz,
  tags character varying[],
  thumbnail varchar(400),
  high_thumbnail varchar(400),
  author_id varchar(40),
  status char(1),

  submitted_by varchar(40) default '',
  submitted_at timestamptz,
  approved_by varchar(40) default '',
  approved_at timestamptz,

  created_by varchar(40) default '',
  created_at timestamptz,
  updated_by varchar(40) default '',
  updated_at timestamptz
);

create table articles (
  id varchar(80) primary key,
  slug varchar(255) unique,
  title varchar(255) not null,
  description varchar(1200) not null,
  content varchar(9500),
  published_at timestamptz,
  tags character varying[],
  thumbnail varchar(400),
  high_thumbnail varchar(400),
  author_id varchar(40),
  status char(1),

  submitted_by varchar(40) default '',
  submitted_at timestamptz,
  approved_by varchar(40) default '',
  approved_at timestamptz,

  created_by varchar(40) default '',
  created_at timestamptz,
  updated_by varchar(40) default '',
  updated_at timestamptz
);
