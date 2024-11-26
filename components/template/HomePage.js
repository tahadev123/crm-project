import Card from "../module/Card";

function HomePage({ customer }) {
  return (
    <div>
      {customer.map((customer) => (
        <Card key={customer._id} customer={customer} />
      ))}
    </div>
  );
}

export default HomePage;
