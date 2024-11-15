import { FitsSkeleton, Fits } from '@local/features/fits/ui';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function FitsPage() {
  return (
    <main>
      <h1>Fits</h1>
      <div
        className="buttonList"
        style={{ display: 'block', marginBottom: '4rem' }}
      >
        <Link
          href={{
            pathname: `/home/fits/create`,
          }}
        >
          Create ➕
        </Link>
      </div>
      <Suspense fallback={<FitsSkeleton />}>
        {/* @ts-ignore Server Component */}
        <Fits />
      </Suspense>
    </main>
  );
}
