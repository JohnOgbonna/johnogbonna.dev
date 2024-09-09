
export function updateQueryStringValueWithoutNavigation(
  queryKey: string,
  queryValue: string,
) {
  if(typeof window === 'undefined') return
  const currentSearchParams = new URLSearchParams(window.location.search)
  const oldQuery = currentSearchParams.get(queryKey) ?? ''
  if (queryValue === oldQuery) return

  if (queryValue) {
    currentSearchParams.delete(queryKey)
    currentSearchParams.set(queryKey, queryValue)
  } else {
    return
  }
  const newUrl = [window.location.pathname, currentSearchParams.toString()]
    .filter(Boolean)
    .join('?')
  window.history.replaceState(null, '', newUrl)
}

export function deleteQueryStringValueWithoutNavigation(queryKeys: string[]){
  if(typeof window === 'undefined') return
  const currentSearchParams = new URLSearchParams(window.location.search)
  queryKeys.forEach(key=> currentSearchParams.delete(key))
  const newUrl = [window.location.pathname, currentSearchParams.toString()]
    .filter(Boolean)
    .join('?')
    window.history.replaceState(null, '', newUrl)

}
