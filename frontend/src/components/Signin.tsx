import Note from '../icons/Note'
import { Input } from './Input'
import Button from './Button'
import Google from '../icons/Google'

const Signin = () => {
  return (
    <div className='h-full '>
        <div className='flex items-center gap-4 justify-center mt-12'>
            <Note/>
            {/* <p className='text-2xl tracking-wide font-semibold text-white'>Welcome to SuperMemory</p> */}
            <p className='text-3xl tracking-tight  font-medium text-white font-mono'>Welcome to SuperMemory</p>
        </div>
        <div className='bg-[#272525] mx-24 p-12 mt-6 rounded-lg flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <p className=' text-slate-200 font-semibold text-lg'>Email</p>
                <Input type="text" placeholder="Your Email address"/>
            </div>
            <div className='flex flex-col gap-2'>
                <p className=' text-slate-200 font-semibold text-lg'>Password</p>
                <Input type="text" placeholder="Enter Password"/>
            </div>
            <Button variant='light' fullWidth={true}>
                Continue
            </Button>
            <p className='text-slate-300 font-medium text-lg text-center'>OR</p>
            <Button fullWidth={true} icon={<Google/>} variant="light">
                Signin with Google
            </Button>
            <div className='flex gap-4 justify-center'>
            <p className='text-slate-300 font-medium'>Don't have an account?</p>
            <p className='text-blue-300 font-medium cursor-pointer'>Sign up</p>
            </div>
        </div>
    </div>
  )
}

export default Signin