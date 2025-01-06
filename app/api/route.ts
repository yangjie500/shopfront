export const dynamic = "force-dynamic";

export async function GET() {
  console.log("I was hit");
  await fetch("http://localhost:3000/api/test", {});

  return Response.json({ title: "Hello World" });
}
