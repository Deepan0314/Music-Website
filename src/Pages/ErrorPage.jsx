import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">

      {/* Animated 404 */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold"
      >
        404
      </motion.h1>

      <p className="mt-4 text-lg text-gray-400">
        Page not found 🚫
      </p>

      {/* Back Button */}
      <Link to="/home">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-4 py-2 bg-green-500 rounded-lg"
        >
          Go Home
        </motion.button>
      </Link>

    </div>
  );
};

export default ErrorPage;