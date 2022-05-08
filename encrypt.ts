import * as crypto from 'crypto'
import {Buffer} from 'node:buffer'


const iv = crypto.randomBytes(16)
const key = crypto.randomBytes(32)
const cipher = crypto.createCipheriv('aes-256-cbc',key,iv)
let encrypt = cipher.update(process.env.message)
encrypt += cipher.final('hex')

const myKey = encrypt
const decihper = crypto.createDecipheriv('aes-256-cbc',key,iv)
let decrypt = decihper.update(myKey,'hex','utf-8') + decihper.final('utf-8')


console.log(`IV: ${iv.toString('base64')}`)
console.log(`encrypt: ${encrypt}`)
console.log(`decrypt: ${decrypt}`)

