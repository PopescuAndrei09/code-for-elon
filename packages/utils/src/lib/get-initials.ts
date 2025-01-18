export const getInitials = (name: string | undefined | null) => {
  if (!name) return ""
  // Get initials
  let initials = ""
  const parts = name.split(" ")

  if (parts.length && parts.length >= 2) {
    initials = parts[0].substring(0, 1) + parts[1].substring(0, 1)
  } else if (parts?.length === 1) {
    initials = parts[0].substring(0, 1)
  }

  return initials
}
