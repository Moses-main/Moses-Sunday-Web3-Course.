function setup() {
  window.addEventListener("eip6963:announceProvider", (event) => {
    const provider = event.detail.provider;

    if (provider && provider === window.ethereum) {
      console.log("MetaMask is available!");
      startApp(provider);
    } else {
      console.log("MetaMask not found. Please install it!");
    }
  });

  // Request the provider announcement if no wallets are detected immediately.
  window.dispatchEvent(new Event("eip6963:requestProvider"));
}


function startApp(provider) {
  if (provider !== window.ethereum) {
    console.error("Do you have multiple wallets installed?");
  }
  // Your dApp's logic here, e.g., setting up listeners, requesting accounts, etc.
}


window.addEventListener("load", setup);
