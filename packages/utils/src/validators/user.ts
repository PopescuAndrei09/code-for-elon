import { isPossiblePhoneNumber } from "libphonenumber-js/min"
import * as z from "zod"

export const loginSchema = z.object({
  email: z
    .string()
    .email()
    .refine(
      (email) => {
        const sanitizedEmail = email.trim().replace(/\s/g, "").toLowerCase()

        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          sanitizedEmail
        )
      },
      {
        message: "Invalid email format"
      }
    ),
  password: z.string().min(6, { message: "Password must be at least 6 characters" })
})

export const signupSchema = z.object({
  email: z
    .string()
    .email()
    .refine(
      (email) => {
        const sanitizedEmail = email.trim().replace(/\s/g, "").toLowerCase()

        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          sanitizedEmail
        )
      },
      {
        message: "Invalid email format"
      }
    ),
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  phone: z
    .string()
    .min(8, { message: "Phone number must be at least 8 characters" })
    .max(15, { message: "Phone number must not be longer than 15 characters" })
    .refine(
      (phone) => {
        const sanitizedPhone = phone.trim().replace(/\s/g, "").toLowerCase()

        return isPossiblePhoneNumber(sanitizedPhone)
      },
      {
        message: "Invalid phone number format"
      }
    ),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .refine(
      (password) => {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&/.;'",])[A-Za-z\d@$!%*#?&/.;'",]{6,}$/.test(password)
      },
      {
        message: "Password must contain at least one uppercase letter, one number, and one special character."
      }
    )
})

export const forgotPasswordSchema = z.object({
  url: z.string().url(),
  email: z
    .string()
    .email()
    .refine(
      (email) => {
        const sanitizedEmail = email.trim().replace(/\s/g, "").toLowerCase()

        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          sanitizedEmail
        )
      },
      {
        message: "Invalid email format"
      }
    )
})

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
    token: z.string().uuid()
  })
  .refine(
    (data) => {
      return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&/.;'",])[A-Za-z\d@$!%*#?&/.;'",]{6,}$/.test(data.password)
    },
    {
      path: ["password"],
      message: "Password must contain at least one uppercase letter, one number, and one special character."
    }
  )
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match."
  })

export const accountFormSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }).optional(),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }).optional(),
  phone: z
    .string()
    .min(8, { message: "Phone number must be at least 8 characters" })
    .max(15, { message: "Phone number must not be longer than 15 characters" })
    .refine(
      (phone) => {
        const sanitizedPhone = phone.trim().replace(/\s/g, "").toLowerCase()

        return isPossiblePhoneNumber(sanitizedPhone)
      },
      {
        message: "Invalid phone number format"
      }
    )
    .optional(),
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters."
    })
    .max(30, {
      message: "Name must not be longer than 30 characters."
    })
    .optional(),
  country: z
    .string()
    .min(2, {
      message: "Country must be at least 2 characters."
    })
    .optional(),
  address: z
    .string()
    .min(2, {
      message: "Address must be at least 2 characters."
    })
    .optional(),
  state: z
    .string()
    .min(2, {
      message: "State must be at least 2 characters."
    })
    .optional(),
  city: z
    .string()
    .min(2, {
      message: "City must be at least 2 characters."
    })
    .optional(),
  postalCode: z
    .string()
    .min(2, {
      message: "Postal code must be at least 2 characters."
    })
    .optional(),
  birthdate: z
    .date({
      required_error: "A date of birth is required."
    })
    .optional(),
  language: z
    .string({
      required_error: "Please select a language."
    })
    .optional(),
  notificationsAllowed: z
    .enum(["all", "important", "none"], {
      required_error: "You need to select what notifications you want to receive."
    })
    .optional(),
  isMarketingEnabled: z.boolean().default(true).optional(),
  passportOrId: z.string().optional(),
  image: z.string().optional()
})

export const userSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  role: z.enum(["user", "admin", "manager", "editor"]).optional(),
  createdAt: z.string().optional(),
  lastSignIn: z.string().optional(),
  isVip: z.boolean().default(false).optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  isMarketingEnabled: z.boolean().default(true).optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  address: z.string().optional(),
  language: z.string().optional(),
  birthdate: z.date().optional(),
  passportOrId: z.string().optional(),
  image: z.string().optional()
})

export const updateRoleSchema = z.object({
  id: z.string(),
  role: z.enum(["user", "admin", "manager", "editor"])
})
