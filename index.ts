import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // prisma queries
  //   CREATE user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Esha",
  //       email: "esh1ABC@gmail.com",
  //     },
  //   });
  //   console.log(user, "\n");
  //// GET all users
  //   const users = await prisma.user.findMany({
  //     include: {
  //       articles: true,
  //     },
  //   });
  //   console.log(users, "\n");
  // CREATE article and ASSOCIATE with user
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "Esha2 first article",
  //       body: "lorem",
  //       author: {
  //         connect: {
  //           id: "6652e85e18031836c44a9dcf",
  //         },
  //       },
  //     },
  //   });
  // GET ALL articles
  //   const articles = await prisma.article.findMany();
  //   console.log(articles);
  //// CREATE user AND article AND ASSSOCIATE them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Grace",
  //       email: "grace123@gmail.com",
  //       articles: {
  //         create: {
  //           title: "grace ka article",
  //           body: "body de grace article",
  //         },
  //       },
  //     },
  //   });
  // LOOP over author 1's articles
  //   users.forEach((user) => {
  //     console.log(`User: ${user.name}, \nEmail: ${user.email}`);
  //     console.log(`\nArticles:`);
  //     user.articles.forEach((article) => {
  //       console.log(`\n\t- Title: ${article.title}, \n\t- Body: ${article.body}`);
  //     });
  //     console.log("\n");
  //   });
  //   UPDATE
  //   const user = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "Esha ABC",
  //     },
  //   });
  //   console.log(user);
  //   DELETE remove ARTICLE
  //   const article = await prisma.article.delete({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   console.log(article);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
