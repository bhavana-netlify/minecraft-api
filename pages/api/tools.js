import data from "data.js";

export default (req, res) => {
  const { tools } = data
  res.statusCode = 200
  res.json(tools)
}
