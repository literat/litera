import { FamilyMemberCard } from '@local/features/homepage/ui/FamilyMemberCard';
import { Container, Flex, Grid, Link, Text } from '@radix-ui/themes';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homepage',
};

export default function HomepagePage() {
  return (
    <Container size="3" py="8">
      <Flex direction="column" align="center" gap="6">
        <Flex direction="column" align="center" gap="2">
          <Text as="p">Litera.me</Text>
          <Link href="/" target="_blank" rel="noopener noreferrer">
            By Litera family
          </Link>
        </Flex>

        <Grid columns={{ initial: '1', sm: '2' }} gap="4" width="100%">
          <FamilyMemberCard
            link="https://literat.dev/"
            icon="👨"
            name="Tomáš"
            description="Fullstack Engineer, Whitewater kayaker, Scout"
          />
          <FamilyMemberCard
            link="/"
            icon="👩"
            name="Dita"
            description="Architect"
          />
        </Grid>

        <Grid columns={{ initial: '1', sm: '3' }} gap="4" width="100%">
          <FamilyMemberCard link="/" icon="👦" name="Jonáš" description="" />
          <FamilyMemberCard link="/" icon="👧" name="Ida" description="" />
          <FamilyMemberCard link="/" icon="🧒" name="Ela" description="" />
        </Grid>

        <Grid columns="1" gap="4" width="100%">
          <FamilyMemberCard
            link="/"
            icon="🐶"
            name="Charlie"
            description="Czech Spotted Dog"
          />
        </Grid>

        <Grid columns="1" gap="4" width="100%">
          <FamilyMemberCard
            link="/home"
            icon="🏠"
            name="Home"
            description="Fits, Energy, Weather, etc ..."
          />
        </Grid>
      </Flex>
    </Container>
  );
}
