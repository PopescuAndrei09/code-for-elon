import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon
} from "@radix-ui/react-icons"
import { Crown } from "lucide-react"

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon
  }
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon
  }
]

export const roles = [
  {
    label: "Admin",
    value: "admin"
  },
  {
    label: "Manager",
    value: "manager"
  },
  {
    label: "Editor",
    value: "editor"
  },
  {
    label: "User",
    value: "user"
  }
]

export const vips = [
  {
    label: "Yes",
    value: "true",
    icon: Crown
  },
  {
    label: "No",
    value: "false"
  }
]
