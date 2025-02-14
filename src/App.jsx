import React from 'react';

const App = () => {
  const handleDownload = () => {
    const downloadUrl = `https://stream-excel.onrender.com/download-excel`;

    const a = document.createElement('a');
    a.href = downloadUrl;
    a.setAttribute('download', '');
    a.setAttribute('rel', 'noopener noreferrer');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="p-4">
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Download Excel
      </button>
    </div>
  );
};

export default App;