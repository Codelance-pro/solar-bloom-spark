import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import vendorAxios from '@/config/vendorAxios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from '@/hooks/use-toast';
import { Loader2, LogOut, FileText, Upload, Plus, Download, Image as ImageIcon } from 'lucide-react';
import { uploadToCloudinary } from '@/lib/cloudinary';

const VendorDashboard = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [user, setUser] = useState(null);
    const [bills, setBills] = useState([]);
    const [loadingBills, setLoadingBills] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // Form State
    const [billForm, setBillForm] = useState({
        productName: '',
        billNumber: '',
        amount: '',
        billImage: '', // URL string
        billPdf: '' // PDF URL string
    });
    const [imagePreview, setImagePreview] = useState(null);


    useEffect(() => {
        const storedUser = localStorage.getItem('vendorUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate('/vendor/login');
        }
    }, [navigate]);

    useEffect(() => {
        if (user?.id) {
            fetchMyBills(user.id);
        }
    }, [user]);

    const fetchMyBills = async (vendorId) => {
        setLoadingBills(true);
        try {
            const response = await vendorAxios.get(`/admin/purchases/vendor/${vendorId}`);
            console.log(response.data);
            setBills(response.data);
        } catch (error) {
            console.error("Failed to fetch bills:", error);
            // Don't show error toast on initial load if empty, just log it
        } finally {
            setLoadingBills(false);
        }
    };

    const handleFormChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'billImage') {
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    // Just for preview
                    setImagePreview(reader.result);
                };
                reader.readAsDataURL(file);
            }
        } else {
            setBillForm(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmitBill = async (e) => {
        e.preventDefault();
        if (!user?.id) return;

        setSubmitting(true);
        try {
            let imageUrl = '';

            // Upload image to Cloudinary if selected
            const fileInput = document.getElementById('billImage');
            const file = fileInput?.files[0];

            if (file) {
                imageUrl = await uploadToCloudinary(file);
            }

            // Get PDF file
            const pdfInput = document.getElementById('billPdf');
            const pdfFile = pdfInput?.files[0];

            // Prepare JSON data
            const model = {
                ...billForm,
                billImage: imageUrl,
                vendorId: user.id
            };

            const formData = new FormData();
            formData.append("data", new Blob([JSON.stringify(model)], { type: "application/json" }));

            if (pdfFile) {
                formData.append("file", pdfFile);
            }

            console.log("Submitting payload via Multipart:", model);

            await vendorAxios.post('/vendor/purchase', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast({
                title: 'Success',
                description: 'Bill submitted successfully!',
            });

            // Reset form
            setBillForm({
                productName: '',
                billNumber: '',
                amount: '',
                billImage: '',
                billPdf: ''
            });
            setImagePreview(null);

            // Reset file input manually
            if (fileInput) fileInput.value = '';
            if (pdfInput) pdfInput.value = '';

            // Refresh bills
            fetchMyBills(user.id);

        } catch (error) {
            console.error('Submit error:', error);
            toast({
                title: 'Submission Failed',
                description: error.message || error.response?.data?.message || 'Failed to submit bill.',
                variant: 'destructive',
            });
        } finally {
            setSubmitting(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('vendorToken');
        localStorage.removeItem('vendorUser');
        navigate('/vendor/login');
    };

    const getStatusBadge = (status) => {
        const statusConfig = {
            PENDING: { color: 'bg-yellow-100 text-yellow-800 border-yellow-300', label: 'Pending' },
            APPROVED: { color: 'bg-green-100 text-green-800 border-green-300', label: 'Approved' },
            REJECTED: { color: 'bg-red-100 text-red-800 border-red-300', label: 'Rejected' },
            DECLINED: { color: 'bg-red-100 text-red-800 border-red-300', label: 'Declined' },
        };
        const config = statusConfig[status] || statusConfig.PENDING;
        return <Badge className={`${config.color} border`}>{config.label}</Badge>;
    };


    const downloadBill = async (purchaseId) => {
        const response = await vendorAxios.get(
            `/vendor/purchase/download/${purchaseId}`,
            {
                responseType: "blob", // 🔴 THIS IS REQUIRED
            }
        );

        const blob = new Blob([response.data], {
            type: "application/pdf",
        });

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `bill_${purchaseId}.pdf`;
        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-amber-200 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-lg shadow-md">
                            <FileText className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">
                            Vendor Portal
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-sm text-right hidden sm:block">
                            <p className="font-medium text-gray-800">{user?.name || 'Vendor'}</p>
                            <p className="text-gray-500 text-xs">{user?.email}</p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleLogout}
                            className="text-gray-500 hover:text-red-600 hover:bg-red-50"
                        >
                            <LogOut className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Tabs defaultValue="submit" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-2 max-w-[400px] bg-amber-100/50">
                        <TabsTrigger
                            value="submit"
                            className="data-[state=active]:bg-white data-[state=active]:text-amber-700 data-[state=active]:shadow-sm"
                        >
                            Submit New Bill
                        </TabsTrigger>
                        <TabsTrigger
                            value="history"
                            className="data-[state=active]:bg-white data-[state=active]:text-amber-700 data-[state=active]:shadow-sm"
                        >
                            My Bills History
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="submit" className="space-y-4">
                        <Card className="max-w-2xl border-amber-200/50 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-amber-900">Submit Bill Details</CardTitle>
                                <CardDescription>
                                    Upload your bill invoice and details for admin approval.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmitBill} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="productName">Product/Service Name</Label>
                                            <Input
                                                id="productName"
                                                name="productName"
                                                placeholder="e.g. Solar Panel Installation"
                                                value={billForm.productName}
                                                onChange={handleFormChange}
                                                required
                                                className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="billNumber">Bill/Invoice Number</Label>
                                            <Input
                                                id="billNumber"
                                                name="billNumber"
                                                placeholder="INV-2024-001"
                                                value={billForm.billNumber}
                                                onChange={handleFormChange}
                                                required
                                                className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="amount">Amount (₹)</Label>
                                            <Input
                                                id="amount"
                                                name="amount"
                                                type="number"
                                                placeholder="0.00"
                                                value={billForm.amount}
                                                onChange={handleFormChange}
                                                required
                                                min="0"
                                                className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="billImage">Upload Invoice Image</Label>
                                            <div className="space-y-3">
                                                <Input
                                                    id="billImage"
                                                    name="billImage"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFormChange}
                                                    required
                                                    className="cursor-pointer border-amber-200 file:bg-amber-100 file:text-amber-700 file:border-0 file:mr-4 file:py-1 file:px-3 file:rounded-full hover:file:bg-amber-200"
                                                />
                                                {imagePreview && (
                                                    <div className="relative rounded-lg overflow-hidden border border-amber-200 shadow-sm group">
                                                        <img
                                                            src={imagePreview}
                                                            alt="Preview"
                                                            className="w-full h-48 object-contain bg-slate-50"
                                                        />
                                                        <div className="absolute inset-x-0 bottom-0 bg-black/50 p-2 text-white text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                            Preview
                                                        </div>
                                                    </div>
                                                )}
                                                {!imagePreview && (
                                                    <div className="h-48 border-2 border-dashed border-amber-200 rounded-lg flex flex-col items-center justify-center text-amber-400 bg-amber-50/50">
                                                        <ImageIcon className="w-8 h-8 mb-2" />
                                                        <span className="text-sm">No image selected</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>


                                        <div className="space-y-2">
                                            <Label htmlFor="billPdf">Upload PDF</Label>
                                            <Input
                                                id="billPdf"
                                                name="billPdf"
                                                type="file"
                                                accept="application/pdf"
                                                onChange={handleFormChange}
                                                className="cursor-pointer border-amber-200 file:bg-amber-100 file:text-amber-700 file:border-0 file:mr-4 file:py-1 file:px-3 file:rounded-full hover:file:bg-amber-200"
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all"
                                        disabled={submitting}
                                    >
                                        {submitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <Upload className="mr-2 h-4 w-4" />
                                                Submit Bill
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="history">
                        <Card className="border-amber-200/50 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-amber-900">Submitted Bills</CardTitle>
                                <CardDescription>
                                    Track the status of your submitted bills.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {loadingBills ? (
                                    <div className="flex justify-center p-8">
                                        <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
                                    </div>
                                ) : bills.length === 0 ? (
                                    <div className="text-center py-12 text-gray-500">
                                        <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                                        <p>No bills submitted yet.</p>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Bill #</TableHead>
                                                    <TableHead>Product</TableHead>
                                                    <TableHead>Date</TableHead>
                                                    <TableHead>Amount</TableHead>
                                                    <TableHead>Image</TableHead>
                                                    <TableHead>PDF</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead>Remark</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {bills.map((bill) => (
                                                    <TableRow key={bill.id} className="hover:bg-amber-50/50">
                                                        <TableCell className="font-medium">{bill.billNumber}</TableCell>
                                                        <TableCell>{bill.productName}</TableCell>
                                                        <TableCell>{bill.createdAt ? new Date(bill.createdAt).toLocaleDateString() : 'N/A'}</TableCell>
                                                        <TableCell>₹{Number(bill.amount).toLocaleString()}</TableCell>
                                                        <TableCell>
                                                            <img
                                                                src={bill.billImage}
                                                                alt="Bill Image"
                                                                className="w-16 h-16 object-cover"
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            {bill.billPdfUrl ? (
                                                                <button
                                                                    onClick={() => downloadBill(bill.id)}
                                                                    className="text-amber-600 hover:underline flex items-center gap-1"
                                                                >
                                                                    <FileText className="w-4 h-4" />
                                                                    <span className="text-xs">Download</span>
                                                                </button>
                                                            ) : (
                                                                <span className="text-gray-400">-</span>
                                                            )}
                                                        </TableCell>

                                                        <TableCell>{getStatusBadge(bill.status)}</TableCell>
                                                        <TableCell className="max-w-xs truncate text-gray-500">
                                                            {bill.adminRemark || '-'}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </div >
    );
};

export default VendorDashboard;
