
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { products, getMostOrderedProduct, getMostSearchedProduct, getLowStockProducts, getAllCategories } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, Package, Search, BarChart4, ShoppingCart, 
  AlertTriangle, Users, TrendingUp, Filter
} from "lucide-react";
import ProductForm from "@/components/admin/ProductForm";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [stockFilter, setStockFilter] = useState("");
  
  const mostOrderedProduct = getMostOrderedProduct();
  const mostSearchedProduct = getMostSearchedProduct();
  const lowStockProducts = getLowStockProducts();
  const categories = getAllCategories();
  
  // Mock data for dashboard stats
  const totalSales = 245;
  const totalEarning = 32750;
  const totalCustomers = 178;
  const monthlySales = 42;

  // Filter products based on search term and filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
    const matchesStock = stockFilter ? 
                         (stockFilter === "low" ? product.inStock < 25 : 
                          stockFilter === "out" ? product.inStock === 0 : 
                          stockFilter === "in" ? product.inStock > 0 : true) 
                         : true;
    
    return matchesSearch && matchesCategory && matchesStock;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold mb-2 md:mb-0">Admin Dashboard</h1>
          <div className="flex space-x-2">
            <select 
              className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
              defaultValue="thisMonth"
            >
              <option value="today">Today</option>
              <option value="thisWeek">This Week</option>
              <option value="thisMonth">This Month</option>
              <option value="thisYear">This Year</option>
            </select>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList className="bg-muted/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="add-product">Add Product</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Sales
                  </CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalSales}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +{monthlySales} this month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Earnings
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalEarning}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +12.5% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Most Ordered
                  </CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-md font-bold truncate">{mostOrderedProduct.name}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {mostOrderedProduct.category}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Most Searched
                  </CardTitle>
                  <Search className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-md font-bold truncate">{mostSearchedProduct.name}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {mostSearchedProduct.category}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Low Stock Products */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Low Stock Products</CardTitle>
                    <AlertTriangle className="text-amber-500" size={20} />
                  </div>
                  <CardDescription>
                    Products with less than 25 units in stock
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">Stock</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {lowStockProducts.slice(0, 5).map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell className="text-right">{product.inStock}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              {/* Sales Overview Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Monthly Overview</CardTitle>
                    <TrendingUp className="text-green-500" size={20} />
                  </div>
                  <CardDescription>
                    Sales and customer acquisition trends
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 p-2 bg-blue-100 rounded">
                        <Users size={16} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">New Customers</p>
                        <p className="text-xs text-muted-foreground">This month</p>
                      </div>
                    </div>
                    <div className="font-bold">{totalCustomers}</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 p-2 bg-green-100 rounded">
                        <BarChart4 size={16} className="text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">New Sales</p>
                        <p className="text-xs text-muted-foreground">This month</p>
                      </div>
                    </div>
                    <div className="font-bold">{monthlySales}</div>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm font-medium">Product Category Split</p>
                    {/* Mock category data */}
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center text-xs">
                        <span className="w-1/3">Smart Home</span>
                        <div className="w-2/3 bg-gray-100 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="w-1/3">Security</span>
                        <div className="w-2/3 bg-gray-100 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="w-1/3">Lighting</span>
                        <div className="w-2/3 bg-gray-100 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Product Inventory</CardTitle>
                <CardDescription>
                  Manage your product inventory and update product details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="relative">
                        <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <select
                          className="h-10 pl-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={categoryFilter}
                          onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                          <option value="">All Categories</option>
                          {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <select
                          className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={stockFilter}
                          onChange={(e) => setStockFilter(e.target.value)}
                        >
                          <option value="">All Stock</option>
                          <option value="in">In Stock</option>
                          <option value="low">Low Stock</option>
                          <option value="out">Out of Stock</option>
                        </select>
                      </div>
                      <Button variant="outline" onClick={() => {
                        setSearchTerm('');
                        setCategoryFilter('');
                        setStockFilter('');
                      }}>
                        Clear
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Company</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredProducts.length > 0 ? (
                        filteredProducts.slice(0, 10).map((product) => (
                          <TableRow key={product.id}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>${product.price.toFixed(2)}</TableCell>
                            <TableCell>
                              <span className={`inline-flex ${product.inStock < 10 ? 'text-red-500' : product.inStock < 25 ? 'text-amber-500' : 'text-green-600'}`}>
                                {product.inStock}
                              </span>
                            </TableCell>
                            <TableCell>{product.company}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                            No products found matching your filters
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add Product Tab */}
          <TabsContent value="add-product">
            <Card>
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>
                  Create a new product to add to your inventory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProductForm />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  View and manage recent customer orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex justify-between items-center">
                  <div className="flex-1 relative max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search orders..."
                      className="pl-8"
                    />
                  </div>
                  <div>
                    <select
                      className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="all">All Status</option>
                      <option value="delivered">Delivered</option>
                      <option value="shipped">Shipped</option>
                      <option value="processing">Processing</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Products</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* Mock order data */}
                      <TableRow>
                        <TableCell className="font-medium">#ORD-1234</TableCell>
                        <TableCell>John Smith</TableCell>
                        <TableCell>2 items</TableCell>
                        <TableCell>$249.98</TableCell>
                        <TableCell><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Delivered</span></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">#ORD-1235</TableCell>
                        <TableCell>Sarah Johnson</TableCell>
                        <TableCell>1 item</TableCell>
                        <TableCell>$199.99</TableCell>
                        <TableCell><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Shipped</span></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">#ORD-1236</TableCell>
                        <TableCell>Michael Brown</TableCell>
                        <TableCell>3 items</TableCell>
                        <TableCell>$329.97</TableCell>
                        <TableCell><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">Processing</span></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">#ORD-1237</TableCell>
                        <TableCell>Emily Wilson</TableCell>
                        <TableCell>1 item</TableCell>
                        <TableCell>$129.99</TableCell>
                        <TableCell><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Pending</span></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">#ORD-1238</TableCell>
                        <TableCell>Robert Johnson</TableCell>
                        <TableCell>4 items</TableCell>
                        <TableCell>$459.96</TableCell>
                        <TableCell><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Delivered</span></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DashboardPage;
