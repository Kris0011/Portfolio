"use client";
import { useState } from "react";
import { title } from "@/components/primitives";
import { Input, Textarea, Button } from "@nextui-org/react";
import axios from "axios";

export default function PricingPage() {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [subject , setSubject] = useState('');
  const [message , setMessage] = useState('');
  const [loader , setLoader] = useState(false);

  const postContactData = async () => {
    const data = {name,email,subject,message};
    console.log(data);
    try {
      setLoader(true);
      await axios.post('https://backend-portfoli.onrender.com/api/contact', data);
      setLoader(false);
    } catch (error) {
      console.error('Error saving data.', error);
    }
  };

  return (
    <div>
      <h1 className={title()}>Contact Me</h1>
      <div className="mt-10 space-x-2">
        <div className="space-y-2 mt-1 ">
          <Input size="md" type="text" label="Name" variant="underlined" value={name} onChange={(e)=> setName(e.target.value)}/>
          <Input size="md" type="email" label="Email" variant="underlined" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <Input size="md" type="text" label="Subject" variant="underlined" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
          <Textarea
            key="flat"
            variant="flat"
            minRows={5}
            labelPlacement="outside"
            placeholder="Enter your message"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0 "
            value={message} onChange={(e)=> setMessage(e.target.value)} 
          />

          <Button
            isLoading = {loader}
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onClick={postContactData}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
