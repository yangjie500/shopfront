import { ProfileForm } from "@/components/Form";
import { testFunc } from "@/lib/ApolloClient";

export default async function Home() {
  // const data = await testFunc();
  return (
    <>
      {/* <ul>
        {data.products.items.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul> */}
      <div className="h-[600px] w-[400px] ">
        <ProfileForm />
      </div>
    </>
  );
}
