const jwt = require("jsonwebtoken");

async function authMiddleware(request, reply) {
  try {
    console.log("Authorization:", request.headers.authorization);
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return reply.code(401).send({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    console.log("Token:", token);
console.log("Secret:", process.env.JWT_SECRET);

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    request.user = decoded;
  } catch (err) {
    return reply.code(401).send({
      success: false,
      message: "Invalid Token",
    });
  }
}

module.exports = authMiddleware;