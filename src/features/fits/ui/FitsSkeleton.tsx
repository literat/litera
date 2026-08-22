import { Grid, Skeleton } from '@radix-ui/themes';

export function FitSkeleton() {
  return <Skeleton height="480px" />;
}

export function FitsSkeleton() {
  return (
    <Grid columns={{ initial: '1', sm: '2' }} gap="6">
      <FitSkeleton />
      <FitSkeleton />
      <FitSkeleton />
      <FitSkeleton />
    </Grid>
  );
}
