import { PrismaClient } from "@prisma/client";
import { products } from "../src/data";

const prisma = new PrismaClient();

const categories = {
  1: "fruits",
  2: "vegetables",
  3: "juices",
  4: "bread",
  5: "cheese",
  6: "smoothies",
};

async function main() {
  for (const [_, value] of Object.entries(categories)) {
    await prisma.category.create({
      data: {
        name: value,
      },
    });
  }
}

const mapCategories = new Map<string, number>();

for (const [key, value] of Object.entries(categories)) {
  mapCategories.set(value, parseInt(key));
}

main()
  .then(async () => {
    for (const item of products) {
      console.log("Creating product", item.name);
      await prisma.product.create({
        data: {
          name: item.name,
          description: item.desc || "",
          price: parseInt(item.price.replace("Ksh.", "")),
          categoryId: mapCategories.get(item.category) || 1,
          imageUrl: item.img,
          stockQuantity: item.quantity,
        },
      });
    }
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
