export const config = {
  port: 8083,
  allow: {
    origin: ["http://localhost:3000"],
    credentials: "true",
    methods: "GET,PUT,POST,DELETE,OPTIONS,PATCH",
    headers:
      "Access-Control-Allow-Headers, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  },
  log: {
    db: true,
    level: "info",
    map: {
      time: "@timestamp",
      msg: "message",
    },
  },
  middleware: {
    log: true,
    skips: "health,log,middleware",
    request: "request",
    response: "response",
    status: "status",
    size: "size",
  },
  db: {
    connectionString: "postgres://postgres:abcd1234@localhost/cms",
  },
  auth: {
    token: {
      secret: "secretbackoffice",
      expires: 86400000,
    },
    status: {
      success: 1,
      password_expired: 3,
      locked: 4,
      suspended: 5,
      disabled: 6,
    },
    lockedMinutes: 2,
    maxPasswordFailed: 5,
    payload: {
      id: "id",
      username: "username",
      email: "email",
      userType: "userType",
    },
    account: {
      displayName: "displayname",
    },
    userStatus: {
      activated: "A",
      deactivated: "I",
      disable: "D",
      suspended: "S",
    },
    db: {
      user: "users",
      password: "passwords",
      id: "user_id",
      username: "username",
      status: "status",
      successTime: "success_time",
      failTime: "fail_time",
      failCount: "fail_count",
      lockedUntilTime: "locked_until_time",
    },
    query: `
      select u.user_id, u.username, u.display_name, email, u.status, u.max_password_age, 
        p.password, p.success_time, p.fail_time, p.fail_count, p.locked_until_time, p.changed_time
      from users u
      inner join passwords p
        on u.user_id = p.user_id
      where username = $1`,
    expires: 500,
    template: {
      subject: "Verification Code",
      body: "%s Use this code for verification. This code will expire in %s minutes",
    },
  },
  map: {
    user_id: "id",
    display_name: "displayName",
    max_password_age: "maxPasswordAge",
    success_time: "successTime",
    fail_time: "failTime",
    fail_count: "failCount",
    locked_until_time: "lockedUntilTime",
    changed_time: "passwordModifiedTime",
  },
}

export const env = {
  sit: {
    db: {
      database: "masterdata_sit",
    },
  },
  prd: {
    log: {
      level: "error",
    },
    middleware: {
      log: false,
    },
  },
}
