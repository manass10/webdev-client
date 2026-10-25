export default async function AddPage({
  params,
}: {
  params: Promise<{ a: string; b: string }>;
}) {
  const { a, b } = await params;
  const numA = Number(a);
  const numB = Number(b);
  return (
    <div>
      <h2>Add</h2>
      <p>
        {numA} + {numB} = {numA + numB}
      </p>
    </div>
  );
}
