import db from '@local/libs/db';

export async function fetchUserByMail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      include: {
        password: {
          select: { hash: true },
        },
      },
    });

    return user;
  } catch (error) {
    console.error('Database Error:', error);

    throw new Error(`Failed to fetch the user with email ${email}.`);
  }
}
