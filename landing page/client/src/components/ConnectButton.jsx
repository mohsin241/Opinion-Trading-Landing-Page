import React from 'react';
import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { arbitrum, mainnet } from '@reown/appkit/networks';

// 1. Get projectId
const projectId = '0d1fe0d6d0d8d80c6523f7994b903cfc';

// 2. Set the networks
const networks = [arbitrum, mainnet];

// 3. Create a metadata object - optional
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/'],
};

// 4. Create an AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true,
  },
});

const ConnectButton = () => {
  const handleConnectWallet = () => {
    const appkitButton = document.querySelector('appkit-button');
    if (appkitButton) {
      appkitButton.click();
    }
  };

  return (
    <div>
      <appkit-button onClick={handleConnectWallet}></appkit-button>
    </div>
  );
};

export default ConnectButton;
