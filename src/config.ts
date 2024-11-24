export const config = {
  port: 8080,
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
