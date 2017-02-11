// TODO -- move to util folder?
import fetch from 'isomorphic-fetch'

async function apiRequest (url) {
  try {
    const json = await fetch(url).then((res) => res.json())

    return json
  } catch (err) {
    throw new Error(err)
  }
}

export async function reqSunriseSunsetAPI ({ lat, lng }, date) {
  const formattedDate = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

  try {
    const json = await apiRequest(`${process.env.REACT_APP_SERVER}/api/sunrise-sunset/lat=${lat}&lng=${lng}&date=${formattedDate.join('-')}`)

    return json
  } catch (err) {
    return err
  }
}

const GEOLOCATION_API = '//freegeoip.net/json/'

export async function reqGeolocationAPI (url = GEOLOCATION_API) {
  try {
    const json = await apiRequest(url)

    return json
  } catch (err) {
    return err
  }
}
