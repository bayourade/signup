// import React from 'react'
// import { Flex, Spacer } from "@chakra-ui/react";

// function signup() {
//   return (
//     <div>
//       <Flex color="white">
//         <Center w="100px" bg="green.500">
//           <Text>Box 1</Text>
//         </Center>
//         <Square bg="blue.500" size="150px">
//           <Text>Box 2</Text>
//         </Square>
//         <Box flex="1" bg="tomato">
//           <Text>Box 3</Text>
//         </Box>
//       </Flex>
//     </div>
//   );
// }

// export default signup

// import React from "react";
// import logo from "../assets/logo.png";
// import handshake from "../assets/handshake.png";
// import blue from "../assets/blue.png";

// const SignUpForm = () => {
//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       <div
//         className="relative flex-1 bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: `url(${blue})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-900 to-black opacity-50"></div>
//         <div className="relative z-10 text-center p-6 md:p-0">
//           <img src={logo} alt="Company Logo" className="mx-auto w-36" />
//           <img src={handshake} alt="Handshake" className=" ml-32  w-80" />
//           <h1 className="text-white text-2xl font-bold">
//             Partnership for Business Growth
//           </h1>
//           <p className="mt-4 text-gray-300">
//             Partnerships are pivotal for business growth, enabling companies to
//             leverage mutual strengths, share risks, and capitalize on
//             opportunities.
//           </p>
//         </div>
//       </div>
//       <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12">
//         <div className="w-full max-w-md">
//           <div className="flex justify-between mb-6">
//             <a href="/" className="text-gray-500 text-sm">
//               Return Home
//             </a>
//             <a href="/login" className="text-black text-sm font-bold">
//               Already a Member? LOG IN NOW
//             </a>
//           </div>
//           <h2 className="text-2xl font-bold mb-4">
//             BECOME AN EXCLUSIVE MEMBER
//           </h2>
//           <p className="text-gray-600 mb-8">SIGN UP AND JOIN THE PARTNERSHIP</p>
//           <form>
//             <input
//               type="text"
//               placeholder="Johnson Doe"
//               className="w-full p-3 mb-4 border border-gray-300 rounded"
//             />
//             <input
//               type="email"
//               placeholder="example@email.com"
//               className="w-full p-3 mb-4 border border-gray-300 rounded"
//             />
//             <input
//               type="password"
//               placeholder="********"
//               className="w-full p-3 mb-4 border border-gray-300 rounded"
//             />
//             <button
//               type="submit"
//               className="w-full p-3 bg-black text-white font-bold rounded"
//             >
//               Become a Member
//             </button>
//           </form>
//           <footer className="mt-12 text-center">
//             <p className="text-gray-500 text-sm">
//               Copyright 2021 - 2022 5Starcompany. All rights reserved.
//             </p>
//             <a href="/help" className="block mt-4 text-black text-sm font-bold">
//               Need help?
//             </a>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

import React from "react";
import logo from "../assets/logo.png";
import handshake from "../assets/handshake.png";
import blue from "../assets/blue.png";
import "../App.css"

const SignUpForm = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="relative   md:w-1/3 lg:w-80 bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${blue})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-900 to-black opacity-50"></div>
        <div className="relative z-10 text-center p-6 md:p-0">
          <img src={logo} alt="Company Logo" className=" logo" />
          <img src={handshake} alt="Handshake" className="handshake" />
          <h1 className="text-white text-2xl font-bold">
            Partnership for <br/> Business Growth
          </h1>
          <p className="mt-4 text-gray-300">
            Partnerships are pivotal for business growth, enabling companies to
            leverage mutual strengths, share risks, and capitalize on
            opportunities.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="flex justify-between mb-6">
            <a href="/" className="text-gray-500 text-sm">
              Return Home
            </a>
            <a href="/login" className="text-black text-sm font-bold justify-end">
              Already a Member? LOG IN NOW
            </a>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            BECOME AN EXCLUSIVE MEMBER
          </h2>
          <p className="text-gray-600 mb-8">SIGN UP AND JOIN THE PARTNERSHIP</p>
          <form>
            <input
              type="text"
              placeholder="Johnson Doe"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="********"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full p-3 bg-black text-white font-bold rounded"
            >
              Become a Member
            </button>
          </form>
          <footer className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Copyright 2021 - 2022 5Starcompany. All rights reserved.
            </p>
            <a href="/help" className="block mt-4 text-black text-sm font-bold">
              Need help?
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
