import { FitSkeleton } from '@local/features/fits/ui';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Fit } from '@local/features/fits/ui/Fit';
import { fetchFitById } from '@local/features/fits/repositories/fitsRepository';
import { Prisma } from '@prisma/client';

type FitPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: FitPageProps): Promise<Metadata> {
  const id = (await params).id;
  const { name, description } = (await fetchFitById(
    id,
  )) as Prisma.FitUncheckedCreateInput;

  return {
    title: name,
    description,
  };
}

export default async function FitPage(props: FitPageProps) {
  const { id } = await props.params;
  const fit = await fetchFitById(id);

  return (
    <main>
      <h1>Fits</h1>
      <Suspense fallback={<FitSkeleton />}>
        <Fit fit={fit} />
      </Suspense>
    </main>
  );
}
