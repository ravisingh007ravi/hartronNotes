import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    FaSearch,
    FaChevronLeft,
    FaChevronRight,
    FaUser,
    FaEnvelope,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaVenusMars,
    FaTimes
} from 'react-icons/fa';
import { MdLocationCity } from 'react-icons/md';

export default function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch users from API
    const fetchUsers = async (page = 1) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=24`
            );

            if (response.data.success) {
                setUsers(response.data.data.data);
                setTotalPages(response.data.data.totalPages);
                setCurrentPage(page);
            } else {
                setError('Failed to fetch users');
            }
        }
        catch (err) {
            setError('Error fetching users. Please try again.');
            console.error('API Error:', err);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const filteredUsers = users.filter((user) => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
        const email = user.email.toLowerCase();
        const country = user.location.country.toLowerCase();
        const city = user.location.city.toLowerCase();
        const search = searchTerm.toLowerCase();

        return (
            fullName.includes(search) ||
            email.includes(search) ||
            country.includes(search) ||
            city.includes(search)
        );
    });

    const openUserDetail = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeUserDetail = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
        document.body.style.overflow = 'auto';
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getInitials = (first, last) => {
        return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
    };

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-slate-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-14 w-14 border-4 border-slate-300 border-t-blue-600 mx-auto"></div>
                    <p className="mt-4 text-slate-500 font-medium tracking-wide">Loading directory…</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 text-center max-w-md w-full">
                    <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        !
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Something went wrong</h3>
                    <p className="text-slate-500 mb-6 text-sm">{error}</p>
                    <button
                        onClick={() => fetchUsers(currentPage)}
                        className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm"
                    >
                        Try again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100">
            {/* Top bar */}
            <div className="bg-slate-900 text-white">
                <div className=" mx-auto px-4 md:px-8 py-8">
                    <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                        <span className="w-6 h-px bg-blue-400"></span>
                        Directory
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        User Directory
                    </h1>
                    <p className="text-slate-400 mt-1 text-sm">
                        {users.length} people on this page · page {currentPage} of {totalPages}
                    </p>
                </div>
            </div>

            <div className=" mx-auto px-4 md:px-8 py-8">
                {/* Search bar */}
                <div className="mb-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                        <input
                            type="text"
                            placeholder="Search by name, email, country or city…"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-10 py-3 bg-white rounded-md border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors text-sm text-slate-800 placeholder:text-slate-400"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                            >
                                <FaTimes size={14} />
                            </button>
                        )}
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                        Showing <span className="text-slate-900 font-semibold">{filteredUsers.length}</span> of {users.length}
                    </div>
                </div>

                {/* User grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 mb-10">
                    {filteredUsers.map((user) => (
                        <div
                            key={user.id}
                            onClick={() => openUserDetail(user)}
                            className="bg-white rounded-lg border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden group"
                        >
                            <div className="p-5 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200 flex-shrink-0 ring-2 ring-slate-100 group-hover:ring-blue-100 transition-all">
                                    <img
                                        src={user.picture.medium}
                                        alt={`${user.name.first} ${user.name.last}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-slate-900 text-white text-lg font-bold">
                          ${getInitials(user.name.first, user.name.last)}
                        </div>
                      `;
                                        }}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                                        {user.name.first} {user.name.last}
                                    </h3>
                                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-1 truncate">
                                        <MdLocationCity className="text-slate-400 flex-shrink-0" />
                                        <span className="truncate">{user.location.city}, {user.location.country}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-slate-100 px-5 py-3 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
                                <span className="flex items-center gap-1.5">
                                    <FaVenusMars className="text-slate-400" />
                                    <span className="capitalize">{user.gender}</span>
                                </span>
                                <span>Age {user.dob.age}</span>
                                <span>{user.registered.age} yrs member</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No results */}
                {filteredUsers.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-lg border border-dashed border-slate-300">
                        <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                            <FaSearch />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">No matches found</h3>
                        <p className="text-slate-500 mt-1 text-sm">Try a different name, email, city, or country.</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`w-9 h-9 flex items-center justify-center rounded-md border transition-colors ${currentPage === 1
                                ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                                : 'border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 bg-white'
                                }`}
                        >
                            <FaChevronLeft size={12} />
                        </button>

                        <div className="flex gap-1">
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                let pageNum;
                                if (totalPages <= 5) {
                                    pageNum = i + 1;
                                } else if (currentPage <= 3) {
                                    pageNum = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    pageNum = currentPage - 2 + i;
                                }

                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className={`w-9 h-9 rounded-md font-medium text-sm transition-colors ${currentPage === pageNum
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-slate-600 border border-slate-300 hover:border-blue-600 hover:text-blue-600'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`w-9 h-9 flex items-center justify-center rounded-md border transition-colors ${currentPage === totalPages
                                ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                                : 'border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 bg-white'
                                }`}
                        >
                            <FaChevronRight size={12} />
                        </button>
                    </div>
                )}
            </div>

            {/* User Detail Modal */}
            {isModalOpen && selectedUser && (
                <div
                    className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={closeUserDetail}
                >
                    <div
                        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal header */}
                        <div className="relative bg-slate-900 rounded-t-lg px-6 pt-6 pb-16">
                            <button
                                onClick={closeUserDetail}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-white/10 rounded-full p-2 hover:bg-white/20"
                            >
                                <FaTimes size={16} />
                            </button>
                            <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">
                                <span className="w-5 h-px bg-blue-400"></span>
                                Profile
                            </div>
                            <div className="absolute -bottom-10 left-6">
                                <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg bg-slate-200">
                                    <img
                                        src={selectedUser.picture.large}
                                        alt={`${selectedUser.name.first} ${selectedUser.name.last}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-slate-900 text-white text-2xl font-bold">
                          ${getInitials(selectedUser.name.first, selectedUser.name.last)}
                        </div>
                      `;
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Modal body */}
                        <div className="pt-14 pb-6 px-6">
                            <h2 className="text-xl font-bold text-slate-900">
                                {selectedUser.name.title} {selectedUser.name.first} {selectedUser.name.last}
                            </h2>
                            <p className="text-slate-500 text-sm mt-0.5">{selectedUser.nat} · {selectedUser.login.username}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-slate-50 rounded-md p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 text-blue-600 mb-3">
                                        <FaUser size={13} />
                                        <span className="font-semibold text-xs uppercase tracking-wide">Personal</span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Gender</span>
                                            <span className="capitalize font-medium text-slate-800">{selectedUser.gender}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Age</span>
                                            <span className="font-medium text-slate-800">{selectedUser.dob.age} years</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Birthday</span>
                                            <span className="font-medium text-slate-800">{formatDate(selectedUser.dob.date)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Nationality</span>
                                            <span className="font-medium text-slate-800">{selectedUser.nat}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-md p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 text-blue-600 mb-3">
                                        <FaMapMarkerAlt size={13} />
                                        <span className="font-semibold text-xs uppercase tracking-wide">Location</span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Country</span>
                                            <span className="font-medium text-slate-800">{selectedUser.location.country}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">City</span>
                                            <span className="font-medium text-slate-800">{selectedUser.location.city}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">State</span>
                                            <span className="font-medium text-slate-800">{selectedUser.location.state}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Postcode</span>
                                            <span className="font-medium text-slate-800">{selectedUser.location.postcode}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-md p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 text-blue-600 mb-3">
                                        <FaEnvelope size={13} />
                                        <span className="font-semibold text-xs uppercase tracking-wide">Contact</span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between gap-2">
                                            <span className="text-slate-500 flex-shrink-0">Email</span>
                                            <span className="font-medium text-slate-800 text-xs break-all text-right">{selectedUser.email}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Phone</span>
                                            <span className="font-medium text-slate-800">{selectedUser.phone}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Cell</span>
                                            <span className="font-medium text-slate-800">{selectedUser.cell}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-md p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 text-blue-600 mb-3">
                                        <FaCalendarAlt size={13} />
                                        <span className="font-semibold text-xs uppercase tracking-wide">Account</span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Username</span>
                                            <span className="font-medium text-slate-800">{selectedUser.login.username}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Registered</span>
                                            <span className="font-medium text-slate-800">{formatDate(selectedUser.registered.date)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Member for</span>
                                            <span className="font-medium text-slate-800">{selectedUser.registered.age} years</span>
                                        </div>
                                        <div className="flex justify-between gap-2">
                                            <span className="text-slate-500 flex-shrink-0">Timezone</span>
                                            <span className="font-medium text-slate-800 text-xs text-right">{selectedUser.location.timezone.description}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}