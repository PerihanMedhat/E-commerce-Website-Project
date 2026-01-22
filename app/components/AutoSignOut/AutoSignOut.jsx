'use client';
import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const TIMEOUT_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

export default function AutoSignOut() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) return;

    let timeOutId;

    const resetTimer = () => {
      if (timeOutId) clearTimeout(timeOutId);
      timeOutId = setTimeout(async () => {
        await signOut({ redirect: false });
        router.push('/login');
      }, TIMEOUT_DURATION);
    };

    const events = [
      'mousedown',
      'mousemove',
      'keypress',
      'scroll',
      'touchstart',
      'touchmove'
    ];

    // Start the timer
    resetTimer();

    // Add event listeners
    events.forEach(event => {
      document.addEventListener(event, resetTimer);
    });

    // Cleanup function
    return () => {
      if (timeOutId) clearTimeout(timeOutId);
      events.forEach(event => {
        document.removeEventListener(event, resetTimer);
      });
    };
  }, [session, router]);

  return null; // This component doesn't render anything
}