import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Item</h1>
      <NewItem />
    </main>
  );
}