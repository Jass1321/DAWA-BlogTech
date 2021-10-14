import { app } from "./app";
import { port } from "../config/config";

app.listen(port, () => 
  console.log(`listening on port http://localhost:${port}`)
);

