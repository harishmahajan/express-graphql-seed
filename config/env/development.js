export default {
  env: 'development',
  jwtSecret: 'jwtsecretkey',
  db: 'mongodb://localhost/egs',
  port: 8080,
  passportOptions: {
    session: false
  },
}