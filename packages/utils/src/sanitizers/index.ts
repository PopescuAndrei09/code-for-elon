import { isPossiblePhoneNumber } from "libphonenumber-js/min"

export const sanitizeEmail = (email: string): string => {
  // Trim white spaces and convert to lowercase
  const sanitizedEmail = email.trim().replace(/\s/g, "").toLowerCase()

  // Validate email format
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

  if (!emailRegex.test(sanitizedEmail)) throw new Error("Invalid email format")

  return sanitizedEmail
}

export const sanitizePhone = (phone: string): string => {
  // Trim white spaces and convert to lowercase
  const sanitizedPhone = phone.trim().replace(/\s/g, "").toLowerCase()

  if (!isPossiblePhoneNumber(sanitizedPhone)) throw new Error("Invalid phone number format")

  return sanitizedPhone
}
