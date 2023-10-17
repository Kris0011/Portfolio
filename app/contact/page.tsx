"use client";
import { title } from "@/components/primitives";
import { Input, Textarea, Button } from "@nextui-org/react";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Contact Me</h1>
      <div className="mt-10 space-x-2">
        <div className="space-y-2 mt-1 ">
          <Input size="md" type="text" label="Name" variant="underlined" />
          <Input size="md" type="email" label="Email" variant="underlined" />
          <Input size="md" type="text" label="Subject" variant="underlined" />
          <Textarea
            key="flat"
            variant="flat"
            minRows={5}
            labelPlacement="outside"
            placeholder="Enter your message"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0 "
          />

          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
