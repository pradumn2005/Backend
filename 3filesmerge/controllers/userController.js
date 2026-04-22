const users = require('../users.json');

exports.getAllUsers = (req, res) => {
  return res.json(users);
};

exports.getHTMLUsers = (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.name}</li>`).join('')}
    </ul>
  `;
  res.send(html);
};

exports.getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json(user);
};

exports.createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser = {
    id: users.length + 1,
    name: name
  };

  users.push(newUser);

  return res.status(201).json({
    message: "User added successfully",
    user: newUser
  });
};

exports.deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1);

  return res.json({
    message: "User deleted successfully",
    user: deletedUser[0]
  });
};

exports.updateUser = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name } = req.body;

  if (name) {
    user.name = name;
  }

  return res.json({
    message: "User updated successfully",
    user: user
  });
};