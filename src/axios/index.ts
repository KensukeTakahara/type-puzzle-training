import axios, { AxiosResponse, AxiosError } from 'axios'
import * as JSZip from 'jszip'

const AuthorizationType = (token?: string) => (token ? { Authorization: token } : {})

export const downloadZip = (url: string, token?: string) =>
  axios
    .get(url, {
      responseType: 'arraybuffer',
      headers: { Accept: 'application/zip' }
    })
    .then((res: AxiosResponse) => res)
    .catch((error: AxiosError) => ({ error }))

const isAxiosResponse = (res: any): res is AxiosResponse => 'data' in res

downloadZip('https://github.com/KensukeTakahara/go-app-training/archive/master.zip')
  .then(res => {
    if (isAxiosResponse(res)) {
      // read zip file
      JSZip.loadAsync(res.data)
        .then(zip => console.log(zip))
        .catch(e => console.error(e))
    } else {
      console.warn(res)
    }
  })
  .catch(e => console.error(e))
