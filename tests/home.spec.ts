import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173')
})

test.describe('Home Page', () => {
  test('should display the title', async ({ page }) => {
    const title = page.getByTestId('home-title')
    await expect(title).toHaveText('Most popular podcasts')
  })

  test('should display the search input', async ({ page }) => {
    const searchInput = page.getByPlaceholder('Search by title or author')
    await expect(searchInput).toBeVisible()
  })

  test('should filter the podcast list by podcast name', async ({ page }) => {
    const searchInput = page.getByPlaceholder('Search by title or author')

    const podcastListItems = page.getByTestId('podcast-item')

    const firstItem = podcastListItems.nth(0)
    const firstItemName = firstItem.getByTestId('podcast-card-name')

    const text = await firstItemName.textContent()

    expect(text).not.toEqual('')
    await searchInput.fill(text || '')

    await expect(firstItem).toBeVisible()
  })

  test('should filter the podcast list by podcast artist', async ({ page }) => {
    const searchInput = page.getByPlaceholder('Search by title or author')

    const podcastListItems = page.getByTestId('podcast-item')

    const firstItem = podcastListItems.nth(0)
    const firstItemName = firstItem.getByTestId('podcast-card-artist')

    const text = await firstItemName.textContent()

    expect(text).not.toEqual('')
    await searchInput.fill(text || '')

    await expect(firstItem).toBeVisible()
  })

  test('should display the not found message', async ({ page }) => {
    const searchInput = page.getByPlaceholder('Search by title or author')

    const podcastListItems = page.locator('li')
    const firstItem = podcastListItems.nth(0)
    const firstItemName = firstItem.getByTestId('podcast-card-name')

    const text = await firstItemName.textContent()
    await searchInput.fill(text + 'a')

    await expect(podcastListItems).not.toBeVisible()

    const notFoundMessage = page.getByTestId('not-found-card')
    await expect(notFoundMessage).toBeVisible()
  })

  test('should display the podcast list items', async ({ page }) => {
    await page.waitForSelector('data-testid=podcast-item')
    const podcastListItems = page.getByTestId('podcast-item')
    await expect(podcastListItems).toHaveCount(100)
  })

  test('should display the podcast list items image', async ({ page }) => {
    const randomNumber = Math.floor(Math.random() * 100)
    const podcastListItemsImage = page.getByTestId('podcast-card-img').nth(randomNumber)
    await expect(podcastListItemsImage).toBeVisible()
  })

  test('should display the podcast list items name', async ({ page }) => {
    const randomNumber = Math.floor(Math.random() * 100)
    const podcastListItemsName = page.getByTestId('podcast-card-name').nth(randomNumber)
    await expect(podcastListItemsName).toBeVisible()
  })

  test('should display the podcast list items author', async ({ page }) => {
    const randomNumber = Math.floor(Math.random() * 100)
    const podcastListItemsAuthor = page.getByTestId('podcast-card-artist').nth(randomNumber)
    await expect(podcastListItemsAuthor).toBeVisible()
  })

  test('should not display the podcast list items description', async ({ page }) => {
    const randomNumber = Math.floor(Math.random() * 100)
    const podcastListItemsDescription = page.getByTestId('podcast-card-description').nth(randomNumber)
    await expect(podcastListItemsDescription).not.toBeVisible()
  })
})
