import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173')
  const podcastListItems = page.getByTestId('podcast-item')
  const firstItem = podcastListItems.nth(0)
  const firstItemUrl = await firstItem.getByTestId('podcast-card-url').getAttribute('href')
  await firstItem.click()
  await expect(page).toHaveURL(firstItemUrl || '')
  await page.waitForSelector('data-testid=podcast-detail-episodes')
  const episodeList = page.getByTestId('podcast-detail-episodes')
  const firstEpisode = episodeList.nth(0)
  const firstEpisodeUrl = firstEpisode.getByTestId('podcast-detail-episode-url').nth(0)
  const firstEpisodeHref = await firstEpisodeUrl.getAttribute('href')
  await firstEpisodeUrl.click()

  await expect(page).toHaveURL(`http://localhost:5173${firstEpisodeHref}` || '')
})

test.describe('Episode Detail Page', () => {
  test('should display the podcast image', async ({ page }) => {
    const episodeName = page.getByTestId('podcast-detail-img')
    await expect(episodeName).toBeVisible()
  })

  test('should display the episode name', async ({ page }) => {
    const episodeName = page.getByTestId('podcast-detail-name')
    await expect(episodeName).toBeVisible()
  })

  test('should display the episode release date', async ({ page }) => {
    const episodeReleaseDate = page.getByTestId('episode-detail-release-date')
    await expect(episodeReleaseDate).toBeVisible()
  })

  test('should display the episode duration', async ({ page }) => {
    const episodeDuration = page.getByTestId('episode-detail-duration')
    await expect(episodeDuration).toBeVisible()
  })

  test('should display the episode description', async ({ page }) => {
    const episodeDescription = page.getByTestId('episode-detail-description')
    await expect(episodeDescription).toBeVisible()
  })

  test('should play the episode audio', async ({ page }) => {
    const episode = page.getByTestId('episode-detail')
    const playButton = episode.getByTestId('episode-detail-play-btn')
    await playButton.click()
    await page.waitForSelector('audio')
    const episodeAudio = episode.getByTestId('episode-detail-audio')
    await expect(episodeAudio).toBeVisible()
  })
})
