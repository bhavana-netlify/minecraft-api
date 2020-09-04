import data from "data.js";

export default (req, res) => {
  const { defense } = data
  res.statusCode = 200
  res.json(defense)
}
