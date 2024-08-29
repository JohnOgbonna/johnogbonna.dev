
export function updateQueryStringValueWithoutNavigation(
  queryKey: string,
  queryValue: string,
) {

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
  // alright, let's talk about this...
  // Normally with remix, you'd update the params via useSearchParams from react-router-dom
  // and updating the search params will trigger the search to update for you.
  // However, it also triggers a navigation to the new url, which will trigger
  // the loader to run which we do not want because all our data is already
  // on the client and we're just doing client-side filtering of data we
  // already have. So we manually call `window.history.pushState` to avoid
  // the router from triggering the loader.
  window.history.replaceState(null, '', newUrl)
}

export function deleteQueryStringValueWithoutNavigation(queryKeys: string[]){
  const currentSearchParams = new URLSearchParams(window.location.search)
  queryKeys.forEach(key=> currentSearchParams.delete(key))
  const newUrl = [window.location.pathname, currentSearchParams.toString()]
    .filter(Boolean)
    .join('?')
    window.history.replaceState(null, '', newUrl)

}

export function getSearchParam(param: string) {
  // Create a new URL object from the current window location
  const url = new URL(window.location.href);
  
  // Get the search parameters from the URL
  const searchParams = new URLSearchParams(url.search);
  
  // Return the value of the specified parameter
  return searchParams.get(param);
}
export function hasPathParameter(param: string) {
  // Get the current URL from the browser
  const url = window.location.href;

  try {
      // Create a URL object to easily extract parts of the URL
      const urlObj = new URL(url);
      
      // Get the path from the URL
      const path = urlObj.pathname;
      
      // Split the path into individual segments
      const segments = path.split('/').filter(segment => segment !== '');

      // Check if any segment matches the given parameter
      return segments.includes(param);
  } catch (error) {
      console.error("Invalid URL:", error);
      return false;
  }
}