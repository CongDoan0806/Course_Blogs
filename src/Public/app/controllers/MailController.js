const nodemailer = require("nodemailer");
class MailController {
    // GET, Mail
    
    async index(req, res){
        const { email } = req.body;
        
            if (!email) {
                return res.status(400).json({ message: "Email is required" });
            }
        
            try {
                // Tạo transporter
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: "congdoan0806@gmail.com",
                        pass: "mjtr obtf igwy eqtn", // Nếu lỗi, kiểm tra App Password
                    },
                });
        
                // Gửi email
                let info = await transporter.sendMail({
                    from: "congdoan0806@gmail.com",
                    to: email,
                    subject: "Hello ✔",
                    text: "Hello world?",
                    html: "<b>Hello world?</b>",
                });
        
                console.log("Message sent: %s", info.messageId);
                return res.json({ message: "Email sent successfully!" });
        
            } catch (err) {
                console.error("Error sending email:", err);
                return res.status(500).json({ message: "Error sending email", error: err });
            }
    }
    
}

module.exports = new MailController; // exports cais gif thif khi require thì nhận được cái đấy