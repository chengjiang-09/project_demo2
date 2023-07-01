import { defineStore } from 'pinia';

interface AppStore {
  searchOpend: boolean;
}

export const useAppStore = defineStore('app-store', {
  state: (): AppStore => ({
    searchOpend: false,
  }),
  actions: {
    setSearchOpend(action?: boolean) {
      this.searchOpend = action ? action : !this.searchOpend;
    },
  },
});
