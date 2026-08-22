import { fetchAllFits } from '@local/features/fits/repositories/fitsRepository';
import { FitsItem } from './FitsItem';
import { Grid } from '@radix-ui/themes';

export async function Fits() {
  const fits = await fetchAllFits();

  return (
    <Grid columns={{ initial: '1', sm: '2' }} gap="6">
      {fits.map((fit) => (
        <FitsItem key={fit.id} fit={fit} />
      ))}
    </Grid>
  );
}
