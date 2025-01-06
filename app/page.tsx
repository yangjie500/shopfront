import TestQueryClient from "@/components/TestQueryClient";
import Clientcache from "@/components/Clientcache";
import Clientcache2 from "@/components/Clientcache2";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <TestQueryClient />
      <Clientcache />
      <Clientcache2 />
    </div>
  );
}
