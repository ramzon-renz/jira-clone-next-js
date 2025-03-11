import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
   <div className="flex gap-4"> 
    <Button size='sm'>
      Primary
    </Button>
    <Button variant="destructive">
      destrructive
    </Button>
    <Button variant='ghost'>
      Ghost
    </Button>
    <Button variant='muted'>
      muted
    </Button>
    <Button variant='teritary'>
     Teritary
    </Button>
    <Input/>
   </div>
  );
}
