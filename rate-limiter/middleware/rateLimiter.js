const users = {};

const rateLimiter = (req, res, next) => {
  const ip = req.ip; // user ki identity

  const currentTime = Date.now();

  // agar user pehle exist nahi karta
  if (!users[ip]) {
    users[ip] = {
      count: 1,
      startTime: currentTime,
    };

    return next();
  }

  const user = users[ip];

  // 1 minute complete ho gaya
  if (currentTime - user.startTime > 60 * 1000) {
    user.count = 1;
    user.startTime = currentTime;

    return next();
  }

  // limit exceed
  if (user.count >= 5) {
    return res.status(429).json({
      message: "Too many requests. Try again later.",
    });
  }

  // request count increase
  user.count++;

  next();
};

module.exports = rateLimiter;

