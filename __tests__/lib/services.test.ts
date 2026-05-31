import { services, getService } from '@/lib/services'

test('exports exactly 6 services', () => {
  expect(services).toHaveLength(6)
})

test('each service has all required fields', () => {
  services.forEach(s => {
    expect(s.slug).toBeTruthy()
    expect(s.name).toBeTruthy()
    expect(s.shortDesc).toBeTruthy()
    expect(s.longDesc).toBeTruthy()
    expect(s.included.length).toBeGreaterThanOrEqual(4)
    expect(s.whyUs.length).toBeGreaterThanOrEqual(2)
  })
})

test('all slugs are URL-safe', () => {
  services.forEach(s => {
    expect(s.slug).toMatch(/^[a-z0-9-]+$/)
  })
})

test('getService returns correct service by slug', () => {
  const s = getService('regular-clean')
  expect(s?.name).toBe('Regular Clean')
})

test('getService returns undefined for unknown slug', () => {
  expect(getService('not-a-service')).toBeUndefined()
})
