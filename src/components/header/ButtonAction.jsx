import React from 'react';
import Link from 'next/link';

const ButtonAction = () => {
    return (
        <div>
            
                    <Link href="/sign-in">
                        <button className="rounded-md mx-2 border border-red-500 px-4 py-2 text-black hover:bg-red-600">
                            সাইন ইন
                        </button>
                    </Link>
                    <Link href="/sign-up">
                        <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                            সাইন আপ
                        </button>
                    </Link>
               
        </div>
    );
};

export default ButtonAction;