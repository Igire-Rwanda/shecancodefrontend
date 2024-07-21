import React from 'react';
import './Modal.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const PopupModel = ({ closeModal }) => {
    return (
      <div className="modal">
        <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            {/* <h2 className="font-bold text-2xl">Apply for 5 week Summer Code Camp</h2> */}
            <img src="/images/Summer-camp-banner.jpg" className='w-full' alt="" srcset="" />
            <Link 
                className='text-start w-full text-sm flex justify-center gap-4 mt-4 hover:text-blue-600 cursor-pointer' 
                to="/highschoolbootcamp"
            >
                More details
                <ArrowRightIcon width={20}/>
            </Link>
        </div>
      </div>
    );
  };

export default PopupModel;