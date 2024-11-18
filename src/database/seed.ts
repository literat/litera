import { faker } from '@faker-js/faker';
import db from '@local/database/client';
import bcrypt from 'bcrypt';
import { users } from './seeds/users';

export function createPassword(password: string = faker.internet.password()) {
  return {
    hash: bcrypt.hashSync(password, 10),
  };
}

async function seedUsers() {
  try {
    console.time(`👤 Created users...`);

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        return db.user.create({
          select: { id: true },
          data: {
            ...user,
            password: { create: createPassword(user.password) },
          },
        });
      }),
    );

    console.timeEnd(`👤 Created users...`);

    return {
      user: insertedUsers,
    };
  } catch (error) {
    console.error('Error creating a user:', error);
    throw error;
  }
}

async function seed() {
  console.log('🌱 Seeding...');
  console.time(`🌱 Database has been seeded`);

  await seedUsers();

  console.timeEnd(`🌱 Database has been seeded`);
}

seed()
  .catch((error) => {
    console.error(
      '💥 An error occurred while attempting to seed the database:',
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
