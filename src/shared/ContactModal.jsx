import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 w-[90%] md:w-[50%]">
                <h2 className="text-2xl mb-4">Get in Touch</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input className="w-full px-3 py-2 border rounded" type="text" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input className="w-full px-3 py-2 border rounded" type="email" placeholder="Your Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
                        <textarea className="w-full px-3 py-2 border rounded" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mr-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
