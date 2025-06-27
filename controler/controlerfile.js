const homepage = (req, res) => {
const data = [
    { name : "Michael Choi",
      createdAt : "15-01-2013",
      message : "This is my message    This is my message This is my message This is my messageThis is my message"
    },
    { name : "Michael Choi",
      createdAt : "23-01-2013",
      message : "This is my message    This is my message This is my message This is my messageThis is my message"
    },
    {
    name: "Cory Whiteland",
    createdAt: "15-01-2013",
    message: "This is my message. This is my message. This is my message."
  },
    {
    name: "Cory Whiteland",
    createdAt: "1-01-2013",
    message: "This is my message. This is my message. This is my message."
  }
]
  res.render("../view/home.ejs",{ data })// Render the homepage view

}
module.exports = {
  homepage};