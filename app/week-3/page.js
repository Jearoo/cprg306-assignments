import ItemList from './item-list';

const Page = () => {
  return (
    <main className="bg-black min-h-screen py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
