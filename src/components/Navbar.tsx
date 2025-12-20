import { useState, useEffect } from "react";
import {
  Menu, X, ChevronDown, LogOut, User, Settings, FileText,
  Home, Info, Package, Folder, Phone, BookOpen
} from "lucide-react";
import logo from "/logo(1).png";
import { useNavigate } from "react-router-dom";

// User type
interface UserData {
  role: "admin" | "vendor" | "guest";
  name?: string;
  email?: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [user, setUser] = useState<UserData>({ role: "guest" });

  const navigate = useNavigate();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load user role from localStorage
  useEffect(() => {
    const savedRole = localStorage.getItem("userRole") as UserData["role"] | null;
    if (savedRole) setUser({ role: savedRole });
  }, []);

  // Navigation helper
  const goToPage = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setIsAdminDropdownOpen(false);
    setIsProjectsDropdownOpen(false);
  };

  const handleAdminLogin = () => goToPage("/admin-login");
  const handleVendorLogin = () => goToPage("/vendor-login");
  const handleVendorRegistration = () => goToPage("/vendor-registration");

  const handleLogout = () => {
    localStorage.clear();
    setUser({ role: "guest" });
    navigate("/");
  };

  const menuItems = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "About Us", path: "/about", icon: <Info className="w-5 h-5" /> },
    { name: "Products", path: "/products", icon: <Package className="w-5 h-5" /> },
    { name: "Projects", path: "/projects", icon: <Folder className="w-5 h-5" /> },
    { name: "Contact Us", path: "/contact", icon: <Phone className="w-5 h-5" /> },
    { name: "Careers", path: "/career ", icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-transparent backdrop-blur-xl shadow-xl "
        : "bg-gradient-to-b from-white/50 to-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-40 p-2  hover:scale-105 transition-transform"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item) => {
              // Special handling for Projects - make it a dropdown
              if (item.name === "Projects") {
                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                      className="relative group px-4 py-2 text-gray-300 hover:text-gold transition"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-black font-semibold opacity-70 group-hover:opacity-100">{item.icon}</span>
                        <span className="text-black font-semibold">{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-black transition-transform ${isProjectsDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                      </div>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-3/4"></span>
                    </button>

                    {isProjectsDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
                        <button
                          onClick={() => goToPage("/projects")}
                          className="w-full px-4 py-3 text-left text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 flex items-center space-x-2 transition-colors"
                        >
                          <Folder className="w-4 h-4" />
                          <span>Projects</span>
                        </button>
                        <button
                          onClick={() => goToPage("/blog")}
                          className="w-full px-4 py-3 text-left text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 flex items-center space-x-2 transition-colors"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>Blog</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              // Regular menu items
              return (
                <button
                  key={item.name}
                  onClick={() => goToPage(item.path)}
                  className="relative group px-4 py-2 text-gray-300 hover:text-gold transition"
                >
                  <div className="flex items-center space-x-2">
                    <span className=" text-black font-semibold opacity-70 group-hover:opacity-100">{item.icon}</span>
                    <span className="text-black font-semibold">{item.name}</span>
                  </div>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-3/4"></span>
                </button>
              );
            })}

            {/* ADMIN + VENDOR DROPDOWN (when NOT logged in as admin) */}
            {user.role !== "admin" && (
              <div className="relative">
                <button
                  onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
                  className="px-5 py-2.5 rounded-lg bg-gray-900 border border-gray-700 hover:border-gold transition-all flex items-center space-x-2 group"
                >
                  <User className="w-4 h-4 text-gold" />
                  <span className="text-white">Login</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold transition-transform ${isAdminDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {isAdminDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-black/95 border border-gray-800 rounded-xl shadow-xl backdrop-blur-xl py-2 z-50">
                    <button
                      onClick={handleAdminLogin}
                      className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/40"
                    >
                      🛠 Admin Login
                    </button>
                    <button
                      onClick={handleVendorLogin}
                      className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/40"
                    >
                      👤 Vendor Login
                    </button>

                  </div>
                )}
              </div>
            )}

            {/* ADMIN PANEL BUTTON (visible only to admin) */}
            {user.role === "admin" && (
              <button
                onClick={() => navigate("/admin-dashboard")}
                className="px-5 py-2.5 text-white bg-red-900/40 border border-red-600 rounded-lg hover:bg-red-900/60 transition"
              >
                Admin Panel
              </button>
            )}

            {/* LOGOUT */}
            {user.role !== "guest" && (
              <button
                onClick={handleLogout}
                className="ml-2 px-5 py-2 text-red-300 hover:text-red-200 hover:bg-red-900/20 rounded-lg transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 bg-gray-900 rounded-lg border border-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-gold" /> : <Menu className="text-gold" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-800 bg-black/95 backdrop-blur-xl">
            <div className="flex flex-col space-y-2">

              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => goToPage(item.path)}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/40 rounded-lg"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}

              {/* Blog Link in Mobile Menu */}
              <button
                onClick={() => goToPage("/blog")}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/40 rounded-lg ml-4"
              >
                <BookOpen className="w-5 h-5" />
                <span>Blog</span>
              </button>

              {/* LOGIN DROPDOWN FOR MOBILE */}
              <div className="border-t border-gray-800 pt-4">
                <h3 className="text-gold text-sm uppercase px-4">Login Options</h3>

                <button
                  onClick={handleAdminLogin}
                  className="w-full px-4 py-3 text-left text-gray-300 hover:bg-gray-800/40 rounded-lg"
                >
                  🛠 Admin Login
                </button>
                <button
                  onClick={handleVendorLogin}
                  className="w-full px-4 py-3 text-left text-gray-300 hover:bg-gray-800/40 rounded-lg"
                >
                  👤 Vendor Login
                </button>
                <button
                  onClick={handleVendorRegistration}
                  className="w-full px-4 py-3 text-left text-gray-300 hover:bg-gray-800/40 rounded-lg"
                >
                  📝 Vendor Registration
                </button>
              </div>

              {/* LOGOUT FOR MOBILE */}
              {user.role !== "guest" && (
                <button
                  onClick={handleLogout}
                  className="px-4 py-3 text-left text-red-400 hover:bg-red-900/30 rounded-lg mt-4"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* CLICK OUTSIDE DROPDOWN TO CLOSE */}
      {isAdminDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsAdminDropdownOpen(false)}
        />
      )}
      {isProjectsDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsProjectsDropdownOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
