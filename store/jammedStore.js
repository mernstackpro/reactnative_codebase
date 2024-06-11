import { create } from 'zustand'

import { fetcher } from 'itty-fetcher'

const studiosUrl = EXPO_PUBLIC_STUDIOS_ENDPOINT
const api = fetcher({ base: studiosUrl })

const initialState = {
  studios: [],
  loading: false,
  error: '',
  selectedFilter: 'all',

  location: null,
  locationLoaded: false
}

const jammedStore = create((set) => ({
  studios: initialState.studios,
  loading: initialState.loading,
  error: initialState.error,
  selectedFilter: initialState.selectedFilter,

  location: initialState.location,

  fetch: async () => {
    set((state) => ({ ...state, loading: true }))

    let path = ''
    if (jammedStore.getState().location) {
      const coords = jammedStore.getState().location.coords
      path = `?lat=${coords.latitude}&lon=${coords.longitude}`
    }

    try {
      const studios = await api.get(path)
      set((state) => ({ ...state, error: '', studios }))
    } catch (error) {
      set((state) => ({
        ...state,
        error: error.message
      }))
    } finally {
      set((state) => ({
        ...state,
        loading: false
      }))
    }
  },

  fetchForFilter: async (filter) => {
    set((state) => ({ ...state, loading: true }))

    let path = `studio_type=${filter}`
    if (jammedStore.getState().location) {
      const coords = jammedStore.getState().location.coords
      path = `?lat=${coords.latitude}&lon=${coords.longitude}&studio_type=${filter}`
    }

    try {
      const studios = await api.get(path)
      set((state) => ({ ...state, error: '', studios }))
    } catch (error) {
      set((state) => ({
        ...state,
        error: error.message
      }))
    } finally {
      set((state) => ({
        ...state,
        loading: false
      }))
    }
  },

  setSelectedFilter: async (selectedFilter) => {
    set((state) => ({ ...state, selectedFilter }))
    if (selectedFilter === 'all') {
      await jammedStore.getState().fetch()
    } else {
      await jammedStore.getState().fetchForFilter(selectedFilter)
    }
  },

  onlyStudioTypes: async (studios, type) => {
    return studios.filter(studio => studio.type === type)
  },

  firstFiveStudios: async (studios) => {
    return studios.slice(0, 5)
  },

  setLocation: (location) => {
    set((state) => ({ ...state, location }))
  }
}))

export default jammedStore
