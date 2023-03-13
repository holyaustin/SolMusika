# solana contract for SolMusika

solana address : 8YffJq1Nd7R7qP1XGinaQ3YAxYQWhQCHf1FJiYD1yxs1

Config File: /home/augustine/.config/solana/cli/config.yml
RPC URL: <https://api.devnet.solana.com>
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: /home/augustine/.config/solana/devnet.json
Commitment: confirmed

## Deploying the Program

git clone <https://github.com/solana-labs/example-helloworld>
cd example-helloworld
solana config set --url <https://api.devnet.solana.com>
solana-keygen new --force
solana airdrop 1
npm run build:program-rust
solana program deploy ./target/deploy/tiktok_clone.so

## Running the Client

npm install
npm run dev

solana program deploy ./target/deploy/tiktok_clone.so
Program Id: 6EAfcoqx7ouYND6gHER4AwXKA83exMFwHYeMBUY66iNY

solana program deploy --program-id /home/augustine/.config/solana/MY_KEYPAIR.json ./target/deploy/tiktok_clone.so

wallet = "~/.config/solana/id.json"

solana program show 6EAfcoqx7ouYND6gHER4AwXKA83exMFwHYeMBUY66iNY

Program Id: 6EAfcoqx7ouYND6gHER4AwXKA83exMFwHYeMBUY66iNY
Owner: BPFLoaderUpgradeab1e11111111111111111111111
ProgramData Address: afUMawtSGZFhh9p4XekHwUPsJwHfjPgiyVDncwY6Nut
Authority: 8YffJq1Nd7R7qP1XGinaQ3YAxYQWhQCHf1FJiYD1yxs1
Last Deployed In Slot: 201592250
Data Length: 618528 (0x97020) bytes
Balance: 4.30615896 SOL

https://www.infogrepper.com/wp-content/uploads/2022/10/image-url-for-testing.png