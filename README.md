# Cipher-CLI-2021Q4

### This is CLI tool, that encode any text message.

## How to install

* Download repository - enter command 'https://github.com/RadyukAG/Cipher-CLI-2021Q4.git' in your terminal
* Open folder Cipher-CLI-2021Q4
* Change branch to dev-branch - enter command 'git checkout dev-branch' in your terminal
* CLI is ready!

## How to use

### You can run app with command 'npm run ciphering-cli'. After that you need to pass parameters.
### Cipher-CLI accept 3 options (short alias and full name):
### -c, --config: config for ciphers Config is a string with pattern {XY(-)}n, where:
* X is a cipher mark:
* C is for Caesar cipher (with shift 1)
* A is for Atbash cipher
* R is for ROT-8 cipher
### Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
* 1 is for encoding
* 0 is for decoding
### -i, --input: a path to input file
### -o, --output: a path to output file
### For example, config "C1-C1-R0-A" means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

### All parameters should pass after '--'. 
## Examples

```bash
$ npm run ciphering-cli -- -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

### As you see, input.txt and output.txt are located right in the Cipher-CLI-2021Q4 folder. 

```bash
$ npm run ciphering-cli -- -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ npm run ciphering-cli -- -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ npm run ciphering-cli -- -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`