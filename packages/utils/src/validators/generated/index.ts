import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AccountScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','type','provider','providerAccountId','refresh_token','access_token','expires_at','token_type','scope','id_token','session_state','userId']);

export const SessionScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','sessionToken','expires','userId']);

export const UserScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','lastSignIn','email','phone','name','firstName','lastName','emailVerified','email_verified','phoneVerified','phone_verified','image','hashedPassword','country','state','city','postalCode','address','language','birthdate','passportOrId','isMarketingEnabled','isVip','role','notificationsAllowed']);

export const VerificationTokenScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','identifier','token','expires']);

export const ResetPasswordTokenScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','expiresAt','used','userId']);

export const GameScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','apiId','name','description','thumbnail','images','gameUrl','gameDemoUrl','liveGameUrl','gameRequirementId']);

export const GameRequirementScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','title','reels','rows','paylines','rtp','hitFreq','freeSpinsFreq','maxWin','maxWinProbability','volatility','minMaxBet','releaseDate','features','provider','theme']);

export const AdvertScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','image','href','title','description','promoCode','isEnabled','from','to','rate','collapsed','advertSpacesId']);

export const ReelsScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','type']);

export const VolatilityScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','type']);

export const ThemeScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','type']);

export const ProvidersScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','type']);

export const FeaturesScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','type']);

export const WagerScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','type']);

export const BonusTypeScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','type']);

export const CasinoTypeScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','type']);

export const PaymentMethodScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','type']);

export const CasinoScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','image','href','title','description','promoCode','paymentMethod','wager','bonusType','casinoType']);

export const AdvertSpaceScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','secondary','page']);

export const NotificationScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','title','message','href','type','read','userId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const CasinosTypeSchema = z.enum(['slot','fishing','shooting']);

export type CasinosTypeType = `${z.infer<typeof CasinosTypeSchema>}`

export const GameWagerSchema = z.enum(['rulaj_3x3','rulaj_6x6']);

export type GameWagerType = `${z.infer<typeof GameWagerSchema>}`

export const PromoCodeSchema = z.enum(['fara_cod_promo','x_50_sport']);

export type PromoCodeType = `${z.infer<typeof PromoCodeSchema>}`

export const PaySchema = z.enum(['cash','crypto','card']);

export type PayType = `${z.infer<typeof PaySchema>}`

export const BonusTypesSchema = z.enum(['bonus_fara_depunere','bonus_cu_depunere','bonus_cazino','bonus_sport']);

export type BonusTypesType = `${z.infer<typeof BonusTypesSchema>}`

export const RoleSchema = z.enum(['admin','manager','editor','user']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export const StatusSchema = z.enum(['pending','approved','rejected','completed']);

export type StatusType = `${z.infer<typeof StatusSchema>}`

export const NotificationTypeSchema = z.enum(['bonus','info','success','warning','error']);

export type NotificationTypeType = `${z.infer<typeof NotificationTypeSchema>}`

export const NotificationsAllowedSchema = z.enum(['all','important','none']);

export type NotificationsAllowedType = `${z.infer<typeof NotificationsAllowedSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullable(),
  access_token: z.string().nullable(),
  expires_at: z.number().int().nullable(),
  token_type: z.string().nullable(),
  scope: z.string().nullable(),
  id_token: z.string().nullable(),
  session_state: z.string().nullable(),
  userId: z.string(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  userId: z.string(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  notificationsAllowed: NotificationsAllowedSchema,
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  lastSignIn: z.coerce.date().nullable(),
  email: z.string(),
  phone: z.string().nullable(),
  name: z.string().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  emailVerified: z.coerce.date().nullable(),
  email_verified: z.boolean().nullable(),
  phoneVerified: z.coerce.date().nullable(),
  phone_verified: z.boolean().nullable(),
  image: z.string().nullable(),
  hashedPassword: z.string().nullable(),
  country: z.string().nullable(),
  state: z.string().nullable(),
  city: z.string().nullable(),
  postalCode: z.string().nullable(),
  address: z.string().nullable(),
  language: z.string().nullable(),
  birthdate: z.coerce.date().nullable(),
  passportOrId: z.string().nullable(),
  isMarketingEnabled: z.boolean().nullable(),
  isVip: z.boolean().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
})

export type VerificationToken = z.infer<typeof VerificationTokenSchema>

/////////////////////////////////////////
// RESET PASSWORD TOKEN SCHEMA
/////////////////////////////////////////

export const ResetPasswordTokenSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  expiresAt: z.coerce.date(),
  used: z.boolean(),
  userId: z.string(),
})

export type ResetPasswordToken = z.infer<typeof ResetPasswordTokenSchema>

/////////////////////////////////////////
// GAME SCHEMA
/////////////////////////////////////////

export const GameSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  apiId: z.number().int(),
  name: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  images: z.string().array(),
  gameUrl: z.string(),
  gameDemoUrl: z.string(),
  liveGameUrl: z.string(),
  gameRequirementId: z.string().nullable(),
})

export type Game = z.infer<typeof GameSchema>

/////////////////////////////////////////
// GAME REQUIREMENT SCHEMA
/////////////////////////////////////////

export const GameRequirementSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  title: z.string().nullable(),
  reels: z.string(),
  rows: z.string(),
  paylines: z.string(),
  rtp: z.string(),
  hitFreq: z.string(),
  freeSpinsFreq: z.string(),
  maxWin: z.string(),
  maxWinProbability: z.string(),
  volatility: z.string(),
  minMaxBet: z.string(),
  releaseDate: z.coerce.date(),
  features: z.string().array(),
  provider: z.string(),
  theme: z.string(),
})

export type GameRequirement = z.infer<typeof GameRequirementSchema>

/////////////////////////////////////////
// ADVERT SCHEMA
/////////////////////////////////////////

export const AdvertSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  image: z.string().nullable(),
  href: z.string(),
  title: z.string().nullable(),
  description: z.string().nullable(),
  promoCode: z.string().nullable(),
  isEnabled: z.boolean(),
  from: z.coerce.date().nullable(),
  to: z.coerce.date().nullable(),
  rate: z.string().nullable(),
  collapsed: z.boolean(),
  advertSpacesId: z.string().nullable(),
})

export type Advert = z.infer<typeof AdvertSchema>

/////////////////////////////////////////
// REELS SCHEMA
/////////////////////////////////////////

export const ReelsSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  type: z.string(),
})

export type Reels = z.infer<typeof ReelsSchema>

/////////////////////////////////////////
// VOLATILITY SCHEMA
/////////////////////////////////////////

export const VolatilitySchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  type: z.string(),
})

export type Volatility = z.infer<typeof VolatilitySchema>

/////////////////////////////////////////
// THEME SCHEMA
/////////////////////////////////////////

export const ThemeSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  type: z.string(),
})

export type Theme = z.infer<typeof ThemeSchema>

/////////////////////////////////////////
// PROVIDERS SCHEMA
/////////////////////////////////////////

export const ProvidersSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  type: z.string(),
})

export type Providers = z.infer<typeof ProvidersSchema>

/////////////////////////////////////////
// FEATURES SCHEMA
/////////////////////////////////////////

export const FeaturesSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  type: z.string(),
})

export type Features = z.infer<typeof FeaturesSchema>

/////////////////////////////////////////
// WAGER SCHEMA
/////////////////////////////////////////

/**
 * / Casino filters /////
 */
export const WagerSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  type: z.string(),
})

export type Wager = z.infer<typeof WagerSchema>

/////////////////////////////////////////
// BONUS TYPE SCHEMA
/////////////////////////////////////////

export const BonusTypeSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  type: z.string(),
})

export type BonusType = z.infer<typeof BonusTypeSchema>

/////////////////////////////////////////
// CASINO TYPE SCHEMA
/////////////////////////////////////////

export const CasinoTypeSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  type: z.string(),
})

export type CasinoType = z.infer<typeof CasinoTypeSchema>

/////////////////////////////////////////
// PAYMENT METHOD SCHEMA
/////////////////////////////////////////

export const PaymentMethodSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  type: z.string(),
})

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>

/////////////////////////////////////////
// CASINO SCHEMA
/////////////////////////////////////////

export const CasinoSchema = z.object({
  promoCode: PromoCodeSchema,
  paymentMethod: PaySchema,
  wager: GameWagerSchema,
  bonusType: BonusTypesSchema,
  casinoType: CasinosTypeSchema,
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  image: z.string().nullable(),
  href: z.string(),
  title: z.string().nullable(),
  description: z.string().nullable(),
})

export type Casino = z.infer<typeof CasinoSchema>

/////////////////////////////////////////
// ADVERT SPACE SCHEMA
/////////////////////////////////////////

/**
 * / Casino filters ^^^^ /////
 */
export const AdvertSpaceSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  secondary: z.boolean(),
  page: z.string().array(),
})

export type AdvertSpace = z.infer<typeof AdvertSpaceSchema>

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////

export const NotificationSchema = z.object({
  type: NotificationTypeSchema,
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().nullable(),
  title: z.string(),
  message: z.string(),
  href: z.string().nullable(),
  read: z.boolean(),
  userId: z.string(),
})

export type Notification = z.infer<typeof NotificationSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  access_token: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  token_type: z.boolean().optional(),
  scope: z.boolean().optional(),
  id_token: z.boolean().optional(),
  session_state: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  expires: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  notifications: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  resetTokens: z.union([z.boolean(),z.lazy(() => ResetPasswordTokenFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  notifications: z.boolean().optional(),
  resetTokens: z.boolean().optional(),
  sessions: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lastSignIn: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  name: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  email_verified: z.boolean().optional(),
  phoneVerified: z.boolean().optional(),
  phone_verified: z.boolean().optional(),
  image: z.boolean().optional(),
  hashedPassword: z.boolean().optional(),
  country: z.boolean().optional(),
  state: z.boolean().optional(),
  city: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  address: z.boolean().optional(),
  language: z.boolean().optional(),
  birthdate: z.boolean().optional(),
  passportOrId: z.boolean().optional(),
  isMarketingEnabled: z.boolean().optional(),
  isVip: z.boolean().optional(),
  role: z.boolean().optional(),
  notificationsAllowed: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  notifications: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  resetTokens: z.union([z.boolean(),z.lazy(() => ResetPasswordTokenFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

// RESET PASSWORD TOKEN
//------------------------------------------------------

export const ResetPasswordTokenIncludeSchema: z.ZodType<Prisma.ResetPasswordTokenInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const ResetPasswordTokenArgsSchema: z.ZodType<Prisma.ResetPasswordTokenDefaultArgs> = z.object({
  select: z.lazy(() => ResetPasswordTokenSelectSchema).optional(),
  include: z.lazy(() => ResetPasswordTokenIncludeSchema).optional(),
}).strict();

export const ResetPasswordTokenSelectSchema: z.ZodType<Prisma.ResetPasswordTokenSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  used: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// GAME
//------------------------------------------------------

export const GameIncludeSchema: z.ZodType<Prisma.GameInclude> = z.object({
  gameRequirement: z.union([z.boolean(),z.lazy(() => GameRequirementArgsSchema)]).optional(),
}).strict()

export const GameArgsSchema: z.ZodType<Prisma.GameDefaultArgs> = z.object({
  select: z.lazy(() => GameSelectSchema).optional(),
  include: z.lazy(() => GameIncludeSchema).optional(),
}).strict();

export const GameSelectSchema: z.ZodType<Prisma.GameSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  apiId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  thumbnail: z.boolean().optional(),
  images: z.boolean().optional(),
  gameUrl: z.boolean().optional(),
  gameDemoUrl: z.boolean().optional(),
  liveGameUrl: z.boolean().optional(),
  gameRequirementId: z.boolean().optional(),
  gameRequirement: z.union([z.boolean(),z.lazy(() => GameRequirementArgsSchema)]).optional(),
}).strict()

// GAME REQUIREMENT
//------------------------------------------------------

export const GameRequirementIncludeSchema: z.ZodType<Prisma.GameRequirementInclude> = z.object({
  game: z.union([z.boolean(),z.lazy(() => GameArgsSchema)]).optional(),
}).strict()

export const GameRequirementArgsSchema: z.ZodType<Prisma.GameRequirementDefaultArgs> = z.object({
  select: z.lazy(() => GameRequirementSelectSchema).optional(),
  include: z.lazy(() => GameRequirementIncludeSchema).optional(),
}).strict();

export const GameRequirementSelectSchema: z.ZodType<Prisma.GameRequirementSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  title: z.boolean().optional(),
  reels: z.boolean().optional(),
  rows: z.boolean().optional(),
  paylines: z.boolean().optional(),
  rtp: z.boolean().optional(),
  hitFreq: z.boolean().optional(),
  freeSpinsFreq: z.boolean().optional(),
  maxWin: z.boolean().optional(),
  maxWinProbability: z.boolean().optional(),
  volatility: z.boolean().optional(),
  minMaxBet: z.boolean().optional(),
  releaseDate: z.boolean().optional(),
  features: z.boolean().optional(),
  provider: z.boolean().optional(),
  theme: z.boolean().optional(),
  game: z.union([z.boolean(),z.lazy(() => GameArgsSchema)]).optional(),
}).strict()

// ADVERT
//------------------------------------------------------

export const AdvertIncludeSchema: z.ZodType<Prisma.AdvertInclude> = z.object({
  advertSpaces: z.union([z.boolean(),z.lazy(() => AdvertSpaceArgsSchema)]).optional(),
}).strict()

export const AdvertArgsSchema: z.ZodType<Prisma.AdvertDefaultArgs> = z.object({
  select: z.lazy(() => AdvertSelectSchema).optional(),
  include: z.lazy(() => AdvertIncludeSchema).optional(),
}).strict();

export const AdvertSelectSchema: z.ZodType<Prisma.AdvertSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  image: z.boolean().optional(),
  href: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  promoCode: z.boolean().optional(),
  isEnabled: z.boolean().optional(),
  from: z.boolean().optional(),
  to: z.boolean().optional(),
  rate: z.boolean().optional(),
  collapsed: z.boolean().optional(),
  advertSpacesId: z.boolean().optional(),
  advertSpaces: z.union([z.boolean(),z.lazy(() => AdvertSpaceArgsSchema)]).optional(),
}).strict()

// REELS
//------------------------------------------------------

export const ReelsSelectSchema: z.ZodType<Prisma.ReelsSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
}).strict()

// VOLATILITY
//------------------------------------------------------

export const VolatilitySelectSchema: z.ZodType<Prisma.VolatilitySelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
}).strict()

// THEME
//------------------------------------------------------

export const ThemeSelectSchema: z.ZodType<Prisma.ThemeSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
}).strict()

// PROVIDERS
//------------------------------------------------------

export const ProvidersSelectSchema: z.ZodType<Prisma.ProvidersSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
}).strict()

// FEATURES
//------------------------------------------------------

export const FeaturesSelectSchema: z.ZodType<Prisma.FeaturesSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
}).strict()

// WAGER
//------------------------------------------------------

export const WagerSelectSchema: z.ZodType<Prisma.WagerSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
}).strict()

// BONUS TYPE
//------------------------------------------------------

export const BonusTypeSelectSchema: z.ZodType<Prisma.BonusTypeSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
}).strict()

// CASINO TYPE
//------------------------------------------------------

export const CasinoTypeSelectSchema: z.ZodType<Prisma.CasinoTypeSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
}).strict()

// PAYMENT METHOD
//------------------------------------------------------

export const PaymentMethodSelectSchema: z.ZodType<Prisma.PaymentMethodSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
}).strict()

// CASINO
//------------------------------------------------------

export const CasinoSelectSchema: z.ZodType<Prisma.CasinoSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  image: z.boolean().optional(),
  href: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  promoCode: z.boolean().optional(),
  paymentMethod: z.boolean().optional(),
  wager: z.boolean().optional(),
  bonusType: z.boolean().optional(),
  casinoType: z.boolean().optional(),
}).strict()

// ADVERT SPACE
//------------------------------------------------------

export const AdvertSpaceIncludeSchema: z.ZodType<Prisma.AdvertSpaceInclude> = z.object({
  advert: z.union([z.boolean(),z.lazy(() => AdvertArgsSchema)]).optional(),
}).strict()

export const AdvertSpaceArgsSchema: z.ZodType<Prisma.AdvertSpaceDefaultArgs> = z.object({
  select: z.lazy(() => AdvertSpaceSelectSchema).optional(),
  include: z.lazy(() => AdvertSpaceIncludeSchema).optional(),
}).strict();

export const AdvertSpaceSelectSchema: z.ZodType<Prisma.AdvertSpaceSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  secondary: z.boolean().optional(),
  page: z.boolean().optional(),
  advert: z.union([z.boolean(),z.lazy(() => AdvertArgsSchema)]).optional(),
}).strict()

// NOTIFICATION
//------------------------------------------------------

export const NotificationIncludeSchema: z.ZodType<Prisma.NotificationInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const NotificationArgsSchema: z.ZodType<Prisma.NotificationDefaultArgs> = z.object({
  select: z.lazy(() => NotificationSelectSchema).optional(),
  include: z.lazy(() => NotificationIncludeSchema).optional(),
}).strict();

export const NotificationSelectSchema: z.ZodType<Prisma.NotificationSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  title: z.boolean().optional(),
  message: z.boolean().optional(),
  href: z.boolean().optional(),
  type: z.boolean().optional(),
  read: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    sessionToken: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    sessionToken: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  sessionToken: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastSignIn: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  email_verified: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  phoneVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  phone_verified: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hashedPassword: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  city: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  postalCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  birthdate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  passportOrId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  isVip: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => EnumNotificationsAllowedFilterSchema),z.lazy(() => NotificationsAllowedSchema) ]).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  notifications: z.lazy(() => NotificationListRelationFilterSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastSignIn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  firstName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email_verified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phoneVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phone_verified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  hashedPassword: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  country: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  postalCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  birthdate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  passportOrId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isMarketingEnabled: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isVip: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  notificationsAllowed: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  notifications: z.lazy(() => NotificationOrderByRelationAggregateInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    email: z.string(),
    phone: z.string()
  }),
  z.object({
    id: z.string().uuid(),
    email: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
    phone: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    email: z.string(),
    phone: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
  z.object({
    phone: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastSignIn: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  email_verified: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  phoneVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  phone_verified: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hashedPassword: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  city: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  postalCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  birthdate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  passportOrId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  isVip: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => EnumNotificationsAllowedFilterSchema),z.lazy(() => NotificationsAllowedSchema) ]).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  notifications: z.lazy(() => NotificationListRelationFilterSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastSignIn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  firstName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email_verified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phoneVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phone_verified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  hashedPassword: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  country: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  postalCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  birthdate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  passportOrId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isMarketingEnabled: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isVip: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  notificationsAllowed: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastSignIn: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  lastName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  email_verified: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  phoneVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  phone_verified: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  hashedPassword: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  city: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  postalCode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  language: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  birthdate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  passportOrId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  isVip: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumRoleWithAggregatesFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => EnumNotificationsAllowedWithAggregatesFilterSchema),z.lazy(() => NotificationsAllowedSchema) ]).optional(),
}).strict();

export const VerificationTokenWhereInputSchema: z.ZodType<Prisma.VerificationTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    token: z.string(),
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
    token: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    token: z.string(),
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema),
  }),
  z.object({
    token: z.string(),
  }),
  z.object({
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  token: z.string().optional(),
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ResetPasswordTokenWhereInputSchema: z.ZodType<Prisma.ResetPasswordTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ResetPasswordTokenWhereInputSchema),z.lazy(() => ResetPasswordTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResetPasswordTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResetPasswordTokenWhereInputSchema),z.lazy(() => ResetPasswordTokenWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  used: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const ResetPasswordTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.ResetPasswordTokenOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  used: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const ResetPasswordTokenWhereUniqueInputSchema: z.ZodType<Prisma.ResetPasswordTokenWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ResetPasswordTokenWhereInputSchema),z.lazy(() => ResetPasswordTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResetPasswordTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResetPasswordTokenWhereInputSchema),z.lazy(() => ResetPasswordTokenWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  used: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const ResetPasswordTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.ResetPasswordTokenOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  used: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ResetPasswordTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ResetPasswordTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ResetPasswordTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export const ResetPasswordTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ResetPasswordTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ResetPasswordTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => ResetPasswordTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResetPasswordTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResetPasswordTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => ResetPasswordTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  used: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const GameWhereInputSchema: z.ZodType<Prisma.GameWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GameWhereInputSchema),z.lazy(() => GameWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GameWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GameWhereInputSchema),z.lazy(() => GameWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  apiId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  thumbnail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  gameUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  gameDemoUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  liveGameUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  gameRequirementId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  gameRequirement: z.union([ z.lazy(() => GameRequirementNullableRelationFilterSchema),z.lazy(() => GameRequirementWhereInputSchema) ]).optional().nullable(),
}).strict();

export const GameOrderByWithRelationInputSchema: z.ZodType<Prisma.GameOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  apiId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  thumbnail: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  gameUrl: z.lazy(() => SortOrderSchema).optional(),
  gameDemoUrl: z.lazy(() => SortOrderSchema).optional(),
  liveGameUrl: z.lazy(() => SortOrderSchema).optional(),
  gameRequirementId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  gameRequirement: z.lazy(() => GameRequirementOrderByWithRelationInputSchema).optional()
}).strict();

export const GameWhereUniqueInputSchema: z.ZodType<Prisma.GameWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    apiId: z.number().int(),
    gameRequirementId: z.string()
  }),
  z.object({
    id: z.string().uuid(),
    apiId: z.number().int(),
  }),
  z.object({
    id: z.string().uuid(),
    gameRequirementId: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    apiId: z.number().int(),
    gameRequirementId: z.string(),
  }),
  z.object({
    apiId: z.number().int(),
  }),
  z.object({
    gameRequirementId: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  apiId: z.number().int().optional(),
  gameRequirementId: z.string().optional(),
  AND: z.union([ z.lazy(() => GameWhereInputSchema),z.lazy(() => GameWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GameWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GameWhereInputSchema),z.lazy(() => GameWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  thumbnail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  gameUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  gameDemoUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  liveGameUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  gameRequirement: z.union([ z.lazy(() => GameRequirementNullableRelationFilterSchema),z.lazy(() => GameRequirementWhereInputSchema) ]).optional().nullable(),
}).strict());

export const GameOrderByWithAggregationInputSchema: z.ZodType<Prisma.GameOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  apiId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  thumbnail: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  gameUrl: z.lazy(() => SortOrderSchema).optional(),
  gameDemoUrl: z.lazy(() => SortOrderSchema).optional(),
  liveGameUrl: z.lazy(() => SortOrderSchema).optional(),
  gameRequirementId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => GameCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GameAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GameMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GameMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GameSumOrderByAggregateInputSchema).optional()
}).strict();

export const GameScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GameScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GameScalarWhereWithAggregatesInputSchema),z.lazy(() => GameScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GameScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GameScalarWhereWithAggregatesInputSchema),z.lazy(() => GameScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  apiId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  thumbnail: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  gameUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  gameDemoUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  liveGameUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  gameRequirementId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const GameRequirementWhereInputSchema: z.ZodType<Prisma.GameRequirementWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GameRequirementWhereInputSchema),z.lazy(() => GameRequirementWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GameRequirementWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GameRequirementWhereInputSchema),z.lazy(() => GameRequirementWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reels: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rows: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  paylines: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rtp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hitFreq: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  freeSpinsFreq: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  maxWin: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  maxWinProbability: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  volatility: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  minMaxBet: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  releaseDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  features: z.lazy(() => StringNullableListFilterSchema).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  theme: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  game: z.union([ z.lazy(() => GameNullableRelationFilterSchema),z.lazy(() => GameWhereInputSchema) ]).optional().nullable(),
}).strict();

export const GameRequirementOrderByWithRelationInputSchema: z.ZodType<Prisma.GameRequirementOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reels: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  paylines: z.lazy(() => SortOrderSchema).optional(),
  rtp: z.lazy(() => SortOrderSchema).optional(),
  hitFreq: z.lazy(() => SortOrderSchema).optional(),
  freeSpinsFreq: z.lazy(() => SortOrderSchema).optional(),
  maxWin: z.lazy(() => SortOrderSchema).optional(),
  maxWinProbability: z.lazy(() => SortOrderSchema).optional(),
  volatility: z.lazy(() => SortOrderSchema).optional(),
  minMaxBet: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  features: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  theme: z.lazy(() => SortOrderSchema).optional(),
  game: z.lazy(() => GameOrderByWithRelationInputSchema).optional()
}).strict();

export const GameRequirementWhereUniqueInputSchema: z.ZodType<Prisma.GameRequirementWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => GameRequirementWhereInputSchema),z.lazy(() => GameRequirementWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GameRequirementWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GameRequirementWhereInputSchema),z.lazy(() => GameRequirementWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reels: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rows: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  paylines: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rtp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hitFreq: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  freeSpinsFreq: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  maxWin: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  maxWinProbability: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  volatility: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  minMaxBet: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  releaseDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  features: z.lazy(() => StringNullableListFilterSchema).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  theme: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  game: z.union([ z.lazy(() => GameNullableRelationFilterSchema),z.lazy(() => GameWhereInputSchema) ]).optional().nullable(),
}).strict());

export const GameRequirementOrderByWithAggregationInputSchema: z.ZodType<Prisma.GameRequirementOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reels: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  paylines: z.lazy(() => SortOrderSchema).optional(),
  rtp: z.lazy(() => SortOrderSchema).optional(),
  hitFreq: z.lazy(() => SortOrderSchema).optional(),
  freeSpinsFreq: z.lazy(() => SortOrderSchema).optional(),
  maxWin: z.lazy(() => SortOrderSchema).optional(),
  maxWinProbability: z.lazy(() => SortOrderSchema).optional(),
  volatility: z.lazy(() => SortOrderSchema).optional(),
  minMaxBet: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  features: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  theme: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GameRequirementCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GameRequirementMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GameRequirementMinOrderByAggregateInputSchema).optional()
}).strict();

export const GameRequirementScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GameRequirementScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GameRequirementScalarWhereWithAggregatesInputSchema),z.lazy(() => GameRequirementScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GameRequirementScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GameRequirementScalarWhereWithAggregatesInputSchema),z.lazy(() => GameRequirementScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  reels: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rows: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  paylines: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rtp: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hitFreq: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  freeSpinsFreq: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  maxWin: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  maxWinProbability: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  volatility: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  minMaxBet: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  releaseDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  features: z.lazy(() => StringNullableListFilterSchema).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  theme: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const AdvertWhereInputSchema: z.ZodType<Prisma.AdvertWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AdvertWhereInputSchema),z.lazy(() => AdvertWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdvertWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdvertWhereInputSchema),z.lazy(() => AdvertWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  promoCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  from: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  to: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  rate: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  collapsed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  advertSpacesId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  advertSpaces: z.union([ z.lazy(() => AdvertSpaceNullableRelationFilterSchema),z.lazy(() => AdvertSpaceWhereInputSchema) ]).optional().nullable(),
}).strict();

export const AdvertOrderByWithRelationInputSchema: z.ZodType<Prisma.AdvertOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  promoCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isEnabled: z.lazy(() => SortOrderSchema).optional(),
  from: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  to: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  collapsed: z.lazy(() => SortOrderSchema).optional(),
  advertSpacesId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  advertSpaces: z.lazy(() => AdvertSpaceOrderByWithRelationInputSchema).optional()
}).strict();

export const AdvertWhereUniqueInputSchema: z.ZodType<Prisma.AdvertWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    advertSpacesId: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    advertSpacesId: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  advertSpacesId: z.string().optional(),
  AND: z.union([ z.lazy(() => AdvertWhereInputSchema),z.lazy(() => AdvertWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdvertWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdvertWhereInputSchema),z.lazy(() => AdvertWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  promoCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  from: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  to: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  rate: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  collapsed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  advertSpaces: z.union([ z.lazy(() => AdvertSpaceNullableRelationFilterSchema),z.lazy(() => AdvertSpaceWhereInputSchema) ]).optional().nullable(),
}).strict());

export const AdvertOrderByWithAggregationInputSchema: z.ZodType<Prisma.AdvertOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  promoCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isEnabled: z.lazy(() => SortOrderSchema).optional(),
  from: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  to: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  collapsed: z.lazy(() => SortOrderSchema).optional(),
  advertSpacesId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AdvertCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AdvertMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AdvertMinOrderByAggregateInputSchema).optional()
}).strict();

export const AdvertScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AdvertScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AdvertScalarWhereWithAggregatesInputSchema),z.lazy(() => AdvertScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdvertScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdvertScalarWhereWithAggregatesInputSchema),z.lazy(() => AdvertScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  promoCode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  isEnabled: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  from: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  to: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  rate: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  collapsed: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  advertSpacesId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ReelsWhereInputSchema: z.ZodType<Prisma.ReelsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReelsWhereInputSchema),z.lazy(() => ReelsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReelsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReelsWhereInputSchema),z.lazy(() => ReelsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ReelsOrderByWithRelationInputSchema: z.ZodType<Prisma.ReelsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReelsWhereUniqueInputSchema: z.ZodType<Prisma.ReelsWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ReelsWhereInputSchema),z.lazy(() => ReelsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReelsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReelsWhereInputSchema),z.lazy(() => ReelsWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const ReelsOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReelsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReelsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReelsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReelsMinOrderByAggregateInputSchema).optional()
}).strict();

export const ReelsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReelsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReelsScalarWhereWithAggregatesInputSchema),z.lazy(() => ReelsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReelsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReelsScalarWhereWithAggregatesInputSchema),z.lazy(() => ReelsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const VolatilityWhereInputSchema: z.ZodType<Prisma.VolatilityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VolatilityWhereInputSchema),z.lazy(() => VolatilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VolatilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VolatilityWhereInputSchema),z.lazy(() => VolatilityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const VolatilityOrderByWithRelationInputSchema: z.ZodType<Prisma.VolatilityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VolatilityWhereUniqueInputSchema: z.ZodType<Prisma.VolatilityWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => VolatilityWhereInputSchema),z.lazy(() => VolatilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VolatilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VolatilityWhereInputSchema),z.lazy(() => VolatilityWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const VolatilityOrderByWithAggregationInputSchema: z.ZodType<Prisma.VolatilityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VolatilityCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VolatilityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VolatilityMinOrderByAggregateInputSchema).optional()
}).strict();

export const VolatilityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VolatilityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VolatilityScalarWhereWithAggregatesInputSchema),z.lazy(() => VolatilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VolatilityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VolatilityScalarWhereWithAggregatesInputSchema),z.lazy(() => VolatilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ThemeWhereInputSchema: z.ZodType<Prisma.ThemeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ThemeWhereInputSchema),z.lazy(() => ThemeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThemeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThemeWhereInputSchema),z.lazy(() => ThemeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ThemeOrderByWithRelationInputSchema: z.ZodType<Prisma.ThemeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThemeWhereUniqueInputSchema: z.ZodType<Prisma.ThemeWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ThemeWhereInputSchema),z.lazy(() => ThemeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThemeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThemeWhereInputSchema),z.lazy(() => ThemeWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const ThemeOrderByWithAggregationInputSchema: z.ZodType<Prisma.ThemeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ThemeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ThemeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ThemeMinOrderByAggregateInputSchema).optional()
}).strict();

export const ThemeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ThemeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ThemeScalarWhereWithAggregatesInputSchema),z.lazy(() => ThemeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThemeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThemeScalarWhereWithAggregatesInputSchema),z.lazy(() => ThemeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ProvidersWhereInputSchema: z.ZodType<Prisma.ProvidersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProvidersWhereInputSchema),z.lazy(() => ProvidersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProvidersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProvidersWhereInputSchema),z.lazy(() => ProvidersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ProvidersOrderByWithRelationInputSchema: z.ZodType<Prisma.ProvidersOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProvidersWhereUniqueInputSchema: z.ZodType<Prisma.ProvidersWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ProvidersWhereInputSchema),z.lazy(() => ProvidersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProvidersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProvidersWhereInputSchema),z.lazy(() => ProvidersWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const ProvidersOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProvidersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProvidersCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProvidersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProvidersMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProvidersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProvidersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProvidersScalarWhereWithAggregatesInputSchema),z.lazy(() => ProvidersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProvidersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProvidersScalarWhereWithAggregatesInputSchema),z.lazy(() => ProvidersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const FeaturesWhereInputSchema: z.ZodType<Prisma.FeaturesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FeaturesWhereInputSchema),z.lazy(() => FeaturesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FeaturesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FeaturesWhereInputSchema),z.lazy(() => FeaturesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const FeaturesOrderByWithRelationInputSchema: z.ZodType<Prisma.FeaturesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FeaturesWhereUniqueInputSchema: z.ZodType<Prisma.FeaturesWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => FeaturesWhereInputSchema),z.lazy(() => FeaturesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FeaturesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FeaturesWhereInputSchema),z.lazy(() => FeaturesWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const FeaturesOrderByWithAggregationInputSchema: z.ZodType<Prisma.FeaturesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FeaturesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FeaturesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FeaturesMinOrderByAggregateInputSchema).optional()
}).strict();

export const FeaturesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FeaturesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FeaturesScalarWhereWithAggregatesInputSchema),z.lazy(() => FeaturesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FeaturesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FeaturesScalarWhereWithAggregatesInputSchema),z.lazy(() => FeaturesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const WagerWhereInputSchema: z.ZodType<Prisma.WagerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WagerWhereInputSchema),z.lazy(() => WagerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WagerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WagerWhereInputSchema),z.lazy(() => WagerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const WagerOrderByWithRelationInputSchema: z.ZodType<Prisma.WagerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WagerWhereUniqueInputSchema: z.ZodType<Prisma.WagerWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => WagerWhereInputSchema),z.lazy(() => WagerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WagerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WagerWhereInputSchema),z.lazy(() => WagerWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const WagerOrderByWithAggregationInputSchema: z.ZodType<Prisma.WagerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WagerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WagerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WagerMinOrderByAggregateInputSchema).optional()
}).strict();

export const WagerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WagerScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WagerScalarWhereWithAggregatesInputSchema),z.lazy(() => WagerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WagerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WagerScalarWhereWithAggregatesInputSchema),z.lazy(() => WagerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const BonusTypeWhereInputSchema: z.ZodType<Prisma.BonusTypeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BonusTypeWhereInputSchema),z.lazy(() => BonusTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BonusTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BonusTypeWhereInputSchema),z.lazy(() => BonusTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const BonusTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.BonusTypeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BonusTypeWhereUniqueInputSchema: z.ZodType<Prisma.BonusTypeWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => BonusTypeWhereInputSchema),z.lazy(() => BonusTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BonusTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BonusTypeWhereInputSchema),z.lazy(() => BonusTypeWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const BonusTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.BonusTypeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BonusTypeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BonusTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BonusTypeMinOrderByAggregateInputSchema).optional()
}).strict();

export const BonusTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BonusTypeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BonusTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => BonusTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BonusTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BonusTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => BonusTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CasinoTypeWhereInputSchema: z.ZodType<Prisma.CasinoTypeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CasinoTypeWhereInputSchema),z.lazy(() => CasinoTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CasinoTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CasinoTypeWhereInputSchema),z.lazy(() => CasinoTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const CasinoTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.CasinoTypeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CasinoTypeWhereUniqueInputSchema: z.ZodType<Prisma.CasinoTypeWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => CasinoTypeWhereInputSchema),z.lazy(() => CasinoTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CasinoTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CasinoTypeWhereInputSchema),z.lazy(() => CasinoTypeWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const CasinoTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.CasinoTypeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CasinoTypeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CasinoTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CasinoTypeMinOrderByAggregateInputSchema).optional()
}).strict();

export const CasinoTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CasinoTypeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CasinoTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => CasinoTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CasinoTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CasinoTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => CasinoTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PaymentMethodWhereInputSchema: z.ZodType<Prisma.PaymentMethodWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PaymentMethodWhereInputSchema),z.lazy(() => PaymentMethodWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentMethodWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentMethodWhereInputSchema),z.lazy(() => PaymentMethodWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const PaymentMethodOrderByWithRelationInputSchema: z.ZodType<Prisma.PaymentMethodOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentMethodWhereUniqueInputSchema: z.ZodType<Prisma.PaymentMethodWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => PaymentMethodWhereInputSchema),z.lazy(() => PaymentMethodWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentMethodWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentMethodWhereInputSchema),z.lazy(() => PaymentMethodWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const PaymentMethodOrderByWithAggregationInputSchema: z.ZodType<Prisma.PaymentMethodOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PaymentMethodCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PaymentMethodMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PaymentMethodMinOrderByAggregateInputSchema).optional()
}).strict();

export const PaymentMethodScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PaymentMethodScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PaymentMethodScalarWhereWithAggregatesInputSchema),z.lazy(() => PaymentMethodScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentMethodScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentMethodScalarWhereWithAggregatesInputSchema),z.lazy(() => PaymentMethodScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CasinoWhereInputSchema: z.ZodType<Prisma.CasinoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CasinoWhereInputSchema),z.lazy(() => CasinoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CasinoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CasinoWhereInputSchema),z.lazy(() => CasinoWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  promoCode: z.union([ z.lazy(() => EnumPromoCodeFilterSchema),z.lazy(() => PromoCodeSchema) ]).optional(),
  paymentMethod: z.union([ z.lazy(() => EnumPayFilterSchema),z.lazy(() => PaySchema) ]).optional(),
  wager: z.union([ z.lazy(() => EnumGameWagerFilterSchema),z.lazy(() => GameWagerSchema) ]).optional(),
  bonusType: z.union([ z.lazy(() => EnumBonusTypesFilterSchema),z.lazy(() => BonusTypesSchema) ]).optional(),
  casinoType: z.union([ z.lazy(() => EnumCasinosTypeFilterSchema),z.lazy(() => CasinosTypeSchema) ]).optional(),
}).strict();

export const CasinoOrderByWithRelationInputSchema: z.ZodType<Prisma.CasinoOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  promoCode: z.lazy(() => SortOrderSchema).optional(),
  paymentMethod: z.lazy(() => SortOrderSchema).optional(),
  wager: z.lazy(() => SortOrderSchema).optional(),
  bonusType: z.lazy(() => SortOrderSchema).optional(),
  casinoType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CasinoWhereUniqueInputSchema: z.ZodType<Prisma.CasinoWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => CasinoWhereInputSchema),z.lazy(() => CasinoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CasinoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CasinoWhereInputSchema),z.lazy(() => CasinoWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  promoCode: z.union([ z.lazy(() => EnumPromoCodeFilterSchema),z.lazy(() => PromoCodeSchema) ]).optional(),
  paymentMethod: z.union([ z.lazy(() => EnumPayFilterSchema),z.lazy(() => PaySchema) ]).optional(),
  wager: z.union([ z.lazy(() => EnumGameWagerFilterSchema),z.lazy(() => GameWagerSchema) ]).optional(),
  bonusType: z.union([ z.lazy(() => EnumBonusTypesFilterSchema),z.lazy(() => BonusTypesSchema) ]).optional(),
  casinoType: z.union([ z.lazy(() => EnumCasinosTypeFilterSchema),z.lazy(() => CasinosTypeSchema) ]).optional(),
}).strict());

export const CasinoOrderByWithAggregationInputSchema: z.ZodType<Prisma.CasinoOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  promoCode: z.lazy(() => SortOrderSchema).optional(),
  paymentMethod: z.lazy(() => SortOrderSchema).optional(),
  wager: z.lazy(() => SortOrderSchema).optional(),
  bonusType: z.lazy(() => SortOrderSchema).optional(),
  casinoType: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CasinoCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CasinoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CasinoMinOrderByAggregateInputSchema).optional()
}).strict();

export const CasinoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CasinoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CasinoScalarWhereWithAggregatesInputSchema),z.lazy(() => CasinoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CasinoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CasinoScalarWhereWithAggregatesInputSchema),z.lazy(() => CasinoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  promoCode: z.union([ z.lazy(() => EnumPromoCodeWithAggregatesFilterSchema),z.lazy(() => PromoCodeSchema) ]).optional(),
  paymentMethod: z.union([ z.lazy(() => EnumPayWithAggregatesFilterSchema),z.lazy(() => PaySchema) ]).optional(),
  wager: z.union([ z.lazy(() => EnumGameWagerWithAggregatesFilterSchema),z.lazy(() => GameWagerSchema) ]).optional(),
  bonusType: z.union([ z.lazy(() => EnumBonusTypesWithAggregatesFilterSchema),z.lazy(() => BonusTypesSchema) ]).optional(),
  casinoType: z.union([ z.lazy(() => EnumCasinosTypeWithAggregatesFilterSchema),z.lazy(() => CasinosTypeSchema) ]).optional(),
}).strict();

export const AdvertSpaceWhereInputSchema: z.ZodType<Prisma.AdvertSpaceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AdvertSpaceWhereInputSchema),z.lazy(() => AdvertSpaceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdvertSpaceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdvertSpaceWhereInputSchema),z.lazy(() => AdvertSpaceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  secondary: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  page: z.lazy(() => StringNullableListFilterSchema).optional(),
  advert: z.union([ z.lazy(() => AdvertNullableRelationFilterSchema),z.lazy(() => AdvertWhereInputSchema) ]).optional().nullable(),
}).strict();

export const AdvertSpaceOrderByWithRelationInputSchema: z.ZodType<Prisma.AdvertSpaceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  secondary: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => SortOrderSchema).optional(),
  advert: z.lazy(() => AdvertOrderByWithRelationInputSchema).optional()
}).strict();

export const AdvertSpaceWhereUniqueInputSchema: z.ZodType<Prisma.AdvertSpaceWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => AdvertSpaceWhereInputSchema),z.lazy(() => AdvertSpaceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdvertSpaceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdvertSpaceWhereInputSchema),z.lazy(() => AdvertSpaceWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  secondary: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  page: z.lazy(() => StringNullableListFilterSchema).optional(),
  advert: z.union([ z.lazy(() => AdvertNullableRelationFilterSchema),z.lazy(() => AdvertWhereInputSchema) ]).optional().nullable(),
}).strict());

export const AdvertSpaceOrderByWithAggregationInputSchema: z.ZodType<Prisma.AdvertSpaceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  secondary: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AdvertSpaceCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AdvertSpaceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AdvertSpaceMinOrderByAggregateInputSchema).optional()
}).strict();

export const AdvertSpaceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AdvertSpaceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AdvertSpaceScalarWhereWithAggregatesInputSchema),z.lazy(() => AdvertSpaceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdvertSpaceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdvertSpaceScalarWhereWithAggregatesInputSchema),z.lazy(() => AdvertSpaceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  secondary: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  page: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const NotificationWhereInputSchema: z.ZodType<Prisma.NotificationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  href: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumNotificationTypeFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const NotificationOrderByWithRelationInputSchema: z.ZodType<Prisma.NotificationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  href: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const NotificationWhereUniqueInputSchema: z.ZodType<Prisma.NotificationWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  href: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumNotificationTypeFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const NotificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.NotificationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  href: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NotificationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NotificationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NotificationMinOrderByAggregateInputSchema).optional()
}).strict();

export const NotificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NotificationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  href: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumNotificationTypeWithAggregatesFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  read: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  userId: z.string()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  userId: z.string()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  userId: z.string()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  userId: z.string()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastSignIn: z.coerce.date().optional().nullable(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  phone_verified: z.boolean().optional().nullable(),
  image: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  birthdate: z.coerce.date().optional().nullable(),
  passportOrId: z.string().optional().nullable(),
  isMarketingEnabled: z.boolean().optional().nullable(),
  isVip: z.boolean().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  notificationsAllowed: z.lazy(() => NotificationsAllowedSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastSignIn: z.coerce.date().optional().nullable(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  phone_verified: z.boolean().optional().nullable(),
  image: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  birthdate: z.coerce.date().optional().nullable(),
  passportOrId: z.string().optional().nullable(),
  isMarketingEnabled: z.boolean().optional().nullable(),
  isVip: z.boolean().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  notificationsAllowed: z.lazy(() => NotificationsAllowedSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastSignIn: z.coerce.date().optional().nullable(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  phone_verified: z.boolean().optional().nullable(),
  image: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  birthdate: z.coerce.date().optional().nullable(),
  passportOrId: z.string().optional().nullable(),
  isMarketingEnabled: z.boolean().optional().nullable(),
  isVip: z.boolean().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  notificationsAllowed: z.lazy(() => NotificationsAllowedSchema).optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ResetPasswordTokenCreateInputSchema: z.ZodType<Prisma.ResetPasswordTokenCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  used: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutResetTokensInputSchema)
}).strict();

export const ResetPasswordTokenUncheckedCreateInputSchema: z.ZodType<Prisma.ResetPasswordTokenUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  used: z.boolean().optional(),
  userId: z.string()
}).strict();

export const ResetPasswordTokenUpdateInputSchema: z.ZodType<Prisma.ResetPasswordTokenUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  used: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutResetTokensNestedInputSchema).optional()
}).strict();

export const ResetPasswordTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.ResetPasswordTokenUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  used: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ResetPasswordTokenCreateManyInputSchema: z.ZodType<Prisma.ResetPasswordTokenCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  used: z.boolean().optional(),
  userId: z.string()
}).strict();

export const ResetPasswordTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.ResetPasswordTokenUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  used: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ResetPasswordTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ResetPasswordTokenUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  used: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GameCreateInputSchema: z.ZodType<Prisma.GameCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  apiId: z.number().int(),
  name: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  images: z.union([ z.lazy(() => GameCreateimagesInputSchema),z.string().array() ]).optional(),
  gameUrl: z.string(),
  gameDemoUrl: z.string(),
  liveGameUrl: z.string(),
  gameRequirement: z.lazy(() => GameRequirementCreateNestedOneWithoutGameInputSchema).optional()
}).strict();

export const GameUncheckedCreateInputSchema: z.ZodType<Prisma.GameUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  apiId: z.number().int(),
  name: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  images: z.union([ z.lazy(() => GameCreateimagesInputSchema),z.string().array() ]).optional(),
  gameUrl: z.string(),
  gameDemoUrl: z.string(),
  liveGameUrl: z.string(),
  gameRequirementId: z.string().optional().nullable()
}).strict();

export const GameUpdateInputSchema: z.ZodType<Prisma.GameUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  apiId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.lazy(() => GameUpdateimagesInputSchema),z.string().array() ]).optional(),
  gameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gameDemoUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  liveGameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gameRequirement: z.lazy(() => GameRequirementUpdateOneWithoutGameNestedInputSchema).optional()
}).strict();

export const GameUncheckedUpdateInputSchema: z.ZodType<Prisma.GameUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  apiId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.lazy(() => GameUpdateimagesInputSchema),z.string().array() ]).optional(),
  gameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gameDemoUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  liveGameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gameRequirementId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GameCreateManyInputSchema: z.ZodType<Prisma.GameCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  apiId: z.number().int(),
  name: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  images: z.union([ z.lazy(() => GameCreateimagesInputSchema),z.string().array() ]).optional(),
  gameUrl: z.string(),
  gameDemoUrl: z.string(),
  liveGameUrl: z.string(),
  gameRequirementId: z.string().optional().nullable()
}).strict();

export const GameUpdateManyMutationInputSchema: z.ZodType<Prisma.GameUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  apiId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.lazy(() => GameUpdateimagesInputSchema),z.string().array() ]).optional(),
  gameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gameDemoUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  liveGameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GameUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GameUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  apiId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.lazy(() => GameUpdateimagesInputSchema),z.string().array() ]).optional(),
  gameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gameDemoUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  liveGameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gameRequirementId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GameRequirementCreateInputSchema: z.ZodType<Prisma.GameRequirementCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().optional().nullable(),
  reels: z.string(),
  rows: z.string(),
  paylines: z.string(),
  rtp: z.string(),
  hitFreq: z.string(),
  freeSpinsFreq: z.string(),
  maxWin: z.string(),
  maxWinProbability: z.string(),
  volatility: z.string(),
  minMaxBet: z.string(),
  releaseDate: z.coerce.date(),
  features: z.union([ z.lazy(() => GameRequirementCreatefeaturesInputSchema),z.string().array() ]).optional(),
  provider: z.string(),
  theme: z.string(),
  game: z.lazy(() => GameCreateNestedOneWithoutGameRequirementInputSchema).optional()
}).strict();

export const GameRequirementUncheckedCreateInputSchema: z.ZodType<Prisma.GameRequirementUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().optional().nullable(),
  reels: z.string(),
  rows: z.string(),
  paylines: z.string(),
  rtp: z.string(),
  hitFreq: z.string(),
  freeSpinsFreq: z.string(),
  maxWin: z.string(),
  maxWinProbability: z.string(),
  volatility: z.string(),
  minMaxBet: z.string(),
  releaseDate: z.coerce.date(),
  features: z.union([ z.lazy(() => GameRequirementCreatefeaturesInputSchema),z.string().array() ]).optional(),
  provider: z.string(),
  theme: z.string(),
  game: z.lazy(() => GameUncheckedCreateNestedOneWithoutGameRequirementInputSchema).optional()
}).strict();

export const GameRequirementUpdateInputSchema: z.ZodType<Prisma.GameRequirementUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reels: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paylines: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rtp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hitFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  freeSpinsFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWinProbability: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  volatility: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minMaxBet: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  features: z.union([ z.lazy(() => GameRequirementUpdatefeaturesInputSchema),z.string().array() ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  theme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  game: z.lazy(() => GameUpdateOneWithoutGameRequirementNestedInputSchema).optional()
}).strict();

export const GameRequirementUncheckedUpdateInputSchema: z.ZodType<Prisma.GameRequirementUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reels: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paylines: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rtp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hitFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  freeSpinsFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWinProbability: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  volatility: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minMaxBet: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  features: z.union([ z.lazy(() => GameRequirementUpdatefeaturesInputSchema),z.string().array() ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  theme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  game: z.lazy(() => GameUncheckedUpdateOneWithoutGameRequirementNestedInputSchema).optional()
}).strict();

export const GameRequirementCreateManyInputSchema: z.ZodType<Prisma.GameRequirementCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().optional().nullable(),
  reels: z.string(),
  rows: z.string(),
  paylines: z.string(),
  rtp: z.string(),
  hitFreq: z.string(),
  freeSpinsFreq: z.string(),
  maxWin: z.string(),
  maxWinProbability: z.string(),
  volatility: z.string(),
  minMaxBet: z.string(),
  releaseDate: z.coerce.date(),
  features: z.union([ z.lazy(() => GameRequirementCreatefeaturesInputSchema),z.string().array() ]).optional(),
  provider: z.string(),
  theme: z.string()
}).strict();

export const GameRequirementUpdateManyMutationInputSchema: z.ZodType<Prisma.GameRequirementUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reels: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paylines: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rtp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hitFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  freeSpinsFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWinProbability: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  volatility: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minMaxBet: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  features: z.union([ z.lazy(() => GameRequirementUpdatefeaturesInputSchema),z.string().array() ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  theme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GameRequirementUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GameRequirementUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reels: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paylines: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rtp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hitFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  freeSpinsFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWinProbability: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  volatility: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minMaxBet: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  features: z.union([ z.lazy(() => GameRequirementUpdatefeaturesInputSchema),z.string().array() ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  theme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdvertCreateInputSchema: z.ZodType<Prisma.AdvertCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  href: z.string(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  promoCode: z.string().optional().nullable(),
  isEnabled: z.boolean().optional(),
  from: z.coerce.date().optional().nullable(),
  to: z.coerce.date().optional().nullable(),
  rate: z.string().optional().nullable(),
  collapsed: z.boolean().optional(),
  advertSpaces: z.lazy(() => AdvertSpaceCreateNestedOneWithoutAdvertInputSchema).optional()
}).strict();

export const AdvertUncheckedCreateInputSchema: z.ZodType<Prisma.AdvertUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  href: z.string(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  promoCode: z.string().optional().nullable(),
  isEnabled: z.boolean().optional(),
  from: z.coerce.date().optional().nullable(),
  to: z.coerce.date().optional().nullable(),
  rate: z.string().optional().nullable(),
  collapsed: z.boolean().optional(),
  advertSpacesId: z.string().optional().nullable()
}).strict();

export const AdvertUpdateInputSchema: z.ZodType<Prisma.AdvertUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promoCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  to: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rate: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collapsed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  advertSpaces: z.lazy(() => AdvertSpaceUpdateOneWithoutAdvertNestedInputSchema).optional()
}).strict();

export const AdvertUncheckedUpdateInputSchema: z.ZodType<Prisma.AdvertUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promoCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  to: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rate: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collapsed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  advertSpacesId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AdvertCreateManyInputSchema: z.ZodType<Prisma.AdvertCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  href: z.string(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  promoCode: z.string().optional().nullable(),
  isEnabled: z.boolean().optional(),
  from: z.coerce.date().optional().nullable(),
  to: z.coerce.date().optional().nullable(),
  rate: z.string().optional().nullable(),
  collapsed: z.boolean().optional(),
  advertSpacesId: z.string().optional().nullable()
}).strict();

export const AdvertUpdateManyMutationInputSchema: z.ZodType<Prisma.AdvertUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promoCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  to: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rate: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collapsed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdvertUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AdvertUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promoCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  to: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rate: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collapsed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  advertSpacesId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ReelsCreateInputSchema: z.ZodType<Prisma.ReelsCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const ReelsUncheckedCreateInputSchema: z.ZodType<Prisma.ReelsUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const ReelsUpdateInputSchema: z.ZodType<Prisma.ReelsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReelsUncheckedUpdateInputSchema: z.ZodType<Prisma.ReelsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReelsCreateManyInputSchema: z.ZodType<Prisma.ReelsCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const ReelsUpdateManyMutationInputSchema: z.ZodType<Prisma.ReelsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReelsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReelsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VolatilityCreateInputSchema: z.ZodType<Prisma.VolatilityCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const VolatilityUncheckedCreateInputSchema: z.ZodType<Prisma.VolatilityUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const VolatilityUpdateInputSchema: z.ZodType<Prisma.VolatilityUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VolatilityUncheckedUpdateInputSchema: z.ZodType<Prisma.VolatilityUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VolatilityCreateManyInputSchema: z.ZodType<Prisma.VolatilityCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const VolatilityUpdateManyMutationInputSchema: z.ZodType<Prisma.VolatilityUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VolatilityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VolatilityUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThemeCreateInputSchema: z.ZodType<Prisma.ThemeCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const ThemeUncheckedCreateInputSchema: z.ZodType<Prisma.ThemeUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const ThemeUpdateInputSchema: z.ZodType<Prisma.ThemeUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThemeUncheckedUpdateInputSchema: z.ZodType<Prisma.ThemeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThemeCreateManyInputSchema: z.ZodType<Prisma.ThemeCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const ThemeUpdateManyMutationInputSchema: z.ZodType<Prisma.ThemeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThemeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ThemeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProvidersCreateInputSchema: z.ZodType<Prisma.ProvidersCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const ProvidersUncheckedCreateInputSchema: z.ZodType<Prisma.ProvidersUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const ProvidersUpdateInputSchema: z.ZodType<Prisma.ProvidersUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProvidersUncheckedUpdateInputSchema: z.ZodType<Prisma.ProvidersUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProvidersCreateManyInputSchema: z.ZodType<Prisma.ProvidersCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const ProvidersUpdateManyMutationInputSchema: z.ZodType<Prisma.ProvidersUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProvidersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProvidersUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FeaturesCreateInputSchema: z.ZodType<Prisma.FeaturesCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const FeaturesUncheckedCreateInputSchema: z.ZodType<Prisma.FeaturesUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const FeaturesUpdateInputSchema: z.ZodType<Prisma.FeaturesUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FeaturesUncheckedUpdateInputSchema: z.ZodType<Prisma.FeaturesUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FeaturesCreateManyInputSchema: z.ZodType<Prisma.FeaturesCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const FeaturesUpdateManyMutationInputSchema: z.ZodType<Prisma.FeaturesUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FeaturesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FeaturesUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WagerCreateInputSchema: z.ZodType<Prisma.WagerCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const WagerUncheckedCreateInputSchema: z.ZodType<Prisma.WagerUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const WagerUpdateInputSchema: z.ZodType<Prisma.WagerUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WagerUncheckedUpdateInputSchema: z.ZodType<Prisma.WagerUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WagerCreateManyInputSchema: z.ZodType<Prisma.WagerCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const WagerUpdateManyMutationInputSchema: z.ZodType<Prisma.WagerUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WagerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WagerUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BonusTypeCreateInputSchema: z.ZodType<Prisma.BonusTypeCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const BonusTypeUncheckedCreateInputSchema: z.ZodType<Prisma.BonusTypeUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const BonusTypeUpdateInputSchema: z.ZodType<Prisma.BonusTypeUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BonusTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.BonusTypeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BonusTypeCreateManyInputSchema: z.ZodType<Prisma.BonusTypeCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const BonusTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.BonusTypeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BonusTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BonusTypeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CasinoTypeCreateInputSchema: z.ZodType<Prisma.CasinoTypeCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const CasinoTypeUncheckedCreateInputSchema: z.ZodType<Prisma.CasinoTypeUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const CasinoTypeUpdateInputSchema: z.ZodType<Prisma.CasinoTypeUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CasinoTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.CasinoTypeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CasinoTypeCreateManyInputSchema: z.ZodType<Prisma.CasinoTypeCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const CasinoTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.CasinoTypeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CasinoTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CasinoTypeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentMethodCreateInputSchema: z.ZodType<Prisma.PaymentMethodCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const PaymentMethodUncheckedCreateInputSchema: z.ZodType<Prisma.PaymentMethodUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const PaymentMethodUpdateInputSchema: z.ZodType<Prisma.PaymentMethodUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentMethodUncheckedUpdateInputSchema: z.ZodType<Prisma.PaymentMethodUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentMethodCreateManyInputSchema: z.ZodType<Prisma.PaymentMethodCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string()
}).strict();

export const PaymentMethodUpdateManyMutationInputSchema: z.ZodType<Prisma.PaymentMethodUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentMethodUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PaymentMethodUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CasinoCreateInputSchema: z.ZodType<Prisma.CasinoCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  href: z.string(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  promoCode: z.lazy(() => PromoCodeSchema),
  paymentMethod: z.lazy(() => PaySchema),
  wager: z.lazy(() => GameWagerSchema),
  bonusType: z.lazy(() => BonusTypesSchema),
  casinoType: z.lazy(() => CasinosTypeSchema)
}).strict();

export const CasinoUncheckedCreateInputSchema: z.ZodType<Prisma.CasinoUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  href: z.string(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  promoCode: z.lazy(() => PromoCodeSchema),
  paymentMethod: z.lazy(() => PaySchema),
  wager: z.lazy(() => GameWagerSchema),
  bonusType: z.lazy(() => BonusTypesSchema),
  casinoType: z.lazy(() => CasinosTypeSchema)
}).strict();

export const CasinoUpdateInputSchema: z.ZodType<Prisma.CasinoUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promoCode: z.union([ z.lazy(() => PromoCodeSchema),z.lazy(() => EnumPromoCodeFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.lazy(() => PaySchema),z.lazy(() => EnumPayFieldUpdateOperationsInputSchema) ]).optional(),
  wager: z.union([ z.lazy(() => GameWagerSchema),z.lazy(() => EnumGameWagerFieldUpdateOperationsInputSchema) ]).optional(),
  bonusType: z.union([ z.lazy(() => BonusTypesSchema),z.lazy(() => EnumBonusTypesFieldUpdateOperationsInputSchema) ]).optional(),
  casinoType: z.union([ z.lazy(() => CasinosTypeSchema),z.lazy(() => EnumCasinosTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CasinoUncheckedUpdateInputSchema: z.ZodType<Prisma.CasinoUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promoCode: z.union([ z.lazy(() => PromoCodeSchema),z.lazy(() => EnumPromoCodeFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.lazy(() => PaySchema),z.lazy(() => EnumPayFieldUpdateOperationsInputSchema) ]).optional(),
  wager: z.union([ z.lazy(() => GameWagerSchema),z.lazy(() => EnumGameWagerFieldUpdateOperationsInputSchema) ]).optional(),
  bonusType: z.union([ z.lazy(() => BonusTypesSchema),z.lazy(() => EnumBonusTypesFieldUpdateOperationsInputSchema) ]).optional(),
  casinoType: z.union([ z.lazy(() => CasinosTypeSchema),z.lazy(() => EnumCasinosTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CasinoCreateManyInputSchema: z.ZodType<Prisma.CasinoCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  href: z.string(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  promoCode: z.lazy(() => PromoCodeSchema),
  paymentMethod: z.lazy(() => PaySchema),
  wager: z.lazy(() => GameWagerSchema),
  bonusType: z.lazy(() => BonusTypesSchema),
  casinoType: z.lazy(() => CasinosTypeSchema)
}).strict();

export const CasinoUpdateManyMutationInputSchema: z.ZodType<Prisma.CasinoUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promoCode: z.union([ z.lazy(() => PromoCodeSchema),z.lazy(() => EnumPromoCodeFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.lazy(() => PaySchema),z.lazy(() => EnumPayFieldUpdateOperationsInputSchema) ]).optional(),
  wager: z.union([ z.lazy(() => GameWagerSchema),z.lazy(() => EnumGameWagerFieldUpdateOperationsInputSchema) ]).optional(),
  bonusType: z.union([ z.lazy(() => BonusTypesSchema),z.lazy(() => EnumBonusTypesFieldUpdateOperationsInputSchema) ]).optional(),
  casinoType: z.union([ z.lazy(() => CasinosTypeSchema),z.lazy(() => EnumCasinosTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CasinoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CasinoUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promoCode: z.union([ z.lazy(() => PromoCodeSchema),z.lazy(() => EnumPromoCodeFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.lazy(() => PaySchema),z.lazy(() => EnumPayFieldUpdateOperationsInputSchema) ]).optional(),
  wager: z.union([ z.lazy(() => GameWagerSchema),z.lazy(() => EnumGameWagerFieldUpdateOperationsInputSchema) ]).optional(),
  bonusType: z.union([ z.lazy(() => BonusTypesSchema),z.lazy(() => EnumBonusTypesFieldUpdateOperationsInputSchema) ]).optional(),
  casinoType: z.union([ z.lazy(() => CasinosTypeSchema),z.lazy(() => EnumCasinosTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdvertSpaceCreateInputSchema: z.ZodType<Prisma.AdvertSpaceCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  secondary: z.boolean().optional(),
  page: z.union([ z.lazy(() => AdvertSpaceCreatepageInputSchema),z.string().array() ]).optional(),
  advert: z.lazy(() => AdvertCreateNestedOneWithoutAdvertSpacesInputSchema).optional()
}).strict();

export const AdvertSpaceUncheckedCreateInputSchema: z.ZodType<Prisma.AdvertSpaceUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  secondary: z.boolean().optional(),
  page: z.union([ z.lazy(() => AdvertSpaceCreatepageInputSchema),z.string().array() ]).optional(),
  advert: z.lazy(() => AdvertUncheckedCreateNestedOneWithoutAdvertSpacesInputSchema).optional()
}).strict();

export const AdvertSpaceUpdateInputSchema: z.ZodType<Prisma.AdvertSpaceUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  secondary: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.union([ z.lazy(() => AdvertSpaceUpdatepageInputSchema),z.string().array() ]).optional(),
  advert: z.lazy(() => AdvertUpdateOneWithoutAdvertSpacesNestedInputSchema).optional()
}).strict();

export const AdvertSpaceUncheckedUpdateInputSchema: z.ZodType<Prisma.AdvertSpaceUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  secondary: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.union([ z.lazy(() => AdvertSpaceUpdatepageInputSchema),z.string().array() ]).optional(),
  advert: z.lazy(() => AdvertUncheckedUpdateOneWithoutAdvertSpacesNestedInputSchema).optional()
}).strict();

export const AdvertSpaceCreateManyInputSchema: z.ZodType<Prisma.AdvertSpaceCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  secondary: z.boolean().optional(),
  page: z.union([ z.lazy(() => AdvertSpaceCreatepageInputSchema),z.string().array() ]).optional(),
}).strict();

export const AdvertSpaceUpdateManyMutationInputSchema: z.ZodType<Prisma.AdvertSpaceUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  secondary: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.union([ z.lazy(() => AdvertSpaceUpdatepageInputSchema),z.string().array() ]).optional(),
}).strict();

export const AdvertSpaceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AdvertSpaceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  secondary: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.union([ z.lazy(() => AdvertSpaceUpdatepageInputSchema),z.string().array() ]).optional(),
}).strict();

export const NotificationCreateInputSchema: z.ZodType<Prisma.NotificationCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable(),
  title: z.string(),
  message: z.string(),
  href: z.string().optional().nullable(),
  type: z.lazy(() => NotificationTypeSchema),
  read: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutNotificationsInputSchema)
}).strict();

export const NotificationUncheckedCreateInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable(),
  title: z.string(),
  message: z.string(),
  href: z.string().optional().nullable(),
  type: z.lazy(() => NotificationTypeSchema),
  read: z.boolean().optional(),
  userId: z.string()
}).strict();

export const NotificationUpdateInputSchema: z.ZodType<Prisma.NotificationUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutNotificationsNestedInputSchema).optional()
}).strict();

export const NotificationUncheckedUpdateInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationCreateManyInputSchema: z.ZodType<Prisma.NotificationCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable(),
  title: z.string(),
  message: z.string(),
  href: z.string().optional().nullable(),
  type: z.lazy(() => NotificationTypeSchema),
  read: z.boolean().optional(),
  userId: z.string()
}).strict();

export const NotificationUpdateManyMutationInputSchema: z.ZodType<Prisma.NotificationUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const EnumRoleFilterSchema: z.ZodType<Prisma.EnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
}).strict();

export const EnumNotificationsAllowedFilterSchema: z.ZodType<Prisma.EnumNotificationsAllowedFilter> = z.object({
  equals: z.lazy(() => NotificationsAllowedSchema).optional(),
  in: z.lazy(() => NotificationsAllowedSchema).array().optional(),
  notIn: z.lazy(() => NotificationsAllowedSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => NestedEnumNotificationsAllowedFilterSchema) ]).optional(),
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const NotificationListRelationFilterSchema: z.ZodType<Prisma.NotificationListRelationFilter> = z.object({
  every: z.lazy(() => NotificationWhereInputSchema).optional(),
  some: z.lazy(() => NotificationWhereInputSchema).optional(),
  none: z.lazy(() => NotificationWhereInputSchema).optional()
}).strict();

export const ResetPasswordTokenListRelationFilterSchema: z.ZodType<Prisma.ResetPasswordTokenListRelationFilter> = z.object({
  every: z.lazy(() => ResetPasswordTokenWhereInputSchema).optional(),
  some: z.lazy(() => ResetPasswordTokenWhereInputSchema).optional(),
  none: z.lazy(() => ResetPasswordTokenWhereInputSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.NotificationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ResetPasswordTokenOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ResetPasswordTokenOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastSignIn: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  email_verified: z.lazy(() => SortOrderSchema).optional(),
  phoneVerified: z.lazy(() => SortOrderSchema).optional(),
  phone_verified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  hashedPassword: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  birthdate: z.lazy(() => SortOrderSchema).optional(),
  passportOrId: z.lazy(() => SortOrderSchema).optional(),
  isMarketingEnabled: z.lazy(() => SortOrderSchema).optional(),
  isVip: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  notificationsAllowed: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastSignIn: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  email_verified: z.lazy(() => SortOrderSchema).optional(),
  phoneVerified: z.lazy(() => SortOrderSchema).optional(),
  phone_verified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  hashedPassword: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  birthdate: z.lazy(() => SortOrderSchema).optional(),
  passportOrId: z.lazy(() => SortOrderSchema).optional(),
  isMarketingEnabled: z.lazy(() => SortOrderSchema).optional(),
  isVip: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  notificationsAllowed: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastSignIn: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  email_verified: z.lazy(() => SortOrderSchema).optional(),
  phoneVerified: z.lazy(() => SortOrderSchema).optional(),
  phone_verified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  hashedPassword: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  birthdate: z.lazy(() => SortOrderSchema).optional(),
  passportOrId: z.lazy(() => SortOrderSchema).optional(),
  isMarketingEnabled: z.lazy(() => SortOrderSchema).optional(),
  isVip: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  notificationsAllowed: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const EnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const EnumNotificationsAllowedWithAggregatesFilterSchema: z.ZodType<Prisma.EnumNotificationsAllowedWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NotificationsAllowedSchema).optional(),
  in: z.lazy(() => NotificationsAllowedSchema).array().optional(),
  notIn: z.lazy(() => NotificationsAllowedSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => NestedEnumNotificationsAllowedWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNotificationsAllowedFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNotificationsAllowedFilterSchema).optional()
}).strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const ResetPasswordTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.ResetPasswordTokenCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  used: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ResetPasswordTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ResetPasswordTokenMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  used: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ResetPasswordTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.ResetPasswordTokenMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  used: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const GameRequirementNullableRelationFilterSchema: z.ZodType<Prisma.GameRequirementNullableRelationFilter> = z.object({
  is: z.lazy(() => GameRequirementWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GameRequirementWhereInputSchema).optional().nullable()
}).strict();

export const GameCountOrderByAggregateInputSchema: z.ZodType<Prisma.GameCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  apiId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  thumbnail: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  gameUrl: z.lazy(() => SortOrderSchema).optional(),
  gameDemoUrl: z.lazy(() => SortOrderSchema).optional(),
  liveGameUrl: z.lazy(() => SortOrderSchema).optional(),
  gameRequirementId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GameAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GameAvgOrderByAggregateInput> = z.object({
  apiId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GameMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GameMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  apiId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  thumbnail: z.lazy(() => SortOrderSchema).optional(),
  gameUrl: z.lazy(() => SortOrderSchema).optional(),
  gameDemoUrl: z.lazy(() => SortOrderSchema).optional(),
  liveGameUrl: z.lazy(() => SortOrderSchema).optional(),
  gameRequirementId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GameMinOrderByAggregateInputSchema: z.ZodType<Prisma.GameMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  apiId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  thumbnail: z.lazy(() => SortOrderSchema).optional(),
  gameUrl: z.lazy(() => SortOrderSchema).optional(),
  gameDemoUrl: z.lazy(() => SortOrderSchema).optional(),
  liveGameUrl: z.lazy(() => SortOrderSchema).optional(),
  gameRequirementId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GameSumOrderByAggregateInputSchema: z.ZodType<Prisma.GameSumOrderByAggregateInput> = z.object({
  apiId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const GameNullableRelationFilterSchema: z.ZodType<Prisma.GameNullableRelationFilter> = z.object({
  is: z.lazy(() => GameWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GameWhereInputSchema).optional().nullable()
}).strict();

export const GameRequirementCountOrderByAggregateInputSchema: z.ZodType<Prisma.GameRequirementCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  reels: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  paylines: z.lazy(() => SortOrderSchema).optional(),
  rtp: z.lazy(() => SortOrderSchema).optional(),
  hitFreq: z.lazy(() => SortOrderSchema).optional(),
  freeSpinsFreq: z.lazy(() => SortOrderSchema).optional(),
  maxWin: z.lazy(() => SortOrderSchema).optional(),
  maxWinProbability: z.lazy(() => SortOrderSchema).optional(),
  volatility: z.lazy(() => SortOrderSchema).optional(),
  minMaxBet: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  features: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  theme: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GameRequirementMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GameRequirementMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  reels: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  paylines: z.lazy(() => SortOrderSchema).optional(),
  rtp: z.lazy(() => SortOrderSchema).optional(),
  hitFreq: z.lazy(() => SortOrderSchema).optional(),
  freeSpinsFreq: z.lazy(() => SortOrderSchema).optional(),
  maxWin: z.lazy(() => SortOrderSchema).optional(),
  maxWinProbability: z.lazy(() => SortOrderSchema).optional(),
  volatility: z.lazy(() => SortOrderSchema).optional(),
  minMaxBet: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  theme: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GameRequirementMinOrderByAggregateInputSchema: z.ZodType<Prisma.GameRequirementMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  reels: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  paylines: z.lazy(() => SortOrderSchema).optional(),
  rtp: z.lazy(() => SortOrderSchema).optional(),
  hitFreq: z.lazy(() => SortOrderSchema).optional(),
  freeSpinsFreq: z.lazy(() => SortOrderSchema).optional(),
  maxWin: z.lazy(() => SortOrderSchema).optional(),
  maxWinProbability: z.lazy(() => SortOrderSchema).optional(),
  volatility: z.lazy(() => SortOrderSchema).optional(),
  minMaxBet: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  theme: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdvertSpaceNullableRelationFilterSchema: z.ZodType<Prisma.AdvertSpaceNullableRelationFilter> = z.object({
  is: z.lazy(() => AdvertSpaceWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AdvertSpaceWhereInputSchema).optional().nullable()
}).strict();

export const AdvertCountOrderByAggregateInputSchema: z.ZodType<Prisma.AdvertCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  promoCode: z.lazy(() => SortOrderSchema).optional(),
  isEnabled: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => SortOrderSchema).optional(),
  to: z.lazy(() => SortOrderSchema).optional(),
  rate: z.lazy(() => SortOrderSchema).optional(),
  collapsed: z.lazy(() => SortOrderSchema).optional(),
  advertSpacesId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdvertMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AdvertMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  promoCode: z.lazy(() => SortOrderSchema).optional(),
  isEnabled: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => SortOrderSchema).optional(),
  to: z.lazy(() => SortOrderSchema).optional(),
  rate: z.lazy(() => SortOrderSchema).optional(),
  collapsed: z.lazy(() => SortOrderSchema).optional(),
  advertSpacesId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdvertMinOrderByAggregateInputSchema: z.ZodType<Prisma.AdvertMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  promoCode: z.lazy(() => SortOrderSchema).optional(),
  isEnabled: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => SortOrderSchema).optional(),
  to: z.lazy(() => SortOrderSchema).optional(),
  rate: z.lazy(() => SortOrderSchema).optional(),
  collapsed: z.lazy(() => SortOrderSchema).optional(),
  advertSpacesId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReelsCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReelsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReelsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReelsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReelsMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReelsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VolatilityCountOrderByAggregateInputSchema: z.ZodType<Prisma.VolatilityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VolatilityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VolatilityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VolatilityMinOrderByAggregateInputSchema: z.ZodType<Prisma.VolatilityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThemeCountOrderByAggregateInputSchema: z.ZodType<Prisma.ThemeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThemeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ThemeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThemeMinOrderByAggregateInputSchema: z.ZodType<Prisma.ThemeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProvidersCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProvidersCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProvidersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProvidersMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProvidersMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProvidersMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FeaturesCountOrderByAggregateInputSchema: z.ZodType<Prisma.FeaturesCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FeaturesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FeaturesMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FeaturesMinOrderByAggregateInputSchema: z.ZodType<Prisma.FeaturesMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WagerCountOrderByAggregateInputSchema: z.ZodType<Prisma.WagerCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WagerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WagerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WagerMinOrderByAggregateInputSchema: z.ZodType<Prisma.WagerMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BonusTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.BonusTypeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BonusTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BonusTypeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BonusTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.BonusTypeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CasinoTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.CasinoTypeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CasinoTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CasinoTypeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CasinoTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.CasinoTypeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentMethodCountOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentMethodCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentMethodMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentMethodMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentMethodMinOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentMethodMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumPromoCodeFilterSchema: z.ZodType<Prisma.EnumPromoCodeFilter> = z.object({
  equals: z.lazy(() => PromoCodeSchema).optional(),
  in: z.lazy(() => PromoCodeSchema).array().optional(),
  notIn: z.lazy(() => PromoCodeSchema).array().optional(),
  not: z.union([ z.lazy(() => PromoCodeSchema),z.lazy(() => NestedEnumPromoCodeFilterSchema) ]).optional(),
}).strict();

export const EnumPayFilterSchema: z.ZodType<Prisma.EnumPayFilter> = z.object({
  equals: z.lazy(() => PaySchema).optional(),
  in: z.lazy(() => PaySchema).array().optional(),
  notIn: z.lazy(() => PaySchema).array().optional(),
  not: z.union([ z.lazy(() => PaySchema),z.lazy(() => NestedEnumPayFilterSchema) ]).optional(),
}).strict();

export const EnumGameWagerFilterSchema: z.ZodType<Prisma.EnumGameWagerFilter> = z.object({
  equals: z.lazy(() => GameWagerSchema).optional(),
  in: z.lazy(() => GameWagerSchema).array().optional(),
  notIn: z.lazy(() => GameWagerSchema).array().optional(),
  not: z.union([ z.lazy(() => GameWagerSchema),z.lazy(() => NestedEnumGameWagerFilterSchema) ]).optional(),
}).strict();

export const EnumBonusTypesFilterSchema: z.ZodType<Prisma.EnumBonusTypesFilter> = z.object({
  equals: z.lazy(() => BonusTypesSchema).optional(),
  in: z.lazy(() => BonusTypesSchema).array().optional(),
  notIn: z.lazy(() => BonusTypesSchema).array().optional(),
  not: z.union([ z.lazy(() => BonusTypesSchema),z.lazy(() => NestedEnumBonusTypesFilterSchema) ]).optional(),
}).strict();

export const EnumCasinosTypeFilterSchema: z.ZodType<Prisma.EnumCasinosTypeFilter> = z.object({
  equals: z.lazy(() => CasinosTypeSchema).optional(),
  in: z.lazy(() => CasinosTypeSchema).array().optional(),
  notIn: z.lazy(() => CasinosTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => CasinosTypeSchema),z.lazy(() => NestedEnumCasinosTypeFilterSchema) ]).optional(),
}).strict();

export const CasinoCountOrderByAggregateInputSchema: z.ZodType<Prisma.CasinoCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  promoCode: z.lazy(() => SortOrderSchema).optional(),
  paymentMethod: z.lazy(() => SortOrderSchema).optional(),
  wager: z.lazy(() => SortOrderSchema).optional(),
  bonusType: z.lazy(() => SortOrderSchema).optional(),
  casinoType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CasinoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CasinoMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  promoCode: z.lazy(() => SortOrderSchema).optional(),
  paymentMethod: z.lazy(() => SortOrderSchema).optional(),
  wager: z.lazy(() => SortOrderSchema).optional(),
  bonusType: z.lazy(() => SortOrderSchema).optional(),
  casinoType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CasinoMinOrderByAggregateInputSchema: z.ZodType<Prisma.CasinoMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  promoCode: z.lazy(() => SortOrderSchema).optional(),
  paymentMethod: z.lazy(() => SortOrderSchema).optional(),
  wager: z.lazy(() => SortOrderSchema).optional(),
  bonusType: z.lazy(() => SortOrderSchema).optional(),
  casinoType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumPromoCodeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPromoCodeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PromoCodeSchema).optional(),
  in: z.lazy(() => PromoCodeSchema).array().optional(),
  notIn: z.lazy(() => PromoCodeSchema).array().optional(),
  not: z.union([ z.lazy(() => PromoCodeSchema),z.lazy(() => NestedEnumPromoCodeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPromoCodeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPromoCodeFilterSchema).optional()
}).strict();

export const EnumPayWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPayWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PaySchema).optional(),
  in: z.lazy(() => PaySchema).array().optional(),
  notIn: z.lazy(() => PaySchema).array().optional(),
  not: z.union([ z.lazy(() => PaySchema),z.lazy(() => NestedEnumPayWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPayFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPayFilterSchema).optional()
}).strict();

export const EnumGameWagerWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGameWagerWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GameWagerSchema).optional(),
  in: z.lazy(() => GameWagerSchema).array().optional(),
  notIn: z.lazy(() => GameWagerSchema).array().optional(),
  not: z.union([ z.lazy(() => GameWagerSchema),z.lazy(() => NestedEnumGameWagerWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGameWagerFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGameWagerFilterSchema).optional()
}).strict();

export const EnumBonusTypesWithAggregatesFilterSchema: z.ZodType<Prisma.EnumBonusTypesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BonusTypesSchema).optional(),
  in: z.lazy(() => BonusTypesSchema).array().optional(),
  notIn: z.lazy(() => BonusTypesSchema).array().optional(),
  not: z.union([ z.lazy(() => BonusTypesSchema),z.lazy(() => NestedEnumBonusTypesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBonusTypesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBonusTypesFilterSchema).optional()
}).strict();

export const EnumCasinosTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCasinosTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CasinosTypeSchema).optional(),
  in: z.lazy(() => CasinosTypeSchema).array().optional(),
  notIn: z.lazy(() => CasinosTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => CasinosTypeSchema),z.lazy(() => NestedEnumCasinosTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCasinosTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCasinosTypeFilterSchema).optional()
}).strict();

export const AdvertNullableRelationFilterSchema: z.ZodType<Prisma.AdvertNullableRelationFilter> = z.object({
  is: z.lazy(() => AdvertWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AdvertWhereInputSchema).optional().nullable()
}).strict();

export const AdvertSpaceCountOrderByAggregateInputSchema: z.ZodType<Prisma.AdvertSpaceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  secondary: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdvertSpaceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AdvertSpaceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  secondary: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdvertSpaceMinOrderByAggregateInputSchema: z.ZodType<Prisma.AdvertSpaceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  secondary: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumNotificationTypeFilterSchema: z.ZodType<Prisma.EnumNotificationTypeFilter> = z.object({
  equals: z.lazy(() => NotificationTypeSchema).optional(),
  in: z.lazy(() => NotificationTypeSchema).array().optional(),
  notIn: z.lazy(() => NotificationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => NestedEnumNotificationTypeFilterSchema) ]).optional(),
}).strict();

export const NotificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumNotificationTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumNotificationTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NotificationTypeSchema).optional(),
  in: z.lazy(() => NotificationTypeSchema).array().optional(),
  notIn: z.lazy(() => NotificationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => NestedEnumNotificationTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNotificationTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNotificationTypeFilterSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ResetPasswordTokenCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ResetPasswordTokenCreateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenCreateWithoutUserInputSchema).array(),z.lazy(() => ResetPasswordTokenUncheckedCreateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResetPasswordTokenCreateOrConnectWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResetPasswordTokenCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ResetPasswordTokenCreateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenCreateWithoutUserInputSchema).array(),z.lazy(() => ResetPasswordTokenUncheckedCreateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResetPasswordTokenCreateOrConnectWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResetPasswordTokenCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();

export const EnumRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoleSchema).optional()
}).strict();

export const EnumNotificationsAllowedFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumNotificationsAllowedFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => NotificationsAllowedSchema).optional()
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ResetPasswordTokenUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ResetPasswordTokenUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResetPasswordTokenCreateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenCreateWithoutUserInputSchema).array(),z.lazy(() => ResetPasswordTokenUncheckedCreateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResetPasswordTokenCreateOrConnectWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResetPasswordTokenCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ResetPasswordTokenUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ResetPasswordTokenScalarWhereInputSchema),z.lazy(() => ResetPasswordTokenScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResetPasswordTokenCreateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenCreateWithoutUserInputSchema).array(),z.lazy(() => ResetPasswordTokenUncheckedCreateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResetPasswordTokenCreateOrConnectWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResetPasswordTokenCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ResetPasswordTokenUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ResetPasswordTokenScalarWhereInputSchema),z.lazy(() => ResetPasswordTokenScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutResetTokensInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutResetTokensInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutResetTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutResetTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutResetTokensInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const UserUpdateOneRequiredWithoutResetTokensNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutResetTokensNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutResetTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutResetTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutResetTokensInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutResetTokensInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutResetTokensInputSchema),z.lazy(() => UserUpdateWithoutResetTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutResetTokensInputSchema) ]).optional(),
}).strict();

export const GameCreateimagesInputSchema: z.ZodType<Prisma.GameCreateimagesInput> = z.object({
  set: z.string().array()
}).strict();

export const GameRequirementCreateNestedOneWithoutGameInputSchema: z.ZodType<Prisma.GameRequirementCreateNestedOneWithoutGameInput> = z.object({
  create: z.union([ z.lazy(() => GameRequirementCreateWithoutGameInputSchema),z.lazy(() => GameRequirementUncheckedCreateWithoutGameInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GameRequirementCreateOrConnectWithoutGameInputSchema).optional(),
  connect: z.lazy(() => GameRequirementWhereUniqueInputSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const GameUpdateimagesInputSchema: z.ZodType<Prisma.GameUpdateimagesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const GameRequirementUpdateOneWithoutGameNestedInputSchema: z.ZodType<Prisma.GameRequirementUpdateOneWithoutGameNestedInput> = z.object({
  create: z.union([ z.lazy(() => GameRequirementCreateWithoutGameInputSchema),z.lazy(() => GameRequirementUncheckedCreateWithoutGameInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GameRequirementCreateOrConnectWithoutGameInputSchema).optional(),
  upsert: z.lazy(() => GameRequirementUpsertWithoutGameInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GameRequirementWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GameRequirementWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GameRequirementWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GameRequirementUpdateToOneWithWhereWithoutGameInputSchema),z.lazy(() => GameRequirementUpdateWithoutGameInputSchema),z.lazy(() => GameRequirementUncheckedUpdateWithoutGameInputSchema) ]).optional(),
}).strict();

export const GameRequirementCreatefeaturesInputSchema: z.ZodType<Prisma.GameRequirementCreatefeaturesInput> = z.object({
  set: z.string().array()
}).strict();

export const GameCreateNestedOneWithoutGameRequirementInputSchema: z.ZodType<Prisma.GameCreateNestedOneWithoutGameRequirementInput> = z.object({
  create: z.union([ z.lazy(() => GameCreateWithoutGameRequirementInputSchema),z.lazy(() => GameUncheckedCreateWithoutGameRequirementInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GameCreateOrConnectWithoutGameRequirementInputSchema).optional(),
  connect: z.lazy(() => GameWhereUniqueInputSchema).optional()
}).strict();

export const GameUncheckedCreateNestedOneWithoutGameRequirementInputSchema: z.ZodType<Prisma.GameUncheckedCreateNestedOneWithoutGameRequirementInput> = z.object({
  create: z.union([ z.lazy(() => GameCreateWithoutGameRequirementInputSchema),z.lazy(() => GameUncheckedCreateWithoutGameRequirementInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GameCreateOrConnectWithoutGameRequirementInputSchema).optional(),
  connect: z.lazy(() => GameWhereUniqueInputSchema).optional()
}).strict();

export const GameRequirementUpdatefeaturesInputSchema: z.ZodType<Prisma.GameRequirementUpdatefeaturesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const GameUpdateOneWithoutGameRequirementNestedInputSchema: z.ZodType<Prisma.GameUpdateOneWithoutGameRequirementNestedInput> = z.object({
  create: z.union([ z.lazy(() => GameCreateWithoutGameRequirementInputSchema),z.lazy(() => GameUncheckedCreateWithoutGameRequirementInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GameCreateOrConnectWithoutGameRequirementInputSchema).optional(),
  upsert: z.lazy(() => GameUpsertWithoutGameRequirementInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GameWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GameWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GameWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GameUpdateToOneWithWhereWithoutGameRequirementInputSchema),z.lazy(() => GameUpdateWithoutGameRequirementInputSchema),z.lazy(() => GameUncheckedUpdateWithoutGameRequirementInputSchema) ]).optional(),
}).strict();

export const GameUncheckedUpdateOneWithoutGameRequirementNestedInputSchema: z.ZodType<Prisma.GameUncheckedUpdateOneWithoutGameRequirementNestedInput> = z.object({
  create: z.union([ z.lazy(() => GameCreateWithoutGameRequirementInputSchema),z.lazy(() => GameUncheckedCreateWithoutGameRequirementInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GameCreateOrConnectWithoutGameRequirementInputSchema).optional(),
  upsert: z.lazy(() => GameUpsertWithoutGameRequirementInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GameWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GameWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GameWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GameUpdateToOneWithWhereWithoutGameRequirementInputSchema),z.lazy(() => GameUpdateWithoutGameRequirementInputSchema),z.lazy(() => GameUncheckedUpdateWithoutGameRequirementInputSchema) ]).optional(),
}).strict();

export const AdvertSpaceCreateNestedOneWithoutAdvertInputSchema: z.ZodType<Prisma.AdvertSpaceCreateNestedOneWithoutAdvertInput> = z.object({
  create: z.union([ z.lazy(() => AdvertSpaceCreateWithoutAdvertInputSchema),z.lazy(() => AdvertSpaceUncheckedCreateWithoutAdvertInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdvertSpaceCreateOrConnectWithoutAdvertInputSchema).optional(),
  connect: z.lazy(() => AdvertSpaceWhereUniqueInputSchema).optional()
}).strict();

export const AdvertSpaceUpdateOneWithoutAdvertNestedInputSchema: z.ZodType<Prisma.AdvertSpaceUpdateOneWithoutAdvertNestedInput> = z.object({
  create: z.union([ z.lazy(() => AdvertSpaceCreateWithoutAdvertInputSchema),z.lazy(() => AdvertSpaceUncheckedCreateWithoutAdvertInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdvertSpaceCreateOrConnectWithoutAdvertInputSchema).optional(),
  upsert: z.lazy(() => AdvertSpaceUpsertWithoutAdvertInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AdvertSpaceWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AdvertSpaceWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AdvertSpaceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AdvertSpaceUpdateToOneWithWhereWithoutAdvertInputSchema),z.lazy(() => AdvertSpaceUpdateWithoutAdvertInputSchema),z.lazy(() => AdvertSpaceUncheckedUpdateWithoutAdvertInputSchema) ]).optional(),
}).strict();

export const EnumPromoCodeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPromoCodeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PromoCodeSchema).optional()
}).strict();

export const EnumPayFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPayFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PaySchema).optional()
}).strict();

export const EnumGameWagerFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGameWagerFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GameWagerSchema).optional()
}).strict();

export const EnumBonusTypesFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBonusTypesFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BonusTypesSchema).optional()
}).strict();

export const EnumCasinosTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCasinosTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CasinosTypeSchema).optional()
}).strict();

export const AdvertSpaceCreatepageInputSchema: z.ZodType<Prisma.AdvertSpaceCreatepageInput> = z.object({
  set: z.string().array()
}).strict();

export const AdvertCreateNestedOneWithoutAdvertSpacesInputSchema: z.ZodType<Prisma.AdvertCreateNestedOneWithoutAdvertSpacesInput> = z.object({
  create: z.union([ z.lazy(() => AdvertCreateWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUncheckedCreateWithoutAdvertSpacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdvertCreateOrConnectWithoutAdvertSpacesInputSchema).optional(),
  connect: z.lazy(() => AdvertWhereUniqueInputSchema).optional()
}).strict();

export const AdvertUncheckedCreateNestedOneWithoutAdvertSpacesInputSchema: z.ZodType<Prisma.AdvertUncheckedCreateNestedOneWithoutAdvertSpacesInput> = z.object({
  create: z.union([ z.lazy(() => AdvertCreateWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUncheckedCreateWithoutAdvertSpacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdvertCreateOrConnectWithoutAdvertSpacesInputSchema).optional(),
  connect: z.lazy(() => AdvertWhereUniqueInputSchema).optional()
}).strict();

export const AdvertSpaceUpdatepageInputSchema: z.ZodType<Prisma.AdvertSpaceUpdatepageInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const AdvertUpdateOneWithoutAdvertSpacesNestedInputSchema: z.ZodType<Prisma.AdvertUpdateOneWithoutAdvertSpacesNestedInput> = z.object({
  create: z.union([ z.lazy(() => AdvertCreateWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUncheckedCreateWithoutAdvertSpacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdvertCreateOrConnectWithoutAdvertSpacesInputSchema).optional(),
  upsert: z.lazy(() => AdvertUpsertWithoutAdvertSpacesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AdvertWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AdvertWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AdvertWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AdvertUpdateToOneWithWhereWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUpdateWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUncheckedUpdateWithoutAdvertSpacesInputSchema) ]).optional(),
}).strict();

export const AdvertUncheckedUpdateOneWithoutAdvertSpacesNestedInputSchema: z.ZodType<Prisma.AdvertUncheckedUpdateOneWithoutAdvertSpacesNestedInput> = z.object({
  create: z.union([ z.lazy(() => AdvertCreateWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUncheckedCreateWithoutAdvertSpacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdvertCreateOrConnectWithoutAdvertSpacesInputSchema).optional(),
  upsert: z.lazy(() => AdvertUpsertWithoutAdvertSpacesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AdvertWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AdvertWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AdvertWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AdvertUpdateToOneWithWhereWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUpdateWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUncheckedUpdateWithoutAdvertSpacesInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const EnumNotificationTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumNotificationTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => NotificationTypeSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutNotificationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutNotificationsInputSchema),z.lazy(() => UserUpdateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumRoleFilterSchema: z.ZodType<Prisma.NestedEnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
}).strict();

export const NestedEnumNotificationsAllowedFilterSchema: z.ZodType<Prisma.NestedEnumNotificationsAllowedFilter> = z.object({
  equals: z.lazy(() => NotificationsAllowedSchema).optional(),
  in: z.lazy(() => NotificationsAllowedSchema).array().optional(),
  notIn: z.lazy(() => NotificationsAllowedSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => NestedEnumNotificationsAllowedFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const NestedEnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const NestedEnumNotificationsAllowedWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumNotificationsAllowedWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NotificationsAllowedSchema).optional(),
  in: z.lazy(() => NotificationsAllowedSchema).array().optional(),
  notIn: z.lazy(() => NotificationsAllowedSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => NestedEnumNotificationsAllowedWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNotificationsAllowedFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNotificationsAllowedFilterSchema).optional()
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedEnumPromoCodeFilterSchema: z.ZodType<Prisma.NestedEnumPromoCodeFilter> = z.object({
  equals: z.lazy(() => PromoCodeSchema).optional(),
  in: z.lazy(() => PromoCodeSchema).array().optional(),
  notIn: z.lazy(() => PromoCodeSchema).array().optional(),
  not: z.union([ z.lazy(() => PromoCodeSchema),z.lazy(() => NestedEnumPromoCodeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumPayFilterSchema: z.ZodType<Prisma.NestedEnumPayFilter> = z.object({
  equals: z.lazy(() => PaySchema).optional(),
  in: z.lazy(() => PaySchema).array().optional(),
  notIn: z.lazy(() => PaySchema).array().optional(),
  not: z.union([ z.lazy(() => PaySchema),z.lazy(() => NestedEnumPayFilterSchema) ]).optional(),
}).strict();

export const NestedEnumGameWagerFilterSchema: z.ZodType<Prisma.NestedEnumGameWagerFilter> = z.object({
  equals: z.lazy(() => GameWagerSchema).optional(),
  in: z.lazy(() => GameWagerSchema).array().optional(),
  notIn: z.lazy(() => GameWagerSchema).array().optional(),
  not: z.union([ z.lazy(() => GameWagerSchema),z.lazy(() => NestedEnumGameWagerFilterSchema) ]).optional(),
}).strict();

export const NestedEnumBonusTypesFilterSchema: z.ZodType<Prisma.NestedEnumBonusTypesFilter> = z.object({
  equals: z.lazy(() => BonusTypesSchema).optional(),
  in: z.lazy(() => BonusTypesSchema).array().optional(),
  notIn: z.lazy(() => BonusTypesSchema).array().optional(),
  not: z.union([ z.lazy(() => BonusTypesSchema),z.lazy(() => NestedEnumBonusTypesFilterSchema) ]).optional(),
}).strict();

export const NestedEnumCasinosTypeFilterSchema: z.ZodType<Prisma.NestedEnumCasinosTypeFilter> = z.object({
  equals: z.lazy(() => CasinosTypeSchema).optional(),
  in: z.lazy(() => CasinosTypeSchema).array().optional(),
  notIn: z.lazy(() => CasinosTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => CasinosTypeSchema),z.lazy(() => NestedEnumCasinosTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumPromoCodeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPromoCodeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PromoCodeSchema).optional(),
  in: z.lazy(() => PromoCodeSchema).array().optional(),
  notIn: z.lazy(() => PromoCodeSchema).array().optional(),
  not: z.union([ z.lazy(() => PromoCodeSchema),z.lazy(() => NestedEnumPromoCodeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPromoCodeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPromoCodeFilterSchema).optional()
}).strict();

export const NestedEnumPayWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPayWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PaySchema).optional(),
  in: z.lazy(() => PaySchema).array().optional(),
  notIn: z.lazy(() => PaySchema).array().optional(),
  not: z.union([ z.lazy(() => PaySchema),z.lazy(() => NestedEnumPayWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPayFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPayFilterSchema).optional()
}).strict();

export const NestedEnumGameWagerWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGameWagerWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GameWagerSchema).optional(),
  in: z.lazy(() => GameWagerSchema).array().optional(),
  notIn: z.lazy(() => GameWagerSchema).array().optional(),
  not: z.union([ z.lazy(() => GameWagerSchema),z.lazy(() => NestedEnumGameWagerWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGameWagerFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGameWagerFilterSchema).optional()
}).strict();

export const NestedEnumBonusTypesWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBonusTypesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BonusTypesSchema).optional(),
  in: z.lazy(() => BonusTypesSchema).array().optional(),
  notIn: z.lazy(() => BonusTypesSchema).array().optional(),
  not: z.union([ z.lazy(() => BonusTypesSchema),z.lazy(() => NestedEnumBonusTypesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBonusTypesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBonusTypesFilterSchema).optional()
}).strict();

export const NestedEnumCasinosTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCasinosTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CasinosTypeSchema).optional(),
  in: z.lazy(() => CasinosTypeSchema).array().optional(),
  notIn: z.lazy(() => CasinosTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => CasinosTypeSchema),z.lazy(() => NestedEnumCasinosTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCasinosTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCasinosTypeFilterSchema).optional()
}).strict();

export const NestedEnumNotificationTypeFilterSchema: z.ZodType<Prisma.NestedEnumNotificationTypeFilter> = z.object({
  equals: z.lazy(() => NotificationTypeSchema).optional(),
  in: z.lazy(() => NotificationTypeSchema).array().optional(),
  notIn: z.lazy(() => NotificationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => NestedEnumNotificationTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumNotificationTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumNotificationTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NotificationTypeSchema).optional(),
  in: z.lazy(() => NotificationTypeSchema).array().optional(),
  notIn: z.lazy(() => NotificationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => NestedEnumNotificationTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNotificationTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNotificationTypeFilterSchema).optional()
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastSignIn: z.coerce.date().optional().nullable(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  phone_verified: z.boolean().optional().nullable(),
  image: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  birthdate: z.coerce.date().optional().nullable(),
  passportOrId: z.string().optional().nullable(),
  isMarketingEnabled: z.boolean().optional().nullable(),
  isVip: z.boolean().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  notificationsAllowed: z.lazy(() => NotificationsAllowedSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastSignIn: z.coerce.date().optional().nullable(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  phone_verified: z.boolean().optional().nullable(),
  image: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  birthdate: z.coerce.date().optional().nullable(),
  passportOrId: z.string().optional().nullable(),
  isMarketingEnabled: z.boolean().optional().nullable(),
  isVip: z.boolean().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  notificationsAllowed: z.lazy(() => NotificationsAllowedSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastSignIn: z.coerce.date().optional().nullable(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  phone_verified: z.boolean().optional().nullable(),
  image: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  birthdate: z.coerce.date().optional().nullable(),
  passportOrId: z.string().optional().nullable(),
  isMarketingEnabled: z.boolean().optional().nullable(),
  isVip: z.boolean().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  notificationsAllowed: z.lazy(() => NotificationsAllowedSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastSignIn: z.coerce.date().optional().nullable(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  phone_verified: z.boolean().optional().nullable(),
  image: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  birthdate: z.coerce.date().optional().nullable(),
  passportOrId: z.string().optional().nullable(),
  isMarketingEnabled: z.boolean().optional().nullable(),
  isVip: z.boolean().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  notificationsAllowed: z.lazy(() => NotificationsAllowedSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const NotificationCreateWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable(),
  title: z.string(),
  message: z.string(),
  href: z.string().optional().nullable(),
  type: z.lazy(() => NotificationTypeSchema),
  read: z.boolean().optional()
}).strict();

export const NotificationUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable(),
  title: z.string(),
  message: z.string(),
  href: z.string().optional().nullable(),
  type: z.lazy(() => NotificationTypeSchema),
  read: z.boolean().optional()
}).strict();

export const NotificationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const NotificationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationCreateManyUserInputSchema),z.lazy(() => NotificationCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ResetPasswordTokenCreateWithoutUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  used: z.boolean().optional()
}).strict();

export const ResetPasswordTokenUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  used: z.boolean().optional()
}).strict();

export const ResetPasswordTokenCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResetPasswordTokenCreateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ResetPasswordTokenCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ResetPasswordTokenCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ResetPasswordTokenCreateManyUserInputSchema),z.lazy(() => ResetPasswordTokenCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const NotificationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const NotificationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const NotificationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const NotificationScalarWhereInputSchema: z.ZodType<Prisma.NotificationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  href: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumNotificationTypeFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ResetPasswordTokenUpdateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ResetPasswordTokenCreateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ResetPasswordTokenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ResetPasswordTokenUpdateWithoutUserInputSchema),z.lazy(() => ResetPasswordTokenUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ResetPasswordTokenUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ResetPasswordTokenScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ResetPasswordTokenUpdateManyMutationInputSchema),z.lazy(() => ResetPasswordTokenUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const ResetPasswordTokenScalarWhereInputSchema: z.ZodType<Prisma.ResetPasswordTokenScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ResetPasswordTokenScalarWhereInputSchema),z.lazy(() => ResetPasswordTokenScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResetPasswordTokenScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResetPasswordTokenScalarWhereInputSchema),z.lazy(() => ResetPasswordTokenScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  used: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutResetTokensInputSchema: z.ZodType<Prisma.UserCreateWithoutResetTokensInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastSignIn: z.coerce.date().optional().nullable(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  phone_verified: z.boolean().optional().nullable(),
  image: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  birthdate: z.coerce.date().optional().nullable(),
  passportOrId: z.string().optional().nullable(),
  isMarketingEnabled: z.boolean().optional().nullable(),
  isVip: z.boolean().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  notificationsAllowed: z.lazy(() => NotificationsAllowedSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutResetTokensInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutResetTokensInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastSignIn: z.coerce.date().optional().nullable(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  phone_verified: z.boolean().optional().nullable(),
  image: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  birthdate: z.coerce.date().optional().nullable(),
  passportOrId: z.string().optional().nullable(),
  isMarketingEnabled: z.boolean().optional().nullable(),
  isVip: z.boolean().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  notificationsAllowed: z.lazy(() => NotificationsAllowedSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutResetTokensInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutResetTokensInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutResetTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutResetTokensInputSchema) ]),
}).strict();

export const UserUpsertWithoutResetTokensInputSchema: z.ZodType<Prisma.UserUpsertWithoutResetTokensInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutResetTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutResetTokensInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutResetTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutResetTokensInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutResetTokensInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutResetTokensInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutResetTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutResetTokensInputSchema) ]),
}).strict();

export const UserUpdateWithoutResetTokensInputSchema: z.ZodType<Prisma.UserUpdateWithoutResetTokensInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutResetTokensInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutResetTokensInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const GameRequirementCreateWithoutGameInputSchema: z.ZodType<Prisma.GameRequirementCreateWithoutGameInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().optional().nullable(),
  reels: z.string(),
  rows: z.string(),
  paylines: z.string(),
  rtp: z.string(),
  hitFreq: z.string(),
  freeSpinsFreq: z.string(),
  maxWin: z.string(),
  maxWinProbability: z.string(),
  volatility: z.string(),
  minMaxBet: z.string(),
  releaseDate: z.coerce.date(),
  features: z.union([ z.lazy(() => GameRequirementCreatefeaturesInputSchema),z.string().array() ]).optional(),
  provider: z.string(),
  theme: z.string()
}).strict();

export const GameRequirementUncheckedCreateWithoutGameInputSchema: z.ZodType<Prisma.GameRequirementUncheckedCreateWithoutGameInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().optional().nullable(),
  reels: z.string(),
  rows: z.string(),
  paylines: z.string(),
  rtp: z.string(),
  hitFreq: z.string(),
  freeSpinsFreq: z.string(),
  maxWin: z.string(),
  maxWinProbability: z.string(),
  volatility: z.string(),
  minMaxBet: z.string(),
  releaseDate: z.coerce.date(),
  features: z.union([ z.lazy(() => GameRequirementCreatefeaturesInputSchema),z.string().array() ]).optional(),
  provider: z.string(),
  theme: z.string()
}).strict();

export const GameRequirementCreateOrConnectWithoutGameInputSchema: z.ZodType<Prisma.GameRequirementCreateOrConnectWithoutGameInput> = z.object({
  where: z.lazy(() => GameRequirementWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GameRequirementCreateWithoutGameInputSchema),z.lazy(() => GameRequirementUncheckedCreateWithoutGameInputSchema) ]),
}).strict();

export const GameRequirementUpsertWithoutGameInputSchema: z.ZodType<Prisma.GameRequirementUpsertWithoutGameInput> = z.object({
  update: z.union([ z.lazy(() => GameRequirementUpdateWithoutGameInputSchema),z.lazy(() => GameRequirementUncheckedUpdateWithoutGameInputSchema) ]),
  create: z.union([ z.lazy(() => GameRequirementCreateWithoutGameInputSchema),z.lazy(() => GameRequirementUncheckedCreateWithoutGameInputSchema) ]),
  where: z.lazy(() => GameRequirementWhereInputSchema).optional()
}).strict();

export const GameRequirementUpdateToOneWithWhereWithoutGameInputSchema: z.ZodType<Prisma.GameRequirementUpdateToOneWithWhereWithoutGameInput> = z.object({
  where: z.lazy(() => GameRequirementWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GameRequirementUpdateWithoutGameInputSchema),z.lazy(() => GameRequirementUncheckedUpdateWithoutGameInputSchema) ]),
}).strict();

export const GameRequirementUpdateWithoutGameInputSchema: z.ZodType<Prisma.GameRequirementUpdateWithoutGameInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reels: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paylines: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rtp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hitFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  freeSpinsFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWinProbability: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  volatility: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minMaxBet: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  features: z.union([ z.lazy(() => GameRequirementUpdatefeaturesInputSchema),z.string().array() ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  theme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GameRequirementUncheckedUpdateWithoutGameInputSchema: z.ZodType<Prisma.GameRequirementUncheckedUpdateWithoutGameInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reels: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  paylines: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rtp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hitFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  freeSpinsFreq: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maxWinProbability: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  volatility: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minMaxBet: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  features: z.union([ z.lazy(() => GameRequirementUpdatefeaturesInputSchema),z.string().array() ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  theme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GameCreateWithoutGameRequirementInputSchema: z.ZodType<Prisma.GameCreateWithoutGameRequirementInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  apiId: z.number().int(),
  name: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  images: z.union([ z.lazy(() => GameCreateimagesInputSchema),z.string().array() ]).optional(),
  gameUrl: z.string(),
  gameDemoUrl: z.string(),
  liveGameUrl: z.string()
}).strict();

export const GameUncheckedCreateWithoutGameRequirementInputSchema: z.ZodType<Prisma.GameUncheckedCreateWithoutGameRequirementInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  apiId: z.number().int(),
  name: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  images: z.union([ z.lazy(() => GameCreateimagesInputSchema),z.string().array() ]).optional(),
  gameUrl: z.string(),
  gameDemoUrl: z.string(),
  liveGameUrl: z.string()
}).strict();

export const GameCreateOrConnectWithoutGameRequirementInputSchema: z.ZodType<Prisma.GameCreateOrConnectWithoutGameRequirementInput> = z.object({
  where: z.lazy(() => GameWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GameCreateWithoutGameRequirementInputSchema),z.lazy(() => GameUncheckedCreateWithoutGameRequirementInputSchema) ]),
}).strict();

export const GameUpsertWithoutGameRequirementInputSchema: z.ZodType<Prisma.GameUpsertWithoutGameRequirementInput> = z.object({
  update: z.union([ z.lazy(() => GameUpdateWithoutGameRequirementInputSchema),z.lazy(() => GameUncheckedUpdateWithoutGameRequirementInputSchema) ]),
  create: z.union([ z.lazy(() => GameCreateWithoutGameRequirementInputSchema),z.lazy(() => GameUncheckedCreateWithoutGameRequirementInputSchema) ]),
  where: z.lazy(() => GameWhereInputSchema).optional()
}).strict();

export const GameUpdateToOneWithWhereWithoutGameRequirementInputSchema: z.ZodType<Prisma.GameUpdateToOneWithWhereWithoutGameRequirementInput> = z.object({
  where: z.lazy(() => GameWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GameUpdateWithoutGameRequirementInputSchema),z.lazy(() => GameUncheckedUpdateWithoutGameRequirementInputSchema) ]),
}).strict();

export const GameUpdateWithoutGameRequirementInputSchema: z.ZodType<Prisma.GameUpdateWithoutGameRequirementInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  apiId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.lazy(() => GameUpdateimagesInputSchema),z.string().array() ]).optional(),
  gameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gameDemoUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  liveGameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GameUncheckedUpdateWithoutGameRequirementInputSchema: z.ZodType<Prisma.GameUncheckedUpdateWithoutGameRequirementInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  apiId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.lazy(() => GameUpdateimagesInputSchema),z.string().array() ]).optional(),
  gameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gameDemoUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  liveGameUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdvertSpaceCreateWithoutAdvertInputSchema: z.ZodType<Prisma.AdvertSpaceCreateWithoutAdvertInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  secondary: z.boolean().optional(),
  page: z.union([ z.lazy(() => AdvertSpaceCreatepageInputSchema),z.string().array() ]).optional(),
}).strict();

export const AdvertSpaceUncheckedCreateWithoutAdvertInputSchema: z.ZodType<Prisma.AdvertSpaceUncheckedCreateWithoutAdvertInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  secondary: z.boolean().optional(),
  page: z.union([ z.lazy(() => AdvertSpaceCreatepageInputSchema),z.string().array() ]).optional(),
}).strict();

export const AdvertSpaceCreateOrConnectWithoutAdvertInputSchema: z.ZodType<Prisma.AdvertSpaceCreateOrConnectWithoutAdvertInput> = z.object({
  where: z.lazy(() => AdvertSpaceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AdvertSpaceCreateWithoutAdvertInputSchema),z.lazy(() => AdvertSpaceUncheckedCreateWithoutAdvertInputSchema) ]),
}).strict();

export const AdvertSpaceUpsertWithoutAdvertInputSchema: z.ZodType<Prisma.AdvertSpaceUpsertWithoutAdvertInput> = z.object({
  update: z.union([ z.lazy(() => AdvertSpaceUpdateWithoutAdvertInputSchema),z.lazy(() => AdvertSpaceUncheckedUpdateWithoutAdvertInputSchema) ]),
  create: z.union([ z.lazy(() => AdvertSpaceCreateWithoutAdvertInputSchema),z.lazy(() => AdvertSpaceUncheckedCreateWithoutAdvertInputSchema) ]),
  where: z.lazy(() => AdvertSpaceWhereInputSchema).optional()
}).strict();

export const AdvertSpaceUpdateToOneWithWhereWithoutAdvertInputSchema: z.ZodType<Prisma.AdvertSpaceUpdateToOneWithWhereWithoutAdvertInput> = z.object({
  where: z.lazy(() => AdvertSpaceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AdvertSpaceUpdateWithoutAdvertInputSchema),z.lazy(() => AdvertSpaceUncheckedUpdateWithoutAdvertInputSchema) ]),
}).strict();

export const AdvertSpaceUpdateWithoutAdvertInputSchema: z.ZodType<Prisma.AdvertSpaceUpdateWithoutAdvertInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  secondary: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.union([ z.lazy(() => AdvertSpaceUpdatepageInputSchema),z.string().array() ]).optional(),
}).strict();

export const AdvertSpaceUncheckedUpdateWithoutAdvertInputSchema: z.ZodType<Prisma.AdvertSpaceUncheckedUpdateWithoutAdvertInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  secondary: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.union([ z.lazy(() => AdvertSpaceUpdatepageInputSchema),z.string().array() ]).optional(),
}).strict();

export const AdvertCreateWithoutAdvertSpacesInputSchema: z.ZodType<Prisma.AdvertCreateWithoutAdvertSpacesInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  href: z.string(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  promoCode: z.string().optional().nullable(),
  isEnabled: z.boolean().optional(),
  from: z.coerce.date().optional().nullable(),
  to: z.coerce.date().optional().nullable(),
  rate: z.string().optional().nullable(),
  collapsed: z.boolean().optional()
}).strict();

export const AdvertUncheckedCreateWithoutAdvertSpacesInputSchema: z.ZodType<Prisma.AdvertUncheckedCreateWithoutAdvertSpacesInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  href: z.string(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  promoCode: z.string().optional().nullable(),
  isEnabled: z.boolean().optional(),
  from: z.coerce.date().optional().nullable(),
  to: z.coerce.date().optional().nullable(),
  rate: z.string().optional().nullable(),
  collapsed: z.boolean().optional()
}).strict();

export const AdvertCreateOrConnectWithoutAdvertSpacesInputSchema: z.ZodType<Prisma.AdvertCreateOrConnectWithoutAdvertSpacesInput> = z.object({
  where: z.lazy(() => AdvertWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AdvertCreateWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUncheckedCreateWithoutAdvertSpacesInputSchema) ]),
}).strict();

export const AdvertUpsertWithoutAdvertSpacesInputSchema: z.ZodType<Prisma.AdvertUpsertWithoutAdvertSpacesInput> = z.object({
  update: z.union([ z.lazy(() => AdvertUpdateWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUncheckedUpdateWithoutAdvertSpacesInputSchema) ]),
  create: z.union([ z.lazy(() => AdvertCreateWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUncheckedCreateWithoutAdvertSpacesInputSchema) ]),
  where: z.lazy(() => AdvertWhereInputSchema).optional()
}).strict();

export const AdvertUpdateToOneWithWhereWithoutAdvertSpacesInputSchema: z.ZodType<Prisma.AdvertUpdateToOneWithWhereWithoutAdvertSpacesInput> = z.object({
  where: z.lazy(() => AdvertWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AdvertUpdateWithoutAdvertSpacesInputSchema),z.lazy(() => AdvertUncheckedUpdateWithoutAdvertSpacesInputSchema) ]),
}).strict();

export const AdvertUpdateWithoutAdvertSpacesInputSchema: z.ZodType<Prisma.AdvertUpdateWithoutAdvertSpacesInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promoCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  to: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rate: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collapsed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdvertUncheckedUpdateWithoutAdvertSpacesInputSchema: z.ZodType<Prisma.AdvertUncheckedUpdateWithoutAdvertSpacesInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promoCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  to: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rate: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collapsed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateWithoutNotificationsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastSignIn: z.coerce.date().optional().nullable(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  phone_verified: z.boolean().optional().nullable(),
  image: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  birthdate: z.coerce.date().optional().nullable(),
  passportOrId: z.string().optional().nullable(),
  isMarketingEnabled: z.boolean().optional().nullable(),
  isVip: z.boolean().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  notificationsAllowed: z.lazy(() => NotificationsAllowedSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutNotificationsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastSignIn: z.coerce.date().optional().nullable(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  phone_verified: z.boolean().optional().nullable(),
  image: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  birthdate: z.coerce.date().optional().nullable(),
  passportOrId: z.string().optional().nullable(),
  isMarketingEnabled: z.boolean().optional().nullable(),
  isVip: z.boolean().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  notificationsAllowed: z.lazy(() => NotificationsAllowedSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]),
}).strict();

export const UserUpsertWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutNotificationsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema) ]),
}).strict();

export const UserUpdateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpdateWithoutNotificationsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutNotificationsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSignIn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hashedPassword: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  passportOrId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isMarketingEnabled: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isVip: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsAllowed: z.union([ z.lazy(() => NotificationsAllowedSchema),z.lazy(() => EnumNotificationsAllowedFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  resetTokens: z.lazy(() => ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const NotificationCreateManyUserInputSchema: z.ZodType<Prisma.NotificationCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable(),
  title: z.string(),
  message: z.string(),
  href: z.string().optional().nullable(),
  type: z.lazy(() => NotificationTypeSchema),
  read: z.boolean().optional()
}).strict();

export const ResetPasswordTokenCreateManyUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  used: z.boolean().optional()
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const NotificationUpdateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ResetPasswordTokenUpdateWithoutUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  used: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ResetPasswordTokenUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  used: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ResetPasswordTokenUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.ResetPasswordTokenUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  used: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindManyArgsSchema: z.ZodType<Prisma.VerificationTokenFindManyArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenAggregateArgsSchema: z.ZodType<Prisma.VerificationTokenAggregateArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenGroupByArgsSchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithAggregationInputSchema.array(),VerificationTokenOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationTokenScalarFieldEnumSchema.array(),
  having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const ResetPasswordTokenFindFirstArgsSchema: z.ZodType<Prisma.ResetPasswordTokenFindFirstArgs> = z.object({
  select: ResetPasswordTokenSelectSchema.optional(),
  include: ResetPasswordTokenIncludeSchema.optional(),
  where: ResetPasswordTokenWhereInputSchema.optional(),
  orderBy: z.union([ ResetPasswordTokenOrderByWithRelationInputSchema.array(),ResetPasswordTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: ResetPasswordTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ResetPasswordTokenScalarFieldEnumSchema,ResetPasswordTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ResetPasswordTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ResetPasswordTokenFindFirstOrThrowArgs> = z.object({
  select: ResetPasswordTokenSelectSchema.optional(),
  include: ResetPasswordTokenIncludeSchema.optional(),
  where: ResetPasswordTokenWhereInputSchema.optional(),
  orderBy: z.union([ ResetPasswordTokenOrderByWithRelationInputSchema.array(),ResetPasswordTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: ResetPasswordTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ResetPasswordTokenScalarFieldEnumSchema,ResetPasswordTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ResetPasswordTokenFindManyArgsSchema: z.ZodType<Prisma.ResetPasswordTokenFindManyArgs> = z.object({
  select: ResetPasswordTokenSelectSchema.optional(),
  include: ResetPasswordTokenIncludeSchema.optional(),
  where: ResetPasswordTokenWhereInputSchema.optional(),
  orderBy: z.union([ ResetPasswordTokenOrderByWithRelationInputSchema.array(),ResetPasswordTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: ResetPasswordTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ResetPasswordTokenScalarFieldEnumSchema,ResetPasswordTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ResetPasswordTokenAggregateArgsSchema: z.ZodType<Prisma.ResetPasswordTokenAggregateArgs> = z.object({
  where: ResetPasswordTokenWhereInputSchema.optional(),
  orderBy: z.union([ ResetPasswordTokenOrderByWithRelationInputSchema.array(),ResetPasswordTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: ResetPasswordTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ResetPasswordTokenGroupByArgsSchema: z.ZodType<Prisma.ResetPasswordTokenGroupByArgs> = z.object({
  where: ResetPasswordTokenWhereInputSchema.optional(),
  orderBy: z.union([ ResetPasswordTokenOrderByWithAggregationInputSchema.array(),ResetPasswordTokenOrderByWithAggregationInputSchema ]).optional(),
  by: ResetPasswordTokenScalarFieldEnumSchema.array(),
  having: ResetPasswordTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ResetPasswordTokenFindUniqueArgsSchema: z.ZodType<Prisma.ResetPasswordTokenFindUniqueArgs> = z.object({
  select: ResetPasswordTokenSelectSchema.optional(),
  include: ResetPasswordTokenIncludeSchema.optional(),
  where: ResetPasswordTokenWhereUniqueInputSchema,
}).strict() ;

export const ResetPasswordTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ResetPasswordTokenFindUniqueOrThrowArgs> = z.object({
  select: ResetPasswordTokenSelectSchema.optional(),
  include: ResetPasswordTokenIncludeSchema.optional(),
  where: ResetPasswordTokenWhereUniqueInputSchema,
}).strict() ;

export const GameFindFirstArgsSchema: z.ZodType<Prisma.GameFindFirstArgs> = z.object({
  select: GameSelectSchema.optional(),
  include: GameIncludeSchema.optional(),
  where: GameWhereInputSchema.optional(),
  orderBy: z.union([ GameOrderByWithRelationInputSchema.array(),GameOrderByWithRelationInputSchema ]).optional(),
  cursor: GameWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GameScalarFieldEnumSchema,GameScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GameFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GameFindFirstOrThrowArgs> = z.object({
  select: GameSelectSchema.optional(),
  include: GameIncludeSchema.optional(),
  where: GameWhereInputSchema.optional(),
  orderBy: z.union([ GameOrderByWithRelationInputSchema.array(),GameOrderByWithRelationInputSchema ]).optional(),
  cursor: GameWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GameScalarFieldEnumSchema,GameScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GameFindManyArgsSchema: z.ZodType<Prisma.GameFindManyArgs> = z.object({
  select: GameSelectSchema.optional(),
  include: GameIncludeSchema.optional(),
  where: GameWhereInputSchema.optional(),
  orderBy: z.union([ GameOrderByWithRelationInputSchema.array(),GameOrderByWithRelationInputSchema ]).optional(),
  cursor: GameWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GameScalarFieldEnumSchema,GameScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GameAggregateArgsSchema: z.ZodType<Prisma.GameAggregateArgs> = z.object({
  where: GameWhereInputSchema.optional(),
  orderBy: z.union([ GameOrderByWithRelationInputSchema.array(),GameOrderByWithRelationInputSchema ]).optional(),
  cursor: GameWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GameGroupByArgsSchema: z.ZodType<Prisma.GameGroupByArgs> = z.object({
  where: GameWhereInputSchema.optional(),
  orderBy: z.union([ GameOrderByWithAggregationInputSchema.array(),GameOrderByWithAggregationInputSchema ]).optional(),
  by: GameScalarFieldEnumSchema.array(),
  having: GameScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GameFindUniqueArgsSchema: z.ZodType<Prisma.GameFindUniqueArgs> = z.object({
  select: GameSelectSchema.optional(),
  include: GameIncludeSchema.optional(),
  where: GameWhereUniqueInputSchema,
}).strict() ;

export const GameFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GameFindUniqueOrThrowArgs> = z.object({
  select: GameSelectSchema.optional(),
  include: GameIncludeSchema.optional(),
  where: GameWhereUniqueInputSchema,
}).strict() ;

export const GameRequirementFindFirstArgsSchema: z.ZodType<Prisma.GameRequirementFindFirstArgs> = z.object({
  select: GameRequirementSelectSchema.optional(),
  include: GameRequirementIncludeSchema.optional(),
  where: GameRequirementWhereInputSchema.optional(),
  orderBy: z.union([ GameRequirementOrderByWithRelationInputSchema.array(),GameRequirementOrderByWithRelationInputSchema ]).optional(),
  cursor: GameRequirementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GameRequirementScalarFieldEnumSchema,GameRequirementScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GameRequirementFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GameRequirementFindFirstOrThrowArgs> = z.object({
  select: GameRequirementSelectSchema.optional(),
  include: GameRequirementIncludeSchema.optional(),
  where: GameRequirementWhereInputSchema.optional(),
  orderBy: z.union([ GameRequirementOrderByWithRelationInputSchema.array(),GameRequirementOrderByWithRelationInputSchema ]).optional(),
  cursor: GameRequirementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GameRequirementScalarFieldEnumSchema,GameRequirementScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GameRequirementFindManyArgsSchema: z.ZodType<Prisma.GameRequirementFindManyArgs> = z.object({
  select: GameRequirementSelectSchema.optional(),
  include: GameRequirementIncludeSchema.optional(),
  where: GameRequirementWhereInputSchema.optional(),
  orderBy: z.union([ GameRequirementOrderByWithRelationInputSchema.array(),GameRequirementOrderByWithRelationInputSchema ]).optional(),
  cursor: GameRequirementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GameRequirementScalarFieldEnumSchema,GameRequirementScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GameRequirementAggregateArgsSchema: z.ZodType<Prisma.GameRequirementAggregateArgs> = z.object({
  where: GameRequirementWhereInputSchema.optional(),
  orderBy: z.union([ GameRequirementOrderByWithRelationInputSchema.array(),GameRequirementOrderByWithRelationInputSchema ]).optional(),
  cursor: GameRequirementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GameRequirementGroupByArgsSchema: z.ZodType<Prisma.GameRequirementGroupByArgs> = z.object({
  where: GameRequirementWhereInputSchema.optional(),
  orderBy: z.union([ GameRequirementOrderByWithAggregationInputSchema.array(),GameRequirementOrderByWithAggregationInputSchema ]).optional(),
  by: GameRequirementScalarFieldEnumSchema.array(),
  having: GameRequirementScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GameRequirementFindUniqueArgsSchema: z.ZodType<Prisma.GameRequirementFindUniqueArgs> = z.object({
  select: GameRequirementSelectSchema.optional(),
  include: GameRequirementIncludeSchema.optional(),
  where: GameRequirementWhereUniqueInputSchema,
}).strict() ;

export const GameRequirementFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GameRequirementFindUniqueOrThrowArgs> = z.object({
  select: GameRequirementSelectSchema.optional(),
  include: GameRequirementIncludeSchema.optional(),
  where: GameRequirementWhereUniqueInputSchema,
}).strict() ;

export const AdvertFindFirstArgsSchema: z.ZodType<Prisma.AdvertFindFirstArgs> = z.object({
  select: AdvertSelectSchema.optional(),
  include: AdvertIncludeSchema.optional(),
  where: AdvertWhereInputSchema.optional(),
  orderBy: z.union([ AdvertOrderByWithRelationInputSchema.array(),AdvertOrderByWithRelationInputSchema ]).optional(),
  cursor: AdvertWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdvertScalarFieldEnumSchema,AdvertScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdvertFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AdvertFindFirstOrThrowArgs> = z.object({
  select: AdvertSelectSchema.optional(),
  include: AdvertIncludeSchema.optional(),
  where: AdvertWhereInputSchema.optional(),
  orderBy: z.union([ AdvertOrderByWithRelationInputSchema.array(),AdvertOrderByWithRelationInputSchema ]).optional(),
  cursor: AdvertWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdvertScalarFieldEnumSchema,AdvertScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdvertFindManyArgsSchema: z.ZodType<Prisma.AdvertFindManyArgs> = z.object({
  select: AdvertSelectSchema.optional(),
  include: AdvertIncludeSchema.optional(),
  where: AdvertWhereInputSchema.optional(),
  orderBy: z.union([ AdvertOrderByWithRelationInputSchema.array(),AdvertOrderByWithRelationInputSchema ]).optional(),
  cursor: AdvertWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdvertScalarFieldEnumSchema,AdvertScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdvertAggregateArgsSchema: z.ZodType<Prisma.AdvertAggregateArgs> = z.object({
  where: AdvertWhereInputSchema.optional(),
  orderBy: z.union([ AdvertOrderByWithRelationInputSchema.array(),AdvertOrderByWithRelationInputSchema ]).optional(),
  cursor: AdvertWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AdvertGroupByArgsSchema: z.ZodType<Prisma.AdvertGroupByArgs> = z.object({
  where: AdvertWhereInputSchema.optional(),
  orderBy: z.union([ AdvertOrderByWithAggregationInputSchema.array(),AdvertOrderByWithAggregationInputSchema ]).optional(),
  by: AdvertScalarFieldEnumSchema.array(),
  having: AdvertScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AdvertFindUniqueArgsSchema: z.ZodType<Prisma.AdvertFindUniqueArgs> = z.object({
  select: AdvertSelectSchema.optional(),
  include: AdvertIncludeSchema.optional(),
  where: AdvertWhereUniqueInputSchema,
}).strict() ;

export const AdvertFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AdvertFindUniqueOrThrowArgs> = z.object({
  select: AdvertSelectSchema.optional(),
  include: AdvertIncludeSchema.optional(),
  where: AdvertWhereUniqueInputSchema,
}).strict() ;

export const ReelsFindFirstArgsSchema: z.ZodType<Prisma.ReelsFindFirstArgs> = z.object({
  select: ReelsSelectSchema.optional(),
  where: ReelsWhereInputSchema.optional(),
  orderBy: z.union([ ReelsOrderByWithRelationInputSchema.array(),ReelsOrderByWithRelationInputSchema ]).optional(),
  cursor: ReelsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReelsScalarFieldEnumSchema,ReelsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReelsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReelsFindFirstOrThrowArgs> = z.object({
  select: ReelsSelectSchema.optional(),
  where: ReelsWhereInputSchema.optional(),
  orderBy: z.union([ ReelsOrderByWithRelationInputSchema.array(),ReelsOrderByWithRelationInputSchema ]).optional(),
  cursor: ReelsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReelsScalarFieldEnumSchema,ReelsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReelsFindManyArgsSchema: z.ZodType<Prisma.ReelsFindManyArgs> = z.object({
  select: ReelsSelectSchema.optional(),
  where: ReelsWhereInputSchema.optional(),
  orderBy: z.union([ ReelsOrderByWithRelationInputSchema.array(),ReelsOrderByWithRelationInputSchema ]).optional(),
  cursor: ReelsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReelsScalarFieldEnumSchema,ReelsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReelsAggregateArgsSchema: z.ZodType<Prisma.ReelsAggregateArgs> = z.object({
  where: ReelsWhereInputSchema.optional(),
  orderBy: z.union([ ReelsOrderByWithRelationInputSchema.array(),ReelsOrderByWithRelationInputSchema ]).optional(),
  cursor: ReelsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReelsGroupByArgsSchema: z.ZodType<Prisma.ReelsGroupByArgs> = z.object({
  where: ReelsWhereInputSchema.optional(),
  orderBy: z.union([ ReelsOrderByWithAggregationInputSchema.array(),ReelsOrderByWithAggregationInputSchema ]).optional(),
  by: ReelsScalarFieldEnumSchema.array(),
  having: ReelsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReelsFindUniqueArgsSchema: z.ZodType<Prisma.ReelsFindUniqueArgs> = z.object({
  select: ReelsSelectSchema.optional(),
  where: ReelsWhereUniqueInputSchema,
}).strict() ;

export const ReelsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReelsFindUniqueOrThrowArgs> = z.object({
  select: ReelsSelectSchema.optional(),
  where: ReelsWhereUniqueInputSchema,
}).strict() ;

export const VolatilityFindFirstArgsSchema: z.ZodType<Prisma.VolatilityFindFirstArgs> = z.object({
  select: VolatilitySelectSchema.optional(),
  where: VolatilityWhereInputSchema.optional(),
  orderBy: z.union([ VolatilityOrderByWithRelationInputSchema.array(),VolatilityOrderByWithRelationInputSchema ]).optional(),
  cursor: VolatilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VolatilityScalarFieldEnumSchema,VolatilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VolatilityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VolatilityFindFirstOrThrowArgs> = z.object({
  select: VolatilitySelectSchema.optional(),
  where: VolatilityWhereInputSchema.optional(),
  orderBy: z.union([ VolatilityOrderByWithRelationInputSchema.array(),VolatilityOrderByWithRelationInputSchema ]).optional(),
  cursor: VolatilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VolatilityScalarFieldEnumSchema,VolatilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VolatilityFindManyArgsSchema: z.ZodType<Prisma.VolatilityFindManyArgs> = z.object({
  select: VolatilitySelectSchema.optional(),
  where: VolatilityWhereInputSchema.optional(),
  orderBy: z.union([ VolatilityOrderByWithRelationInputSchema.array(),VolatilityOrderByWithRelationInputSchema ]).optional(),
  cursor: VolatilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VolatilityScalarFieldEnumSchema,VolatilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VolatilityAggregateArgsSchema: z.ZodType<Prisma.VolatilityAggregateArgs> = z.object({
  where: VolatilityWhereInputSchema.optional(),
  orderBy: z.union([ VolatilityOrderByWithRelationInputSchema.array(),VolatilityOrderByWithRelationInputSchema ]).optional(),
  cursor: VolatilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VolatilityGroupByArgsSchema: z.ZodType<Prisma.VolatilityGroupByArgs> = z.object({
  where: VolatilityWhereInputSchema.optional(),
  orderBy: z.union([ VolatilityOrderByWithAggregationInputSchema.array(),VolatilityOrderByWithAggregationInputSchema ]).optional(),
  by: VolatilityScalarFieldEnumSchema.array(),
  having: VolatilityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VolatilityFindUniqueArgsSchema: z.ZodType<Prisma.VolatilityFindUniqueArgs> = z.object({
  select: VolatilitySelectSchema.optional(),
  where: VolatilityWhereUniqueInputSchema,
}).strict() ;

export const VolatilityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VolatilityFindUniqueOrThrowArgs> = z.object({
  select: VolatilitySelectSchema.optional(),
  where: VolatilityWhereUniqueInputSchema,
}).strict() ;

export const ThemeFindFirstArgsSchema: z.ZodType<Prisma.ThemeFindFirstArgs> = z.object({
  select: ThemeSelectSchema.optional(),
  where: ThemeWhereInputSchema.optional(),
  orderBy: z.union([ ThemeOrderByWithRelationInputSchema.array(),ThemeOrderByWithRelationInputSchema ]).optional(),
  cursor: ThemeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ThemeScalarFieldEnumSchema,ThemeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ThemeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ThemeFindFirstOrThrowArgs> = z.object({
  select: ThemeSelectSchema.optional(),
  where: ThemeWhereInputSchema.optional(),
  orderBy: z.union([ ThemeOrderByWithRelationInputSchema.array(),ThemeOrderByWithRelationInputSchema ]).optional(),
  cursor: ThemeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ThemeScalarFieldEnumSchema,ThemeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ThemeFindManyArgsSchema: z.ZodType<Prisma.ThemeFindManyArgs> = z.object({
  select: ThemeSelectSchema.optional(),
  where: ThemeWhereInputSchema.optional(),
  orderBy: z.union([ ThemeOrderByWithRelationInputSchema.array(),ThemeOrderByWithRelationInputSchema ]).optional(),
  cursor: ThemeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ThemeScalarFieldEnumSchema,ThemeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ThemeAggregateArgsSchema: z.ZodType<Prisma.ThemeAggregateArgs> = z.object({
  where: ThemeWhereInputSchema.optional(),
  orderBy: z.union([ ThemeOrderByWithRelationInputSchema.array(),ThemeOrderByWithRelationInputSchema ]).optional(),
  cursor: ThemeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ThemeGroupByArgsSchema: z.ZodType<Prisma.ThemeGroupByArgs> = z.object({
  where: ThemeWhereInputSchema.optional(),
  orderBy: z.union([ ThemeOrderByWithAggregationInputSchema.array(),ThemeOrderByWithAggregationInputSchema ]).optional(),
  by: ThemeScalarFieldEnumSchema.array(),
  having: ThemeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ThemeFindUniqueArgsSchema: z.ZodType<Prisma.ThemeFindUniqueArgs> = z.object({
  select: ThemeSelectSchema.optional(),
  where: ThemeWhereUniqueInputSchema,
}).strict() ;

export const ThemeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ThemeFindUniqueOrThrowArgs> = z.object({
  select: ThemeSelectSchema.optional(),
  where: ThemeWhereUniqueInputSchema,
}).strict() ;

export const ProvidersFindFirstArgsSchema: z.ZodType<Prisma.ProvidersFindFirstArgs> = z.object({
  select: ProvidersSelectSchema.optional(),
  where: ProvidersWhereInputSchema.optional(),
  orderBy: z.union([ ProvidersOrderByWithRelationInputSchema.array(),ProvidersOrderByWithRelationInputSchema ]).optional(),
  cursor: ProvidersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProvidersScalarFieldEnumSchema,ProvidersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProvidersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProvidersFindFirstOrThrowArgs> = z.object({
  select: ProvidersSelectSchema.optional(),
  where: ProvidersWhereInputSchema.optional(),
  orderBy: z.union([ ProvidersOrderByWithRelationInputSchema.array(),ProvidersOrderByWithRelationInputSchema ]).optional(),
  cursor: ProvidersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProvidersScalarFieldEnumSchema,ProvidersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProvidersFindManyArgsSchema: z.ZodType<Prisma.ProvidersFindManyArgs> = z.object({
  select: ProvidersSelectSchema.optional(),
  where: ProvidersWhereInputSchema.optional(),
  orderBy: z.union([ ProvidersOrderByWithRelationInputSchema.array(),ProvidersOrderByWithRelationInputSchema ]).optional(),
  cursor: ProvidersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProvidersScalarFieldEnumSchema,ProvidersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProvidersAggregateArgsSchema: z.ZodType<Prisma.ProvidersAggregateArgs> = z.object({
  where: ProvidersWhereInputSchema.optional(),
  orderBy: z.union([ ProvidersOrderByWithRelationInputSchema.array(),ProvidersOrderByWithRelationInputSchema ]).optional(),
  cursor: ProvidersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProvidersGroupByArgsSchema: z.ZodType<Prisma.ProvidersGroupByArgs> = z.object({
  where: ProvidersWhereInputSchema.optional(),
  orderBy: z.union([ ProvidersOrderByWithAggregationInputSchema.array(),ProvidersOrderByWithAggregationInputSchema ]).optional(),
  by: ProvidersScalarFieldEnumSchema.array(),
  having: ProvidersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProvidersFindUniqueArgsSchema: z.ZodType<Prisma.ProvidersFindUniqueArgs> = z.object({
  select: ProvidersSelectSchema.optional(),
  where: ProvidersWhereUniqueInputSchema,
}).strict() ;

export const ProvidersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProvidersFindUniqueOrThrowArgs> = z.object({
  select: ProvidersSelectSchema.optional(),
  where: ProvidersWhereUniqueInputSchema,
}).strict() ;

export const FeaturesFindFirstArgsSchema: z.ZodType<Prisma.FeaturesFindFirstArgs> = z.object({
  select: FeaturesSelectSchema.optional(),
  where: FeaturesWhereInputSchema.optional(),
  orderBy: z.union([ FeaturesOrderByWithRelationInputSchema.array(),FeaturesOrderByWithRelationInputSchema ]).optional(),
  cursor: FeaturesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FeaturesScalarFieldEnumSchema,FeaturesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FeaturesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FeaturesFindFirstOrThrowArgs> = z.object({
  select: FeaturesSelectSchema.optional(),
  where: FeaturesWhereInputSchema.optional(),
  orderBy: z.union([ FeaturesOrderByWithRelationInputSchema.array(),FeaturesOrderByWithRelationInputSchema ]).optional(),
  cursor: FeaturesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FeaturesScalarFieldEnumSchema,FeaturesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FeaturesFindManyArgsSchema: z.ZodType<Prisma.FeaturesFindManyArgs> = z.object({
  select: FeaturesSelectSchema.optional(),
  where: FeaturesWhereInputSchema.optional(),
  orderBy: z.union([ FeaturesOrderByWithRelationInputSchema.array(),FeaturesOrderByWithRelationInputSchema ]).optional(),
  cursor: FeaturesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FeaturesScalarFieldEnumSchema,FeaturesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FeaturesAggregateArgsSchema: z.ZodType<Prisma.FeaturesAggregateArgs> = z.object({
  where: FeaturesWhereInputSchema.optional(),
  orderBy: z.union([ FeaturesOrderByWithRelationInputSchema.array(),FeaturesOrderByWithRelationInputSchema ]).optional(),
  cursor: FeaturesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FeaturesGroupByArgsSchema: z.ZodType<Prisma.FeaturesGroupByArgs> = z.object({
  where: FeaturesWhereInputSchema.optional(),
  orderBy: z.union([ FeaturesOrderByWithAggregationInputSchema.array(),FeaturesOrderByWithAggregationInputSchema ]).optional(),
  by: FeaturesScalarFieldEnumSchema.array(),
  having: FeaturesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FeaturesFindUniqueArgsSchema: z.ZodType<Prisma.FeaturesFindUniqueArgs> = z.object({
  select: FeaturesSelectSchema.optional(),
  where: FeaturesWhereUniqueInputSchema,
}).strict() ;

export const FeaturesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FeaturesFindUniqueOrThrowArgs> = z.object({
  select: FeaturesSelectSchema.optional(),
  where: FeaturesWhereUniqueInputSchema,
}).strict() ;

export const WagerFindFirstArgsSchema: z.ZodType<Prisma.WagerFindFirstArgs> = z.object({
  select: WagerSelectSchema.optional(),
  where: WagerWhereInputSchema.optional(),
  orderBy: z.union([ WagerOrderByWithRelationInputSchema.array(),WagerOrderByWithRelationInputSchema ]).optional(),
  cursor: WagerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WagerScalarFieldEnumSchema,WagerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WagerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WagerFindFirstOrThrowArgs> = z.object({
  select: WagerSelectSchema.optional(),
  where: WagerWhereInputSchema.optional(),
  orderBy: z.union([ WagerOrderByWithRelationInputSchema.array(),WagerOrderByWithRelationInputSchema ]).optional(),
  cursor: WagerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WagerScalarFieldEnumSchema,WagerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WagerFindManyArgsSchema: z.ZodType<Prisma.WagerFindManyArgs> = z.object({
  select: WagerSelectSchema.optional(),
  where: WagerWhereInputSchema.optional(),
  orderBy: z.union([ WagerOrderByWithRelationInputSchema.array(),WagerOrderByWithRelationInputSchema ]).optional(),
  cursor: WagerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WagerScalarFieldEnumSchema,WagerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WagerAggregateArgsSchema: z.ZodType<Prisma.WagerAggregateArgs> = z.object({
  where: WagerWhereInputSchema.optional(),
  orderBy: z.union([ WagerOrderByWithRelationInputSchema.array(),WagerOrderByWithRelationInputSchema ]).optional(),
  cursor: WagerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const WagerGroupByArgsSchema: z.ZodType<Prisma.WagerGroupByArgs> = z.object({
  where: WagerWhereInputSchema.optional(),
  orderBy: z.union([ WagerOrderByWithAggregationInputSchema.array(),WagerOrderByWithAggregationInputSchema ]).optional(),
  by: WagerScalarFieldEnumSchema.array(),
  having: WagerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const WagerFindUniqueArgsSchema: z.ZodType<Prisma.WagerFindUniqueArgs> = z.object({
  select: WagerSelectSchema.optional(),
  where: WagerWhereUniqueInputSchema,
}).strict() ;

export const WagerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WagerFindUniqueOrThrowArgs> = z.object({
  select: WagerSelectSchema.optional(),
  where: WagerWhereUniqueInputSchema,
}).strict() ;

export const BonusTypeFindFirstArgsSchema: z.ZodType<Prisma.BonusTypeFindFirstArgs> = z.object({
  select: BonusTypeSelectSchema.optional(),
  where: BonusTypeWhereInputSchema.optional(),
  orderBy: z.union([ BonusTypeOrderByWithRelationInputSchema.array(),BonusTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: BonusTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BonusTypeScalarFieldEnumSchema,BonusTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BonusTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BonusTypeFindFirstOrThrowArgs> = z.object({
  select: BonusTypeSelectSchema.optional(),
  where: BonusTypeWhereInputSchema.optional(),
  orderBy: z.union([ BonusTypeOrderByWithRelationInputSchema.array(),BonusTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: BonusTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BonusTypeScalarFieldEnumSchema,BonusTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BonusTypeFindManyArgsSchema: z.ZodType<Prisma.BonusTypeFindManyArgs> = z.object({
  select: BonusTypeSelectSchema.optional(),
  where: BonusTypeWhereInputSchema.optional(),
  orderBy: z.union([ BonusTypeOrderByWithRelationInputSchema.array(),BonusTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: BonusTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BonusTypeScalarFieldEnumSchema,BonusTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BonusTypeAggregateArgsSchema: z.ZodType<Prisma.BonusTypeAggregateArgs> = z.object({
  where: BonusTypeWhereInputSchema.optional(),
  orderBy: z.union([ BonusTypeOrderByWithRelationInputSchema.array(),BonusTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: BonusTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BonusTypeGroupByArgsSchema: z.ZodType<Prisma.BonusTypeGroupByArgs> = z.object({
  where: BonusTypeWhereInputSchema.optional(),
  orderBy: z.union([ BonusTypeOrderByWithAggregationInputSchema.array(),BonusTypeOrderByWithAggregationInputSchema ]).optional(),
  by: BonusTypeScalarFieldEnumSchema.array(),
  having: BonusTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BonusTypeFindUniqueArgsSchema: z.ZodType<Prisma.BonusTypeFindUniqueArgs> = z.object({
  select: BonusTypeSelectSchema.optional(),
  where: BonusTypeWhereUniqueInputSchema,
}).strict() ;

export const BonusTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BonusTypeFindUniqueOrThrowArgs> = z.object({
  select: BonusTypeSelectSchema.optional(),
  where: BonusTypeWhereUniqueInputSchema,
}).strict() ;

export const CasinoTypeFindFirstArgsSchema: z.ZodType<Prisma.CasinoTypeFindFirstArgs> = z.object({
  select: CasinoTypeSelectSchema.optional(),
  where: CasinoTypeWhereInputSchema.optional(),
  orderBy: z.union([ CasinoTypeOrderByWithRelationInputSchema.array(),CasinoTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: CasinoTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CasinoTypeScalarFieldEnumSchema,CasinoTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CasinoTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CasinoTypeFindFirstOrThrowArgs> = z.object({
  select: CasinoTypeSelectSchema.optional(),
  where: CasinoTypeWhereInputSchema.optional(),
  orderBy: z.union([ CasinoTypeOrderByWithRelationInputSchema.array(),CasinoTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: CasinoTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CasinoTypeScalarFieldEnumSchema,CasinoTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CasinoTypeFindManyArgsSchema: z.ZodType<Prisma.CasinoTypeFindManyArgs> = z.object({
  select: CasinoTypeSelectSchema.optional(),
  where: CasinoTypeWhereInputSchema.optional(),
  orderBy: z.union([ CasinoTypeOrderByWithRelationInputSchema.array(),CasinoTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: CasinoTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CasinoTypeScalarFieldEnumSchema,CasinoTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CasinoTypeAggregateArgsSchema: z.ZodType<Prisma.CasinoTypeAggregateArgs> = z.object({
  where: CasinoTypeWhereInputSchema.optional(),
  orderBy: z.union([ CasinoTypeOrderByWithRelationInputSchema.array(),CasinoTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: CasinoTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CasinoTypeGroupByArgsSchema: z.ZodType<Prisma.CasinoTypeGroupByArgs> = z.object({
  where: CasinoTypeWhereInputSchema.optional(),
  orderBy: z.union([ CasinoTypeOrderByWithAggregationInputSchema.array(),CasinoTypeOrderByWithAggregationInputSchema ]).optional(),
  by: CasinoTypeScalarFieldEnumSchema.array(),
  having: CasinoTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CasinoTypeFindUniqueArgsSchema: z.ZodType<Prisma.CasinoTypeFindUniqueArgs> = z.object({
  select: CasinoTypeSelectSchema.optional(),
  where: CasinoTypeWhereUniqueInputSchema,
}).strict() ;

export const CasinoTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CasinoTypeFindUniqueOrThrowArgs> = z.object({
  select: CasinoTypeSelectSchema.optional(),
  where: CasinoTypeWhereUniqueInputSchema,
}).strict() ;

export const PaymentMethodFindFirstArgsSchema: z.ZodType<Prisma.PaymentMethodFindFirstArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  where: PaymentMethodWhereInputSchema.optional(),
  orderBy: z.union([ PaymentMethodOrderByWithRelationInputSchema.array(),PaymentMethodOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentMethodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentMethodScalarFieldEnumSchema,PaymentMethodScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PaymentMethodFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PaymentMethodFindFirstOrThrowArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  where: PaymentMethodWhereInputSchema.optional(),
  orderBy: z.union([ PaymentMethodOrderByWithRelationInputSchema.array(),PaymentMethodOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentMethodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentMethodScalarFieldEnumSchema,PaymentMethodScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PaymentMethodFindManyArgsSchema: z.ZodType<Prisma.PaymentMethodFindManyArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  where: PaymentMethodWhereInputSchema.optional(),
  orderBy: z.union([ PaymentMethodOrderByWithRelationInputSchema.array(),PaymentMethodOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentMethodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentMethodScalarFieldEnumSchema,PaymentMethodScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PaymentMethodAggregateArgsSchema: z.ZodType<Prisma.PaymentMethodAggregateArgs> = z.object({
  where: PaymentMethodWhereInputSchema.optional(),
  orderBy: z.union([ PaymentMethodOrderByWithRelationInputSchema.array(),PaymentMethodOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentMethodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PaymentMethodGroupByArgsSchema: z.ZodType<Prisma.PaymentMethodGroupByArgs> = z.object({
  where: PaymentMethodWhereInputSchema.optional(),
  orderBy: z.union([ PaymentMethodOrderByWithAggregationInputSchema.array(),PaymentMethodOrderByWithAggregationInputSchema ]).optional(),
  by: PaymentMethodScalarFieldEnumSchema.array(),
  having: PaymentMethodScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PaymentMethodFindUniqueArgsSchema: z.ZodType<Prisma.PaymentMethodFindUniqueArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  where: PaymentMethodWhereUniqueInputSchema,
}).strict() ;

export const PaymentMethodFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PaymentMethodFindUniqueOrThrowArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  where: PaymentMethodWhereUniqueInputSchema,
}).strict() ;

export const CasinoFindFirstArgsSchema: z.ZodType<Prisma.CasinoFindFirstArgs> = z.object({
  select: CasinoSelectSchema.optional(),
  where: CasinoWhereInputSchema.optional(),
  orderBy: z.union([ CasinoOrderByWithRelationInputSchema.array(),CasinoOrderByWithRelationInputSchema ]).optional(),
  cursor: CasinoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CasinoScalarFieldEnumSchema,CasinoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CasinoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CasinoFindFirstOrThrowArgs> = z.object({
  select: CasinoSelectSchema.optional(),
  where: CasinoWhereInputSchema.optional(),
  orderBy: z.union([ CasinoOrderByWithRelationInputSchema.array(),CasinoOrderByWithRelationInputSchema ]).optional(),
  cursor: CasinoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CasinoScalarFieldEnumSchema,CasinoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CasinoFindManyArgsSchema: z.ZodType<Prisma.CasinoFindManyArgs> = z.object({
  select: CasinoSelectSchema.optional(),
  where: CasinoWhereInputSchema.optional(),
  orderBy: z.union([ CasinoOrderByWithRelationInputSchema.array(),CasinoOrderByWithRelationInputSchema ]).optional(),
  cursor: CasinoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CasinoScalarFieldEnumSchema,CasinoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CasinoAggregateArgsSchema: z.ZodType<Prisma.CasinoAggregateArgs> = z.object({
  where: CasinoWhereInputSchema.optional(),
  orderBy: z.union([ CasinoOrderByWithRelationInputSchema.array(),CasinoOrderByWithRelationInputSchema ]).optional(),
  cursor: CasinoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CasinoGroupByArgsSchema: z.ZodType<Prisma.CasinoGroupByArgs> = z.object({
  where: CasinoWhereInputSchema.optional(),
  orderBy: z.union([ CasinoOrderByWithAggregationInputSchema.array(),CasinoOrderByWithAggregationInputSchema ]).optional(),
  by: CasinoScalarFieldEnumSchema.array(),
  having: CasinoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CasinoFindUniqueArgsSchema: z.ZodType<Prisma.CasinoFindUniqueArgs> = z.object({
  select: CasinoSelectSchema.optional(),
  where: CasinoWhereUniqueInputSchema,
}).strict() ;

export const CasinoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CasinoFindUniqueOrThrowArgs> = z.object({
  select: CasinoSelectSchema.optional(),
  where: CasinoWhereUniqueInputSchema,
}).strict() ;

export const AdvertSpaceFindFirstArgsSchema: z.ZodType<Prisma.AdvertSpaceFindFirstArgs> = z.object({
  select: AdvertSpaceSelectSchema.optional(),
  include: AdvertSpaceIncludeSchema.optional(),
  where: AdvertSpaceWhereInputSchema.optional(),
  orderBy: z.union([ AdvertSpaceOrderByWithRelationInputSchema.array(),AdvertSpaceOrderByWithRelationInputSchema ]).optional(),
  cursor: AdvertSpaceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdvertSpaceScalarFieldEnumSchema,AdvertSpaceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdvertSpaceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AdvertSpaceFindFirstOrThrowArgs> = z.object({
  select: AdvertSpaceSelectSchema.optional(),
  include: AdvertSpaceIncludeSchema.optional(),
  where: AdvertSpaceWhereInputSchema.optional(),
  orderBy: z.union([ AdvertSpaceOrderByWithRelationInputSchema.array(),AdvertSpaceOrderByWithRelationInputSchema ]).optional(),
  cursor: AdvertSpaceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdvertSpaceScalarFieldEnumSchema,AdvertSpaceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdvertSpaceFindManyArgsSchema: z.ZodType<Prisma.AdvertSpaceFindManyArgs> = z.object({
  select: AdvertSpaceSelectSchema.optional(),
  include: AdvertSpaceIncludeSchema.optional(),
  where: AdvertSpaceWhereInputSchema.optional(),
  orderBy: z.union([ AdvertSpaceOrderByWithRelationInputSchema.array(),AdvertSpaceOrderByWithRelationInputSchema ]).optional(),
  cursor: AdvertSpaceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdvertSpaceScalarFieldEnumSchema,AdvertSpaceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdvertSpaceAggregateArgsSchema: z.ZodType<Prisma.AdvertSpaceAggregateArgs> = z.object({
  where: AdvertSpaceWhereInputSchema.optional(),
  orderBy: z.union([ AdvertSpaceOrderByWithRelationInputSchema.array(),AdvertSpaceOrderByWithRelationInputSchema ]).optional(),
  cursor: AdvertSpaceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AdvertSpaceGroupByArgsSchema: z.ZodType<Prisma.AdvertSpaceGroupByArgs> = z.object({
  where: AdvertSpaceWhereInputSchema.optional(),
  orderBy: z.union([ AdvertSpaceOrderByWithAggregationInputSchema.array(),AdvertSpaceOrderByWithAggregationInputSchema ]).optional(),
  by: AdvertSpaceScalarFieldEnumSchema.array(),
  having: AdvertSpaceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AdvertSpaceFindUniqueArgsSchema: z.ZodType<Prisma.AdvertSpaceFindUniqueArgs> = z.object({
  select: AdvertSpaceSelectSchema.optional(),
  include: AdvertSpaceIncludeSchema.optional(),
  where: AdvertSpaceWhereUniqueInputSchema,
}).strict() ;

export const AdvertSpaceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AdvertSpaceFindUniqueOrThrowArgs> = z.object({
  select: AdvertSpaceSelectSchema.optional(),
  include: AdvertSpaceIncludeSchema.optional(),
  where: AdvertSpaceWhereUniqueInputSchema,
}).strict() ;

export const NotificationFindFirstArgsSchema: z.ZodType<Prisma.NotificationFindFirstArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NotificationFindFirstOrThrowArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationFindManyArgsSchema: z.ZodType<Prisma.NotificationFindManyArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationAggregateArgsSchema: z.ZodType<Prisma.NotificationAggregateArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationGroupByArgsSchema: z.ZodType<Prisma.NotificationGroupByArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithAggregationInputSchema.array(),NotificationOrderByWithAggregationInputSchema ]).optional(),
  by: NotificationScalarFieldEnumSchema.array(),
  having: NotificationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationFindUniqueArgsSchema: z.ZodType<Prisma.NotificationFindUniqueArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NotificationFindUniqueOrThrowArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict() ;

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict() ;

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict() ;

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const VerificationTokenCreateArgsSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
}).strict() ;

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
  create: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
  update: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
}).strict() ;

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VerificationTokenDeleteArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> = z.object({
  data: z.union([ VerificationTokenUpdateManyMutationInputSchema,VerificationTokenUncheckedUpdateManyInputSchema ]),
  where: VerificationTokenWhereInputSchema.optional(),
}).strict() ;

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
}).strict() ;

export const ResetPasswordTokenCreateArgsSchema: z.ZodType<Prisma.ResetPasswordTokenCreateArgs> = z.object({
  select: ResetPasswordTokenSelectSchema.optional(),
  include: ResetPasswordTokenIncludeSchema.optional(),
  data: z.union([ ResetPasswordTokenCreateInputSchema,ResetPasswordTokenUncheckedCreateInputSchema ]),
}).strict() ;

export const ResetPasswordTokenUpsertArgsSchema: z.ZodType<Prisma.ResetPasswordTokenUpsertArgs> = z.object({
  select: ResetPasswordTokenSelectSchema.optional(),
  include: ResetPasswordTokenIncludeSchema.optional(),
  where: ResetPasswordTokenWhereUniqueInputSchema,
  create: z.union([ ResetPasswordTokenCreateInputSchema,ResetPasswordTokenUncheckedCreateInputSchema ]),
  update: z.union([ ResetPasswordTokenUpdateInputSchema,ResetPasswordTokenUncheckedUpdateInputSchema ]),
}).strict() ;

export const ResetPasswordTokenCreateManyArgsSchema: z.ZodType<Prisma.ResetPasswordTokenCreateManyArgs> = z.object({
  data: z.union([ ResetPasswordTokenCreateManyInputSchema,ResetPasswordTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ResetPasswordTokenDeleteArgsSchema: z.ZodType<Prisma.ResetPasswordTokenDeleteArgs> = z.object({
  select: ResetPasswordTokenSelectSchema.optional(),
  include: ResetPasswordTokenIncludeSchema.optional(),
  where: ResetPasswordTokenWhereUniqueInputSchema,
}).strict() ;

export const ResetPasswordTokenUpdateArgsSchema: z.ZodType<Prisma.ResetPasswordTokenUpdateArgs> = z.object({
  select: ResetPasswordTokenSelectSchema.optional(),
  include: ResetPasswordTokenIncludeSchema.optional(),
  data: z.union([ ResetPasswordTokenUpdateInputSchema,ResetPasswordTokenUncheckedUpdateInputSchema ]),
  where: ResetPasswordTokenWhereUniqueInputSchema,
}).strict() ;

export const ResetPasswordTokenUpdateManyArgsSchema: z.ZodType<Prisma.ResetPasswordTokenUpdateManyArgs> = z.object({
  data: z.union([ ResetPasswordTokenUpdateManyMutationInputSchema,ResetPasswordTokenUncheckedUpdateManyInputSchema ]),
  where: ResetPasswordTokenWhereInputSchema.optional(),
}).strict() ;

export const ResetPasswordTokenDeleteManyArgsSchema: z.ZodType<Prisma.ResetPasswordTokenDeleteManyArgs> = z.object({
  where: ResetPasswordTokenWhereInputSchema.optional(),
}).strict() ;

export const GameCreateArgsSchema: z.ZodType<Prisma.GameCreateArgs> = z.object({
  select: GameSelectSchema.optional(),
  include: GameIncludeSchema.optional(),
  data: z.union([ GameCreateInputSchema,GameUncheckedCreateInputSchema ]),
}).strict() ;

export const GameUpsertArgsSchema: z.ZodType<Prisma.GameUpsertArgs> = z.object({
  select: GameSelectSchema.optional(),
  include: GameIncludeSchema.optional(),
  where: GameWhereUniqueInputSchema,
  create: z.union([ GameCreateInputSchema,GameUncheckedCreateInputSchema ]),
  update: z.union([ GameUpdateInputSchema,GameUncheckedUpdateInputSchema ]),
}).strict() ;

export const GameCreateManyArgsSchema: z.ZodType<Prisma.GameCreateManyArgs> = z.object({
  data: z.union([ GameCreateManyInputSchema,GameCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GameDeleteArgsSchema: z.ZodType<Prisma.GameDeleteArgs> = z.object({
  select: GameSelectSchema.optional(),
  include: GameIncludeSchema.optional(),
  where: GameWhereUniqueInputSchema,
}).strict() ;

export const GameUpdateArgsSchema: z.ZodType<Prisma.GameUpdateArgs> = z.object({
  select: GameSelectSchema.optional(),
  include: GameIncludeSchema.optional(),
  data: z.union([ GameUpdateInputSchema,GameUncheckedUpdateInputSchema ]),
  where: GameWhereUniqueInputSchema,
}).strict() ;

export const GameUpdateManyArgsSchema: z.ZodType<Prisma.GameUpdateManyArgs> = z.object({
  data: z.union([ GameUpdateManyMutationInputSchema,GameUncheckedUpdateManyInputSchema ]),
  where: GameWhereInputSchema.optional(),
}).strict() ;

export const GameDeleteManyArgsSchema: z.ZodType<Prisma.GameDeleteManyArgs> = z.object({
  where: GameWhereInputSchema.optional(),
}).strict() ;

export const GameRequirementCreateArgsSchema: z.ZodType<Prisma.GameRequirementCreateArgs> = z.object({
  select: GameRequirementSelectSchema.optional(),
  include: GameRequirementIncludeSchema.optional(),
  data: z.union([ GameRequirementCreateInputSchema,GameRequirementUncheckedCreateInputSchema ]),
}).strict() ;

export const GameRequirementUpsertArgsSchema: z.ZodType<Prisma.GameRequirementUpsertArgs> = z.object({
  select: GameRequirementSelectSchema.optional(),
  include: GameRequirementIncludeSchema.optional(),
  where: GameRequirementWhereUniqueInputSchema,
  create: z.union([ GameRequirementCreateInputSchema,GameRequirementUncheckedCreateInputSchema ]),
  update: z.union([ GameRequirementUpdateInputSchema,GameRequirementUncheckedUpdateInputSchema ]),
}).strict() ;

export const GameRequirementCreateManyArgsSchema: z.ZodType<Prisma.GameRequirementCreateManyArgs> = z.object({
  data: z.union([ GameRequirementCreateManyInputSchema,GameRequirementCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GameRequirementDeleteArgsSchema: z.ZodType<Prisma.GameRequirementDeleteArgs> = z.object({
  select: GameRequirementSelectSchema.optional(),
  include: GameRequirementIncludeSchema.optional(),
  where: GameRequirementWhereUniqueInputSchema,
}).strict() ;

export const GameRequirementUpdateArgsSchema: z.ZodType<Prisma.GameRequirementUpdateArgs> = z.object({
  select: GameRequirementSelectSchema.optional(),
  include: GameRequirementIncludeSchema.optional(),
  data: z.union([ GameRequirementUpdateInputSchema,GameRequirementUncheckedUpdateInputSchema ]),
  where: GameRequirementWhereUniqueInputSchema,
}).strict() ;

export const GameRequirementUpdateManyArgsSchema: z.ZodType<Prisma.GameRequirementUpdateManyArgs> = z.object({
  data: z.union([ GameRequirementUpdateManyMutationInputSchema,GameRequirementUncheckedUpdateManyInputSchema ]),
  where: GameRequirementWhereInputSchema.optional(),
}).strict() ;

export const GameRequirementDeleteManyArgsSchema: z.ZodType<Prisma.GameRequirementDeleteManyArgs> = z.object({
  where: GameRequirementWhereInputSchema.optional(),
}).strict() ;

export const AdvertCreateArgsSchema: z.ZodType<Prisma.AdvertCreateArgs> = z.object({
  select: AdvertSelectSchema.optional(),
  include: AdvertIncludeSchema.optional(),
  data: z.union([ AdvertCreateInputSchema,AdvertUncheckedCreateInputSchema ]),
}).strict() ;

export const AdvertUpsertArgsSchema: z.ZodType<Prisma.AdvertUpsertArgs> = z.object({
  select: AdvertSelectSchema.optional(),
  include: AdvertIncludeSchema.optional(),
  where: AdvertWhereUniqueInputSchema,
  create: z.union([ AdvertCreateInputSchema,AdvertUncheckedCreateInputSchema ]),
  update: z.union([ AdvertUpdateInputSchema,AdvertUncheckedUpdateInputSchema ]),
}).strict() ;

export const AdvertCreateManyArgsSchema: z.ZodType<Prisma.AdvertCreateManyArgs> = z.object({
  data: z.union([ AdvertCreateManyInputSchema,AdvertCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AdvertDeleteArgsSchema: z.ZodType<Prisma.AdvertDeleteArgs> = z.object({
  select: AdvertSelectSchema.optional(),
  include: AdvertIncludeSchema.optional(),
  where: AdvertWhereUniqueInputSchema,
}).strict() ;

export const AdvertUpdateArgsSchema: z.ZodType<Prisma.AdvertUpdateArgs> = z.object({
  select: AdvertSelectSchema.optional(),
  include: AdvertIncludeSchema.optional(),
  data: z.union([ AdvertUpdateInputSchema,AdvertUncheckedUpdateInputSchema ]),
  where: AdvertWhereUniqueInputSchema,
}).strict() ;

export const AdvertUpdateManyArgsSchema: z.ZodType<Prisma.AdvertUpdateManyArgs> = z.object({
  data: z.union([ AdvertUpdateManyMutationInputSchema,AdvertUncheckedUpdateManyInputSchema ]),
  where: AdvertWhereInputSchema.optional(),
}).strict() ;

export const AdvertDeleteManyArgsSchema: z.ZodType<Prisma.AdvertDeleteManyArgs> = z.object({
  where: AdvertWhereInputSchema.optional(),
}).strict() ;

export const ReelsCreateArgsSchema: z.ZodType<Prisma.ReelsCreateArgs> = z.object({
  select: ReelsSelectSchema.optional(),
  data: z.union([ ReelsCreateInputSchema,ReelsUncheckedCreateInputSchema ]),
}).strict() ;

export const ReelsUpsertArgsSchema: z.ZodType<Prisma.ReelsUpsertArgs> = z.object({
  select: ReelsSelectSchema.optional(),
  where: ReelsWhereUniqueInputSchema,
  create: z.union([ ReelsCreateInputSchema,ReelsUncheckedCreateInputSchema ]),
  update: z.union([ ReelsUpdateInputSchema,ReelsUncheckedUpdateInputSchema ]),
}).strict() ;

export const ReelsCreateManyArgsSchema: z.ZodType<Prisma.ReelsCreateManyArgs> = z.object({
  data: z.union([ ReelsCreateManyInputSchema,ReelsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ReelsDeleteArgsSchema: z.ZodType<Prisma.ReelsDeleteArgs> = z.object({
  select: ReelsSelectSchema.optional(),
  where: ReelsWhereUniqueInputSchema,
}).strict() ;

export const ReelsUpdateArgsSchema: z.ZodType<Prisma.ReelsUpdateArgs> = z.object({
  select: ReelsSelectSchema.optional(),
  data: z.union([ ReelsUpdateInputSchema,ReelsUncheckedUpdateInputSchema ]),
  where: ReelsWhereUniqueInputSchema,
}).strict() ;

export const ReelsUpdateManyArgsSchema: z.ZodType<Prisma.ReelsUpdateManyArgs> = z.object({
  data: z.union([ ReelsUpdateManyMutationInputSchema,ReelsUncheckedUpdateManyInputSchema ]),
  where: ReelsWhereInputSchema.optional(),
}).strict() ;

export const ReelsDeleteManyArgsSchema: z.ZodType<Prisma.ReelsDeleteManyArgs> = z.object({
  where: ReelsWhereInputSchema.optional(),
}).strict() ;

export const VolatilityCreateArgsSchema: z.ZodType<Prisma.VolatilityCreateArgs> = z.object({
  select: VolatilitySelectSchema.optional(),
  data: z.union([ VolatilityCreateInputSchema,VolatilityUncheckedCreateInputSchema ]),
}).strict() ;

export const VolatilityUpsertArgsSchema: z.ZodType<Prisma.VolatilityUpsertArgs> = z.object({
  select: VolatilitySelectSchema.optional(),
  where: VolatilityWhereUniqueInputSchema,
  create: z.union([ VolatilityCreateInputSchema,VolatilityUncheckedCreateInputSchema ]),
  update: z.union([ VolatilityUpdateInputSchema,VolatilityUncheckedUpdateInputSchema ]),
}).strict() ;

export const VolatilityCreateManyArgsSchema: z.ZodType<Prisma.VolatilityCreateManyArgs> = z.object({
  data: z.union([ VolatilityCreateManyInputSchema,VolatilityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VolatilityDeleteArgsSchema: z.ZodType<Prisma.VolatilityDeleteArgs> = z.object({
  select: VolatilitySelectSchema.optional(),
  where: VolatilityWhereUniqueInputSchema,
}).strict() ;

export const VolatilityUpdateArgsSchema: z.ZodType<Prisma.VolatilityUpdateArgs> = z.object({
  select: VolatilitySelectSchema.optional(),
  data: z.union([ VolatilityUpdateInputSchema,VolatilityUncheckedUpdateInputSchema ]),
  where: VolatilityWhereUniqueInputSchema,
}).strict() ;

export const VolatilityUpdateManyArgsSchema: z.ZodType<Prisma.VolatilityUpdateManyArgs> = z.object({
  data: z.union([ VolatilityUpdateManyMutationInputSchema,VolatilityUncheckedUpdateManyInputSchema ]),
  where: VolatilityWhereInputSchema.optional(),
}).strict() ;

export const VolatilityDeleteManyArgsSchema: z.ZodType<Prisma.VolatilityDeleteManyArgs> = z.object({
  where: VolatilityWhereInputSchema.optional(),
}).strict() ;

export const ThemeCreateArgsSchema: z.ZodType<Prisma.ThemeCreateArgs> = z.object({
  select: ThemeSelectSchema.optional(),
  data: z.union([ ThemeCreateInputSchema,ThemeUncheckedCreateInputSchema ]),
}).strict() ;

export const ThemeUpsertArgsSchema: z.ZodType<Prisma.ThemeUpsertArgs> = z.object({
  select: ThemeSelectSchema.optional(),
  where: ThemeWhereUniqueInputSchema,
  create: z.union([ ThemeCreateInputSchema,ThemeUncheckedCreateInputSchema ]),
  update: z.union([ ThemeUpdateInputSchema,ThemeUncheckedUpdateInputSchema ]),
}).strict() ;

export const ThemeCreateManyArgsSchema: z.ZodType<Prisma.ThemeCreateManyArgs> = z.object({
  data: z.union([ ThemeCreateManyInputSchema,ThemeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ThemeDeleteArgsSchema: z.ZodType<Prisma.ThemeDeleteArgs> = z.object({
  select: ThemeSelectSchema.optional(),
  where: ThemeWhereUniqueInputSchema,
}).strict() ;

export const ThemeUpdateArgsSchema: z.ZodType<Prisma.ThemeUpdateArgs> = z.object({
  select: ThemeSelectSchema.optional(),
  data: z.union([ ThemeUpdateInputSchema,ThemeUncheckedUpdateInputSchema ]),
  where: ThemeWhereUniqueInputSchema,
}).strict() ;

export const ThemeUpdateManyArgsSchema: z.ZodType<Prisma.ThemeUpdateManyArgs> = z.object({
  data: z.union([ ThemeUpdateManyMutationInputSchema,ThemeUncheckedUpdateManyInputSchema ]),
  where: ThemeWhereInputSchema.optional(),
}).strict() ;

export const ThemeDeleteManyArgsSchema: z.ZodType<Prisma.ThemeDeleteManyArgs> = z.object({
  where: ThemeWhereInputSchema.optional(),
}).strict() ;

export const ProvidersCreateArgsSchema: z.ZodType<Prisma.ProvidersCreateArgs> = z.object({
  select: ProvidersSelectSchema.optional(),
  data: z.union([ ProvidersCreateInputSchema,ProvidersUncheckedCreateInputSchema ]),
}).strict() ;

export const ProvidersUpsertArgsSchema: z.ZodType<Prisma.ProvidersUpsertArgs> = z.object({
  select: ProvidersSelectSchema.optional(),
  where: ProvidersWhereUniqueInputSchema,
  create: z.union([ ProvidersCreateInputSchema,ProvidersUncheckedCreateInputSchema ]),
  update: z.union([ ProvidersUpdateInputSchema,ProvidersUncheckedUpdateInputSchema ]),
}).strict() ;

export const ProvidersCreateManyArgsSchema: z.ZodType<Prisma.ProvidersCreateManyArgs> = z.object({
  data: z.union([ ProvidersCreateManyInputSchema,ProvidersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProvidersDeleteArgsSchema: z.ZodType<Prisma.ProvidersDeleteArgs> = z.object({
  select: ProvidersSelectSchema.optional(),
  where: ProvidersWhereUniqueInputSchema,
}).strict() ;

export const ProvidersUpdateArgsSchema: z.ZodType<Prisma.ProvidersUpdateArgs> = z.object({
  select: ProvidersSelectSchema.optional(),
  data: z.union([ ProvidersUpdateInputSchema,ProvidersUncheckedUpdateInputSchema ]),
  where: ProvidersWhereUniqueInputSchema,
}).strict() ;

export const ProvidersUpdateManyArgsSchema: z.ZodType<Prisma.ProvidersUpdateManyArgs> = z.object({
  data: z.union([ ProvidersUpdateManyMutationInputSchema,ProvidersUncheckedUpdateManyInputSchema ]),
  where: ProvidersWhereInputSchema.optional(),
}).strict() ;

export const ProvidersDeleteManyArgsSchema: z.ZodType<Prisma.ProvidersDeleteManyArgs> = z.object({
  where: ProvidersWhereInputSchema.optional(),
}).strict() ;

export const FeaturesCreateArgsSchema: z.ZodType<Prisma.FeaturesCreateArgs> = z.object({
  select: FeaturesSelectSchema.optional(),
  data: z.union([ FeaturesCreateInputSchema,FeaturesUncheckedCreateInputSchema ]),
}).strict() ;

export const FeaturesUpsertArgsSchema: z.ZodType<Prisma.FeaturesUpsertArgs> = z.object({
  select: FeaturesSelectSchema.optional(),
  where: FeaturesWhereUniqueInputSchema,
  create: z.union([ FeaturesCreateInputSchema,FeaturesUncheckedCreateInputSchema ]),
  update: z.union([ FeaturesUpdateInputSchema,FeaturesUncheckedUpdateInputSchema ]),
}).strict() ;

export const FeaturesCreateManyArgsSchema: z.ZodType<Prisma.FeaturesCreateManyArgs> = z.object({
  data: z.union([ FeaturesCreateManyInputSchema,FeaturesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FeaturesDeleteArgsSchema: z.ZodType<Prisma.FeaturesDeleteArgs> = z.object({
  select: FeaturesSelectSchema.optional(),
  where: FeaturesWhereUniqueInputSchema,
}).strict() ;

export const FeaturesUpdateArgsSchema: z.ZodType<Prisma.FeaturesUpdateArgs> = z.object({
  select: FeaturesSelectSchema.optional(),
  data: z.union([ FeaturesUpdateInputSchema,FeaturesUncheckedUpdateInputSchema ]),
  where: FeaturesWhereUniqueInputSchema,
}).strict() ;

export const FeaturesUpdateManyArgsSchema: z.ZodType<Prisma.FeaturesUpdateManyArgs> = z.object({
  data: z.union([ FeaturesUpdateManyMutationInputSchema,FeaturesUncheckedUpdateManyInputSchema ]),
  where: FeaturesWhereInputSchema.optional(),
}).strict() ;

export const FeaturesDeleteManyArgsSchema: z.ZodType<Prisma.FeaturesDeleteManyArgs> = z.object({
  where: FeaturesWhereInputSchema.optional(),
}).strict() ;

export const WagerCreateArgsSchema: z.ZodType<Prisma.WagerCreateArgs> = z.object({
  select: WagerSelectSchema.optional(),
  data: z.union([ WagerCreateInputSchema,WagerUncheckedCreateInputSchema ]),
}).strict() ;

export const WagerUpsertArgsSchema: z.ZodType<Prisma.WagerUpsertArgs> = z.object({
  select: WagerSelectSchema.optional(),
  where: WagerWhereUniqueInputSchema,
  create: z.union([ WagerCreateInputSchema,WagerUncheckedCreateInputSchema ]),
  update: z.union([ WagerUpdateInputSchema,WagerUncheckedUpdateInputSchema ]),
}).strict() ;

export const WagerCreateManyArgsSchema: z.ZodType<Prisma.WagerCreateManyArgs> = z.object({
  data: z.union([ WagerCreateManyInputSchema,WagerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const WagerDeleteArgsSchema: z.ZodType<Prisma.WagerDeleteArgs> = z.object({
  select: WagerSelectSchema.optional(),
  where: WagerWhereUniqueInputSchema,
}).strict() ;

export const WagerUpdateArgsSchema: z.ZodType<Prisma.WagerUpdateArgs> = z.object({
  select: WagerSelectSchema.optional(),
  data: z.union([ WagerUpdateInputSchema,WagerUncheckedUpdateInputSchema ]),
  where: WagerWhereUniqueInputSchema,
}).strict() ;

export const WagerUpdateManyArgsSchema: z.ZodType<Prisma.WagerUpdateManyArgs> = z.object({
  data: z.union([ WagerUpdateManyMutationInputSchema,WagerUncheckedUpdateManyInputSchema ]),
  where: WagerWhereInputSchema.optional(),
}).strict() ;

export const WagerDeleteManyArgsSchema: z.ZodType<Prisma.WagerDeleteManyArgs> = z.object({
  where: WagerWhereInputSchema.optional(),
}).strict() ;

export const BonusTypeCreateArgsSchema: z.ZodType<Prisma.BonusTypeCreateArgs> = z.object({
  select: BonusTypeSelectSchema.optional(),
  data: z.union([ BonusTypeCreateInputSchema,BonusTypeUncheckedCreateInputSchema ]),
}).strict() ;

export const BonusTypeUpsertArgsSchema: z.ZodType<Prisma.BonusTypeUpsertArgs> = z.object({
  select: BonusTypeSelectSchema.optional(),
  where: BonusTypeWhereUniqueInputSchema,
  create: z.union([ BonusTypeCreateInputSchema,BonusTypeUncheckedCreateInputSchema ]),
  update: z.union([ BonusTypeUpdateInputSchema,BonusTypeUncheckedUpdateInputSchema ]),
}).strict() ;

export const BonusTypeCreateManyArgsSchema: z.ZodType<Prisma.BonusTypeCreateManyArgs> = z.object({
  data: z.union([ BonusTypeCreateManyInputSchema,BonusTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BonusTypeDeleteArgsSchema: z.ZodType<Prisma.BonusTypeDeleteArgs> = z.object({
  select: BonusTypeSelectSchema.optional(),
  where: BonusTypeWhereUniqueInputSchema,
}).strict() ;

export const BonusTypeUpdateArgsSchema: z.ZodType<Prisma.BonusTypeUpdateArgs> = z.object({
  select: BonusTypeSelectSchema.optional(),
  data: z.union([ BonusTypeUpdateInputSchema,BonusTypeUncheckedUpdateInputSchema ]),
  where: BonusTypeWhereUniqueInputSchema,
}).strict() ;

export const BonusTypeUpdateManyArgsSchema: z.ZodType<Prisma.BonusTypeUpdateManyArgs> = z.object({
  data: z.union([ BonusTypeUpdateManyMutationInputSchema,BonusTypeUncheckedUpdateManyInputSchema ]),
  where: BonusTypeWhereInputSchema.optional(),
}).strict() ;

export const BonusTypeDeleteManyArgsSchema: z.ZodType<Prisma.BonusTypeDeleteManyArgs> = z.object({
  where: BonusTypeWhereInputSchema.optional(),
}).strict() ;

export const CasinoTypeCreateArgsSchema: z.ZodType<Prisma.CasinoTypeCreateArgs> = z.object({
  select: CasinoTypeSelectSchema.optional(),
  data: z.union([ CasinoTypeCreateInputSchema,CasinoTypeUncheckedCreateInputSchema ]),
}).strict() ;

export const CasinoTypeUpsertArgsSchema: z.ZodType<Prisma.CasinoTypeUpsertArgs> = z.object({
  select: CasinoTypeSelectSchema.optional(),
  where: CasinoTypeWhereUniqueInputSchema,
  create: z.union([ CasinoTypeCreateInputSchema,CasinoTypeUncheckedCreateInputSchema ]),
  update: z.union([ CasinoTypeUpdateInputSchema,CasinoTypeUncheckedUpdateInputSchema ]),
}).strict() ;

export const CasinoTypeCreateManyArgsSchema: z.ZodType<Prisma.CasinoTypeCreateManyArgs> = z.object({
  data: z.union([ CasinoTypeCreateManyInputSchema,CasinoTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CasinoTypeDeleteArgsSchema: z.ZodType<Prisma.CasinoTypeDeleteArgs> = z.object({
  select: CasinoTypeSelectSchema.optional(),
  where: CasinoTypeWhereUniqueInputSchema,
}).strict() ;

export const CasinoTypeUpdateArgsSchema: z.ZodType<Prisma.CasinoTypeUpdateArgs> = z.object({
  select: CasinoTypeSelectSchema.optional(),
  data: z.union([ CasinoTypeUpdateInputSchema,CasinoTypeUncheckedUpdateInputSchema ]),
  where: CasinoTypeWhereUniqueInputSchema,
}).strict() ;

export const CasinoTypeUpdateManyArgsSchema: z.ZodType<Prisma.CasinoTypeUpdateManyArgs> = z.object({
  data: z.union([ CasinoTypeUpdateManyMutationInputSchema,CasinoTypeUncheckedUpdateManyInputSchema ]),
  where: CasinoTypeWhereInputSchema.optional(),
}).strict() ;

export const CasinoTypeDeleteManyArgsSchema: z.ZodType<Prisma.CasinoTypeDeleteManyArgs> = z.object({
  where: CasinoTypeWhereInputSchema.optional(),
}).strict() ;

export const PaymentMethodCreateArgsSchema: z.ZodType<Prisma.PaymentMethodCreateArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  data: z.union([ PaymentMethodCreateInputSchema,PaymentMethodUncheckedCreateInputSchema ]),
}).strict() ;

export const PaymentMethodUpsertArgsSchema: z.ZodType<Prisma.PaymentMethodUpsertArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  where: PaymentMethodWhereUniqueInputSchema,
  create: z.union([ PaymentMethodCreateInputSchema,PaymentMethodUncheckedCreateInputSchema ]),
  update: z.union([ PaymentMethodUpdateInputSchema,PaymentMethodUncheckedUpdateInputSchema ]),
}).strict() ;

export const PaymentMethodCreateManyArgsSchema: z.ZodType<Prisma.PaymentMethodCreateManyArgs> = z.object({
  data: z.union([ PaymentMethodCreateManyInputSchema,PaymentMethodCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PaymentMethodDeleteArgsSchema: z.ZodType<Prisma.PaymentMethodDeleteArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  where: PaymentMethodWhereUniqueInputSchema,
}).strict() ;

export const PaymentMethodUpdateArgsSchema: z.ZodType<Prisma.PaymentMethodUpdateArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  data: z.union([ PaymentMethodUpdateInputSchema,PaymentMethodUncheckedUpdateInputSchema ]),
  where: PaymentMethodWhereUniqueInputSchema,
}).strict() ;

export const PaymentMethodUpdateManyArgsSchema: z.ZodType<Prisma.PaymentMethodUpdateManyArgs> = z.object({
  data: z.union([ PaymentMethodUpdateManyMutationInputSchema,PaymentMethodUncheckedUpdateManyInputSchema ]),
  where: PaymentMethodWhereInputSchema.optional(),
}).strict() ;

export const PaymentMethodDeleteManyArgsSchema: z.ZodType<Prisma.PaymentMethodDeleteManyArgs> = z.object({
  where: PaymentMethodWhereInputSchema.optional(),
}).strict() ;

export const CasinoCreateArgsSchema: z.ZodType<Prisma.CasinoCreateArgs> = z.object({
  select: CasinoSelectSchema.optional(),
  data: z.union([ CasinoCreateInputSchema,CasinoUncheckedCreateInputSchema ]),
}).strict() ;

export const CasinoUpsertArgsSchema: z.ZodType<Prisma.CasinoUpsertArgs> = z.object({
  select: CasinoSelectSchema.optional(),
  where: CasinoWhereUniqueInputSchema,
  create: z.union([ CasinoCreateInputSchema,CasinoUncheckedCreateInputSchema ]),
  update: z.union([ CasinoUpdateInputSchema,CasinoUncheckedUpdateInputSchema ]),
}).strict() ;

export const CasinoCreateManyArgsSchema: z.ZodType<Prisma.CasinoCreateManyArgs> = z.object({
  data: z.union([ CasinoCreateManyInputSchema,CasinoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CasinoDeleteArgsSchema: z.ZodType<Prisma.CasinoDeleteArgs> = z.object({
  select: CasinoSelectSchema.optional(),
  where: CasinoWhereUniqueInputSchema,
}).strict() ;

export const CasinoUpdateArgsSchema: z.ZodType<Prisma.CasinoUpdateArgs> = z.object({
  select: CasinoSelectSchema.optional(),
  data: z.union([ CasinoUpdateInputSchema,CasinoUncheckedUpdateInputSchema ]),
  where: CasinoWhereUniqueInputSchema,
}).strict() ;

export const CasinoUpdateManyArgsSchema: z.ZodType<Prisma.CasinoUpdateManyArgs> = z.object({
  data: z.union([ CasinoUpdateManyMutationInputSchema,CasinoUncheckedUpdateManyInputSchema ]),
  where: CasinoWhereInputSchema.optional(),
}).strict() ;

export const CasinoDeleteManyArgsSchema: z.ZodType<Prisma.CasinoDeleteManyArgs> = z.object({
  where: CasinoWhereInputSchema.optional(),
}).strict() ;

export const AdvertSpaceCreateArgsSchema: z.ZodType<Prisma.AdvertSpaceCreateArgs> = z.object({
  select: AdvertSpaceSelectSchema.optional(),
  include: AdvertSpaceIncludeSchema.optional(),
  data: z.union([ AdvertSpaceCreateInputSchema,AdvertSpaceUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const AdvertSpaceUpsertArgsSchema: z.ZodType<Prisma.AdvertSpaceUpsertArgs> = z.object({
  select: AdvertSpaceSelectSchema.optional(),
  include: AdvertSpaceIncludeSchema.optional(),
  where: AdvertSpaceWhereUniqueInputSchema,
  create: z.union([ AdvertSpaceCreateInputSchema,AdvertSpaceUncheckedCreateInputSchema ]),
  update: z.union([ AdvertSpaceUpdateInputSchema,AdvertSpaceUncheckedUpdateInputSchema ]),
}).strict() ;

export const AdvertSpaceCreateManyArgsSchema: z.ZodType<Prisma.AdvertSpaceCreateManyArgs> = z.object({
  data: z.union([ AdvertSpaceCreateManyInputSchema,AdvertSpaceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AdvertSpaceDeleteArgsSchema: z.ZodType<Prisma.AdvertSpaceDeleteArgs> = z.object({
  select: AdvertSpaceSelectSchema.optional(),
  include: AdvertSpaceIncludeSchema.optional(),
  where: AdvertSpaceWhereUniqueInputSchema,
}).strict() ;

export const AdvertSpaceUpdateArgsSchema: z.ZodType<Prisma.AdvertSpaceUpdateArgs> = z.object({
  select: AdvertSpaceSelectSchema.optional(),
  include: AdvertSpaceIncludeSchema.optional(),
  data: z.union([ AdvertSpaceUpdateInputSchema,AdvertSpaceUncheckedUpdateInputSchema ]),
  where: AdvertSpaceWhereUniqueInputSchema,
}).strict() ;

export const AdvertSpaceUpdateManyArgsSchema: z.ZodType<Prisma.AdvertSpaceUpdateManyArgs> = z.object({
  data: z.union([ AdvertSpaceUpdateManyMutationInputSchema,AdvertSpaceUncheckedUpdateManyInputSchema ]),
  where: AdvertSpaceWhereInputSchema.optional(),
}).strict() ;

export const AdvertSpaceDeleteManyArgsSchema: z.ZodType<Prisma.AdvertSpaceDeleteManyArgs> = z.object({
  where: AdvertSpaceWhereInputSchema.optional(),
}).strict() ;

export const NotificationCreateArgsSchema: z.ZodType<Prisma.NotificationCreateArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  data: z.union([ NotificationCreateInputSchema,NotificationUncheckedCreateInputSchema ]),
}).strict() ;

export const NotificationUpsertArgsSchema: z.ZodType<Prisma.NotificationUpsertArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
  create: z.union([ NotificationCreateInputSchema,NotificationUncheckedCreateInputSchema ]),
  update: z.union([ NotificationUpdateInputSchema,NotificationUncheckedUpdateInputSchema ]),
}).strict() ;

export const NotificationCreateManyArgsSchema: z.ZodType<Prisma.NotificationCreateManyArgs> = z.object({
  data: z.union([ NotificationCreateManyInputSchema,NotificationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const NotificationDeleteArgsSchema: z.ZodType<Prisma.NotificationDeleteArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationUpdateArgsSchema: z.ZodType<Prisma.NotificationUpdateArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  data: z.union([ NotificationUpdateInputSchema,NotificationUncheckedUpdateInputSchema ]),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationUpdateManyArgsSchema: z.ZodType<Prisma.NotificationUpdateManyArgs> = z.object({
  data: z.union([ NotificationUpdateManyMutationInputSchema,NotificationUncheckedUpdateManyInputSchema ]),
  where: NotificationWhereInputSchema.optional(),
}).strict() ;

export const NotificationDeleteManyArgsSchema: z.ZodType<Prisma.NotificationDeleteManyArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
}).strict() ;