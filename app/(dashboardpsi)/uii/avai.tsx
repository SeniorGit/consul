"use client";

import * as React from "react";
import { DateRange } from "react-day-picker";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

// Define the validation schema
const FormSchema = z.object({
  dateRange: z.object({
    from: z.date({
      required_error: "Start date is required.",
    }),
    to: z.date({
      required_error: "End date is required.",
    }).nullable(),
  }),
});

export function Availability() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(undefined);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Handle form submission
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white rounded p-4">
        {/* Title: Set Your Availability */}
        <h2 className="text-xl font-bold">Set Your Availability</h2>

        {/* Grid layout with one column */}
        <div className="grid grid-cols-1 gap-6">
          {/* Date Range Picker */}
          <div className="bg-white rounded-md shadow-md p-4">
            <FormField
              control={form.control}
              name="dateRange"
              render={({ field }) => (
                <FormItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !dateRange?.from && !dateRange?.to && "text-muted-foreground"
                          )}
                        >
                          {dateRange?.from ? (
                            dateRange?.to ? (
                              <>
                                {format(dateRange.from, "LLL dd, y")} -{" "}
                                {format(dateRange.to, "LLL dd, y")}
                              </>
                            ) : (
                              format(dateRange.from, "LLL dd, y")
                            )
                          ) : (
                            <span>Pick a date range</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="range"
                        selected={dateRange}
                        onSelect={setDateRange}
                        disabled={(date) => date < new Date("1900-01-01")}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Time Selection Section */}
          <div className="bg-white rounded-md shadow-md p-2">
            <FormLabel>Select Time</FormLabel>
            {/* Select Component */}
            <div className="mt-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Time Slot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="morning">09:00AM - 12:00PM</SelectItem>
                    <SelectItem value="afternoon">12:00PM - 03:00PM</SelectItem>
                    <SelectItem value="evening">03:00PM - 06:00PM</SelectItem>
                    <SelectItem value="night">06:00PM - 09:00PM</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Action Buttons: Positioned at the bottom of the layout */}
          <div className="flex justify-end space-x-3 mt-4">
            <Button variant="outline" className="w-auto px-6">
              Cancel
            </Button>
            <Button type="submit" className="bg-[#4C82CB] text-white px-6 w-auto">
              Apply
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
