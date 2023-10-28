import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";


export default function College() {
    return (
        <div>
            
            <Card className="max-w-[600px] dark">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-3xl">Education</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody className="mr-48">
                    <h2 className='text-yellow-500 text-3xl font-bold'>
                        2022-2026</h2>
                    <h2 className='font-semibold text-2xl'>
                        Bachelor's Degree of Technolgy
                    </h2>
                    <h2 className='font-semibold text-xl mb-4'>
                        DHARMSINH DESAI UNIVERSITY
                    </h2>
                    <p>Dharmsinh Desai University also Known as DDU (DDIT) is located in Nadiad , Gujarat. University is one of the top Universities of State. I am doing Computer engineering currently which will be completed in 2026.</p>
                </CardBody>

            </Card>

            {/* <a href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-w-[600px]max-w-[600px]max-w-[600px]">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">Education</h5>
                <h2 className='text-yellow-500 text-3xl font-bold'>
                    2022-2026</h2>
                <h2 className='font-semibold text-2xl'>
                    Bachelor's Degree of Technolgy
                </h2>
                <h2 className='font-semibold text-xl mb-4'>
                    DHARMSINH DESAI UNIVERSITY
                </h2>
                <p>Dharmsinh Desai University also Known as DDU (DDIT) is located in Nadiad , Gujarat. University is one of the top Universities of State. I am doing Computer engineering currently which will be completed in 2026.</p>
            </a> */}


        </div>
    )
}
