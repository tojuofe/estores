const jwt = require("jsonwebtoken");

exports.auth = function (req, res, next) {
  // Get Token from Header
  const token = req.header("Authorization");
  // req.headers.authorization.startsWith('Bearer')

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization Denied" });
  }

  try {
    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

exports.authorize = (...role) => {
  return (req, res, next) => {
    const token = req.header("Authorization");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    if (!role.includes(req.user.role)) {
      res.status(403).json({
        msg: `User role ${req.user.role} is not authorized to access this route`,
      });
    }
    next();
  };
};
