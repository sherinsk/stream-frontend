import React from 'react';

const App = () => {
  const handleDownload = () => {
    const downloadUrl = `https://stream-excel.onrender.com/download-excel`;
    const token = 'your_token_here'; // Replace with your actual token

    const xhr = new XMLHttpRequest();
    xhr.open('GET', downloadUrl, true);
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.responseType = 'blob';

    xhr.onload = () => {
      if (xhr.status === 200) {
        const url = window.URL.createObjectURL(xhr.response);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'file.xlsx'; // Specify the file name
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Failed to download file:', xhr.statusText);
      }
    };

    xhr.onerror = () => {
      console.error('Network error while downloading file');
    };

    xhr.send();
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