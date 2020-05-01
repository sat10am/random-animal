import { animals } from "./animal-data";
module.exports = (req, res) => {
  const animal = animals[Math.floor(Math.random() * animals.length)];
  res.status(200).send(animal);
};
