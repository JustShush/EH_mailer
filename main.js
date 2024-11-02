const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const { EMAIL, PASS } = require('./config.json');

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: EMAIL.toString(),
		pass: PASS.toString(),
	},
});

const htmlContent = fs.readFileSync(path.join(__dirname, "test.html"), "utf8");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
	// send mail with defined transport object
	const info = await transporter.sendMail({
		from: '"Maddison Foo Koch 👻" <marquesdinis.p@gmail.com>', // sender address
		to: "marquesdinis.p@gmail.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: `${htmlContent}`, // html body
	});

	console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

// https://www.mailinator.com/ para testar os emails
// para ver as apps