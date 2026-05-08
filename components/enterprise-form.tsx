import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export const EnterpriseForm = () => {
  return (
    <form
      action=""
      className="relative space-y-6 *:space-y-3 **:[&>label]:block"
    >
      <div>
        <Label htmlFor="name">Full name</Label>
        <Input type="text" id="name" required />
      </div>

      <div className="grid gap-3 *:space-y-3 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input type="tel" id="phone" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required />
        </div>
      </div>

      {/* <div>
        <Label htmlFor="country">Country/Region</Label>
        <Select>
          <SelectTrigger className="not-focus:ring-foreground/10! dark:bg-foreground/5 bg-card border-transparent shadow-sm ring-1">
            <SelectValue placeholder="Select country/region" />
          </SelectTrigger>
          <SelectContent className="ring-border border-transparent ring-1">
            <SelectItem value="1">DR Congo</SelectItem>
            <SelectItem value="2">Zambia</SelectItem>
            <SelectItem value="3">Tanzania</SelectItem>
          </SelectContent>
        </Select>
      </div> */}

      {/* <div>
        <Label htmlFor="website">Company Website</Label>
        <div className="relative">
          <Input
            type="url"
            id="website"
            className="pl-16"
            placeholder="company.com"
          />
          <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground">
            https://
          </span>
        </div>
      </div> */}

      {/* <div>
        <Label htmlFor="job">Job function</Label>
        <Select>
          <SelectTrigger className="border-transparent bg-card shadow-sm ring-1 not-focus:ring-foreground/10! dark:bg-foreground/5">
            <SelectValue placeholder="Select job function" />
          </SelectTrigger>
          <SelectContent className="border-transparent ring-1 ring-border">
            <SelectItem value="1">Procurement</SelectItem>
            <SelectItem value="2">Project Management</SelectItem>
            <SelectItem value="3">Operations</SelectItem>
            <SelectItem value="4">Other</SelectItem>
          </SelectContent>
        </Select>
      </div> */}

      <div>
        <Label htmlFor="msg">Message</Label>
        <Textarea id="msg" rows={3} />
      </div>

      <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
        <p className="text-sm text-balance text-muted-foreground">
          By submitting this form, you agree to our{" "}
          <Link href="#" className="text-primary underline">
            Privacy Policy
          </Link>
        </p>
        <Button className="max-sm:row-start-1">Get in touch</Button>
      </div>
    </form>
  )
}
