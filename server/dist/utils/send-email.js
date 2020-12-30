"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationEmail = void 0;
const tslib_1 = require("tslib");
const nodemailer_1 = tslib_1.__importDefault(require("nodemailer"));
const sendVerificationEmail = (recipient, url) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const testAccount = yield nodemailer_1.default.createTestAccount();
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });
    const info = yield transporter.sendMail({
        from: '"Underground Dance Music" <noreply@udm.online>',
        to: recipient,
        subject: "Confirm email address",
        text: "Hello world?",
        html: `Click to confirm your email address: ${url}`,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
});
exports.sendVerificationEmail = sendVerificationEmail;
//# sourceMappingURL=send-email.js.map