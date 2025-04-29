import CredentialsProvider from 'next-auth/providers/credentials';
import axios from '@/lib/axios';

export const options = {
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const res = await axios.post("/api/login",
                        {
                            email: credentials.email,
                            password: credentials.password,
                        });
                    if(res.data.success) {
                        console.log("Profile Credential: ", res.data.user);
                        return {
                            ...res.data.user,
                            email: res.data.user.email,
                            name: res.data.user.name,
                            role: res.data.user.access,
                            id: res.data.user.id
                        };
                    }
                }catch(error) {
                    console.error('Login error:', error.response?.data || error.message);
                    throw new Error(error.response?.data?.error || 'Login failed');
                }
                return null;
            }
        }),
    ],
    pages: {
        signIn: '/auth/login',
        signOut: '/dashboard',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: '/auth/signup'
    },
    callbacks: {
        authorized({ req , token }) {
            if(token) return true;
        },
        async jwt({ token, user }) {
            if(user) {
                token.role = user.role;
                token.name = user.name;
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if(session?.user) {
                session.user.role = token.role;
                session.user.name = token.name;
                session.user.id = token.id;
            }
            return session;
        }
    }
}
