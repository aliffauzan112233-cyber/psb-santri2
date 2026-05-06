import { db } from "./index.js";
import { users } from "./schema.js";
import bcrypt from "bcryptjs";

const seed = async () => {
  try {
    console.log("Seeding data...");

    // hash password = agar pw tidak terlihat // pw asli
    const hashedPassword = await bcrypt.hash("123456", 10);

    // insert admin / masukan data ke tabel
    await db.insert(users).values({
      name: "Admin",
      email: "admin@mail.com",
      password: hashedPassword,
      role: "admin",
      is_active: true,
    });

    // insert beberapa user
    await db.insert(users).values([
      {
        name: "Ahmad",
        email: "ahmad@mail.com",
        password: hashedPassword,
        role: "user",
        is_active: true,
      },
      {
        name: "Budi",
        email: "budi@mail.com",
        password: hashedPassword,
        role: "user",
        is_active: true,
      },
    ]);

    console.log("Seed selesai");
    process.exit(0);// sukses
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);//error
  }
};

seed();