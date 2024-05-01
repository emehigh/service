import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            authorize: async (credentials) => {
                if (credentials.email === 'admin@admin.com' && credentials.password === 'admin') {
                    return { user: 'admin', credentials }; // Attach credentials to the returned object
                } else {
                    return { user: 'user', credentials }; // Attach credentials to the returned object
                }
            }
        })
    ],
    session: {
        // jwt: true,
        maxAge: 30* 24 * 60 * 60, // 30 days
    },

    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            // Access the user object in the JWT token
            if (user) {
                token.user = user;
            }

            return token;
        },
        async session({ session, user, token }) {
            // Access credentials from the user object
            if (token.user.user) {
                session.user = token.user.user;
                
            }
            return session;
        },
        async signIn({ user, credentials }) {
            return true;
        }
    },
});

export { handler as GET, handler as POST };
