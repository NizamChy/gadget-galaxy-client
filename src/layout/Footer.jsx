// const Footer = () => {
//   return (
//     <div className="flex justify-center text-center text-md font-semibold mb-8">
//       <p>
//         &copy; {new Date().getFullYear()} All rights reserved to <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Nizam Chowdhury</span>
//       </p>
//     </div>
//   );
// };

// export default Footer;



const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white p-4 h-[30vh]">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-sm mb-4 text-center mt-20">
          &copy; {new Date().getFullYear()} All Rights Reserved by Nizam Chowdhury
        </div>

      </div>
    </footer>
  );
};

export default Footer;