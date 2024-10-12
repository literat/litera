import { FitsSkeleton, Fits } from '@local/features/fits';
import { Suspense } from 'react';

export default async function FitsPage() {
  return (
    <main>
      <h1>Fits</h1>
      <Suspense fallback={<FitsSkeleton />}>
        {/* @ts-ignore Server Component */}
        <Fits />
      </Suspense>
    </main>
  );
}
