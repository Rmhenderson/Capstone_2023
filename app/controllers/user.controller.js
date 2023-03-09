exports.allAccess = (req, res) => {
  res.status(200).send("Public Content...");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.rootBoard = (req, res) => {
  res.status(200).send("Root Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
