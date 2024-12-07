import Layout from "../../layout/_app-sidebar";

import { ITEMS } from "../../assets/items/items";
import Cards from "../../components/Cards/Cards";

function ViewFrontend() {
  return (
    <Layout>
      <main>
        <Cards items={ITEMS} />
      </main>
    </Layout>
  );
}

export default ViewFrontend;
