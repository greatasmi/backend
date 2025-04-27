import jwt from 'jsonwebtoken';

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // 1. Find user from DB (pretend you found user)
  const user = { _id: 'abc123', email: 'test@example.com' };

  // 2. Generate JWT Token
  const accessToken = jwt.sign(
    { id: user._id },              // payload
    process.env.JWT_SECRET,        // secret key from .env
    { expiresIn: '15m' }            // expires in 15 minutes
  );

  res.json({ accessToken });
};
