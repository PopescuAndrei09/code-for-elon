"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import type * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import type { ControllerProps, FieldError, FieldPath, FieldValues, UseFormProps } from "react-hook-form"
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form"
import type { TypeOf, ZodSchema } from "zod"

import { cn } from "../../lib/utils"
import { Label } from "./label"

const Form = FormProvider

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName
}
const formFieldContextDefaultValue: FormFieldContextValue = { name: "" as string }

const FormFieldContext = React.createContext<FormFieldContextValue>(formFieldContextDefaultValue)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>): React.JSX.Element => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = (): {
  invalid: boolean
  isDirty: boolean
  isTouched: boolean
  error?: FieldError | undefined
  id: string
  name: string
  formItemId: string
  formDescriptionId: string
  formMessageId: string
} => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (fieldContext == null) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  }
}

interface FormItemContextValue {
  id: string
}

const formItemContextDefaultValue: FormItemContextValue = { id: "" }

const FormItemContext = React.createContext<FormItemContextValue>(formItemContextDefaultValue)

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId()

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    )
  }
)
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label ref={ref} className={cn(error != null && "text-destructive", className)} htmlFor={formItemId} {...props} />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={error == null ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={error !== undefined}
        {...props}
      />
    )
  }
)
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField()

    return (
      <p ref={ref} id={formDescriptionId} className={cn("text-muted-foreground text-[0.8rem]", className)} {...props} />
    )
  }
)
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = error != null ? String(error?.message) : children

    if (body == null) {
      return null
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn("text-[0.8rem] font-medium text-destructive", className)}
        {...props}
      >
        {body}
      </p>
    )
  }
)
FormMessage.displayName = "FormMessage"

/**
 * Custom useForm wrapper hook that uses the zod resolver from react-hook-form.
 * Ensures type-safety and that the form matches the zod schema.
 */
interface ZodFormProps<T extends ZodSchema<any>> extends UseFormProps<TypeOf<T>> {
  schema: T
}

export const useZodForm = <T extends ZodSchema<any>>({ schema, ...formConfig }: ZodFormProps<T>) => {
  return useForm({
    ...formConfig,
    resolver: zodResolver(schema)
  })
}

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField }
