const transporter = require("./confiq/mail");

const sendMail = async ({
	from,
	to,
	subject,
	text,
	html,

}) => {
	await transporter.sendMail({
		from,
		to,
		subject,
		text,
		html,

	});
};


const welcomeMail = async ({ from, to, user }) => {
	await sendMail({
		from,
		to,
		subject: `Welcome to Gearbest ${user.name}`,
		text: `Hi ${user.name}, Welcome to Gearbest  hope You enjoy your experience puchasing from us`,
	});
};

module.exports = { sendMail, welcomeMail };