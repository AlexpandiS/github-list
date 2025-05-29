import { AlertCircle } from 'lucide-react';

const ErrorDisplay = ({ message }) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center my-4">
      <AlertCircle className="mr-2" size={20} />
      <span className="font-medium">Error:</span>
      <span className="ml-2">{message}</span>
    </div>
  );
};

export default ErrorDisplay;