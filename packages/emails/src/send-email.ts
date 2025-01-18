import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER)

const sendEmail = async (options: { from: string; to: string; subject: string; html: string }) => {
  const result = await transporter.sendMail(options)
  const failed = result.rejected.concat(result.pending).filter(Boolean)

  if (failed.length > 0) {
    throw new Error(`Email (${failed.join(", ")}) could not be sent`)
  }

  return result
}

export { sendEmail }
