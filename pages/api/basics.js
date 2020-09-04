import data from "data.js";

export default (req, res) => {
  const { basics } = data
  res.statusCode = 200
  res.json(basics)
}
