const Prisma = require('@prisma/client');
const prisma = new Prisma.PrismaClient();

async function main() {
  const deletePosts = prisma.post.deleteMany({});
  const deleteUsers = prisma.user.deleteMany({});

  await prisma.$transaction([deletePosts, deleteUsers]);
  return null;
}

if (require.main === module) {
  main();
}

module.exports = async () =>
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
