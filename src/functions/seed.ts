import { connectDatabase } from "../connectDatabase";
import { User, UserModel } from "../modules/UserModel";

export const seedUser = async (quantity: number) => {
    await connectDatabase();

    const users: User[] = [];

    for await(let i of Array.from(Array(quantity).keys())) {
        users.push({
            first_name: `user#${i}`,
            last_name: `last_name#${i}`,
            profession: i % 2 ? 'dev' : 'uber',
            email: `user#${i}@gmail.com`,
            sex: i % 2 ? 'male' : 'female'
        })
    }

    await UserModel.insertMany(users);
      
    console.log(`${quantity} users inserted with`)
}

(async () => {
    await seedUser(10000);

    process.exit(0);
  })();
  