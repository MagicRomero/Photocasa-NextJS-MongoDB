import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const generateMongoURI = () =>
  `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`

console.log(generateMongoURI())
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
    // Providers.Email({
    //   server: {
    //     host: '',
    //     port: '',
    //     auth: {
    //       user: '',
    //       pass: '',
    //     },
    //   },
    //   from: 'noreply@photocasa.es',
    // }),
    // ...add more proiders here
  ],

  // A database is optional, but required to persist accounts in a database
  database: generateMongoURI(),
})
