'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SessionCheck({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>; // Show a loading state while session is being fetched
  }

  if (status === 'unauthenticated') {
    return null; // Return null to avoid rendering the children before redirect
  }

  return children; // Render children when session is authenticated
}

