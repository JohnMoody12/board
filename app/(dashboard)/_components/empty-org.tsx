import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image src="/tools.svg" alt="Empty" width={240} height={240} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to ShareBoard</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an Organization to get started
      </p>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="mt-5">
              Create Organization
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
