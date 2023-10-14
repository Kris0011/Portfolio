import React from 'react';

export default function Skeleton() {
    return (
        <div>
            <div role="status" className="w-[500px] p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                <div className="flex gap-5 items-center justify-between mb-4">
                    <div className="flex items-center gap-5">
                        <div className="h-14 w-14 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                        <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-2"></div>
                            <div className="w-28 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5"></div>
                        </div>
                    </div>
                  
                </div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-52 mb-2.5"></div>
                <br/>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 w-52 rounded-full dark:bg-gray-700"></div>
                
                <br/>

                <div className="flex items-center space-x-3 mt-4">
                   
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 "></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 "></div>
                        
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
