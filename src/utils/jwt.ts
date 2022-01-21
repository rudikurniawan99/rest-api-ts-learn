import jwt, { SignOptions } from 'jsonwebtoken'
import config from 'config'

export const signJwt = (
  payload: Object, 
  keyname: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey', 
  options?: SignOptions | undefined
) => {
  const signingKey = Buffer.from(
    config.get<string>(keyname), 
    'base64'
  ).toString('ascii')
  
  return jwt.sign(payload, signingKey, { 
    ...(options && options),
    algorithm: 'RS256' 
  })
}

export const jwtVerify = <T>(token: string, keyname: 'accessTokenPublicKey' | 'refreshTokenPublicKey'): T | null => {
  const publicKey = Buffer.from(config.get<string>(keyname), 'base64').toString('ascii')

  try {
    return jwt.verify(token, publicKey) as T
  } catch (e) {
    return null 
  }
}