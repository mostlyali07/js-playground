import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col">
        <h2 className="text-5xl mb-10 text-white font-bold">Pay Minder</h2>
        <div>
          <Button variant="own" size="xl" asChild>
            <Link href="/add-expense">Add Expense</Link>
          </Button>
          <Button variant="own" size="xl" asChild className="ml-5">
            <Link href="/add-income">Add Income</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
