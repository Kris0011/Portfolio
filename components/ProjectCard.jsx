"use client";
import React from 'react'
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";

export default function ProjectCard() {
    return (
        <>
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 w-m-[610px] m-10"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt="Album cover"
                                className="object-cover"
                                height={200}
                                shadow="md"
                                src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                                width="100%"
                            />
                        </div>
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias magni doloremque, unde similique amet assumenda quam possimus dignissimos illo culpa.
                        </div>
                    </div>
                </CardBody>

            </Card>
        </>
    )
}
