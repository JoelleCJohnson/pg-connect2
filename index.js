import { closeConnection, openConnection } from "./connectDb.js";
import { addClothes } from "./clothes.js";

await openConnection()
await addClothes()
closeConnection()
