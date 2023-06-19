import { Suspense } from "react";

import { ServerForm } from './_component/ServerData'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={"loading..."}>
        <ServerForm />
      </Suspense>
    </main>
  )
}
