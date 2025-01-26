import { useState } from 'react';
import Filter from '../components/Filter';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar'
import AddBrainModal from '../components/AddBrainModal';

const HomePage = () => {
    const [modalOpen,setModalOpen]=useState(false);
    console.log("modalOpen : ",modalOpen);
  return (
    <div className="bg-[#272525] w-screen h-screen flex flex-col overflow-y-auto overflow-x-hidden">
      <Navbar setModalOpen={setModalOpen}/>
      <div className='w-screen flex justify-center flex-1'>
      <div className='w-11/12 flex flex-col '>
        <Filter/>
        <MainContent/>
      </div>
      </div>
      {modalOpen && <AddBrainModal setModalOpen={setModalOpen}/>}
    </div>
  );
}

export default HomePage



