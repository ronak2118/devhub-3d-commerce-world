
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getAllCategories } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  price: z.coerce.number().positive("Price must be positive"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(10, "Description should be at least 10 characters"),
  company: z.string().min(2, "Company name is required"),
  modelPath: z.string().optional(),
  inStock: z.coerce.number().int().positive("Stock must be a positive number"),
  discount: z.coerce.number().min(0).max(100).optional(),
  features: z.string(),
  imageUrls: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const ProductForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const categories = getAllCategories();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      category: "",
      description: "",
      company: "",
      modelPath: "/models/smart-hub.glb", // Default model path
      inStock: 0,
      discount: 0,
      features: "",
      imageUrls: "",
    },
  });

  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    // Process the features and image URLs from strings to arrays
    const featuresArray = values.features.split("\n").filter(feature => feature.trim() !== "");
    const imagesArray = values.imageUrls.split("\n").filter(url => url.trim() !== "");
    
    // Create the new product object
    const newProduct = {
      ...values,
      id: `product-${Date.now()}`, // Generate a unique ID
      features: featuresArray,
      images: imagesArray.length > 0 ? imagesArray : ["https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3"],
    };
    
    // In a real app, we would send this to an API
    console.log("New product:", newProduct);
    
    // Show success message
    toast.success("Product added successfully!");
    
    // Reset form
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Smart Hub Pro" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price ($)</FormLabel>
                <FormControl>
                  <Input type="number" min="0" step="0.01" placeholder="99.99" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <select
                    className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...field}
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="DevHub Technologies" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="inStock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Units in Stock</FormLabel>
                <FormControl>
                  <Input type="number" min="0" step="1" placeholder="50" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="discount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discount % (Optional)</FormLabel>
                <FormControl>
                  <Input type="number" min="0" max="100" step="1" placeholder="10" {...field} />
                </FormControl>
                <FormDescription>Enter 0 for no discount</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the product..." rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Features (One per line)</FormLabel>
              <FormControl>
                <Textarea placeholder="Wi-Fi 6 compatibility&#10;Voice assistant integration&#10;Battery backup" rows={5} {...field} />
              </FormControl>
              <FormDescription>Enter each feature on a new line</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="imageUrls"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URLs (One per line)</FormLabel>
              <FormControl>
                <Textarea placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg" rows={3} {...field} />
              </FormControl>
              <FormDescription>Enter each image URL on a new line</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Adding Product..." : "Add Product"}
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
