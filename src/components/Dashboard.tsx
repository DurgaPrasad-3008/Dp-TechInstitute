import React, { useState, useEffect } from 'react';
import { X, Users, Calendar, Mail, Phone, MapPin, GraduationCap, Download, Search } from 'lucide-react';

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  gender: string;
  address: string;
  education: string;
  dateOfBirth: string;
  course: string;
  experience: string;
  registrationDate: string;
}

interface DashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ isOpen, onClose }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);

  useEffect(() => {
    // Load students from localStorage
    const savedStudents = localStorage.getItem('dptech_students');
    if (savedStudents) {
      const parsedStudents = JSON.parse(savedStudents);
      setStudents(parsedStudents);
      setFilteredStudents(parsedStudents);
    }
  }, [isOpen]);

  useEffect(() => {
    // Filter students based on search term
    const filtered = students.filter(student =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.mobile.includes(searchTerm) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [searchTerm, students]);

  const exportToCSV = () => {
    const headers = [
      'Registration Date', 'First Name', 'Last Name', 'Email', 'Mobile', 
      'Gender', 'Date of Birth', 'Education', 'Course', 'Experience', 'Address'
    ];
    
    const csvContent = [
      headers.join(','),
      ...filteredStudents.map(student => [
        student.registrationDate,
        student.firstName,
        student.lastName,
        student.email,
        student.mobile,
        student.gender,
        student.dateOfBirth,
        student.education,
        student.course,
        student.experience,
        `"${student.address.replace(/"/g, '""')}"` // Escape quotes in address
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `dptech_students_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Dashboard Modal */}
      <div className="relative w-full max-w-7xl max-h-[95vh] overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white border-opacity-20 animate-modal-enter">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Welcome, Puttala Durga Prasad</h2>
              <p className="text-blue-100">Student Management Dashboard</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-200"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(95vh-120px)]">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-400 mr-3" />
                <div>
                  <p className="text-gray-300 text-sm">Total Students</p>
                  <p className="text-2xl font-bold text-white">{students.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 text-green-400 mr-3" />
                <div>
                  <p className="text-gray-300 text-sm">Java Full Stack</p>
                  <p className="text-2xl font-bold text-white">
                    {students.filter(s => s.course === 'Java Full Stack Development').length}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-purple-400 mr-3" />
                <div>
                  <p className="text-gray-300 text-sm">This Month</p>
                  <p className="text-2xl font-bold text-white">
                    {students.filter(s => {
                      const regDate = new Date(s.registrationDate);
                      const now = new Date();
                      return regDate.getMonth() === now.getMonth() && regDate.getFullYear() === now.getFullYear();
                    }).length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Export */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search students by name, email, mobile, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            <button
              onClick={exportToCSV}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center"
            >
              <Download className="mr-2" size={20} />
              Export CSV
            </button>
          </div>

          {/* Students Table */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white bg-opacity-10">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">Registration Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">Contact</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">Course</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">Experience</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">Education</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white divide-opacity-10">
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-gray-300">
                        {students.length === 0 ? 'No students registered yet.' : 'No students match your search.'}
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-white hover:bg-opacity-5 transition-colors duration-200">
                        <td className="px-4 py-3 text-sm text-gray-300">
                          {new Date(student.registrationDate).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="text-sm font-medium text-white">
                              {student.firstName} {student.lastName}
                            </p>
                            <p className="text-xs text-gray-400">{student.gender} • {student.dateOfBirth}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="text-sm text-gray-300 flex items-center">
                              <Mail className="mr-1" size={12} />
                              {student.email}
                            </p>
                            <p className="text-sm text-gray-300 flex items-center">
                              <Phone className="mr-1" size={12} />
                              {student.mobile}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 bg-opacity-20 text-blue-200">
                            {student.course}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          {student.experience}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          {student.education}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;