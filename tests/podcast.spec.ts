import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173')

  const podcastListItems = page.getByTestId('podcast-item')

  const firstItem = podcastListItems.nth(0)
  const firstItemUrl = await firstItem.getByTestId('podcast-card-url').getAttribute('href')
  await firstItem.click()

  await expect(page).toHaveURL(firstItemUrl || '')
})

test.describe('Podcast Detail Page', () => {
  test('should display the podcast name', async ({ page }) => {
    const podcastName = page.getByTestId('podcast-detail-name')
    await expect(podcastName).toBeVisible()
  })

  test('should display the podcast author', async ({ page }) => {
    const podcastAuthor = page.getByTestId('podcast-detail-artist')
    await expect(podcastAuthor).toBeVisible()
  })

  test('should display the podcast image', async ({ page }) => {
    const podcastImage = page.getByTestId('podcast-detail-img')
    await expect(podcastImage).toBeVisible()
  })

  test('should display the podcast short description', async ({ page }) => {
    const podcastDescription = page.getByTestId('podcast-detail-summary')
    await expect(podcastDescription).toBeVisible()
  })

  test('should expand the podcast description', async ({ page }) => {
    const podcastDescription = page.getByTestId('podcast-detail-summary')
    await expect(podcastDescription).toBeVisible()
    const podcastDescriptionButton = page.getByTestId('podcast-detail-description-btn')
    await podcastDescriptionButton.click()
    await expect(podcastDescription).not.toHaveClass('hide-half-text')
  })

  test('should display the podcast episode number', async ({ page }) => {
    const podcastEpisodes = page.getByTestId('podcast-detail-episode-number')
    await expect(podcastEpisodes).toBeVisible()
  })

  test('should display the podcast episodes', async ({ page }) => {
    const podcastEpisode = page.getByTestId('podcast-detail-episodes').locator('li').nth(0)
    await expect(podcastEpisode).toBeVisible()
  })

  test('should display maximum 10 podcast episodes', async ({ page }) => {
    const podcastEpisodes = page.getByTestId('podcast-detail-episodes')
    const podcastEpisodesList = podcastEpisodes.locator('li')
    const count = await podcastEpisodesList.count()
    expect(count).toBeLessThanOrEqual(10)
  })

  test('should display the podcast episode name', async ({ page }) => {
    const randomEpisode = Math.floor(Math.random() * 10)
    const podcastEpisode = page.getByTestId('podcast-detail-episodes').locator('li').nth(randomEpisode)
    const podcastEpisodeName = podcastEpisode.getByTestId('podcast-detail-episode-name')
    await expect(podcastEpisodeName).toBeVisible()
  })

  test('should display the podcast episode description', async ({ page }) => {
    const randomEpisode = Math.floor(Math.random() * 10)
    const podcastEpisode = page.getByTestId('podcast-detail-episodes').locator('li').nth(randomEpisode)
    const podcastEpisodeDescription = podcastEpisode.getByTestId('podcast-detail-episode-summary')
    await expect(podcastEpisodeDescription).toBeVisible()
  })

  test('should display the podcast episode duration', async ({ page }) => {
    const randomEpisode = Math.floor(Math.random() * 10)
    const podcastEpisode = page.getByTestId('podcast-detail-episodes').locator('li').nth(randomEpisode)
    const podcastEpisodeDuration = podcastEpisode.getByTestId('podcast-detail-episode-duration')
    await expect(podcastEpisodeDuration).toBeVisible()
  })

  test('should display the podcast episode release date', async ({ page }) => {
    const randomEpisode = Math.floor(Math.random() * 10)
    const podcastEpisode = page.getByTestId('podcast-detail-episodes').locator('li').nth(randomEpisode)
    const podcastEpisodePublishedDate = podcastEpisode.getByTestId('podcast-detail-episode-release-date')
    await expect(podcastEpisodePublishedDate).toBeVisible()
  })

  test('should play the podcast episode audio', async ({ page }) => {
    const randomEpisode = Math.floor(Math.random() * 10)
    const podcastEpisode = page.getByTestId('podcast-detail-episodes').locator('li').nth(randomEpisode)
    const playButton = podcastEpisode.getByTestId('podcast-detail-episode-play-btn')
    await playButton.click()
    await page.waitForSelector('audio')
    const podcastEpisodeAudio = podcastEpisode.getByTestId('podcast-detail-episode-audio')
    await expect(podcastEpisodeAudio).toBeVisible()
  })
})
