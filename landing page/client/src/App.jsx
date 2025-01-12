import { useState, useEffect } from 'react';
import ConnectButton from './components/ConnectButton';
import Mobilegamingillustration from './assets/image.svg';
import './App.css'; // Import your styles
import { useAppKitAccount } from '@reown/appkit/react';
import axios from 'axios';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Wallet connection logic
  const { address, isConnected } = useAppKitAccount();

  useEffect(() => {
    if (isConnected) {
      setWalletAddress(address || ''); // Update wallet address
    } else {
      setWalletAddress(''); // Clear wallet address if disconnected
    }
  }, [isConnected, address]);

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async () => {
    if (!walletAddress) {
      alert('Please connect your wallet before submitting.');
      return;
    }
    if (!email || !isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/submit', {
        walletAddress,
        email,
      });
      alert(response.data.message);
      setEmail(''); // Clear email after successful submission
    } catch (err) {
      alert('Error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-custom overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-20">
          {/* Left Side - Hand Image */}
          <div className="flex-1 relative">
            <img
              src={Mobilegamingillustration}
              alt="Mobile gaming illustration"
              className="object-contain w-[700px] h-[900px] float-animation"
            />
          </div>

          {/* Right Side - Glass Card */}
          <div className="w-[600px]">
            <div className="backdrop-blur-60px bg-gradient rounded-[20px] p-10">
              {/* WalletConnect Button */}
              <div className="flex justify-end mb-20 py-3">
                <ConnectButton />
              </div>

              {/* Form Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-white text-[48px] font-bold leading-[56px] text-left">
                    Turn Your Opinions Into Opportunities!
                  </h1>
                  <p className="text-gray-300 text-lg leading-relaxed text-left">
                    Join our community and start earning rewards for sharing your valuable insights. Play, predict, and win!
                  </p>
                </div>

                <div className="mt-16 space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-white text-lg mb-1 text-left">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full h-[60px] px-6 rounded-lg bg-[rgba(217,217,217,0.2)] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
                    />
                  </div>

                  <button
                    className="w-full h-[60px] bg-[#FDB813] hover:bg-[#FDC833] text-black font-semibold rounded-lg transition-colors text-lg"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                  </button>
                  <p className="text-center text-gray-400 text-sm">
                    By joining, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
