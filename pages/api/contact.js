import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://kamlesh_1997:kamlesh_1997@shah-collections.1k1pn.mongodb.net/my-site?retryWrites=true&w=majority"
  );

  return client;
}

async function Handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing Message failed" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", data: newMessage });
  }
}

export default Handler;
