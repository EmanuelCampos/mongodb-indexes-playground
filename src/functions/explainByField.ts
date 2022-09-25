import { connectDatabase } from "../connectDatabase"
import { UserModel } from "../modules/UserModel";

export const explainByField = async (field?: string, value?: string) => {
    await connectDatabase();

    const dataToInspect = {}

    if(field) {
        dataToInspect[field] = value;
    }

    const explain = await UserModel.find({
        ...dataToInspect
    }).explain('executionStats');

    console.log({ explain })
}

(async () => {
    await explainByField('email', 'user#1250@gmail.com');

    process.exit(0);
  })();
  