import Image from "next/image";
import { db } from "@/lib/db";
import Button from "./dashboard/page";

export default async function Home() {
  await db.set("hello","hello")
  return (
    
    <div className="text-red-500">
      Hello world
      <Button/>
    </div>
  );
}
