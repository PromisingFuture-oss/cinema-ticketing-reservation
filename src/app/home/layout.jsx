import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation';
import Dashboard from "@/app/home/components/dashboard"

export const metadata = {
    title: "Home"
};

export default async function Page({ children }) {
    const session = await getServerSession(options);

    if(session) {
        return <Dashboard>{children}</Dashboard>
    }
    return redirect("/auth/login")
}
