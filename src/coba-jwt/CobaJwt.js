import jwt from 'jsonwebtoken'

const token = jwt.sign({ id: "habil" }, "mysecretKey", { expiresIn: "1000" })

console.log(token)
let a = 0
for (let i = 0; i < 10000000000; i++) a += 1
jwt.verify(token, "mysecretKey", function (err, decode) {
    if (err) console.log('token salah')
    console.log(decode)
})
