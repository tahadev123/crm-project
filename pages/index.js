import HomePage from "../components/template/HomePage";
import Customer from "../models/Customer";
import connectDB from "../utils/connectDB";

function Index({ customer }) {  
  return <HomePage customer={customer} />
}

export default Index;

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: { customer: JSON.parse(JSON.stringify(customers)) },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
