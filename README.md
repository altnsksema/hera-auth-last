# hera-auth-last
**Basic Authentication with Node.js**

The goal of project is a provide to create template about authencation in Node.js as package, to user easily. 

*Endpoints:*

**Login**
```
const login = async (req, res) => {
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
      message: 'Not found user in email.'
    })
  }

  const passwordCorrect = await bcrypt.compare(password, user.password);
  console.log(passwordCorrect)
  const token = jwt.sign({
    user
  }, process.env.SECRET_KEY);

  if (!passwordCorrect) {
    return res.status(401).json({
      message: 'Incorrect password.'
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
};

function test(req, res) {
  res.send({
    status: 400
  })
}
```


**Register**
```
const register = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    const newUser = new User({
      email,
      password
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed. Not saved."
    });
  };
  console.log("Register");

  console.log(req.body)
};
```




**Auth**
```

const auth = (req, res, next) => {
    try {
    const token = req.cookies.jwt

    console.log(token);
    if (!token) {
        return res.status(401).json({
            message: 'Token yok'
        })
    }


    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({
            err,
            message: 'Invalid token'
        })

        req.user = decoded;
        next();
    });
    } catch {
      return next(error);
}
}
```




