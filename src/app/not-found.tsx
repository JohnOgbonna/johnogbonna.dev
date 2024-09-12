'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Custom404() {
    const [countdown, setCountdown] = useState(5);
    const router = useRouter();

    useEffect(() => {
        // Countdown timer
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        // Redirect to homepage after 3 seconds
        if (countdown === 0) {
            router.push('/');
        }

        // Cleanup the timer
        return () => clearInterval(timer);
    }, [countdown, router]);

    return (
        <div
            className={`flex flex-col items-center justify-center min-h-[200px] h-[100vh]`}
        >
            <h1 className={`text-[1.5rem]`}>404 Page Not Found</h1>
            <p className={`text-[1.2rem]`}>{`Whoops! this page doesn't exist! Don't worry! We're Redirecting you in ${countdown} second${countdown === 1 ? '' : 's'}...`}</p>
        </div>
    );
}
