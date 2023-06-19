import { ClientForm } from "./ClientForm";
import { sleep } from "@/utils/sleep"

async function fetchDummyData() {
  await sleep(2000);

  return {
    name: "frenetic",
    handle: "@frrntc",
  };
}

export async function ServerForm() {
  const serverData = await fetchDummyData();

  return (
    <form>
      <ClientForm {...serverData}>ServeForm</ClientForm>
    </form>
  );
}

