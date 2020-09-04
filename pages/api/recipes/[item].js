import data from "../../../data.js";

export default (req, res) => {
  const {
    query: { item },
  } = req

  const { recipes } = data
  const recipe = recipes[item]

  if (!recipe) {
    res.statusCode = 400
    res.send("error")
  } else {
    res.statusCode = 200
    res.json({ recipe })
  }
}
