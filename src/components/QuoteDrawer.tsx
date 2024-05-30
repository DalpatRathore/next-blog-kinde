import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { MessageSquareQuote, Minus, Quote, X } from "lucide-react";

const QuoteDrawer = async () => {
  const response = await fetch("https://stoic.tekloon.net/stoic-quote");
  const data = await response.json();
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
        <MessageSquareQuote className="w-6 h-6"></MessageSquareQuote>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl mb-10">
          <DrawerHeader className="space-y-5">
            <Quote></Quote>
            <DrawerTitle className="border-l-4 pl-2 ml-2 leading-8 tracking-widest">
              {data.quote}
            </DrawerTitle>
            <DrawerDescription className="flex items-center justify-end">
              <Minus className="mr-2"></Minus>
              <span className="italic text-lg">{data.author}</span>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="absolute top-0 right-0">
            <DrawerClose>
              <Button variant="outline" size={"icon"}>
                <X></X>
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default QuoteDrawer;
