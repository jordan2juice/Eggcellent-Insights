"use client";

import * as React from "react";
import * as AlertDialogPrimative from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimative.Root;

const AlertDialogTrigger = AlertDialogPrimative.Trigger;
const AlertDialogPortal = AlertDialogPrimative.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimative.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimative.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimative.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-in fade-in",
      className
    )}
    {...props}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimative.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimative.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimative.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogPrimative.Content
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimative.Content.displayName;

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimative.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimative.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimative.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimative.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimative.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimative.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimative.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimative.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimative.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimative.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimative.Action
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimative.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimative.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimative.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimative.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimative.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogPortal,
  AlertDialogOverlay,
};