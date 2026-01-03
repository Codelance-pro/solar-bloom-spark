import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '@/config/axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, LogOut, FileText, CheckCircle, XCircle, Eye, Search, Filter, Users, Download } from 'lucide-react';

const VendorManagement = () => {
    const [bills, setBills] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [selectedVendorId, setSelectedVendorId] = useState('all');
    const [loading, setLoading] = useState(true);
    const [selectedBill, setSelectedBill] = useState(null);
    const [adminRemark, setAdminRemark] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [actionLoading, setActionLoading] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    useEffect(() => {
        const initData = async () => {
            setLoading(true);
            await fetchVendors();
            await fetchAllBills();
            setLoading(false);
        };
        initData();
    }, []);

    const fetchVendors = async () => {
        try {
            const response = await axiosInstance.get('/users/vendors');
            setVendors(response.data);
            console.log("vendors", response.data);
        } catch (error) {
            console.error("Failed to fetch vendors:", error);
            // toast({
            //     title: 'Error',
            //     description: 'Failed to fetch vendor list',
            //     variant: 'destructive',
            // });
        }
    };

    const fetchAllBills = async () => {
        try {
            // Fetch all bills initially
            const response = await axiosInstance.get('/vendor/purchase');
            setBills(response.data);
            console.log("bills", response.data);
        } catch (error) {
            console.error("Failed to fetch bills:", error);
            setBills([]);
            // toast({
            //     title: 'Info',
            //     description: 'Could not fetch all bills, please select a vendor',
            // });
        }
    };

    const fetchVendorBills = async (vendorId) => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(`/admin/purchases/vendor/${vendorId}`);
            setBills(response.data);
        } catch (error) {
            console.error(`Failed to fetch bills for vendor ${vendorId}:`, error);
            setBills([]);
            toast({
                title: 'Info',
                description: 'No bills found for this vendor',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleVendorChange = (vendorId) => {
        setSelectedVendorId(vendorId);
        if (vendorId === 'all') {
            fetchAllBills().then(() => setLoading(false));
            setLoading(true);
        } else {
            fetchVendorBills(vendorId);
        }
    };

    const handleApproveStatusUpdate = async (billId) => {
        setActionLoading(true);
        console.log("billId", billId);
        try {
            await axiosInstance.put(`/admin/purchases/${billId}/approve`);
            const newStatus = 'APPROVED';
            toast({
                title: 'Success',
                description: `Bill ${newStatus.toLowerCase()} successfully`,
            });

            // Refresh current view
            if (selectedVendorId === 'all') {
                fetchAllBills();
            } else {
                fetchVendorBills(selectedVendorId);
            }
            setSelectedBill(null);
            setAdminRemark('');
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Failed to update bill status',
                variant: 'destructive',
            });
        } finally {
            setActionLoading(false);
        }
    };

    const handleRejectStatusUpdate = async (billId) => {
        setActionLoading(true);
        try {
            await axiosInstance.put(`/admin/purchases/${billId}/reject`, {
                adminRemark: adminRemark,
            });
            const newStatus = 'REJECTED';

            toast({
                title: 'Success',
                description: `Bill ${newStatus.toLowerCase()} successfully`,
            });

            // Refresh current view
            if (selectedVendorId === 'all') {
                fetchAllBills();
            } else {
                fetchVendorBills(selectedVendorId);
            }
            setSelectedBill(null);
            setAdminRemark('');
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Failed to update bill status',
                variant: 'destructive',
            });
        } finally {
            setActionLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
    };

    const getStatusBadge = (status) => {
        const statusConfig = {
            PENDING: { color: 'bg-yellow-100 text-yellow-800 border-yellow-300', label: 'Pending' },
            APPROVED: { color: 'bg-green-100 text-green-800 border-green-300', label: 'Approved' },
            DECLINED: { color: 'bg-red-100 text-red-800 border-red-300', label: 'Declined' },
        };
        const config = statusConfig[status] || statusConfig.PENDING;
        return <Badge className={`${config.color} border`}>{config.label}</Badge>;
    };

    const filteredBills = bills ? bills.filter((bill) => {
        const matchesStatus = statusFilter === 'all' || bill.status === statusFilter;

        const productName = bill.productName ? bill.productName.toLowerCase() : '';
        const billNumber = bill.billNumber ? bill.billNumber.toString().toLowerCase() : '';
        const query = searchQuery.toLowerCase();

        const matchesSearch = productName.includes(query) || billNumber.includes(query);

        return matchesStatus && matchesSearch;
    }) : [];

const downloadInvoice = async (purchaseId) => {
  const response = await axiosInstance.get(
    `/invoice/${purchaseId}`,
    {
      responseType: "blob" // 🔴 THIS IS MANDATORY
    }
  );

  console.log("response", response);

  const blob = new Blob([response.data], { type: "application/pdf" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `invoice_${purchaseId}.pdf`;
  document.body.appendChild(a);
  a.click();

  a.remove();
  window.URL.revokeObjectURL(url);
};




    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
            {/* Header */}
            <div className="bg-white border-b border-amber-200 shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                Vendor Bill Management
                            </h1>
                            <p className="text-sm text-gray-600 mt-1">Review and manage vendor bill submissions</p>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                onClick={() => navigate('/admin/dashboard')}
                                variant="outline"
                                className="border-amber-300 text-amber-700 hover:bg-amber-50"
                            >
                                <FileText className="w-4 h-4 mr-2" />
                                Dashboard
                            </Button>
                            <Button
                                onClick={() => navigate('/admin/blog-management')}
                                variant="outline"
                                className="border-amber-300 text-amber-700 hover:bg-amber-50"
                            >
                                <FileText className="w-4 h-4 mr-2" />
                                Blog Management
                            </Button>
                            <Button
                                onClick={handleLogout}
                                variant="outline"
                                className="border-red-300 text-red-700 hover:bg-red-50"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filters */}
                <Card className="mb-6 shadow-lg border-amber-200/50">
                    <CardContent className="pt-6">
                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* Vendor Selector */}
                            <div className="lg:w-64">
                                <Label htmlFor="vendor-select" className="text-sm font-medium mb-2 block">
                                    Filter by Vendor
                                </Label>
                                <Select value={selectedVendorId} onValueChange={handleVendorChange}>
                                    <SelectTrigger id="vendor-select" className="border-gray-300">
                                        <Users className="w-4 h-4 mr-2 text-gray-500"  />
                                        <SelectValue placeholder="Select Vendor" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Vendors</SelectItem>
                                        {vendors.map((vendor) => (
                                            <SelectItem className="bg-white" key={vendor.id} value={vendor.id.toString()}>
                                                {vendor.name} 
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex-1">
                                <Label htmlFor="search" className="text-sm font-medium mb-2 block">
                                    Search Bills
                                </Label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="search"
                                        placeholder="Search by product name or bill number..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10 border-gray-300"
                                    />
                                </div>
                            </div>
                            <div className="sm:w-48">
                                <Label htmlFor="status-filter" className="text-sm font-medium mb-2 block">
                                    Filter by Status
                                </Label>
                                <Select value={statusFilter} onValueChange={setStatusFilter}>
                                    <SelectTrigger id="status-filter" className="border-gray-300">
                                        <Filter className="w-4 h-4 mr-2" />
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Status</SelectItem>
                                        <SelectItem value="PENDING">Pending</SelectItem>
                                        <SelectItem value="APPROVED">Approved</SelectItem>
                                        <SelectItem value="REJECTED">Rejected</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Bills Table */}
                <Card className="shadow-lg border-amber-200/50">
                    <CardHeader>
                        <CardTitle className="text-xl">
                            {selectedVendorId === 'all' ? 'All Vendor Bills' : 'Vendor Bills'} ({filteredBills.length})
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
                            </div>
                        ) : filteredBills.length === 0 ? (
                            <div className="text-center py-12 text-gray-500">
                                <FileText className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                                <p>No bills found</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>ID</TableHead>
                                            <TableHead>Product Name</TableHead>
                                            <TableHead>Bill Number</TableHead>
                                            <TableHead>Amount</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Admin Remark</TableHead>
                                            <TableHead>Invoice Download</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredBills.map((bill) => (
                                            <TableRow key={bill.id} className="hover:bg-amber-50/50">
                                                <TableCell className="font-medium">#{bill.id}</TableCell>
                                                <TableCell>{bill.productName}</TableCell>
                                                <TableCell>{bill.billNumber}</TableCell>
                                                <TableCell className="font-semibold">₹{bill.amount?.toLocaleString()}</TableCell>
                                                <TableCell>{getStatusBadge(bill.status)}</TableCell>
                                                <TableCell className="max-w-xs truncate">{bill.adminRemark || '-'}</TableCell>
                                                <TableCell>
                                                    {
                                                        bill.status === 'APPROVED' && (
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => {
                                                                   downloadInvoice(bill.id);
                                                                }}
                                                                className="border-green-300 text-green-700 hover:bg-green-50"
                                                            >
                                                                <Download className="w-4 h-4 mr-1" />
                                                                Download
                                                            </Button>
                                                        )
                                                    }
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => {
                                                                    setSelectedBill(bill);
                                                                    setAdminRemark(bill.adminRemark || '');
                                                                }}
                                                                className="border-amber-300 text-amber-700 hover:bg-amber-50"
                                                            >
                                                                <Eye className="w-4 h-4 mr-1" />
                                                                Review
                                                            </Button>
                                                        </DialogTrigger>
                                                        <DialogContent className="max-w-2xl">
                                                            <DialogHeader>
                                                                <DialogTitle>Review Bill #{selectedBill?.id}</DialogTitle>
                                                                <DialogDescription>
                                                                    Review and update the status of this vendor bill
                                                                </DialogDescription>
                                                            </DialogHeader>
                                                            {selectedBill && (
                                                                <div className="space-y-4">
                                                                    <div className="grid grid-cols-2 gap-4">
                                                                        <div>
                                                                            <Label className="text-sm font-medium text-gray-700">Product Name</Label>
                                                                            <p className="mt-1 text-sm">{selectedBill.productName}</p>
                                                                        </div>
                                                                        <div>
                                                                            <Label className="text-sm font-medium text-gray-700">Bill Number</Label>
                                                                            <p className="mt-1 text-sm">{selectedBill.billNumber}</p>
                                                                        </div>
                                                                        <div>
                                                                            <Label className="text-sm font-medium text-gray-700">Amount</Label>
                                                                            <p className="mt-1 text-sm font-semibold">₹{selectedBill.amount?.toLocaleString()}</p>
                                                                        </div>
                                                                        <div>
                                                                            <Label className="text-sm font-medium text-gray-700">Current Status</Label>
                                                                            <div className="mt-1">{getStatusBadge(selectedBill.status)}</div>
                                                                        </div>
                                                                    </div>

                                                                    {selectedBill.billImage && (
                                                                        <div>
                                                                            <Label className="text-sm font-medium text-gray-700 mb-2 block">Bill Image</Label>
                                                                            <img
                                                                                src={selectedBill.billImage}
                                                                                alt="Bill"
                                                                                className="w-full max-h-64 object-contain border border-gray-300 rounded-lg"
                                                                            />
                                                                        </div>
                                                                    )}

                                                                    <div>
                                                                        <Label htmlFor="admin-remark" className="text-sm font-medium text-gray-700">
                                                                            Admin Remark
                                                                        </Label>
                                                                        <Textarea
                                                                            id="admin-remark"
                                                                            value={adminRemark}
                                                                            onChange={(e) => setAdminRemark(e.target.value)}
                                                                            placeholder="Enter your remarks here..."
                                                                            className="mt-1 min-h-24"
                                                                        />
                                                                    </div>

                                                                    <div className="flex gap-3 pt-4">
                                                                        <Button
                                                                            onClick={() => handleApproveStatusUpdate(selectedBill.id)}
                                                                            disabled={actionLoading}
                                                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                                                                        >
                                                                            {actionLoading ? (
                                                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                                            ) : (
                                                                                <CheckCircle className="w-4 h-4 mr-2" />
                                                                            )}
                                                                            Approve
                                                                        </Button>
                                                                        <Button
                                                                            onClick={() => handleRejectStatusUpdate(selectedBill.id)}
                                                                            disabled={actionLoading}
                                                                            variant="destructive"
                                                                            className="flex-1"
                                                                        >
                                                                            {actionLoading ? (
                                                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                                            ) : (
                                                                                <XCircle className="w-4 h-4 mr-2" />
                                                                            )}
                                                                            Reject
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </DialogContent>
                                                    </Dialog>
                                                </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default VendorManagement;
