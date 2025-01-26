const AddBrainModal = ({setModalOpen}) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center backdrop-blur-sm fixed top-0 left-0'>
        <div className='w-1/3 h-1/3 bg-black'>
            <p className='text-white'>Hello</p>
            <p className="text-white" onClick={()=>setModalOpen(false)}>Close</p>
        </div>
    </div>
  )
}

export default AddBrainModal