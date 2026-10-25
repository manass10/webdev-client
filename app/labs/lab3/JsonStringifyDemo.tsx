export default function JsonStringifyDemo() {
  const house = {
    address: "123 Main St",
    bedrooms: 3,
    bathrooms: {
      full: 2,
      half: 1,
    },
    owners: ["Alice", "Bob", "Carol"],
  };
  return (
    <div>
      <pre>{JSON.stringify(house, null, 2)}</pre>
    </div>
  );
}
