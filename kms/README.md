# AWS KMS Example

* **Date:** 2018-06-16
* **Author:** https://github.com/Josaber

## Project Overview

* Run script `deployment/setup-key [env]` to create a key in AWS
* Add **ARN** to the file `deployment/kms.conf`
* Run `auto/encrypt-plaintext [env] [plaintext]` to encrypt the plaintext
* Run `auto/decrypt-ciphertext [ciphertext]` to decrypt

**Thanks for [Zhu](https://github.com/sphoenix-zhu)'s** help
