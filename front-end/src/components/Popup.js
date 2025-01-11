import React from 'react';

const Popup = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-lg font-bold">Notification</h2>
                <p>{message}</p>
                <button 
                    onClick={onClose} 
                    className="mt-4 bg-blue-500 text-white p-2 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;