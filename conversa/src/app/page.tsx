import Image from "next/image";
import { db } from "@/lib/db";
import Button from "@/components/ui/Button";
export default async function Home() {
  // await db.set("hello","hello")
  return (

    <div>
      <h1>Hi</h1>
      <Button>
      Hello
    </Button>
    </div>
  );
}
