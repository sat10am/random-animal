import { animals } from "./animal-data";
import { adjective } from "./adjective";
module.exports = (req, res) => {
  const adj = adjective[Math.floor(Math.random() * adjective.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  res.status(200).send(`${adj} ${animal}`);
};
