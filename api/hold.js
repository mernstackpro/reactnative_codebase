export async function createFetchHold (subdomain, slotId) {
  const protocol = EXPO_PUBLIC_USES_HTTPS ? 'https' : 'http'
  const host = EXPO_PUBLIC_ROOT_URL
  const url = `${protocol}://${subdomain}.${host}/api/bh.json`

  const response = await fetch(url, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'x-jammed-app': '1324567854321456785432'
    },
    body: JSON.stringify({
      slot_id: slotId
    })
  })

  return response.json()
}

export async function createReserveTime (subdomain, booking_hold) {
  const protocol = process.env.EXPO_PUBLIC_USES_HTTPS ? 'https' : 'http'
  const host = EXPO_PUBLIC_ROOT_URL
  const url = `${protocol}://${subdomain}.${host}/api/ft.json`

  const response = await fetch(url, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'x-jammed-app': '1324567854321456785432'
    },
    body: JSON.stringify({
      booking_hold
    })
  })

  return response.json()
}
