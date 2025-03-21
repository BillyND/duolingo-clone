import { Button } from "@/components/ui/button";
import React from "react";

function ButtonsPage() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant={"primaryOutline"}>Primary Outline</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"secondaryOutline"}>Secondary Outline</Button>
      <Button variant={"danger"}>Danger</Button>
      <Button variant={"dangerOutline"}>Danger Outline</Button>
      <Button variant={"super"}>Super</Button>
      <Button variant={"superOutline"}>Super Outline</Button>
    </div>
  );
}

export default ButtonsPage;
