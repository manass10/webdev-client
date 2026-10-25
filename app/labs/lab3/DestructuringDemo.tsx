export default function DestructuringDemo() {
  const house = {
    address: "123 Main St",
    bedrooms: 3,
    bathrooms: { full: 2, half: 1 },
    owners: ["Alice", "Bob", "Carol"],
    garage: undefined as { cars: number } | undefined,
  };

  const { address, bedrooms, bathrooms, owners } = house;

  return (
    <div>
      <p>Address: {address}</p>
      <p>Bedrooms: {bedrooms}</p>
      <p>
        Full baths: {bathrooms.full}, Half baths: {bathrooms.half}
      </p>
      {/* On your own: <h5>owners</h5> followed by the owners joined with commas */}
      <h5>owners</h5>
      <p>{owners.join(", ")}</p>
      {/* On your own: optional chaining — house.garage?.cars ?? 0 = 0 */}
      <p>house.garage?.cars ?? 0 = {house.garage?.cars ?? 0}</p>
    </div>
  );
}
