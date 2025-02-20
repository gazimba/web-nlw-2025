import { ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { Input } from "@/components/input";

export default function Home() {
  return (
    <main>
      
        <Button>
          <span>Click me</span>
          <ArrowRight size={24} />
        </Button>

        <IconButton>
          <Copy size={24} />
        </IconButton>

        <Input
          placeholder="Type something..."
        />

    </main>
  );
}
