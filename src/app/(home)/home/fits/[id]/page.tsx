import { FitSkeleton } from '@local/features/fits';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Fit } from '@local/features/fits/Fit';
import { fetchFit } from '@local/libs/data';
import { Prisma } from '@prisma/client';

type FitPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: FitPageProps): Promise<Metadata> {
  const id = (await params).id;
  const { name, description } = (await fetchFit(
    id,
  )) as Prisma.FitUncheckedCreateInput;

  return {
    title: name,
    description,
  };
}

export default async function FitPage(props: FitPageProps) {
  const params = await props.params;
  return (
    <main>
      <h1>Fits</h1>
      <Suspense fallback={<FitSkeleton />}>
        {/* @ts-ignore Server Component */}
        <Fit id={params.id} />
      </Suspense>
    </main>
  );
}
