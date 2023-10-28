import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function AboutCard() {
  return (
    <>
      <Card className="max-w-[600px] dark">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-3xl">About me</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="mr-48">
          <p>Name: <span className="text-gray-400 ml-4">Kris Hiteshkumar Patel</span></p>
          <p>Date of birth: <span className="text-gray-400 ml-4">August 29, 2005</span></p>
          <p>Address: <span className="text-gray-400 ml-4">Ahmedabad , Gujarat , India</span></p>
          <p>Email: <span className="text-gray-400 ml-4">krishp759@gmail.com</span></p>
          <p>Phone: <span className="text-gray-400 ml-4">+91-6353879412</span></p>
        </CardBody>

      </Card>


      {/* <a href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-[300px] max-w-[600px]">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About me</h5>
        <p>Name: <span className="text-gray-400 ml-2">Kris Hiteshkumar Patel</span></p>
        <p>Date of birth: <span className="text-gray-400 ml-2">August 29, 2005</span></p>
        <p>Address: <span className="text-gray-400 ml-2">Ahmedabad , Gujarat , India</span></p>
        <p>Email: <span className="text-gray-400 ml-2">krishp759@gmail.com</span></p>
        <p>Phone: <span className="text-gray-400 ml-2">+91-6353879412</span></p>
      </a> */}
    </>
  );
}
