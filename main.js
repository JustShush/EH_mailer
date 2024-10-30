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

// async..await is not allowed in global scope, must use a wrapper
async function main() {
	// send mail with defined transport object
	const info = await transporter.sendMail({
		from: '"Maddison Foo Koch 👻" <marquesdinis.p@gmail.com>', // sender address
		to: "yesyes@mailinator.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: '<h1> test!!!</h1>', // html body
	});

	console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

// https://www.mailinator.com/ para testar os emails
// para ver as apps