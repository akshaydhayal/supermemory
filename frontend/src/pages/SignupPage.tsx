import Signin from '../components/Signin';
import Landing from '../components/Landing';

const SignupPage = () => {
  return (
    <div className="flex w-screen h-screen bg-[#121212] ">
      <div className="w-1/2 ">
        <Signin/>
      </div>
      <div className="w-1/2 bg-[#0f0f2d] ">
        <Landing/>
      </div>
    </div>
  );
}

export default SignupPage;