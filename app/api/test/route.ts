export const dynamic = "force-dynamic";

export async function GET() {
  console.log("I was hit [test]");

  return Response.json({ title: "Hello World [test]" });
}
