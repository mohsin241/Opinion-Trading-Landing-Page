// import React, { useEffect } from "react";
// import { useAppKitAccount } from "@reown/appkit/react";

// const WalletStatus = () => {
//   // Extract wallet information using the useAppKitAccount hook
//   const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount();

//   // Log the wallet address if connected
//   useEffect(() => {
//     if (isConnected) {
//       console.log("Connected Wallet Address:", address);
//     } else {
//       console.log("Wallet not connected");
//     }
//   }, [isConnected, address]);

//   return (
//     <div>
//       {/* <h3>Wallet Status</h3>
//       {isConnected ? (
//         <div>
//           <p><strong>Address:</strong> {address}</p>
          
//         </div>
//       ) : (
//         <p>No wallet connected. Please connect your wallet.</p>
//       )} */}
//     </div>
//   );
// };

// export default WalletStatus;
