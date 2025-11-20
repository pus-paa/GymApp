// import React,{useEffect,useState} from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import { Heading, Loader } from '../../components';
// import {toast} from "react-hot-toast";
// import {useAuth} from "../../context/auth";
// const UserDashBoard = () => {
// const {auth} = useAuth();


//   // const [userCount, setUserCount] = useState(null);
//   // const [planCount, setPlanCount] = useState(null);
//   // const [subscriberCount, setSubscriberCount] = useState(null);

//   // const getUsers = async () => {
//   //   try {
//   //     const res = await axios.get("http://localhost:5000/api/v1/auth/total-user");
//   //     if (res.data && res.data.success) {
//   //       console.log(res.data.total);
//   //       setUserCount(res.data.total);
//   //     }
//   //   }
//   //   catch (err) {
//   //     console.log(err);
//   //     toast.error("something went wong in getting users");
//   //   }
//   // }

//   // const getPlans = async () => {
//   //   try {
//   //     const res = await axios.get("http://localhost:5000/api/v1/plan/total-plan");
//   //     if (res.data && res.data.success) {
//   //       console.log(res.data.total);
//   //       setPlanCount(res.data.total);
//   //     }
//   //   }
//   //   catch (err) {
//   //     console.log(err);
//   //     toast.error("something went wong in getting plans");
//   //   }
//   // }


//   // const getSubscriptions = async () => {
//   //   try {
//   //     const res = await axios.get("http://localhost:5000/api/v1/subscription/total-subscription");
//   //     if (res.data && res.data.success) {
//   //       console.log(res.data.total);
//   //       setSubscriberCount(res.data.total);
//   //     }
//   //   }
//   //   catch (err) {
//   //     console.log(err);
//   //     toast.error("something went wong in getting subscription");
//   //   }
//   // }


//   // useEffect(() => {
//   //   getUsers();
//   //   getPlans();
//   //   getSubscriptions();
//   // }, []);

//   return (
//     <section className='pt-10 bg-gray-900'>
//       <Heading name="User Dashboard"/>
//       <div className="container mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/user/plan-detail`}>
//             <h2 className='text-white font-bold text-3xl'>Plan Detail</h2>
//           </Link>
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/user/favourite-exercises`}>
//             <h2 className='text-white font-bold text-3xl'>Favourite Exercises</h2>
//           </Link>
//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/user/profile`}>
//             <h2 className='text-white font-bold text-3xl'>Profile</h2>
//           </Link>
//           {/* <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/user/feedbacks/${auth.user._id}`}>
//             <h2 className='text-white font-bold text-3xl'>Feedbacks</h2>
//           </Link> */}

//           <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to="/dashboard/user/feedbacks">
//             <h2 className='text-white font-bold text-3xl'>Feedbacks</h2>
//           </Link>


         
//         </div>
//       </div>
//     </section>
//   )
// }
// export default UserDashBoard;









































































// // import React,{useEffect,useState} from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from "axios";
// // import { Heading } from '../../components';
// // import {toast} from "react-hot-toast";

// // const UserDashBoard = () => {
// //   const [userName, setUserName] = useState("");
// //   const [planName, setPlanName] = useState("");
// //   const [planAmount, setPlanAmount] = useState("");
// //   const [planType, setPlanType] = useState("");

// //   const getUserSubscription = async () => {
  
// //     try {
// //       const res = await axios.get("http://localhost:5000/api/v1/auth/get-user-plan");
// //       if (res.data && res.data.success) {
// //         console.log(res.data.subscription);
// //         console.log(res.data);
// //         // setUserName(res.data)
// //       }
// //     }
// //     catch (err) {
// //       console.log(err);
// //       toast.error("something went wong in getting subscription");
// //     }
  

 
// //   }

// //   useEffect(() => {
// //     getUserSubscription();
// //   },[])


// //   return (
// //     <section className='pt-10'>
// //     <Heading name="Admin Dashboard"/>
// //     <div className="container mx-auto px-6 py-20">
// //       {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
// //         <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/user-list`}>
// //           <h2 className='text-white font-bold text-3xl'>Users:{userCount}</h2>
// //         </Link>
// //         <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/subscriber-list`}>
// //           <h2 className='text-white font-bold text-3xl'>Subscribers:{subscriberCount}</h2>
// //         </Link>
// //         <Link className='p-5 border border-white hover:bg-blue-600 transition-all' to={`/dashboard/admin/plans`}>
// //           <h2 className='text-white font-bold text-3xl'>Plans:{planCount}</h2>
// //         </Link>
// //       </div> */}
// //     </div>
// //   </section>
// //   )
// // }

// // export default UserDashBoard;


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../../components';
import { useAuth } from "../../context/auth";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaUser, 
  FaClipboardList, 
  FaHeart, 
  FaComments,
  FaArrowRight 
} from 'react-icons/fa';

const UserDashBoard = () => {
  const { auth } = useAuth();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  const dashboardCards = [
    {
      title: 'Plan Detail',
      description: 'View and manage your subscription plans',
      icon: FaClipboardList,
      link: '/dashboard/user/plan-detail',
      gradient: 'from-gym-red to-gym-red-dark',
      delay: '0'
    },
    {
      title: 'Favourite Exercises',
      description: 'Access your saved favorite workouts',
      icon: FaHeart,
      link: '/dashboard/user/favourite-exercises',
      gradient: 'from-gym-orange to-gym-orange-dark',
      delay: '100'
    },
    {
      title: 'Profile',
      description: 'Update your personal information',
      icon: FaUser,
      link: '/dashboard/user/profile',
      gradient: 'from-gym-red-light to-gym-red',
      delay: '200'
    },
    {
      title: 'Feedbacks',
      description: 'Share your thoughts and reviews',
      icon: FaComments,
      link: '/dashboard/user/feedbacks',
      gradient: 'from-gym-orange-light to-gym-orange',
      delay: '300'
    }
  ];

  return (
    <section className='pt-10 bg-gray-900 min-h-screen relative overflow-hidden'>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gym-darker via-gym-gray to-gym-darker opacity-100 pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Welcome Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <Heading name="User Dashboard" />
          {auth?.user && (
            <div className="mt-6">
              <p className="text-gray-300 text-xl md:text-2xl">
                Welcome back,{' '}
                <span className="text-gym-red font-bold animate-heading">
                  {auth.user.name || auth.user.email?.split('@')[0]}
                </span>
              </p>
              <p className="text-gray-400 text-sm md:text-base mt-2">
                Manage your fitness journey from here
              </p>
            </div>
          )}
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {dashboardCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Link
                key={index}
                to={card.link}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={card.delay}
              >
                <div className="relative h-full bg-gradient-to-br from-gym-gray to-gym-darker rounded-xl p-6 border border-gray-700 hover:border-gym-red transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gym-red/20 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${card.gradient} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-3xl" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-gym-red transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {card.description}
                    </p>

                    {/* Arrow Icon */}
                    <div className="flex items-center text-gym-red group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm font-semibold mr-2">Explore</span>
                      <FaArrowRight className="text-lg" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gym-red/5 to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gym-orange/5 to-transparent rounded-full blur-xl transform -translate-x-6 translate-y-6 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Stats or Additional Info Section */}
        <div className="mt-12 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-r from-gym-gray to-gym-darker rounded-xl p-6 border border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h4 className="text-white text-lg font-semibold mb-1">Ready to Transform?</h4>
                <p className="text-gray-400 text-sm">Start your fitness journey today with personalized plans</p>
              </div>
              <Link
                to="/exercise"
                className="px-6 py-3 bg-gradient-to-r from-gym-red to-gym-red-dark text-white font-semibold rounded-lg hover:from-gym-red-dark hover:to-gym-red transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gym-red/50"
              >
                Browse Exercises
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserDashBoard;
