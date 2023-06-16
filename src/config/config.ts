import md5 from 'md5'
export const config = {
    publicKey: '752836521b1549cc8a96031091242bac',
    privateKey: '1bf491dcde19ebf703fb09c746ca63e9e17685df',
    baseURL: 'https://gateway.marvel.com/v1/public'
}

export function generateHash(timestamp: number, privateKey: string, publicKey: string) {
  return md5(timestamp + privateKey + publicKey)
}