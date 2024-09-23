const getDashboard = async (req, res) => {
  try {
    const { username } = req.user;
    
    return res.status(200).json({
      message: `Welcome to yor dashboard, ${username}!`,
      username: username,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to load dashboard', error });
  }
};

module.exports = { getDashboard };
