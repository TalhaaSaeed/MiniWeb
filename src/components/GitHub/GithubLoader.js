export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub data')
  }

  return response.json()
}