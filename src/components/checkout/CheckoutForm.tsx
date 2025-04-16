
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, User, MapPin, Phone, MessageSquare } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  address: z.string().min(5, { message: "Please enter a valid address" }),
  city: z.string().min(2, { message: "City is required" }),
  postalCode: z.string().min(3, { message: "Postal code is required" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
  message: z.string().optional(),
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Please enter a valid 16-digit card number" }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Use MM/YY format" }),
  cvc: z.string().regex(/^\d{3,4}$/, { message: "CVC must be 3-4 digits" }),
  cardHolder: z.string().min(2, { message: "Cardholder name is required" }),
});

type FormValues = z.infer<typeof formSchema>;

export function CheckoutForm() {
  const [step, setStep] = useState<"delivery" | "payment">("delivery");
  const { clearCart, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      phone: "",
      message: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      cardHolder: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    if (step === "delivery") {
      setStep("payment");
    } else {
      // Process payment and order - in a real app, this would call a payment API
      console.log("Order submitted:", data);
      
      // Show success message and clear cart
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase. We'll ship your order soon.",
      });
      
      clearCart();
      navigate("/");
    }
  };

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substring(0, 19) || "";
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {step === "delivery" ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-devhub-purple" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" /> Full Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> Address
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="New York" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postal Code</FormLabel>
                        <FormControl>
                          <Input placeholder="10001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Phone className="h-4 w-4" /> Phone
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" /> Message (Optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any special instructions for delivery..."
                          className="min-h-24"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Continue to Payment
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-devhub-purple" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-md bg-devhub-soft-gray p-4 mb-4">
                  <p className="font-semibold">Order Total: ${getTotalPrice().toFixed(2)}</p>
                  <p className="text-sm text-gray-500">Including tax (8%)</p>
                </div>

                <FormField
                  control={form.control}
                  name="cardHolder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cardholder Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field: { onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="4111 1111 1111 1111"
                          onChange={(e) => {
                            const formattedValue = formatCardNumber(e.target.value);
                            e.target.value = formattedValue;
                            onChange(e.target.value.replace(/\s/g, ""));
                          }}
                          {...rest}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry Date</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cvc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVC</FormLabel>
                        <FormControl>
                          <Input placeholder="123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <Label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree with the terms and conditions
                    </Label>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep("delivery")}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button type="submit" className="flex-1">
                    Complete Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </form>
      </Form>
    </div>
  );
}

export default CheckoutForm;
