# hera-auth-last
Basic Authentication with Node.js

The goal of project is a provide to create template about authencation in Node.js as package, to user easily. 

Endpoints:

---> Login

''' const login = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  const user = await User.findOne({
    email
  })
  console.log(user)

  if (!user) {
    return res.status(401).json({
      message: 'Email ile bir kullanici bulunamadi.'
    })
  }

  const passwordCorrect = await bcrypt.compare(password, user.password);
  console.log(passwordCorrect)
  const token = jwt.sign({
    user
  }, process.env.SECRET_KEY);

  if (!passwordCorrect) {
    return res.status(401).json({
      message: 'Sifre yanlis'
    })
  }

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: req.true,
    maxAge: 1000 * 60 * 60 * 24,
  });

  res.send({
    status: 'success',
    message: 'Login successfull!'
  });
}; '''

---> Register





---> Auth





