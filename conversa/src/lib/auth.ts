import { NextAuthOptions } from 'next-auth'
import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter';
import { db } from './db'
import GoogleProvider from 'next-auth/providers/google'
// import { fetchRedis } from '@/helpers/redis';

function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET

  if (!clientId || clientId.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID')
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET')
  }

  return { clientId, clientSecret }
}

export const authOptions: NextAuthOptions = {
  adapter: UpstashRedisAdapter(db),
  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = (await db.get(`user:${token.id}`)) as User | null;

      if (!dbUser) {
        if (user) {
          token.id = user!.id
        }

        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    redirect() {
      return '/dashboard'
    },
  },
  logger: {
    error(code, ...message) {
      console.error(code, ...message);
    },
    warn(code, ...message) {
      console.warn(code, ...message);
    },
    debug(code, ...message) {
      console.debug(code, ...message);
      console.debug('UPSTASH_REDIS_REST_URL:', process.env.UPSTASH_REDIS_REST_URL);
      console.debug('UPSTASH_REDIS_REST_TOKEN:', process.env.UPSTASH_REDIS_REST_TOKEN);
      console.debug('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
      console.debug('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET);
    },
  },
}