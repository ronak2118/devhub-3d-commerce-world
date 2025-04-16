
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, PaypalIcon } from "lucide-react";
import { toast } from "sonner";

// Define form schema with Zod
const formSchema = z.object({
  paymentMethod: z.enum(["credit-card", "paypal"]),
  cardHolder: z.string().min(2, "Cardholder name is required").optional(),
  cardNumber: z.string().regex(/^[0-9]{16}$/, "Card number must be 16 digits").optional(),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "Use MM/YY format").optional(),
  cvv: z.string().regex(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits").optional(),
});

interface PaymentFormProps {
  onSubmit: () => void;
  amount: number;
}

const PaymentForm = ({ onSubmit, amount }: PaymentFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "credit-card",
      cardHolder: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const paymentMethod = form.watch("paymentMethod");

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate payment processing
    toast.info("Processing payment...");
    
    setTimeout(() => {
      console.log("Payment submitted:", values);
      setIsSubmitting(false);
      onSubmit();
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
      <p className="text-gray-600 mb-6">All transactions are secure and encrypted.</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Method</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-3"
                  >
                    <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:border-devhub-purple">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <label htmlFor="credit-card" className="font-medium cursor-pointer flex-1 flex items-center">
                        <CreditCard size={20} className="mr-2" /> Credit / Debit Card
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:border-devhub-purple">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <label htmlFor="paypal" className="font-medium cursor-pointer flex-1 flex items-center">
                        <span className="text-[#003087] font-bold mr-1">Pay</span>
                        <span className="text-[#009cde] font-bold">Pal</span>
                      </label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {paymentMethod === "credit-card" && (
            <>
              <FormField
                control={form.control}
                name="cardHolder"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cardholder Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Smith" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="1234 5678 9012 3456"
                        maxLength={16}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          field.onChange(value);
                        }}
                        value={field.value}
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
                        <Input 
                          placeholder="MM/YY"
                          maxLength={5}
                          onChange={(e) => {
                            let value = e.target.value.replace(/[^\d/]/g, '');
                            if (value.length === 2 && !value.includes('/') && field.value.length !== 3) {
                              value += '/';
                            }
                            field.onChange(value);
                          }}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="123"
                          maxLength={4}
                          type="password"
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '');
                            field.onChange(value);
                          }}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}
          
          {paymentMethod === "paypal" && (
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <p className="mb-4">You will be redirected to PayPal to complete your payment of ${amount.toFixed(2)}.</p>
              <div className="flex items-center justify-center">
                <span className="text-[#003087] text-xl font-bold mr-1">Pay</span>
                <span className="text-[#009cde] text-xl font-bold">Pal</span>
              </div>
            </div>
          )}
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : `Pay $${amount.toFixed(2)}`}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentForm;
