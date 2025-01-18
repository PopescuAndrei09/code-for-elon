import * as React from "react"
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text
} from "@react-email/components"

const ResetPasswordEmail = ({
  url,
  userName,
  resetPasswordLink
}: {
  url: string
  userName: string
  resetPasswordLink: string
}) => {
  const previewText = `Your ${url.slice(8)} reset password link`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='mx-auto my-auto bg-white font-sans'>
          <Container className='mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]'>
            {/* <Section className='mt-[32px]'>
              <Img
                src={`https://ssp.io/favicons/android-chrome-512x512.png`}
                width='128'
                height='128'
                alt='New Yolk Logo'
                className='mx-auto my-0'
              />
            </Section> */}
            <Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black'>
              <strong>Reset your password</strong> on {url.slice(8)}
            </Heading>
            <Text className='text-[14px] leading-[24px] text-black'>Hello {userName},</Text>
            <Text className='text-[14px] leading-[24px] text-black'>
              Someone recently requested a password change for your account. If this was you, you can set a new password
              here:
            </Text>
            <Section className='mb-[32px] mt-[32px] text-center'>
              <Button
                className='rounded bg-[#DA532C] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline'
                href={resetPasswordLink}
              >
                Reset password
              </Button>
            </Section>
            <Text className='text-[14px] leading-[24px] text-black'>
              Or copy and paste this URL into your browser:{" "}
              <Link href={resetPasswordLink} className='text-artdevium-azure no-underline'>
                {resetPasswordLink}
              </Link>
            </Text>
            <Hr className='mx-0 my-[26px] w-full border border-solid border-[#eaeaea]' />
            <Text className='text-[12px] leading-[24px] text-[#666666]'>
              If you didn&apos;t attempt to reset your password, please ignore this email. If you are concerned about
              your account&apos;s safety, please visit{" "}
              <Link className='text-artdevium-azure no-underline' href={`${url}/help`}>
                our Help page
              </Link>{" "}
              to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export { ResetPasswordEmail }
