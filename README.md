# SolMusika : Share Videos just like Tittok on Solana Blockchain

A Decentralized Video  Sharing Platform where users upload video on demand just like tiktok.

## Introduction

OlMusika is a solana version of Tiktop where users create account, upload videos and share videos with friends and their community.

## Web 3.0 technologies Used

Frontend: NextJS, postcss, tailwindcss, 

Web3 technologies: IPFS/filecoin, Anchor,  Livepeer (livepeer.js), Web3Modal, Huddle01  
Backend: Rust

Blockchain deployed to:  Solana DevNet

## Live DApp hosted on

Live Dapp on Vercel: - <https://solmusika.vercel.app/>

 Youtube video link: <https://youtu.be/17BJupkA0Gk> 

## Connect with me and send me a mail

E-mail - holyaustin@yahoo.com

stay connected on twitter @holyaustin

https://www.gstatic.com/webp/gallery3/2.png


#[error_code]
error: cannot find attribute `error` in this scope
   --> /src/lib.rs:432:3
    |
432 | #[error]
    |   ^^^^^



error[E0412]: cannot find type `ProgramResult` in this scope
   --> /src/lib.rs:168:51
    |
168 |     pub fn like_video(ctx: Context<LikeVideo>) -> ProgramResult {
    |                                                   ^^^^^^^^^^^^^ not found in this scope
    |
help: consider importing one of these items
    |
22  |     use solana_program::entrypoint::ProgramResult;
    |
22  |     use solana_program::entrypoint_deprecated::ProgramResult;

        use anchor_lang::solana_program::entrypoint::ProgramResult;

        pub fn start_stuff_off(ctx: Context<StartStuffOff>) -> Result<()> {



            error[E0107]: missing generics for type alias `anchor_lang::Result`
  --> /src/lib.rs:28:55
   |
28 |     pub fn create_state(ctx: Context<CreateState>) -> Result {
   |                                                       ^^^^^^ expected 1 generic argument
   |
help: add missing generic argument
   |
28 |     pub fn create_state(ctx: Context<CreateState>) -> Result<T> {
   |                                                       ~~~~~~~~~
 
error: could not compile `solpg` due to previous error