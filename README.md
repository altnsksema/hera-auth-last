# hera-auth-last

**Basic Authentication with Node.js**

The goal of project is a provide to create template about authencation in Node.js as package, to user easily.

***User***

***Info: There are four properties: These are variables of 'name', 'surname', 'email' and 'password'.***

name: {
type: String,
required: true,
unique: true
}

surname: {
type: String,
required: true,
unique: true,
}

email: {
type: String,
unique: true,
required: true,
lowercase: true,
validate: isEmail
}

password: {
type: String,
required: true,
validator: isPassword
}

**Login**

***Info: User can be enter to the system as use with email and password.***

GET: auth/login

email: string@gmail.com
password: var

**Register**

   *** Info: User can be enrol to the system as use with email and password.***

    GET: auth/register

name: string
surname: string
email: string@gmail.com
password: var

**User Get By Id**

***Info: Finding user according to Id***

GET: auth/oneUser/:id

**User Get All Users**

***Info: Creating list of users ***

GET: auth/allUsers
