import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, BookOpen, Star, CheckCircle } from 'lucide-react';
import Footer from '../component/Footer';

const COURSES = [
  { id: 1, name: "Mastering HTML5", price: 499, color: "from-orange-400 to-red-500", level: "Beginner" },
  { id: 2, name: "Advanced CSS3 & Tailwind", price: 699, color: "from-blue-400 to-indigo-600", level: "Intermediate" },
  { id: 3, name: "JavaScript Engine Deep Dive", price: 999, color: "from-yellow-400 to-orange-500", level: "Advanced" },
  { id: 4, name: "Java Enterprise Edition", price: 1299, color: "from-red-500 to-red-800", level: "Intermediate" },
  { id: 5, name: "Python for Data Science", price: 899, color: "from-blue-500 to-green-500", level: "Beginner" },
  { id: 6, name: "C++ Systems Programming", price: 1100, color: "from-slate-500 to-slate-800", level: "Advanced" },
  { id: 7, name: "C# & Unity Game Dev", price: 1499, color: "from-purple-500 to-indigo-700", level: "Intermediate" },
  { id: 8, name: "The C Language Bible", price: 399, color: "from-blue-700 to-blue-900", level: "Beginner" },
];

const CourseCard = ({ course, onBuy }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col"
  >
    <div className={`h-32 bg-gradient-to-br ${course.color} p-6 flex items-end`}>
      <BookOpen className="text-white/20 absolute top-4 right-4" size={60} />
      <h3 className="text-white text-xl font-bold leading-tight">{course.name}</h3>
    </div>
    
    <div className="p-6 flex-grow">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-slate-800 text-slate-400 text-[10px] uppercase font-bold px-2 py-1 rounded">
          {course.level}
        </span>
        <div className="flex text-yellow-500 ml-auto">
          {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
        </div>
      </div>
      
      <ul className="space-y-2 mb-6 text-sm text-slate-400">
        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Lifetime Access</li>
        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Certificate of Completion</li>
      </ul>

      <div className="mt-auto flex items-center justify-between">
        <div>
          <span className="text-slate-500 text-xs block">Price</span>
          <span className="text-white text-2xl font-black">₹{course.price}</span>
        </div>
        <button 
          onClick={() => onBuy(course.price, course.name)}
          className="bg-orange-600 hover:bg-orange-500 text-white p-3 rounded-xl transition-colors shadow-lg shadow-orange-900/20"
        >
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  </motion.div>
);

function BuyCourses() {
  useEffect(() => {
    // Dynamically load Razorpay Script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
        document.body.removeChild(script); // Cleanup
    };
  }, []);

  const paymentHandler = async (amount, courseName) => {
    try {
      // Step 1: Create order from backend
      const res = await fetch("http://localhost:4004/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            amount: amount, // Backend usually expects amount in paisa (amount * 100)
            courseName: courseName 
        })
      });

      const orderData = await res.json();

      // Step 2: Configure Razorpay options
      const options = {
        key: "rzp_test_faCruggaG7OAQz", // Replace with your actual key
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Alok Enterprises",
        description: `Enrollment for ${courseName}`,
        order_id: orderData.id,
        handler: async function (response) {
          alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);

          // Step 3: Verify payment on backend
          await fetch("http://localhost:4004/order/validate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response)
          });
        },
        prefill: {
          name: "Alok",
          email: "alok@gmail.com",
          contact: "9999999999"
        },
        theme: { color: "#ea580c" }, // Match our orange UI
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment initiation failed", err);
      alert("Something went wrong. Please check your backend server.");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-4"
          >
            Expand Your <span className="text-orange-500">Skillset</span>
          </motion.h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Choose from our industry-leading technical courses. Secure payments powered by Razorpay.
          </p>
        </header>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map(course => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onBuy={paymentHandler} 
            />
          ))}
        </div>

      <Footer/>
      </div>
    </div>
  );
}

export default BuyCourses;