import ModulesList from "../modules/ModulesList";

export default async function Home({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-home">
      <ModulesList cid={cid} />
    </div>
  );
}
