# Uber Pay reference app
[![Build Status](https://travis-ci.com/uber/uber-pay-reference-app.svg?token=ZPTWqoramjxEmQsZapKj&branch=master)](https://travis-ci.com/uber/uber-pay-reference-app)

> This project is an example for the Uber Pay API. Support on this project may be limited.

This project shows how to integrate with [Uber Pay](https://developer.uber.com/docs/payments/introduction). It assists you in learning the fundamentals of the initiation of a deposit flow. In a simplified environment for you to easily understand what is going on at all times. This API both mocks the Uber client (`src/app`) and creates an integration to initiate a payment request with (`src/merchant`).

The goal of this project is to help you integrate, and go live faster with our APIs by avoiding common pitfalls.

<p align="center">
    <img width="75%" src="https://github.com/uber-ex/uber-uberpay-us/blob/docs/img/screenshot-deposit.png"/>
</p>

## Install 
1. install NodeJS. (v10 lts)
    - `brew install nvm`
    - `nvm install --lts`
    - `nvm set default --lts`
2. install Yarn.
    - `brew install yarn`
3. run `yarn` to install dependencies.
4. run `tool/gen-keypair.sh` and fill in the remaining .env values
5. run `yarn dev` to run the development environment.
6. open `localhost` through Chrome or your preferred browser.

## API reference
For more information about the Uber Pay API and its respective use-cases, please visit https://developer.uber.com/docs/payments/introduction for more information.
