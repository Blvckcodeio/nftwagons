# NFTWAGON - NFT Trading Marketplace

![Project Image](./project-image.png)

## Overview

NFTWAGON is a decentralized platform where users can easily trade, buy, and sell NFTs. Built on **Next.js** for the frontend and **Solidity** for the blockchain backend, it ensures secure and seamless transactions with full wallet integration. Whether you're minting new NFTs or browsing collections, NFTWAGON provides a streamlined experience for all users.

---

## Technologies

- **Next.js**: React framework for the frontend
- **Solidity**: Smart contracts for secure NFT transactions
- **Web3.js**: Blockchain interaction for wallet and marketplace integration

---

## Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A local blockchain development environment (e.g., [Hardhat](https://hardhat.org/) or [Ganache](https://www.trufflesuite.com/ganache))

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/devdanny2024/NFTWAGON.git
    ```

2. Navigate to the project directory:

    ```bash
    cd NFTWAGON
    ```

3. Install the dependencies:

    Using npm:
    ```bash
    npm install
    ```

    Or using yarn:
    ```bash
    yarn install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application.

### Smart Contract Deployment

To deploy the Solidity contracts, follow these steps:

1. Make sure you have your blockchain development environment running (Hardhat, Ganache, etc.).
   
2. Compile and deploy the contracts:

    ```bash
    npx hardhat run scripts/deploy.js --network localhost
    ```

3. Update the contract addresses and ABI in your frontend for proper interaction.

---

## License

This project is licensed under the MIT License.
